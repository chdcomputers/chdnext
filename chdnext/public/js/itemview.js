frappe.ui.form.on("Item", "refresh", function(frm) {
    frm.add_custom_button(__("Get Next Item Code for Group"), function() {
		frappe.call({
			method: "chdnext.chdutils.docvalidators.get_group_next_itemcode",
			args: {
				grpname: frm.doc.item_group
			},
			//btn: --> The button jquery selector to disable until the call completes
			freeze: true, //--> Freeze the screen until the call is completed
			callback: function(r) {
				//Successful execution
				let d = new frappe.ui.Dialog({
					title: __("Next Item Code for group {0}", [r.message.grp]),
					fields: [
						{
							label: __("Item Code to copy"),
							fieldname: "flditmcode",
							fieldtype: "Read Only",
							default: r.message.nextcode
						}
					],
					primary_action_label: __("Copy the Code and Close"),
					primary_action(values) {
						frappe.utils.copy_to_clipboard(values.flditmcode);
						d.hide();
					}
				});
				console.log(r);
				d.show();
			},
			error: function(r) {
				//Error on server
				console.log(r);
			}
		})
    }, __("Item Actions"));
});
