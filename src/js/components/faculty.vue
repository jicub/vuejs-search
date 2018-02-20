<!-- Faculty and Staff -->
<template lang="pug">
	div.content
		//- input(type='text' placeholder='Search' v-model='search')
		//- {{search}}
		h2 Faculty &amp; Staff
		template(v-for="item in foundListingItems" v-if="foundListingItems.length > 0")
			ul.item
				//- h1 {{msg}}
				li.dir-name
					strong {{ item.firstName }} {{ item.lastName}}
				li.dir-dept {{ item.dept }}
				li.dir-tel 
					a(:href="`tel:1+${ item.tel }`") {{ item.tel }}
				li.dir-email 
					a(:href="`mailto:${ item.email }`") {{ item.email }}

		template(v-if="foundListingItems.length === 0")
			h3 {{ noResultsMsg }}
</template>

<script>
	import store from '../store/store.js';

	export default {
		data() {
			return {
				noResultsMsg: this.$store.default.state.noResultsMsg
			}
		},
		computed: {
			listingItems: function() {
				return this.$store.default.getters.showPeopleContacts;
			},
			foundListingItems: function() {
				
				//search input
				var input = store.state.searchInput,
					searchString,
					cleanStr = input.replace(/[^\w\s]/gi, '~'),
					re = new RegExp(cleanStr, 'i');
				
				
				// return match
				return this.listingItems.filter(function(item) {
					item.type = 'listingFound';
					searchString = item.firstName+ ' '+ item.lastName + ' ' + item.dept

					return searchString.match(re);
				});
			}
		}
	}
</script>
