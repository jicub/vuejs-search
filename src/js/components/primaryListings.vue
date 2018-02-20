
<!-- Primary Listings -->

<template lang="pug">
	div.content
		h2 Important Numbers
		
		template(v-for="item in foundListingItems" v-if="foundListingItems.length > 0")
			ul.item
				li.dir-name
					strong {{item.dept}}
				li.dir-dept {{item.statusType}}
				li.dir-tel 
					a(:href="`tel:1+${ item.tel }`") {{ item.tel }}
		
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
				return this.$store.default.getters.showPrimaryContacts;
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
					searchString = item.dept + ' ' + item.statusType
					return searchString.match(re);
				});
			}
		}
	}
</script>

