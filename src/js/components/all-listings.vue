
<!-- Department Listings -->
<template lang="pug">
	div.content
		h2 Total Listings by Department

		template(v-for="item in foundListingItems" v-if="foundListingItems.length > 0")
			div {{item.length}}	
			ul.item
				li.dir-dept 
					strong {{item.dept}}
				li.dir-name {{ item.firstName }} {{ item.lastName}}
				li.dir-url
					a(:href="item.url") {{ item.url }}
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
				return this.$store.default.getters.showAllData;
			},
			foundListingItems: function(){
				//search input
				var input = store.state.searchInput,
					searchString,
					cleanStr = input.replace(/[^\w\s]/gi, '~'),
					re = new RegExp(cleanStr, 'i');

				// return match
				return this.listingItems.filter(function(item) {
					item.type = 'listingFound';
					searchString = item.firstName + ' '+ item.lastName + ' ' + item.dept + ' ' + item.statusType;
					return searchString.match(re);
				});
			}
		}
	}
</script>

