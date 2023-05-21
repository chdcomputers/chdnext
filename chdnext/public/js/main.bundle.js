//Some GLOBAL functionality overrides

//1. Disable crop aspect ration in doc images
frappe.ui.form.ControlAttachImage.prototype.on_attach_doc_image_orig = frappe.ui.form.ControlAttachImage.prototype.on_attach_doc_image;
frappe.ui.form.ControlAttachImage.prototype.on_attach_doc_image = function() {
	this.on_attach_doc_image_orig();
	this.upload_options.restrictions.crop_image_aspect_ratio = 0;
};

//2. Add the suffix "_cbutton" to all Control Button Controls labels in order to have a more meaningfull translation
frappe.ui.form.ControlButton.prototype.set_label_orig = frappe.ui.form.ControlButton.prototype.set_label;
frappe.ui.form.ControlButton.prototype.set_label = function(label) {
	var lbl = label;
	if (lbl) {
		lbl = __(lbl + "_cbutton");
	}
	this.set_label_orig(lbl);
};

//3. Add the suffix "_list_breadcrumb" to all list breadcrumbs in order to have a more meaningfull translation
frappe.breadcrumbs.set_list_breadcrumb_orig = frappe.breadcrumbs.set_list_breadcrumb;
frappe.breadcrumbs.set_list_breadcrumb = function(breadcrumbs) {
	frappe.breadcrumbs.set_list_breadcrumb_orig(breadcrumbs);
	if (frappe.breadcrumbs.$breadcrumbs.children().last()[0]) {
		let txt = frappe.breadcrumbs.$breadcrumbs.children().last()[0].textContent;
		let html = frappe.breadcrumbs.$breadcrumbs.children().last()[0].innerHTML;
		let newHtml = html.replace(txt, __(txt + "_list_breadcrumb"));
		frappe.breadcrumbs.$breadcrumbs.children().last()[0].innerHTML = newHtml;
	}
};

//4. Add the suffix "_lv_title" to all list views of doctypes in order to have a more meaningfull translation
frappe.views.BaseList.prototype.setup_defaults_orig = frappe.views.BaseList.prototype.setup_defaults;
frappe.views.BaseList.prototype.setup_defaults = function() {
	this.setup_defaults_orig();
 	this.page_title = frappe.router.doctype_layout || __(this.doctype + "_lv_title");
	this.menu_items = [
		{
			label: __("Refresh_lv_base"),
			action: () => this.refresh(),
			class: "visible-xs",
		},
	];
};

//5. Add the suffix "_pa_button" to all primary action buttons of all list views in order to have a more meaningfull translation
frappe.views.ListView.prototype.set_primary_action_orig = frappe.views.ListView.prototype.set_primary_action;
frappe.views.ListView.prototype.set_primary_action = function() {
	this.set_primary_action_orig();
	if (this.page.btn_primary) {
		//That means that we have a primary action button...
		const doctype_name = __(frappe.router.doctype_layout) || __(this.doctype);
		// Better style would be __("Add {0}", [doctype_name], "Primary action in list view")
		// Christos: Let's do it like this guy says...
		const label = `${__("Add {0}_pa_button", [doctype_name], "Primary action in list view")}`;
		this.page.set_primary_action(
			label,
			() => {
				if (this.settings.primary_action) {
					this.settings.primary_action();
				} else {
					this.make_new_doc();
				}
			},
			"add"
		);
	}
};

//6. "Fix" the message and the button label that appears when no records exist or no records found in list views in order to have a more meaningfull translation
//	 If there are no records then we add the suffix "_nr_exists" if there are no records found in a filter then we add the suffix "_nr_found"
//	 In case of a small screen (mobile) the message "Create New" is the button's label so we leave it as it is...
frappe.views.ListView.prototype.get_no_result_message_orig = frappe.views.ListView.prototype.get_no_result_message;
frappe.views.ListView.prototype.get_no_result_message = function() {
	let help_link = this.get_documentation_link();
	let filters = this.filter_area && this.filter_area.get();
	let no_result_message =
		filters && filters.length
			? __("No {0} found", [__(this.doctype)])
			: __("You haven't created a {0} yet", [__(this.doctype)]);
	let new_button_label =
		filters && filters.length
			? __(
					"Create a new {0}_nr_found",
					[__(this.doctype)],
					"Create a new document from list view"
			  )
			: __(
					"Create your first {0}_nr_exists",
					[__(this.doctype)],
					"Create a new document from list view"
			  );
	let empty_state_image =
		this.settings.empty_state_image ||
		"/assets/frappe/images/ui-states/list-empty-state.svg";

	const new_button = this.can_create
		? `<p><button class="btn btn-primary btn-sm btn-new-doc hidden-xs">
			${new_button_label}
		</button> <button class="btn btn-primary btn-new-doc visible-xs">
			${__("Create New", null, "Create a new document from list view")}
		</button></p>`
		: "";

	return `<div class="msg-box no-border">
		<div>
			<img src="${empty_state_image}" alt="Generic Empty State" class="null-state">
		</div>
		<p>${no_result_message}</p>
		${new_button}
		${help_link}
	</div>`;
};

//7. When the name field of a doctype is added in the list then it should get the label "this.doctype + "_Name_as_lv_field"" in order to have a more meaningfull translation
frappe.views.ListView.prototype.setup_columns_orig = frappe.views.ListView.prototype.setup_columns;
frappe.views.ListView.prototype.setup_columns = function() {
	this.setup_columns_orig();
	if (this.columns) {
		for (let col in this.columns) {
			let column = this.columns[col];
			if (column.df) {
				if (column.type === "Field" && column.df.fieldname === "name") {
					column.df.label = __(this.doctype + "_Name_as_lv_field");
				}
			}
		}
	}
}

//8. List view menu Label strings for better translations
frappe.views.ListView.prototype.get_menu_items_orig = frappe.views.ListView.prototype.get_menu_items;
frappe.views.ListView.prototype.get_menu_items = function() {
	//Since a few time ago they have added the context string "Button in list view menu" in all list view menu items so we do not need to do something here...
	const menuitems = [];
	menuitems = this.get_menu_items_orig();
	return menuitems;
}

//9. Action menu Label strings for better translations
frappe.views.ListView.prototype.get_actions_menu_items_orig = frappe.views.ListView.prototype.get_actions_menu_items;
frappe.views.ListView.prototype.get_actions_menu_items = function() {
	//Since a few time ago they have added the context string "Button in list view actions menu" in all list view action menu items so we do not need to do something here...
	const actionsmenuitems = [];
	actionsmenuitems = this.get_actions_menu_items_orig();
	return actionsmenuitems;
}
