<template>
	<div class="language-auth">
		<ul class="language-auth-list">
			<li class="language-auth-item"><a class="language-auth-link" href="#">EN</a></li>
			<li class="language-auth-item"><a class="language-auth-link active" href="#">RU</a></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Language Auth'
	}
</script>

<style lang="scss">
	.language-auth{
		margin-top: 30px;
		&-list{
			display: flex;
			justify-content: flex-end;
		}
		&-item{
			margin-right: 14px;
			position: relative;

			&:first-child{
				&::before{
					display: none;
				}
			}

			&::before{
				content: '';
				width: 4px;
				height: 4px;
				position: absolute;
				left: -7px;
				top: 50%;
				background: #A6B0AF;
				border-radius: 4px;
				margin-top: -1px;
				margin-left: -2px;
			}
		}
		&-link{
			color: #A6B0AF;
			text-transform: uppercase;
			font-size: 12px;

			&.active{
				color: #14B775;
			}
		}
	}
</style>
