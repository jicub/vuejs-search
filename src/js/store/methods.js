export function filterStuff(scope, inputData) {

	var input = inputData,
		re = new RegExp(input, 'i'),
		storeURL = scope.$store.default.getters,
		people = storeURL.showPeopleContacts,
		allData = storeURL.showAllData,
		primary = storeURL.showPrimaryContacts,
		depts = storeURL.showDepartmentContacts;

	//return match
	return datum.filter(function (key) {
		// console.log(person.lastName.match(re));
		return key.lastName.match(re);
		// return person;
	});
}