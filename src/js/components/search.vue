
<!-- Search -->
<template lang="pug">
	div.cu1846-vuejs-search
		input(type='text' :placeholder='placeholder' v-on:keyup='trackInput' v-model='search')
</template>

<script>

	import store from '../store/store.js';
	import {filterStuff} from '../store/methods.js';

	export default {
		data: function() {
			return {
				search: '',
				placeholder: 'Search by name or department'
			}
		},
		methods: {
			trackInput: function(){

				store.state.searchInput = this.search;

				var newData = store.state.searchInput;

				return newData;
			}
		}
	}

</script>

<style lang="sass" scoped>
	@import '../../sass/_variables.scss';
	& {
		.cu1846-vuejs-search {
			width: 100%;

			input {
				width: 95%;
				margin:20px 0;
				padding:10px 2.5%;
			}

			p {
				padding:0 0 10px 0;
				margin:0;
			}
		}
	}
</style>
