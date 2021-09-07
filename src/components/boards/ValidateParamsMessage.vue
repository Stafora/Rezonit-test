<template>
	<div class="adding-board-params-error-panel scroll" v-if="vForm.$anyError">

		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z"/>
		</svg>

		<div class="adding-board-params-error-panel-text">
			<div v-if="vForm.name.$error">
				<strong>Название платы: </strong>
				<template v-if="!vForm.name.required">
					Поле обязательно к заполнению<br>
				</template>
				<template v-if="!vForm.name.minLength">
					Длина имени не должно быть меньше {{ vForm.name.$params.minLength.min }} символов<br>
				</template>
				<template v-if="!vForm.name.maxLength">
					Длина имени не должно быть больше {{ vForm.name.$params.maxLength.max }} символов<br>
				</template>
			</div>

			<div v-if="vForm.widthX.$error">
				<strong>Ширина X, мм:</strong>
				<template v-if="!vForm.widthX.required">
					Поле обязательно к заполнению<br>
				</template>
				<template v-if="!vForm.widthX.between">
					Значение должно быть между  {{vForm.widthX.$params.between.min}} и {{vForm.widthX.$params.between.max}}<br>
				</template>
			</div>

			<div v-if="vForm.heightY.$error">
				<strong>Высота Y, мм:</strong>
				<template v-if="!vForm.heightY.required">
					Поле обязательно к заполнению<br>
				</template>
				<template v-if="!vForm.heightY.between">
					Значение должно быть между  {{vForm.heightY.$params.between.min}} и {{vForm.heightY.$params.between.max}}<br>
				</template>
			</div>

			<div v-if="vForm.panelX.$error">
				<strong>Плат по Х:</strong>
				<template v-if="!vForm.panelX.requiredCustom">
					Поле обязательно к заполнению<br>
				</template>
				<template v-if="!vForm.panelX.betweenCustom">
					Значение должно быть между 1 и 300<br>
				</template>
			</div>

			<div v-if="vForm.panelY.$error">
				<strong>Плат по Y:</strong>
				<template v-if="!vForm.panelY.requiredCustom">
					Поле обязательно к заполнению<br>
				</template>
				<template v-if="!vForm.panelY.requiredCustom">
					Значение должно быть между  1 и 300<br>
				</template>
			</div>

			<div v-if="vForm.panelGapX.$error">
				<strong>Зазор X:</strong>
				<template v-if="!vForm.panelGapX.requiredCustom">
					Поле обязательно к заполнению<br>
				</template>
				<template v-if="!vForm.panelGapX.betweenCustom">
					Значение должно быть между  0 и 10<br>
				</template>
			</div>

			<div v-if="vForm.panelGapY.$error">
				<strong>Зазор Y:</strong>
				<template v-if="!vForm.panelGapY.requiredCustom">
					Поле обязательно к заполнению<br>
				</template>
				<template v-if="!vForm.panelGapY.betweenCustom">
					Значение должно быть между  0 и 10<br>
				</template>
			</div>

			<div v-if="vForm.milling.$error">
				<template v-if="!vForm.milling.notNull && !vForm.scribing.notNull">
					Фрезерование или Скрайбирование, должно быть заполнено обязательно<br>
				</template>
				<template v-if="!vForm.milling.panelXMin">
					При фрезировании Зазоры по X должна быть >= 2<br>
				</template>
				<template v-if="!vForm.milling.panelYMin">
					При фрезировании Зазоры по Y должна быть >= 2<br>
				</template>

				<template v-if="!vForm.milling.millingAndScribingPanelX">
					При фрезировании и скрайбировании Зазоры по X должна быть == 0 или >= 2<br>
				</template>
				<template v-if="!vForm.milling.millingAndScribingPanelY">
					При фрезировании и скрайбировании Зазоры по Y должна быть == 0 или >= 2<br>
				</template>
			</div>

			<div v-if="vForm.scribing.$error">
				<template v-if="!vForm.scribing.panelXMin">
					При Скрайбирование Зазоров по X должно быть 0<br>
				</template>
				<template v-if="!vForm.scribing.panelYMin">
					При Скрайбирование Зазоров по Y должно быть 0<br>
				</template>
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		name: 'ValidateParamsMessage',
		props: {
			vForm: {
				type: Object
			}
		}
	}
</script>

<style lang="scss">
	.adding-board-params-error-panel{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			border-top: 1px solid #eee;
			margin-top: 20px;
			padding-top: 20px;
			height: 60px;
			overflow: auto;

			svg{
				fill: #2AA396;
				position: relative;
				top: 2px;
			}
			&-text{
				color: #2AA396;
				font-size: 14px;
				width: calc(100% - 25px);

				div{
					margin-bottom: 3px;
				}
			}
	}
</style>
