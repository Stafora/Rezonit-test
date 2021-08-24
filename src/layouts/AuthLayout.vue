<template>
    <div class="document document-auth">
        <slot/>
    </div>
</template>

<script>
	export default {
		name: 'AuthLayout'
	}
</script>

<style lang="scss">
	.document-auth{
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media(max-width: 980px){
		.document-auth{
			height: auto;
		}
	}
</style>
