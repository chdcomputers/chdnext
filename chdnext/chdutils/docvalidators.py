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
