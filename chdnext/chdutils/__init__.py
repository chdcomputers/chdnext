"""Διάφορες χρήσιμες συναρτήσεις.

Το module αυτό περιέχει διάφορα utilities που χρησιμοποιούνται σε πολλά σημεία του
chdNext.

Για παράδειγμα η συνάρτηση:
	* GreekAFMisValid
Επιστρέφει True αν ένας ελληνικός ΑΦΜ είναι έγκυρος
"""


def GreekAFMisValid(afm: str):
	"""Επιστρέφει True αν ένας ελληνικός ΑΦΜ είναι έγκυρος
	
	Η συνάρτηση αυτή ελέγχει τον ΑΦΜ με βάση τον δημοσιευμένο αλγόριθμο ελέγχου.
	ΔΕΝ ελέγχει αν ο ΑΦΜ είναι υπαρκτός, αν έχει δηλαδή αποδοθεί σε κάποια φορολογική οντότητα.
	"""
	
	afmTocheck: str = ""

	if afm is None:
		return False
	elif len(afm) == 9:
		afmTocheck = afm
	elif len(afm) == 11:
		if afm[:2].lower() != "el":
			return True
		else:
			afmTocheck = afm[-9:]
	elif len(afm) >= 11:
		if afm[:2].lower() != "el":
			return True
		else:
			return False
	else:
		return False
	
	if afmTocheck == "000000000":
		return False
	
	if not afmTocheck.isdecimal():
		return False

	total: int = 0
	modulo: int = 0
	lastdigit: int = int(afmTocheck[8])
	for i in range(8):
		total += int(afmTocheck[i]) * (2**(8-i))
	modulo = total % 11
	return (modulo == 10 and lastdigit == 0) or (modulo < 10 and lastdigit == modulo)
