frappe.ui.form.on("Customer", "refresh", function(frm) {
    frm.add_custom_button(__("Get Greek Tax registered data for Customer"), function() {
		frappe.call({
			method: "chdnext.chdutils.docvalidators.get_aade_data",
			args: {
				doctype: frm.doc.doctype,
				afm: frm.doc.tax_id
			},
			//btn: --> The button jquery selector to disable until the call completes
			freeze: true, //--> Freeze the screen until the call is completed
			callback: function(r) {
				//Successful execution
				var aadeActivitiesAsString = function(r) {
					var result = "";
					for(let i = 0; i < r.message.firm_act_tab.item.length; i++) {
						result += r.message.firm_act_tab.item[i].firm_act_code + " - " + r.message.firm_act_tab.item[i].firm_act_descr + " (" + r.message.firm_act_tab.item[i].firm_act_kind_descr + ")\n";
					}
					return result;
				}
				let d = new frappe.ui.Dialog({
					title: __("AADE Results for {0} - Sequence No {1}", [r.message.basic_rec.afm, r.message.call_seq_id]),
					fields: [
						{
							label: __("AADE Registered Name"),
							fieldname: "onomasia",
							fieldtype: "Read Only",
							default: r.message.basic_rec.onomasia
						},
						{
							label: __("AADE Registered Commercial Title"),
							fieldname: "commer_title",
							fieldtype: "Read Only",
							default: r.message.basic_rec.commer_title
						},
						{
							label: "",
							fieldname: "sbr0",
							fieldtype: "Section Break"
						},
						{
							label: __("AADE Entity type"),
							fieldname: "i_ni_flag_descr",
							fieldtype: "Read Only",
							default: r.message.basic_rec.i_ni_flag_descr
						},
						{
							label: __("AADE Activation Status"),
							fieldname: "deactivation_flag",
							fieldtype: "Read Only",
							default: r.message.basic_rec.deactivation_flag + "-" + r.message.basic_rec.deactivation_flag_descr
						},
						{
							label: __("AADE Normal VAT Flag"),
							fieldname: "normal_vat_system_flag",
							fieldtype: "Read Only",
							default: r.message.basic_rec.normal_vat_system_flag
						},
						{
							label: "",
							fieldname: 'colbr0',
							fieldtype: "Column Break"
						},
						{
							label: __("AADE Legal entity type"),
							fieldname: "legal_status_descr",
							fieldtype: "Read Only",
							default: r.message.basic_rec.legal_status_descr
						},
						{
							label: __("AADE Legal entity description"),
							fieldname: "firm_flag_descr",
							fieldtype: "Read Only",
							default: r.message.basic_rec.firm_flag_descr
						},
						{
							label: __("AADE Tax Office"),
							fieldname: "aade_tax_office",
							fieldtype: "Read Only",
							default: r.message.basic_rec.doy + "-" + r.message.basic_rec.doy_descr
						},
						{
							label: "",
							fieldname: "sbr1",
							fieldtype: "Section Break"
						},
						{
							label: __("AADE Activities"),
							fieldname: "activities_list",
							fieldtype: "Code",
							read_only: 1,
							default: aadeActivitiesAsString(r)
						},
						{
							label: "",
							fieldname: "sbr2",
							fieldtype: "Section Break"
						},
						{
							label: __("Copy AADE data to customer"),
							fieldname: "chk_copydata",
							fieldtype: "Check",
							default: 0,
							change: function(e){
								e.stopPropagation();
								if (e.target.checked) {
									d.get_primary_btn().text(__("Copy AADE Data to Customer"));
								}
								else {
									d.get_primary_btn().text(__("Close"));
								}
							}
						}
					],
					primary_action_label: __("Close"),
					primary_action(values) {
						console.log(values);
						if (values.chk_copydata == 1){
							d.disable_primary_action();
							d.set_message(__("Copying AADE Data to Customer. Please wait..."));
							setTimeout(() => {
								// ToDo: Implement the copy data functionality here...
								d.hide();
							}, 2000);
						} else {
							d.hide();
						}
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
    }, __("Tax Id Validation Actions"));

    frm.add_custom_button(__("Get VIES Tax registered data for Customer"), function() {
        console.log("Did something Christos");
    }, __("Tax Id Validation Actions"));
});
