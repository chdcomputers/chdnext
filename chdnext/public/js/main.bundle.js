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