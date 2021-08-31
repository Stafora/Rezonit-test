<template>
	<div class="adding-board-params">
		<div class="adding-board-row">
			<div class="adding-board-col adding-board-col-4">
				<div class="adding-board-params__title">Параметры платы</div>

				<!-- Название платы -->
				<label class="adding-board-input" :class="{'error' : $v.form.name.$error, 'success' : !$v.form.name.$invalid}" >
					<div class="adding-board-input-wrapper">
						<input type="text" 
							v-model="form.name"
							@blur="$v.form.name.$touch()"
							v-on:input="changeInput"
						>
						<div class="adding-board-input__title">Название платы</div>
						<div class="adding-board-input__tooltip" data-tooltip="">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z" fill="#A6B0AF"/>
							</svg>
						</div>
					</div>
					<div class="adding-board-input__error" v-if="$v.form.name.$error">
						<template v-if="!$v.form.name.required">
							Поле обязательно к заполнению
						</template>
						<template v-if="!$v.form.name.minLength">
							Длина имени не должно быть меньше {{ $v.form.name.$params.minLength.min }} символов
						</template>
						<template v-if="!$v.form.name.maxLength">
							Длина имени не должно быть больше {{ $v.form.name.$params.maxLength.max }} символов
						</template>
					</div>
				</label>

				<div class="adding-board-row">
					<div class="adding-board-col adding-board-col-6">
						<!-- Ширина X -->
						<label class="adding-board-input" :class="{'error' : $v.form.widthX.$error, 'success' : !$v.form.widthX.$invalid}">
							<div class="adding-board-input-wrapper">
								<input type="text" 
									v-model="form.widthX"
									@blur="$v.form.widthX.$touch()"
									v-on:input="changeInput"
								>
								<div class="adding-board-input__title">Ширина X, мм</div>
								<div class="adding-board-input__tooltip" data-tooltip="">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z" fill="#A6B0AF"/>
									</svg>
								</div>
							</div>
							<div class="adding-board-input__error" v-if="$v.form.widthX.$error">
								<template v-if="!$v.form.widthX.required">
									Поле обязательно к заполнению
								</template>
								<template v-if="!$v.form.name.between">
									Значение должно быть между  {{$v.form.widthX.$params.between.min}} и {{$v.form.widthX.$params.between.max}}
								</template>
							</div>
						</label>
					</div>
					<div class="adding-board-col adding-board-col-6">
						<!-- Высота Y -->
						<label class="adding-board-input" :class="{'error' : $v.form.heightY.$error, 'success' : !$v.form.heightY.$invalid}">
							<div class="adding-board-input-wrapper">
								<input type="text" 
									v-model="form.heightY"
									@blur="$v.form.heightY.$touch()"
									v-on:input="changeInput"
								>
								<div class="adding-board-input__title">Высота Y, мм</div>
								<div class="adding-board-input__tooltip" data-tooltip="">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z" fill="#A6B0AF"/>
									</svg>
								</div>
							</div>
							<div class="adding-board-input__error" v-if="$v.form.heightY.$error">
								<template v-if="!$v.form.heightY.required">
									Поле обязательно к заполнению
								</template>
								<template v-if="!$v.form.name.between">
									Значение должно быть между  {{$v.form.heightY.$params.between.min}} и {{$v.form.heightY.$params.between.max}}
								</template>
							</div>
						</label>
					</div>
				</div>

				<label class="adding-board-checkbox">
					<div class="adding-board-checkbox__title">Изготовить в панели</div>
					<input type="checkbox" v-model="form.isPanel">
					<div class="adding-board-checkbox-toggle"></div>
				</label>

				<div class="adding-board-params-square">
					<div class="adding-board-params-square__name">Площадь</div>
					<div class="adding-board-params-square__value">0.00 дм2</div>
				</div>

			</div>
			<div class="adding-board-col adding-board-col-4">
				<div class="adding-board-params__title">Параметры панели</div>

				<div class="adding-board-row">
					<div class="adding-board-col adding-board-col-6">
						<label class="adding-board-input" :class="{disabled: !form.isPanel, 'error' : $v.form.panelX.$error, 'success' : !$v.form.panelX.$invalid}">
							<div class="adding-board-input-wrapper">
								<input 
									type="text" 
									:disabled="!form.isPanel"
									v-model="form.panelX"
									@blur="$v.form.panelX.$touch()"
									v-on:input="changeInput"
								>
								<div class="adding-board-input__title">Плат по Х, шт</div>
								<div class="adding-board-input__tooltip" data-tooltip="">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z" fill="#A6B0AF"/>
									</svg>
								</div>
							</div>

							<div class="adding-board-input__error" v-if="$v.form.panelX.$error">
								<template v-if="!$v.form.panelX.required">
									Поле обязательно к заполнению
								</template>
								<template v-if="!$v.form.name.between">
									Значение должно быть между  {{$v.form.panelX.$params.between.min}} и {{$v.form.panelX.$params.between.max}}
								</template>
							</div>
						</label>
					</div>
					<div class="adding-board-col adding-board-col-6">
						<label class="adding-board-input" :class="{disabled: !form.isPanel, 'error' : $v.form.panelY.$error, 'success' : !$v.form.panelY.$invalid}">
							<div class="adding-board-input-wrapper">
								<input 
									type="text" 
									:disabled="!form.isPanel"
									v-model="form.panelY"
									@blur="$v.form.panelY.$touch()"
									v-on:input="changeInput"
								>
								<div class="adding-board-input__title">Плат по Y, шт </div>
								<div class="adding-board-input__tooltip" data-tooltip="">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z" fill="#A6B0AF"/>
									</svg>
								</div>
							</div>
							
							<div class="adding-board-input__error" v-if="$v.form.panelY.$error">
								<template v-if="!$v.form.panelY.required">
									Поле обязательно к заполнению
								</template>
								<template v-if="!$v.form.name.between">
									Значение должно быть между  {{$v.form.panelY.$params.between.min}} и {{$v.form.panelY.$params.between.max}}
								</template>
							</div>
						</label>
					</div>
				</div>

				<div class="adding-board-row">
					<div class="adding-board-col adding-board-col-6">
						<label class="adding-board-input" :class="{disabled: !form.isPanel}">
							<input 
								type="text" 
								:disabled="!form.isPanel"
								v-model="form.panelGapX"
								@blur="$v.form.panelGapX.$touch()"
								v-on:input="changeInput"
							>
							<div class="adding-board-input__title">Зазор X, мм</div>
							<div class="adding-board-input__tooltip" data-tooltip="">
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z" fill="#A6B0AF"/>
								</svg>
							</div>
						</label>
					</div>
					<div class="adding-board-col adding-board-col-6">
						<label class="adding-board-input" :class="{disabled: !form.isPanel}">
							<input 
								type="text" 
								:disabled="!form.isPanel"
								v-model="form.panelGapY"
								@blur="$v.form.panelGapY.$touch()"
								v-on:input="changeInput"
							>
							<div class="adding-board-input__title">Зазор Y, мм</div>
							<div class="adding-board-input__tooltip" data-tooltip="">
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z" fill="#A6B0AF"/>
								</svg>
							</div>
						</label>
					</div>
				</div>

				<label class="adding-board-checkbox" :class="{disabled: !form.isPanel}">
					<div class="adding-board-checkbox__title">Фрезерование</div>
					<input 
						type="checkbox" 
						v-model="form.milling" :disabled="!form.isPanel"
					>
					<div class="adding-board-checkbox-toggle"></div>
				</label>

				<label class="adding-board-checkbox" :class="{disabled: !form.isPanel}">
					<div class="adding-board-checkbox__title">Скрайбирование</div>
					<input 
						type="checkbox" 
						v-model="form.scribing" 
						:disabled="!form.isPanel"
					>
					<div class="adding-board-checkbox-toggle"></div>
				</label>
				
			</div>
			<div class="adding-board-col adding-board-col-4">
				<div class="adding-board-params__title">Вид панели</div>

				<div class="adding-board-params-visually">
					<div class="adding-board-params-visually-panel">

						<!-- <div class="adding-board-params-visually-panel-inner" v-for="index in parseInt(form.panelY)" v-bind:key="index">
							<div class="adding-board-params-visually-panel__block" v-for="index in parseInt(form.panelY)" v-bind:key="index"></div>
						</div> -->

					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { required, minLength, maxLength, between } from 'vuelidate/lib/validators'

	export default {
		name: 'AddingBoardParams',
		data: () => ({
			form: {
				name: '',
				widthX: null,
				heightY: null,
				isPanel: false,
				square: null,
				panelX: null,
				panelY: null,
				panelGapX: null,
				panelGapY: null,
				milling: 0,
				scribing: 0
			}
		}),
		computed: {
			renderPanelXY() {
				if(this.form.panelX && this.form.panelY){
					return this.form.panelX * this.form.panelY
				} else {
					return ''
				}
			}
		},
		methods: {
			changeInput(event) {
				console.log(event);
				if(event.data){
					event.target.classList.add('is-data')
				} else {
					event.target.classList.remove('is-data')
				}
			}
		},
		validations: {
			form: {
				name: {
					required,
					minLength: minLength(3),
					maxLength: maxLength(30)
				},
				widthX: {
					required,
					between: between(1, 300)
				},
				heightY: {
					required,
					between: between(1, 300)
				},
				panelX: {
					required,
					between: between(1, 10)
				},
				panelY: {
					required,
					between: between(1, 10)
				}
			}
		}
	}
</script>

<style lang="scss">
	.adding-board-params{
		min-height: 288px;

		&__title{
			font-weight: 500;
			font-size: 14px;
			line-height: 1.4;
			color: #525B53;
			margin-bottom: 15px;
			padding-left: 16px;

			&_center{
				text-align: center;
			}
		}

		&-visually{
			padding: 16px;
			
			&-panel{
				border: 1px solid #2AA396;
				padding: 0px 18px;
				
				&-inner{
					display: flex;
					width: calc(100% + 12px);
					margin-left: -6px;
					margin-right: -6px;
				}

				&__block{
					width: calc(100% - 12px);
					margin-left: 6px;
					margin-right: 6px;
					height: 60px;
					border: 1px solid #2AA396;
					margin-bottom: 12px;
					margin-top: 12px;
				}
			}
		}

		&-square{
			font-size: 14px;
			line-height: 1.3;
			color: #525B53;
			display: flex;
			align-items: flex-end;
			justify-content: space-between;
			width: 100%;
			padding: 10px 16px 0px 16px;
			position: relative;

			&::before{
				content: '';
				z-index: 1;
				height: 1px;
				border-bottom: 1px dotted #525B53;
				width: calc(100% - 32px);
				left: 16px;
				position: absolute;
				bottom: 1px;
			}

			&__name{
				max-width: 48%;
				background: #fff;
				z-index: 2;
				position: relative;
				padding-right: 2px;
			}
			&__value{
				max-width: 48%;
				background: #fff;
				z-index: 2;
				position: relative;
				padding-left: 2px;
			}
		}
	}
</style>
