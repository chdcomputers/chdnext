"""Το DocValidators module περιέχει όλα τα hook events που θέλουμε να διαχειριστούμε

Το ChDNext χρησιμοποιεί το hooks.py για να κάνει διάφορους επιπλέον ελέγχους όπως για παράδειγμα
ο έλεγχος των ΑΦΜ των πελατών και των προμηθευτών.
Όλος ο κώδικας για αυτά τα hooks βρίσκεται εδώ.
"""

import frappe
from frappe import _
from . import IsGreekAFM, GreekAFMisValid
from zeep import Client, Settings
from zeep.wsse.username import UsernameToken
from zeep.helpers import serialize_object

def validate_customer_afm(doc, method):
	"""Validate Customer's Greek Tax ID."""

	if doc.doctype != "Customer":
		return

	if frappe.db.get_single_value("ChDNext Settings", "chk_customer_afm"):
		afm: str = doc.tax_id.strip()
		if len(afm) == 0:
			return
		if not GreekAFMisValid(afm):
			frappe.throw(_("Tax ID {0} is NOT correct. Please fix it and try again").format(afm))

def validate_supplier_afm(doc, method):
	"""Validate Supplier's Greek Tax ID."""

	if doc.doctype != "Supplier":
		return

	if frappe.db.get_single_value("ChDNext Settings", "chk_supplier_afm"):
		afm: str = doc.tax_id.strip()
		if len(afm) == 0:
			return
		if not GreekAFMisValid(afm):
			frappe.throw(_("Tax ID {0} is NOT correct. Please fix it and try again").format(afm))

@frappe.whitelist()
def get_aade_data(doctype, afm):
	"""Get data from AADE based on entity's afm"""

	if doctype != "Customer" and doctype != "Supplier":
		frappe.throw(_("This function is available for Customers and Suppliers entities only"))
	else:
		afmToCheck: str = afm.strip()
		if IsGreekAFM(afmToCheck):
			if GreekAFMisValid(afmToCheck):
				chd_settings = frappe.get_doc("ChDNext Settings")
				un: str = chd_settings.aade_regs_uname
				up: str = chd_settings.get_password("aade_regs_password", raise_exception=False)
				if ((un is not None) and (up is not None)) and (len(un) > 0 and len(up) > 0):
					# Get the data here...
					settings = Settings(strict=True, xml_huge_tree=True)
					client = Client("https://www1.gsis.gr/wsaade/RgWsPublic2/RgWsPublic2?WSDL", settings=settings, wsse=UsernameToken(un, up))
					request_data = {
						"INPUT_REC": {
							"afm_called_by": "",
							"afm_called_for": afmToCheck
						}
					}
					response = client.service.rgWsPublic2AfmMethod(**request_data)
					result = serialize_object(response)
					if (result["error_rec"]["error_code"] is not None) and (len(result["error_rec"]["error_code"]) > 0):
						# Handle error from AADE
						frappe.throw(_("AADE Error code: {0}\nMessage:{1}").format(result["error_rec"]["error_code"], result["error_rec"]["error_descr"]))
					else:
						return result
				else:
					frappe.throw(_("You have to set your AADE Registry Search Username and Password in the ChDNext module settings"))
			else:
				frappe.throw(_("{0} isn't a valid Greek Tax Id. Please fix it and try again").format(afmToCheck))
		else:
			frappe.throw(_("This function is available to Greek Tax Ids only"))

@frappe.whitelist()
def get_group_next_itemcode(grpname):
	"""Get group's next item code based on group item coding settings"""

	if (grpname is not None) and (len(grpname) > 0):
		chd_settings = frappe.get_doc("ChDNext Settings")
		totalLength: int = chd_settings.itmcode_length
		if totalLength > 0:
			item_group = frappe.get_doc("Item Group", grpname)
			# * Note: If grpname doesn't exists frappe.get_doc throws an exception so we don't have to check ourselves...
			# * Here we have a valid item_group
			ancestors = item_group.get_ancestors()
			if len(ancestors) == 0:
				frappe.throw(_("This action cannot be performed on root group"))
			else:
				idx = 1
				pattern: str = ""
				for a in reversed(ancestors):
					if idx > 1:
						# We ignore the first element since it is the top root group
						np: int = frappe.get_value("Item Group", a, "item_code_numeric_part") or 0
						di: int = frappe.get_value("Item Group", a, "item_code_digits") or 2
						pattern += f"{np:0{di}d}"
					idx += 1
				pattern += f"{item_group.item_code_numeric_part:0{item_group.item_code_digits}d}"
				if len(pattern) >= totalLength:
					frappe.throw(_("You need to increase the Total Item Code Length value by, at least, {0} characters in the ChDNext module settings").format(len(pattern) - totalLength))
				else:
					digitsLeft: int = totalLength - len(pattern)
					nextcode: int = 0
					curcode = frappe.get_list("Item", pluck = "name", filters = {"name": ["like", f"{pattern}%"]}, order_by = "name desc", page_length = 1)
					if (len(curcode) == 0) or (not curcode[0][-digitsLeft:].isdecimal()):
						nextcode += 1
					else:
						nextcode = int(curcode[0][-digitsLeft:]) + 1
					pattern += f"{nextcode:0{digitsLeft}d}"
					return {"grp": grpname, "nextcode": pattern}
		else:
			frappe.throw(_("You have to set the Total Item Code Length in the ChDNext module settings"))
	else:
		frappe.throw(_("You have to select an item group first for this action to work"))