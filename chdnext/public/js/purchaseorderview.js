// Αυτά που θέλουμε να κάνουμε σε μία παραγγελία προς προμηθευτή είναι τα παρακάτω:
// 1. Μόλις εισαχθεί κάποιο είδος το οποίο έχει τιμή αγοράς από τον προμηθευτή στον αντίστοιχο τιμοκατάλογο να μας φέρνει αυτή την τιμή.
// 2.   "      "       "      "   το οποίο έχει έκπτωση (custom field) στη τιμή αγοράς από τον προμηθευτή στον αντίστοιχο τιμοκατάλογο να μας φέρνει αυτή την έκπτωση.

// Σύμφωνα με την υλοποίηση που βρίσκεται στο apps/erpnext/erpnext/public/js/controllers/transaction.js
// πρέπει να κάνουμε attach στο change event του πεδίου item_code.
// Σύμφωνα με το documentation τα events ενός child table τα διαχειριζόμαστε από τον controller του master αρχείου.
// Επίσης αν κάνουμε frappe.ui.form.on("[Any DocType]",{[Any field name]: function()...}}) κάνουμε attach στο change event του πεδίου.
// Τέλος και αν έχω καταλάβει σωστά, αυτός ο κώδικας θα εκτελεστεί ΜΕΤΑ από τον core κώδικα του ERP Next.
frappe.ui.form.on("Purchase Order Item", {
	item_code: function(frm, cdt, cdn) {
		console.log("item_code changed " + frm + ", " + cdt + ", " + cdn)
		var the_item = frappe.get_doc(cdt, cdn);
		console.log("item");
		console.log(the_item);
		console.log("form");
		console.log(frm);
	}
});

function get_pl_purchase_rate_and_discount(itemCode, supplierName, transactionDate) {
	result = {
		pr: 100.0,
		di: 50.0
	};
	
	var the_item = frappe.get_doc("Item", itemCode);

	return result
}