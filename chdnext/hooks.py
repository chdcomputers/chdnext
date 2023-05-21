# **** ΠΡΟΣΟΧΗ ****
# Σε αυτό το αρχείο τα imports πρέπει να γράφονται και να χρησιμοποιούνται όπως παρακάτω γιατί
# αλλιώς ΔΕΝ δουλεύει το bench update
# Import modulename as _modulename <-- Η κάτω παύλα ΔΕΝ βάζει το module στην cache και έτσι δουλεύει το bench update
# Περισσότερα εδώ: https://discuss.erpnext.com/t/update-fails-typeerror-cant-pickle-module-objects/57144
import os # as _os
import frappe # as _frappe
import frappe.translate # as _frappe
from . import __version__ as _app_version


app_name = "chdnext"
app_title = "ChDNext"
app_publisher = "ChD Computers"
app_description = "ChD Computers ERPNext extensions and utilities"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "chdcomputers@gmail.com"
app_license = "MIT"

# Christos Python Overrides
def chd_load_lang_forced(lang, apps=None):
	result = {}
	for app in (apps or frappe.get_all_apps(True)):
		path = os.path.join(frappe.get_pymodule_path(app), "translations", lang + "_forced.csv")
		result.update(frappe.translate.get_translation_dict_from_file(path, lang, app) or {})
	return result

def chd_make_dict_from_messages(messages, full_dict=None, load_user_translation=True):
	"""Returns translated messages as a dict in Language specified in `frappe.local.lang`

	:param messages: List of untranslated messages
	"""
	out = {}
	if full_dict is None:
		if load_user_translation:
			full_dict = frappe.translate.get_full_dict(frappe.local.lang)
		else:
			full_dict = frappe.translate.load_lang(frappe.local.lang)

	for m in messages:
		if m[1] in full_dict:
			out[m[1]] = full_dict[m[1]]
		# check if msg with context as key exist eg. msg:context
		if len(m) > 2 and m[2]:
			key = m[1] + ':' + m[2]
			if full_dict.get(key):
				out[key] = full_dict[key]

	# Christos - Add every [lang]_forced.csv translation file in out
	out.update(chd_load_lang_forced(frappe.local.lang) or {})

	return out

# Στην έκδοση 15 φαίνεται ότι έχουν βγάλει το _frappe.translate module...
frappe.translate.make_dict_from_messages = chd_make_dict_from_messages

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/chdnext/css/chdnext.css"
# app_include_js = "/assets/chdnext/js/chdnext.js"
app_include_css = ["style.bundle.css"]
app_include_js = ["main.bundle.js","chdmain.bundle.js"]
# include js, css files in header of web template
# web_include_css = "/assets/chdnext/css/chdnext.css"
# web_include_js = "/assets/chdnext/js/chdnext.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "chdnext/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
doctype_js = {
	"Customer" : "public/js/customerview.js",
	"Item" : "public/js/itemview.js",
	"Purchase Order" : "public/js/purchaseorderview.js"
}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "chdnext.utils.jinja_methods",
# 	"filters": "chdnext.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "chdnext.install.before_install"
# after_install = "chdnext.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "chdnext.uninstall.before_uninstall"
# after_uninstall = "chdnext.uninstall.after_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "chdnext.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events
doc_events = {
	"Customer": {
		"validate": [
			"chdnext.chdutils.docvalidators.validate_customer_afm"
		]
	},
	"Supplier": {
		"validate": [
			"chdnext.chdutils.docvalidators.validate_supplier_afm"
		]
	}
}

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"chdnext.tasks.all"
# 	],
# 	"daily": [
# 		"chdnext.tasks.daily"
# 	],
# 	"hourly": [
# 		"chdnext.tasks.hourly"
# 	],
# 	"weekly": [
# 		"chdnext.tasks.weekly"
# 	],
# 	"monthly": [
# 		"chdnext.tasks.monthly"
# 	],
# }

# Testing
# -------

# before_tests = "chdnext.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "chdnext.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "chdnext.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]


# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"chdnext.auth.validate"
# ]
required_apps = ["erpnext"]
fixtures = [
	{
		"dt": "Custom Field",
		"filters": [
			["module", "=", ("ChDNext")]
		]
	}
]
