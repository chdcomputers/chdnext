// Προκειμένου να απενεργοποιήσουμε το aspect ratio του image cropper όταν ανεβάζουμε εικόνες και χωρίς φυσικά να πειράξουμε τον core κώδικα,
// αντιγράψαμε όλα τα σχετικά αρχεία από τον αντίστοιχο φάκελο του frappe εδώ.
// chdnext/file_uploader/* από το αντίστοιχο frappe/file_uploader/*
// chdnext/upload.js από το αντίστοιχο frappe/upload.js
// και το integrations/google_drive_picker.js
// στη συνέχεια κάναμε τις απαραίτητες αλλαγές στο αρχείο chdnext/file_uploader/ImageCropper.vue
// Οι βασικές οδηγίες γι' αυτή τη διαδικασία είναι εδώ: https://frappeframework.com/docs/v13/user/en/basics/asset-bundling
// Όμως για να λειτουργήσει τελικά όπως πρέπει κάναμε τα παρακάτω:
// sudo supervisorctl stop all
// bench build
// bench --site all clear-cache
// bench clear-cache
// sudo supervisorctl start all
// Μπορεί να γίνεται και αλλιώς, αν κάποιος ξέρει περισσότερα ας μας διαφωτίσει παρακαλώ...
import "./chdnext/upload.js";
import BulkOperations from "../../../../frappe/frappe/public/js/frappe/list/bulk_operations.js";

// Μερικά overrides. ΔΕΝ ΞΕΡΩ αν είναι αυτός ο σωστός τρόπος...
frappe.ui.form.ControlButton.prototype.set_label = function(label) {
	if (label) {
		this.df.label = label;
	}
	label = (this.df.icon ? frappe.utils.icon(this.df.icon) : "") + __(this.df.label + "_cbutton");
	$(this.label_span).html("&nbsp;");
	this.$input && this.$input.html(label);
};

//Εδώ ΔΕΝ χρειάζεται το prototype γιατί το breadcrumbs είναι απλό object και όχι class.
frappe.breadcrumbs.set_list_breadcrumb = function(breadcrumbs) {
	const doctype = breadcrumbs.doctype;
	const doctype_meta = frappe.get_doc('DocType', doctype);
	if ((doctype==="User" && !frappe.user.has_role('System Manager'))
		|| (doctype_meta && doctype_meta.issingle)) {
		// no user listview for non-system managers and single doctypes
	} else {
		let route;
		const doctype_route = frappe.router.slug(frappe.router.doctype_layout || doctype);
		if (frappe.boot.treeviews.indexOf(doctype) !== -1) {
			let view = frappe.model.user_settings[doctype].last_view || 'Tree';
			route = `${doctype_route}/view/${view}`;
		} else {
			route = doctype_route;
		}
		$(`<li><a href="/app/${route}">${__(doctype + "_list_breadcrumb")}</a></li>`)
			.appendTo(this.$breadcrumbs);
	}
};

frappe.views.BaseList.prototype.setup_defaults = function() {
	this.page_name = frappe.get_route_str();
	this.page_title = this.page_title || frappe.router.doctype_layout || __(this.doctype + "_lv_title");
	this.meta = frappe.get_meta(this.doctype);
	this.settings = frappe.listview_settings[this.doctype] || {};
	this.user_settings = frappe.get_user_settings(this.doctype);

	this.start = 0;
	this.page_length = 20;
	this.data = [];
	this.method = "frappe.desk.reportview.get";

	this.can_create = frappe.model.can_create(this.doctype);
	this.can_write = frappe.model.can_write(this.doctype);

	this.fields = [];
	this.filters = [];
	this.sort_by = "modified";
	this.sort_order = "desc";

	// Setup buttons
	this.primary_action = null;
	this.secondary_action = null;

	this.menu_items = [
		{
			label: __("Refresh_lv_base"),
			action: () => this.refresh(),
			class: "visible-xs",
		},
	];
};

frappe.views.ListView.prototype.set_primary_action = function() {
	if (this.can_create) {
		this.page.set_primary_action(
			`${__("Add_lv_addnew")} ${frappe.router.doctype_layout || __(this.doctype + "_lv_addnew")}`,
			() => {
				if (this.settings.primary_action) {
					this.settings.primary_action();
				} else {
					this.make_new_doc();
				}
			},
			"add"
		);
	} else {
		this.page.clear_primary_action();
	}
};

frappe.views.ListView.prototype.get_no_result_message = function() {
	let help_link = this.get_documentation_link();
	let filters = this.filter_area && this.filter_area.get();
	let no_result_message = filters && filters.length
		? __("No_records_found")
		: __("No_records_exist");
	let new_button_label = filters && filters.length
		? __("Add_lv_addnew {0}", [__(this.doctype + "_lv_addnew")])
		: __("Add_lv_addnew {0}", [__(this.doctype + "_lv_addnew")]);
	let empty_state_image =
		this.settings.empty_state_image ||
		"/assets/frappe/images/ui-states/list-empty-state.svg";

	const new_button = this.can_create
		? `<p><button class="btn btn-primary btn-sm btn-new-doc hidden-xs">
			${new_button_label}
		</button> <button class="btn btn-primary btn-new-doc visible-xs">${__('Add_lv_addnew')}</button></p>`
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

frappe.views.ListView.prototype.setup_columns = function() {
	// setup columns for list view
	this.columns = [];

	const get_df = frappe.meta.get_docfield.bind(null, this.doctype);

	// 1st column: title_field or name
	if (this.meta.title_field) {
		this.columns.push({
			type: "Subject",
			df: get_df(this.meta.title_field),
		});
	} else {
		this.columns.push({
			type: "Subject",
			df: {
				label: __(this.doctype + "_Name_as_lv_field"),
				fieldname: "name",
			},
		});
	}


	this.columns.push({
		type: "Tag"
	});

	// 2nd column: Status indicator
	if (frappe.has_indicator(this.doctype)) {
		// indicator
		this.columns.push({
			type: "Status",
		});
	}

	const fields_in_list_view = this.get_fields_in_list_view();
	// Add rest from in_list_view docfields
	this.columns = this.columns.concat(
		fields_in_list_view
			.filter((df) => {
				if (
					frappe.has_indicator(this.doctype) &&
					df.fieldname === "status"
				) {
					return false;
				}
				if (!df.in_list_view) {
					return false;
				}
				return df.fieldname !== this.meta.title_field;
			})
			.map((df) => ({
				type: "Field",
				df,
			}))
	);

	if (this.list_view_settings.fields) {
		this.columns = this.reorder_listview_fields();
	}

	// limit max to 8 columns if no total_fields is set in List View Settings
	// Screen with low density no of columns 4
	// Screen with medium density no of columns 6
	// Screen with high density no of columns 8
	let total_fields = 6;

	if (window.innerWidth <= 1366) {
		total_fields = 4;
	} else if (window.innerWidth >= 1920) {
		total_fields = 8;
	}

	this.columns = this.columns.slice(0, this.list_view_settings.total_fields || total_fields);

	if (
		!this.settings.hide_name_column &&
		this.meta.title_field &&
		this.meta.title_field !== 'name'
	) {
		this.columns.push({
			type: "Field",
			df: {
				label: __(this.doctype + "_Name_as_lv_field"),
				fieldname: "name",
			},
		});
	}
};

frappe.views.ListView.prototype.get_menu_items = function() {
	const doctype = this.doctype;
	const items = [];

	if (frappe.model.can_import(doctype, null, this.meta)) {
		items.push({
			label: __("Import_lv_menu_item"),
			action: () =>
				frappe.set_route("list", "data-import", {
					reference_doctype: doctype,
				}),
			standard: true,
		});
	}

	if (frappe.model.can_set_user_permissions(doctype)) {
		items.push({
			label: __("User Permissions_lv_menu_item"),
			action: () =>
				frappe.set_route("list", "user-permission", {
					allow: doctype,
				}),
			standard: true,
		});
	}

	if (frappe.user_roles.includes("System Manager")) {
		items.push({
			label: __("Role Permissions Manager_lv_menu_item"),
			action: () =>
				frappe.set_route("permission-manager", {
					doctype,
				}),
			standard: true,
		});

		items.push({
			label: __("Customize_lv_menu_item"),
			action: () => {
				if (!this.meta) return;
				if (this.meta.custom) {
					frappe.set_route("form", "doctype", doctype);
				} else if (!this.meta.custom) {
					frappe.set_route("form", "customize-form", {
						doc_type: doctype,
					});
				}
			},
			standard: true,
			shortcut: "Ctrl+J",
		});
	}

	items.push({
		label: __("Toggle Sidebar_lv_menu_item"),
		action: () => this.toggle_side_bar(),
		condition: () => !this.hide_sidebar,
		standard: true,
		shortcut: "Ctrl+K",
	});

	items.push({
		label: __("Share URL_lv_menu_item"),
		action: () => this.share_url(),
		standard: true,
		shortcut: "Ctrl+L",
	});

	if (
		frappe.user.has_role("System Manager") &&
		frappe.boot.developer_mode === 1
	) {
		// edit doctype
		items.push({
			label: __("Edit DocType_lv_menu_item"),
			action: () => frappe.set_route("form", "doctype", doctype),
			standard: true,
		});
	}

	if (frappe.user.has_role("System Manager")) {
		items.push({
			label: __("List Settings_lv_menu_item"),
			action: () => this.show_list_settings(),
			standard: true,
		});
	}
	return items;
};

frappe.views.ListView.prototype.get_actions_menu_items = function() {
	const doctype = this.doctype;
	const actions_menu_items = [];
	const bulk_operations = new BulkOperations({ doctype: this.doctype });

	const is_field_editable = (field_doc) => {
		return (
			field_doc.fieldname &&
			frappe.model.is_value_type(field_doc) &&
			field_doc.fieldtype !== "Read Only" &&
			!field_doc.hidden &&
			!field_doc.read_only
		);
	};

	const has_editable_fields = (doctype) => {
		return frappe.meta
			.get_docfields(doctype)
			.some((field_doc) => is_field_editable(field_doc));
	};

	const has_submit_permission = (doctype) => {
		return frappe.perm.has_perm(doctype, 0, "submit");
	};

	// utility
	const bulk_assignment = () => {
		return {
			label: __("Assign To_lv_menu_action_item"),
			action: () => {
				this.disable_list_update = true;
				bulk_operations.assign(
					this.get_checked_items(true),
					() => {
						this.disable_list_update = false;
						this.clear_checked_items();
						this.refresh();
					}
				);
			},
			standard: true,
		};
	};

	const bulk_assignment_rule = () => {
		return {
			label: __("Apply Assignment Rule_lv_menu_action_item"),
			action: () => {
				this.disable_list_update = true;
				bulk_operations.apply_assignment_rule(
					this.get_checked_items(true),
					() => {
						this.disable_list_update = false;
						this.clear_checked_items();
						this.refresh();
					}
				);
			},
			standard: true,
		};
	};

	const bulk_add_tags = () => {
		return {
			label: __("Add Tags_lv_menu_action_item"),
			action: () => {
				this.disable_list_update = true;
				bulk_operations.add_tags(
					this.get_checked_items(true),
					() => {
						this.disable_list_update = false;
						this.clear_checked_items();
						this.refresh();
					}
				);
			},
			standard: true,
		};
	};

	const bulk_printing = () => {
		return {
			label: __("Print_lv_menu_action_item"),
			action: () => bulk_operations.print(this.get_checked_items()),
			standard: true,
		};
	};

	const bulk_delete = () => {
		return {
			label: __("Delete_lv_menu_action_item"),
			action: () => {
				const docnames = this.get_checked_items(true).map(
					(docname) => docname.toString()
				);
				frappe.confirm(
					__("Delete {0} items permanently?_lv_menu_action_item", [docnames.length]),
					() => {
						this.disable_list_update = true;
						bulk_operations.delete(docnames, () => {
							this.disable_list_update = false;
							this.clear_checked_items();
							this.refresh();
						});
					}
				);
			},
			standard: true,
		};
	};

	const bulk_cancel = () => {
		return {
			label: __("Cancel_lv_menu_action_item"),
			action: () => {
				const docnames = this.get_checked_items(true);
				if (docnames.length > 0) {
					frappe.confirm(
						__("Cancel {0} documents?_lv_menu_action_item", [docnames.length]),
						() => {
							this.disable_list_update = true;
							bulk_operations.submit_or_cancel(
								docnames,
								"cancel",
								() => {
									this.disable_list_update = false;
									this.clear_checked_items();
									this.refresh();
								}
							);
						});
				}
			},
			standard: true,
		};
	};

	const bulk_submit = () => {
		return {
			label: __("Submit_lv_menu_action_item"),
			action: () => {
				const docnames = this.get_checked_items(true);
				if (docnames.length > 0) {
					frappe.confirm(
						__("Submit {0} documents?_lv_menu_action_item", [docnames.length]),
						() => {
							this.disable_list_update = true;
							bulk_operations.submit_or_cancel(
								docnames,
								"submit",
								() => {
									this.disable_list_update = false;
									this.clear_checked_items();
									this.refresh();
								}
							);
						}
					);
				}
			},
			standard: true,
		};
	};

	const bulk_edit = () => {
		return {
			label: __("Edit_lv_menu_action_item"),
			action: () => {
				let field_mappings = {};

				frappe.meta.get_docfields(doctype).forEach((field_doc) => {
					if (is_field_editable(field_doc)) {
						field_mappings[field_doc.label] = Object.assign(
							{},
							field_doc
						);
					}
				});

				this.disable_list_update = true;
				bulk_operations.edit(
					this.get_checked_items(true),
					field_mappings,
					() => {
						this.disable_list_update = false;
						this.clear_checked_items();
						this.refresh();
					}
				);
			},
			standard: true,
		};
	};

	const bulk_export = () => {
		return {
			label: __("Export_lv_menu_action_item"),
			action: () => {
				const docnames = this.get_checked_items(true);

				bulk_operations.export(doctype, docnames);
			},
			standard: true
		};
	};

	// bulk edit
	if (has_editable_fields(doctype)) {
		actions_menu_items.push(bulk_edit());
	}

	actions_menu_items.push(bulk_export());

	// bulk assignment
	actions_menu_items.push(bulk_assignment());

	actions_menu_items.push(bulk_assignment_rule());

	actions_menu_items.push(bulk_add_tags());

	// bulk printing
	if (frappe.model.can_print(doctype)) {
		actions_menu_items.push(bulk_printing());
	}

	// bulk submit
	if (
		frappe.model.is_submittable(doctype) &&
		has_submit_permission(doctype) &&
		!frappe.model.has_workflow(doctype)
	) {
		actions_menu_items.push(bulk_submit());
	}

	// bulk cancel
	if (
		frappe.model.can_cancel(doctype) &&
		!frappe.model.has_workflow(doctype)
	) {
		actions_menu_items.push(bulk_cancel());
	}

	// bulk delete
	if (frappe.model.can_delete(doctype)) {
		actions_menu_items.push(bulk_delete());
	}

	return actions_menu_items;
};

