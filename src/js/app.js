// process.env.NODE_ENV = 'production';

var config						= require('../../gulp/config.json'),
	Vue							= require('vue/dist/vue.js'),
	VueRouter					= require('vue-router'),
	VueFilters					= require('vue2-filters'),
	vueStore					= require('../../src/js/store/store.js'),
	searchComponent				= require('../../src/js/components/search.vue'),
	facultyComponent			= require('../../src/js/components/faculty.vue'),
	departmentsComponent		= require('../../src/js/components/departments.vue'),
	allListingsComponent		= require('../../src/js/components/all-listings.vue'),
	importantNumbersComponent	= require('../../src/js/components/primaryListings.vue');


// Connect router to Vue
Vue.use(VueRouter);

// Connect Filters to Vue
Vue.use(VueFilters);

// Vue Configs
Vue.http.options.root = '/';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

if (process.env.NODE_ENV === 'production') {
    Vue.config.devtools = false;
    Vue.config.productionTip = false;
    Vue.config.debug = false;
    Vue.config.silent = true;
    console.log('You are in production mode!', Vue.config);
} else {
	Vue.config.devtools = true;
	Vue.config.productionTip = false;
    Vue.config.debug = true;
    Vue.config.silent = false;
    console.log('You are in development mode!');
}

//Vue Components
Vue.component('search', searchComponent);

// Define some routes
var routes = [
	{ path: '/', component: facultyComponent },
	{ path: '/faculty', component: facultyComponent },
	{ path: '/departments', component: departmentsComponent },
	{ path: '/important-numbers', component: importantNumbersComponent },
	{ path: '/all-listings', component: allListingsComponent }
];

// Create the router instance and pass the `routes` option
var router = new VueRouter({
  routes:routes, // short for routes: routes
  mode: 'hash'
});

// Root Instance
var app = new Vue({
  router: router,
  store: vueStore
}).$mount('#cu1846-search-app');





