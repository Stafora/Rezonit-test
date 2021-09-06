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
		name: 'CardLayout',
		components: {
			Header,
			Aside
		}
	}
</script>
