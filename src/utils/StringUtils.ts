export function nullOrEmpty(value: string) {
	if (value == null || value.trim() == '') {
		return true;
	}
	return false;
}

export function invitationCode() {
	return '_' + Math.random().toString(36).substr(2, 9);
}
