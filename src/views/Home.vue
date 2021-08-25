<template>
    <div class="home">
        <img alt="Vue logo" src="@/assets/logo.png">
        <h1>Home</h1>
    </div>
</template>

<script>
	// import { mapActions, mapGetters } from 'vuex'
	import { mapActions } from 'vuex'

	export default {
		name: 'Home',
		components: {

		},
		methods: {
			...mapActions([
                'USER'
            ])
		},
		created: function () {
			this.USER()
		}
	}
</script>
