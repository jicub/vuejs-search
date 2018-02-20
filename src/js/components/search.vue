
<!-- Search -->
<template lang="pug">
	div.search
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

	.search {
		width: 100%;

		h1 {
			color:$cu-gray;
			font-size:25px;
		}

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
</style>
