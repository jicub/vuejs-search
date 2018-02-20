//Config
var dirRoot 		= require('../../../gulp/config.json'),
	Vue 			= require('vue/dist/vue.js'),
	Vuex 			= require('vuex'),
	VueResource 	= require('vue-resource');


// Connect Vuex to Vue
Vue.use(Vuex);

Vue.use(VueResource);

var dirUrl = dirRoot.dest.jsonLocal + 'directory.json';

var store = new Vuex.Store({
	state:{
		myData:[],
		persons: [],
		deptListings: [],
		primaryListings: [],
		allListings: [],
		searchInput: '',
		noResultsMsg: 'Sorry, no results were found!'
	},
	actions: {
		getJson: function(){
			Vue.http
				.get(dirUrl)
				.then(function(response){
					var data = response.body[0];
					//Json Data
					store.state.myData = data;
					store.state.persons = data.persons;
					store.state.deptListings = data.deptListings;
					store.state.primaryListings = data.primaryListings;
					store.state.allListings = data.persons.concat(data.deptListings, data.primaryListings);

					// console.log(store.state.allListings);
					
					//alphabetize data
					store.getters.orgData;

					store.getters.searchData;

				}, function(error){
					console.log(error);
				});
		}
	},
	getters: {
		showAllData: function (datum) {
			var allData = datum.allListings;

			// console.log(allData);
			
			return allData;
		},
		showPeopleContacts: function(myData) {
			var data = myData.persons;
			
			return data;
		},
		showDeptContacts: function(myData) {
			var data = myData.deptListings;
			
			return data;
		},
		showPrimaryContacts: function(myData) {
			var data = myData.primaryListings;
			
			return data;
		},
		orgData: function(myData){
			//Alphabetize by last name
			myData.persons.sort(function (a, b){
				var lastNameA = a.lastName.toLowerCase(),
					lastNameB = b.lastName.toLowerCase();

				if (lastNameA < lastNameB) { return -1; }
				if (lastNameA > lastNameB) { return 1; }
				return 0;
			});

			//Alphabetize by dept name
			myData.deptListings.sort(function (a, b){
				var lastdeptA = a.dept.toLowerCase(),
					lastdeptB = b.dept.toLowerCase();

				if (lastdeptA < lastdeptB) { return -1; }
				if (lastdeptA > lastdeptB) { return 1; }
				return 0;
			});

			//Alphabetize by dept name
			myData.primaryListings.sort(function (a, b){
				var lastdeptA = a.dept.toLowerCase(),
					lastdeptB = b.dept.toLowerCase();

				if (lastdeptA < lastdeptB) { return -1; }
				if (lastdeptA > lastdeptB) { return 1; }
				return 0;
			});

			//Alphabetize by all listings
			myData.allListings.sort(function (a, b){
				var lastdeptA = a.dept.toLowerCase(),
					lastdeptB = b.dept.toLowerCase();

				if (lastdeptA < lastdeptB) { return -1; }
				if (lastdeptA > lastdeptB) { return 1; }
				return 0;
			});
			
		}
	}
});

export default store;

store.dispatch('getJson');
