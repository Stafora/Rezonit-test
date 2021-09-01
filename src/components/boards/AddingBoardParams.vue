<template>
	<div class="adding-board-params">
		<div class="adding-board-row">
			<div class="adding-board-col adding-board-col-4">
				<div class="adding-board-params__title">Параметры платы</div>

				<!-- Название платы -->
				<label class="adding-board-input" :class="{'error' : $v.form.name.$error, 'success' : !$v.form.name.$invalid}" >
					<div class="adding-board-input-wrapper">
						<input type="text" 
							v-model.lazy="form.name"
							@blur="$v.form.name.$touch()"
							v-on:input="changeInput"
							:class="{'is-data': form.name}"
						>
						<div class="adding-board-input__title">Название платы</div>
						<div class="adding-board-input-info-error" :class="{error: $v.form.name.$error}" v-on:click="openInfoErrorInInput">
							<div class="adding-board-input-info-error__message"  v-if="$v.form.name.$error">
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
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z"/>
							</svg>
						</div>
					</div>
				</label>

				<div class="adding-board-row">
					<div class="adding-board-col adding-board-col-6">
						<!-- Ширина X -->
						<label class="adding-board-input" :class="{'error' : $v.form.widthX.$error, 'success' : !$v.form.widthX.$invalid}">
							<div class="adding-board-input-wrapper">
								<input type="text" 
									v-model.lazy="form.widthX"
									@blur="$v.form.widthX.$touch()"
									v-on:input="changeInput"
									:class="{'is-data': form.widthX}"
								>
								<div class="adding-board-input__title">Ширина X, мм</div>
								<div class="adding-board-input-info-error" :class="{error: $v.form.widthX.$error}" v-on:click="openInfoErrorInInput">
									<div class="adding-board-input-info-error__message"  v-if="$v.form.widthX.$error">
										<template v-if="!$v.form.widthX.required">
											Поле обязательно к заполнению
										</template>
										<template v-if="!$v.form.widthX.between">
											Значение должно быть между  {{$v.form.widthX.$params.between.min}} и {{$v.form.widthX.$params.between.max}}
										</template>
									</div>
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z"/>
									</svg>
								</div>
							</div>
						</label>
					</div>
					<div class="adding-board-col adding-board-col-6">
						<!-- Высота Y -->
						<label class="adding-board-input" :class="{'error' : $v.form.heightY.$error, 'success' : !$v.form.heightY.$invalid}">
							<div class="adding-board-input-wrapper">
								<input type="text" 
									v-model.lazy="form.heightY"
									@blur="$v.form.heightY.$touch()"
									v-on:input="changeInput"
									:class="{'is-data': form.heightY}"
								>
								<div class="adding-board-input__title">Высота Y, мм</div>
								<div class="adding-board-input-info-error" :class="{error: $v.form.heightY.$error}" v-on:click="openInfoErrorInInput">
									<div class="adding-board-input-info-error__message"  v-if="$v.form.heightY.$error">
										<template v-if="!$v.form.heightY.required">
											Поле обязательно к заполнению
										</template>
										<template v-if="!$v.form.heightY.between">
											Значение должно быть между  {{$v.form.heightY.$params.between.min}} и {{$v.form.heightY.$params.between.max}}
										</template>
									</div>
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z"/>
									</svg>
								</div>
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
					<div class="adding-board-params-square__value">{{ square }} дм2</div>
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
									v-model.lazy="form.panelX"
									@blur="$v.form.panelX.$touch()"
									v-on:input="changeInput"
									:class="{'is-data': form.panelX}"
								>
								<div class="adding-board-input__title">Плат по Х, шт</div>
								<div class="adding-board-input-info-error" :class="{error: $v.form.panelX.$error}" v-on:click="openInfoErrorInInput">
									<div class="adding-board-input-info-error__message"  v-if="$v.form.panelX.$error">
										<template v-if="!$v.form.panelX.required">
											Поле обязательно к заполнению
										</template>
										<template v-if="!$v.form.name.between">
											Значение должно быть между  {{$v.form.panelX.$params.between.min}} и {{$v.form.panelX.$params.between.max}}
										</template>
									</div>
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z"/>
									</svg>
								</div>
							</div>
						</label>
					</div>
					<div class="adding-board-col adding-board-col-6">
						<label class="adding-board-input" :class="{disabled: !form.isPanel, 'error' : $v.form.panelY.$error, 'success' : !$v.form.panelY.$invalid}">
							<div class="adding-board-input-wrapper">
								<input 
									type="text"
									:disabled="!form.isPanel"
									v-model.lazy="form.panelY"
									@blur="$v.form.panelY.$touch()"
									v-on:input="changeInput"
									:class="{'is-data': form.panelY}"
								>
								<div class="adding-board-input__title">Плат по Y, шт </div>
								<div class="adding-board-input-info-error" :class="{error: $v.form.panelY.$error}" v-on:click="openInfoErrorInInput">
									<div class="adding-board-input-info-error__message"  v-if="$v.form.panelY.$error">
										<template v-if="!$v.form.panelY.required">
											Поле обязательно к заполнению
										</template>
										<template v-if="!$v.form.panelY.between">
											Значение должно быть между  {{$v.form.panelY.$params.between.min}} и {{$v.form.panelY.$params.between.max}}
										</template>
									</div>
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z"/>
									</svg>
								</div>
							</div>
						</label>
					</div>
				</div>

				<div class="adding-board-row">
					<div class="adding-board-col adding-board-col-6">
						<label class="adding-board-input" :class="{disabled: !form.isPanel, 'error' : $v.form.panelGapX.$error, 'success' : !$v.form.panelGapX.$invalid}">
							<input 
								type="text"
								:disabled="!form.isPanel"
								v-model.lazy="form.panelGapX"
								@blur="$v.form.panelGapX.$touch()"
								v-on:input="changeInput"
								:class="{'is-data': form.panelGapX}"
							>
							<div class="adding-board-input__title">Зазор X, мм</div>
							<div class="adding-board-input-info-error" :class="{error: $v.form.panelGapX.$error}" v-on:click="openInfoErrorInInput">
								<div class="adding-board-input-info-error__message"  v-if="$v.form.panelGapX.$error">
									<template v-if="!$v.form.panelGapX.between">
										Значение должно быть между  {{$v.form.panelGapX.$params.between.min}} и {{$v.form.panelGapX.$params.between.max}}
									</template>
									<template v-if="!$v.form.panelGapX.panelGapXMillingAndScribing">
										Если включено фрезерование то значение должно быть >= 2<br>
										Если включено скрайбирование то значение должно быть = 0<br>
										Если включено фрезерование и скрайбирование то значение должно быть = 0 или >= 2<br>
									</template>
								</div>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z"/>
								</svg>
							</div>
						</label>
					</div>
					<div class="adding-board-col adding-board-col-6">
						<label class="adding-board-input" :class="{disabled: !form.isPanel, 'error' : $v.form.panelGapY.$error, 'success' : !$v.form.panelGapY.$invalid}">
							<input 
								type="text" 
								:disabled="!form.isPanel"
								v-model.lazy="form.panelGapY"
								@blur="$v.form.panelGapY.$touch()"
								v-on:input="changeInput"
								:class="{'is-data': form.panelGapY}"
							>
							<div class="adding-board-input__title">Зазор Y, мм</div>
							<div class="adding-board-input-info-error" :class="{error: $v.form.panelGapY.$error}" v-on:click="openInfoErrorInInput">
								<div class="adding-board-input-info-error__message"  v-if="$v.form.panelGapY.$error">
									<template v-if="!$v.form.panelGapY.between">
										Значение должно быть между  {{$v.form.panelGapY.$params.between.min}} и {{$v.form.panelGapY.$params.between.max}}
									</template>
									<template v-if="!$v.form.panelGapY.panelGapYMillingAndScribing">
										Если включено фрезерование то значение должно быть >= 2<br>
										Если включено скрайбирование то значение должно быть = 0<br>
										Если включено фрезерование и скрайбирование то значение должно быть = 0 или >= 2<br>
									</template>
								</div>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z"/>
								</svg>
							</div>
						</label>
					</div>
				</div>

				<label class="adding-board-checkbox" :class="{disabled: !form.isPanel}">
					<div class="adding-board-checkbox__title">Фрезерование</div>
					<input 
						type="checkbox" 
						v-model="form.milling" 
						:disabled="!form.isPanel"
						v-on:change="$v.form.milling.$touch()"
					>
					<div class="adding-board-checkbox-toggle"></div>
				</label>
				<label class="adding-board-checkbox" :class="{disabled: !form.isPanel}">
					<div class="adding-board-checkbox__title">Скрайбирование</div>
					<input 
						type="checkbox" 
						v-model="form.scribing" 
						:disabled="!form.isPanel"
						v-on:change="$v.form.scribing.$touch()"
					>
					<div class="adding-board-checkbox-toggle"></div>
				</label>
				<div class="adding-board-input__error" v-if="$v.form.milling.$error || $v.form.panelGapY.$error || $v.form.panelGapX.$error">
					<template>
						Фрезерование или Скрайбирование обязательно к заполнению
					</template>
				</div>
			</div>
			<div class="adding-board-col adding-board-col-4">
				<div class="adding-board-params__title">Вид панели</div>

				<div class="adding-board-params-visually">
					<div class="adding-board-params-visually-panel">

						<div class="adding-board-params-visually-panel-inner" 
							v-for="index in getPanelRenderY" 
							v-bind:key="index"
						>
							<div 
								class="adding-board-params-visually-panel__block" 
								v-for="index in getPanelRenderX" v-bind:key="index" 
								:style="{
									'margin-top': `-${getPanelStyleMarginTopBottom / 2}px`,
									width: `${getPanelStyleWidth}px`, 
									height: `${getPanelStyleHeight}px`,
									margin: `${getPanelStyleMarginTopBottom}px ${getPanelStyleMarginLeftRight}px`
								}"
							>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		<div class="adding-board-buttons">
			<div class="adding-board-buttons__btn btn btn-border" v-on:click="prevStep"><span>Назад</span></div>
			<div class="adding-board-buttons__btn btn btn-default" :class="{disabled: !isSuccessNextBtn}" v-on:click="nextStep"><span>Далее</span></div>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex'
	import { required, minLength, maxLength, between } from 'vuelidate/lib/validators'
	import { AddingBoardStorageServices } from '../../services/AddingBoardStorageServices'

	export default {
		name: 'AddingBoardParams',
		params: {
			setStep: {
				type: Function
			}
		},
		data: () => ({
			CURRENT_STEP: 2,
			isSuccessNextBtn: false,
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
				milling: false,
				scribing: false
			},
			panel: {
				width: 225,
				height: 250
			}
		}),
		created: function (){
			const boardParams = AddingBoardStorageServices.getItem('param');
			if(boardParams){
				this.$emit('setStep', this.CURRENT_STEP + 1)
				this.isSuccessNextBtn = true
				this.setParamWithStore(boardParams)
			}
		},
		computed: {
			...mapGetters([
                'GET_BOARD_PARAM_NAME'
            ]),
			getPanelRenderX() {
				if(this.form.panelX){
					return parseInt(this.form.panelX)
				}
				return null
			},
			getPanelRenderY() {
				if(this.form.panelY){
					return parseInt(this.form.panelY)
				}
				return null
			},
			getPanelStyleWidth() {
				if(this.form.panelX){
					const result = this.panel.width / this.form.panelX;
					if(this.form.panelGapX) {
						return result - (this.form.panelGapX * 2)
					} else {
						return result;
					}
				}
				return null
			},
			getPanelStyleHeight() {
				if(this.form.panelY){
					const result = this.panel.height / this.form.panelY;
					if(this.form.panelGapY) {
						return result - (this.form.panelGapY * 2)
					} else {
						return result;
					}
				}
				return null
			},
			getPanelStyleMarginTopBottom() {
				if (this.form.panelGapY && this.form.panelGapX){
					return this.form.panelGapY 
				}
				return null
			},
			getPanelStyleMarginLeftRight() {
				if (this.form.panelGapY && this.form.panelGapY){
					return this.form.panelGapX
				}
				return null
			},
			square() {
				if(this.form.widthX && this.form.heightY && this.form.panelX && this.form.panelY && this.form.panelGapX && this.form.panelGapY) {
					const result = ((Number(this.form.widthX) + Number(this.form.panelGapX)) * Number(this.form.panelX) - Number(this.form.panelGapX)) * ((Number(this.form.heightY) + Number(this.form.panelGapY)) * Number(this.form.panelY) - Number(this.form.panelGapY))
					return parseFloat(result).toFixed(2)
				} else {
					return 0;
				}
			}
		},
		methods: {
			...mapActions([
                'CHECK_BOARD_PARAM_NAME'
            ]),
			changeInput(event) {
				if(event.data || event.data === 0){
					event.target.classList.add('is-data')
				} else {
					event.target.classList.remove('is-data')
				}
			},
			openInfoErrorInInput(event) {
				event.currentTarget.classList.toggle('active')
			},
			nextStep() {
				if(this.isSuccessNextBtn && !this.$v.$invalid){
					AddingBoardStorageServices.setItem('param', this.form);
					this.$emit('setStep', this.CURRENT_STEP + 1)
				}
			},
			prevStep() {
				this.$emit('setStep', this.CURRENT_STEP - 1)
			},
			setParamWithStore(param) {
				this.form = {
					name: param.name,
					widthX: param.widthX,
					heightY: param.heightY,
					isPanel: param.isPanel,
					square: param.square,
					panelX: param.panelX,
					panelY: param.panelY,
					panelGapX: param.panelGapX,
					panelGapY: param.panelGapX,
					milling: param.milling,
					scribing: param.scribing
				}
			}
		},
		watch: {
			'$v.form.$invalid': function _watch$vForm$invalid (value) {
				if(!this.$v.$invalid){
					this.isSuccessNextBtn = true
				} else {
					this.isSuccessNextBtn = false
				}
			},
			'form.widthX': function limitWidthX (value) {
				if(value > 300) {
					this.form.widthX = 300
				} else if(value < 0) {
					this.form.widthX = 0
				} else {
					const result = parseFloat(value).toFixed(2);
					if(isNaN(result)){
						this.form.widthX = 0;
					} else {
						this.form.widthX = result
					}
				}
			},
			'form.heightY': function limitHeightY (value) {
				if(value > 300) {
					this.form.heightY = 300
				} else if(value < 0) {
					this.form.heightY = 0
				} else {
					const result = parseFloat(value).toFixed(2);
					if(isNaN(result)){
						this.form.heightY = 0;
					} else {
						this.form.heightY = result
					}
				}
			},
			'form.panelX': function limitPanelX (value) {
				if(value > 10) {
					this.form.panelX = 10
				} else if(value < 0) {
					this.form.panelX = 0
				} else {
					const result = parseFloat(value).toFixed(2);
					if(isNaN(result)){
						this.form.panelX = 0;
					} else {
						this.form.panelX = result
					}
				}
			},
			'form.panelY': function limitPanelY (value) {
				if(value > 10) {
					this.form.panelY = 10
				} else if(value < 0) {
					this.form.panelY = 0
				} else {
					const result = parseFloat(value).toFixed(2);
					if(isNaN(result)){
						this.form.panelY = 0;
					} else {
						this.form.panelY = result
					}
				}
			},
			'form.panelGapX': function limitPanelGapX (value) {
				if(value > 10) {
					this.form.panelGapX = 10
				} else if(value < 0) {
					this.form.panelGapX = 0
				} else {
					const result = parseFloat(value).toFixed(2);
					if(isNaN(result)){
						this.form.panelGapX = 0;
					} else {
						this.form.panelGapX = result
					}
				}
			},
			'form.panelGapY': function limitpanelGapY (value) {
				if(value > 10) {
					this.form.panelGapY = 10
				} else if(value < 0) {
					this.form.panelGapY = 0
				} else {
					const result = parseFloat(value).toFixed(2);
					if(isNaN(result)){
						this.form.panelGapY = 0;
					} else {
						this.form.panelGapY = result
					}
				}
			}
		},
		validations: {
			form: {
				name: {
					required,
					minLength: minLength(3),
					maxLength: maxLength(30),
					checkName() {
						if(this.form.name){
							this.CHECK_BOARD_PARAM_NAME(this.form.name);
							return this.GET_BOARD_PARAM_NAME;
						}
						return false;
					}
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
				},
				panelGapX: {
					required,
					between: between(0, 10),
					panelGapXMillingAndScribing() {
						if(this.form.milling && this.form.scribing){
							if(parseFloat(this.form.panelGapX).toFixed(2) === 0){
								return true
							}
							if(parseFloat(this.form.panelGapX).toFixed(2) >= 2){
								return true
							}
						}
						if(this.form.milling){
							return parseFloat(this.form.panelGapX).toFixed(2) >= 2
						}
						if(this.form.scribing){
							return parseFloat(this.form.panelGapX).toFixed(2) === 0
						}
						return false
					}
				},
				panelGapY: {
					required,
					between: between(0, 10),
					panelGapYMillingAndScribing() {
						if(this.form.milling && this.form.scribing){
							if(parseFloat(this.form.panelGapY).toFixed(2) === 0){
								return true
							}
							if(parseFloat(this.form.panelGapY).toFixed(2) >= 2){
								return true
							}
						}
						if(this.form.scribing){
							return parseFloat(this.form.panelGapY).toFixed(2) === 0
						}
						if(this.form.milling){
							return parseFloat(this.form.panelGapY).toFixed(2) >= 2
						}
						return false
					}
				},
				milling: {
					notNull() {
						if(this.form.milling === true && this.form.scribing === false){
							return true
						}
						if(this.form.milling === false && this.form.scribing === true){
							return true
						}
						if(this.form.milling === true && this.form.scribing === true){
							return true
						}
						return false;
					}
				},
				scribing: {
					notNull() {
						if(this.form.scribing === true && this.form.milling === false){
							return true
						}
						if(this.form.scribing === false && this.form.milling === true){
							return true
						}
						if(this.form.scribing === true && this.form.milling === true){
							return true
						}
						return false;
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	.adding-board-params{
		min-height: 290px;

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
				padding: 15px 15px;
				height: 280px;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				justify-content: center;
				
				&-inner{
					display: flex;
				}

				&__block{
					width: calc(100% - 12px);
					border: 1px solid #2AA396;
					position: relative;
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

	@media(max-width: 980px){
		.adding-board-params{
			&__title{
				margin-top: 20px;
				margin-bottom: 20px;
			}
			&-square{
				margin-bottom: 40px;
			}
			&-visually{
				padding: 0px;
				width: 255px;
			}
		}
	}
</style>
