<template>
    <div class="document document-default">
		<div class="document-top">
			<Header />
		</div>
		<div class="main-aside">
			<Aside />
			<main class="main-aside__main">
				<div class="main-aside__content">
					<slot/>
				</div>
			</main>
		</div>
    </div>
</template>

<script>
	import Header from '@/components/common/Header'
	import Aside from '@/components/common/Aside'

	export default {
		name: 'DefaultLayout',
		components: {
			Header,
			Aside
		}
	}
</script>

<style lang="scss">
	.document-top{
		height: 48px;
	}
	.main-aside{
		height: calc(100vh - 48px);
		display: flex;

		&__aside{
			width: 216px;
			background: linear-gradient(174.1deg, #14B775 0%, #3D8FB4 100%);
			height: 100%;
		}
		&__main{
			width: calc(100% - 216px);
			padding: 16px;
			height: 100%;
		}
		&__content{
			background: #FFFFFF;
			box-shadow: 0px 10px 92px rgba(60, 145, 179, 0.1), 0px 10px 20px rgba(60, 145, 179, 0.1), 0px 5px 10px rgba(60, 145, 179, 0.1), 0px 5px 5px rgba(60, 145, 179, 0.1), 0px 2px 3px rgba(60, 145, 179, 0.1);
			border-radius: 4px;
			height: 100%;
		}
	}

	@media(max-width: 980px){
		.main-aside{
			height: auto;

			&__aside{
				display: none;
			}
			&__main{
				width: 100%;
			}
		}
	}
</style>
