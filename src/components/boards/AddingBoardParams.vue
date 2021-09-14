<template>
    <div class="adding-board-params">
        <div class="adding-board-row">
            <div class="adding-board-col adding-board-col-8">
                <div class="adding-board-row">
                    <div class="adding-board-col adding-board-col-6">
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
                                <div class="adding-board-input-info-error" :class="{error: $v.form.name.$error}">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="adding-board-input__error" v-if="$v.form.name.$error">
                                <template v-if="!$v.form.name.checkName">
                                    Должно быть уникальным<br>
                                </template>
                                <template v-else-if="!$v.form.name.required">
                                    Обязательно к заполнению<br>
                                </template>
                                <template v-else-if="!$v.form.name.minLength || !$v.form.name.maxLength">
                                    от {{ $v.form.name.$params.minLength.min }} до {{ $v.form.name.$params.maxLength.max }} символов
                                </template>
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
                                        <div class="adding-board-input-info-error" :class="{error: $v.form.widthX.$error}">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="adding-board-input__error" v-if="$v.form.widthX.$error">
                                        <template v-if="!$v.form.widthX.required">
                                            Обязательное
                                        </template>
                                        <template v-else-if="!$v.form.widthX.between">
                                            от {{$v.form.widthX.$params.between.min}} до {{$v.form.widthX.$params.between.max}} мм
                                        </template>
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
                                        <div class="adding-board-input-info-error" :class="{error: $v.form.heightY.$error}">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="adding-board-input__error" v-if="$v.form.heightY.$error">
                                        <template v-if="!$v.form.heightY.required">
                                            Обязательное
                                        </template>
                                        <template v-else-if="!$v.form.heightY.between">
                                            от {{$v.form.heightY.$params.between.min}} до {{$v.form.heightY.$params.between.max}} мм
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
                            <div class="adding-board-params-square__value">{{ square }} дм2</div>
                        </div>

                    </div>
                    <div class="adding-board-col adding-board-col-6">
                        <div class="adding-board-params__title">Параметры панели</div>

                        <div class="adding-board-row">
                            <div class="adding-board-col adding-board-col-6">
                                <label class="adding-board-input" :class="{disabled: !form.isPanel, 'error' : $v.form.panelX.$error, 'success' : !$v.form.panelX.$invalid, 'is-data': form.panelX}">
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
                                        <div class="adding-board-input-info-error" :class="{error: $v.form.panelX.$error}">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="adding-board-input__error" v-if="$v.form.panelX.$error">
                                        <template v-if="!$v.form.panelX.requiredCustom">
                                            Обязательное
                                        </template>
                                        <template v-else-if="!$v.form.panelX.betweenCustom">
                                            от 1 до 10 шт
                                        </template>
                                        <template v-else-if="!$v.form.panelX.isInt">
                                            Целое число
                                        </template>
                                    </div>
                                </label>
                            </div>
                            <div class="adding-board-col adding-board-col-6">
                                <label class="adding-board-input" :class="{disabled: !form.isPanel, 'error' : $v.form.panelY.$error, 'success' : !$v.form.panelY.$invalid, 'is-data': form.panelY}">
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
                                        <div class="adding-board-input-info-error" :class="{error: $v.form.panelY.$error}">
                                            
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="adding-board-input__error" v-if="$v.form.panelY.$error">
                                        <template v-if="!$v.form.panelY.requiredCustom">
                                            Обязательное
                                        </template>
                                        <template v-else-if="!$v.form.panelY.betweenCustom">
                                            от 1 до 10 шт
                                        </template>
                                        <template v-else-if="!$v.form.panelY.isInt">
                                            Целое число
                                        </template>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div class="adding-board-row">
                            <div class="adding-board-col adding-board-col-6">
                                <label class="adding-board-input" :class="{disabled: !form.isPanel, 'error' : $v.form.panelGapX.$error, 'success' : !$v.form.panelGapX.$invalid, 'is-data': form.panelGapX}">
                                    <input 
                                        type="text"
                                        :disabled="!form.isPanel"
                                        v-model.lazy="form.panelGapX"
                                        @blur="$v.form.panelGapX.$touch()"
                                        v-on:input="changeInput"
                                        :class="{'is-data': form.panelGapX}"
                                    >
                                    <div class="adding-board-input__title">Зазор X, мм</div>
                                    <div class="adding-board-input-info-error" :class="{error: $v.form.panelGapX.$error}">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z"/>
                                        </svg>
                                    </div>
                                    <div class="adding-board-input__error" v-if="$v.form.panelGapX.$error || $v.form.milling.$error || $v.form.scribing.$error">
                                        <template v-if="!$v.form.panelGapX.requiredCustom">
                                            Обязательное
                                        </template>
                                        <template v-else-if="!$v.form.panelGapX.betweenCustom">
                                            от 0 до 10 мм
                                        </template>
                                        <template v-else-if="!$v.form.milling.panelXMin">
                                            равно или более 2 мм<br>
                                        </template>
                                        <template v-else-if="!$v.form.milling.millingAndScribingPanelX">
                                            равно 0, 2 или более 2 мм<br>
                                        </template>
                                        <template v-else-if="!$v.form.scribing.panelXMin">
                                            равно 0 мм<br>
                                        </template>
                                    </div>
                                </label>
                            </div>
                            <div class="adding-board-col adding-board-col-6">
                                <label class="adding-board-input" :class="{disabled: !form.isPanel, 'error' : $v.form.panelGapY.$error, 'success' : !$v.form.panelGapY.$invalid, 'is-data': form.panelGapY}">
                                    <input 
                                        type="text" 
                                        :disabled="!form.isPanel"
                                        v-model.lazy="form.panelGapY"
                                        @blur="$v.form.panelGapY.$touch()"
                                        v-on:input="changeInput"
                                        :class="{'is-data': form.panelGapY}"
                                    >
                                    <div class="adding-board-input__title">Зазор Y, мм</div>
                                    <div class="adding-board-input-info-error" :class="{error: $v.form.panelGapY.$error}">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.116C6.17425 1.116 4.42328 1.84128 3.13228 3.13228C1.84128 4.42328 1.116 6.17425 1.116 8C1.116 9.82575 1.84128 11.5767 3.13228 12.8677C4.42328 14.1587 6.17425 14.884 8 14.884C9.82575 14.884 11.5767 14.1587 12.8677 12.8677C14.1587 11.5767 14.884 9.82575 14.884 8C14.884 6.17425 14.1587 4.42328 12.8677 3.13228C11.5767 1.84128 9.82575 1.116 8 1.116ZM7.884 5.768C8.192 5.768 8.4416 6.0184 8.4416 6.3264V12.3728C8.43613 12.5171 8.37495 12.6537 8.27091 12.7539C8.16686 12.8541 8.02804 12.9101 7.8836 12.9101C7.73916 12.9101 7.60034 12.8541 7.4963 12.7539C7.39225 12.6537 7.33107 12.5171 7.3256 12.3728V6.3256C7.3256 6.0176 7.5752 5.7672 7.884 5.7672V5.768ZM7.9064 3.536C8.10372 3.536 8.29296 3.61439 8.43249 3.75391C8.57201 3.89344 8.6504 4.08268 8.6504 4.28C8.6504 4.47732 8.57201 4.66656 8.43249 4.80609C8.29296 4.94561 8.10372 5.024 7.9064 5.024C7.70908 5.024 7.51984 4.94561 7.38031 4.80609C7.24079 4.66656 7.1624 4.47732 7.1624 4.28C7.1624 4.08268 7.24079 3.89344 7.38031 3.75391C7.51984 3.61439 7.70908 3.536 7.9064 3.536Z"/>
                                        </svg>
                                    </div>
                                    <div class="adding-board-input__error" v-if="$v.form.panelGapY.$error || $v.form.milling.$error || $v.form.scribing.$error">
                                        <template v-if="!$v.form.panelGapY.requiredCustom">
                                            Обязательное
                                        </template>
                                        <template v-else-if="!$v.form.panelGapY.betweenCustom">
                                             от 0 до 10 мм
                                        </template>
                                        <template v-else-if="!$v.form.milling.panelYMin">
                                            равно или более 2 мм
                                        </template>
                                        <template v-else-if="!$v.form.milling.millingAndScribingPanelY">
                                            равно 0, 2 или более 2 мм
                                        </template>
                                        <template v-else-if="!$v.form.scribing.panelYMin">
                                            равно 0 мм
                                        </template>
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
                    </div>
                </div>

                <ValidateParamsMessage v-bind:vForm="$v.form" />

            </div>

            <div class="adding-board-col adding-board-col-4">
                <div class="adding-board-params__title">Вид панели</div>

                <div class="adding-board-params-visually">
                    <div 
                        class="adding-board-params-visually-panel" 
                        v-if="form.isPanel && 
                        !$v.form.isPanel.$invalid && 
                        !$v.form.panelX.$invalid && 
                        !$v.form.panelY.$invalid && 
                        !$v.form.panelGapX.$invalid && 
                        !$v.form.panelGapY.$invalid &&
                        !$v.form.maxWidth.$invalid &&
                        !$v.form.maxHeight.$invalid"
                    >
                        
                            <div class="adding-board-params-visually-panel-inner"
                                v-for="index in getPanelRenderY" 
                                v-bind:key="index"
                                :style="{
                                    height: `${getPanelStyleHeight}%`,
                                    'margin-bottom': `${getPanelStyleMarginBottom}%`
                                }"
                            >
                                <div 
                                    class="adding-board-params-visually-panel__block" 
                                    v-for="index in getPanelRenderX" 
                                    v-bind:key="index" 
                                    :style="{
                                        width: `${getPanelStyleWidth}%`,
                                        'margin-right': `${getPanelStyleMarginRight}%`
                                    }"
                                >
                                </div>
                            </div>
                    </div>

                    <div 
                        class="adding-board-params-visually-panel__block" v-if="!form.isPanel && form.widthX && form.heightY"
                        :style="{
                            width: `${getPanelStyleWidth}%`, 
                            height: `${getPanelStyleHeight}%`
                        }"
                    >
                    </div>

                </div>
            </div>
        </div>

        <div class="adding-board-buttons adding-board-buttons-stepTwo">
            <div class="adding-board-buttons__btn btn btn-border" v-on:click="prevStep"><div class="btn-border__bg"><div class="btn-border__gradient-text">Назад</div></div></div>
            <div class="adding-board-buttons__btn btn btn-default" :class="{disabled: !isSuccessNextBtn}" v-on:click="nextStep"><span>Далее</span></div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import { required, minLength, maxLength, between } from 'vuelidate/lib/validators'
    import { AddingBoardStorageServices } from '../../services/AddingBoardStorageServices'
    import ValidateParamsMessage from './ValidateParamsMessage'
    
    export default {
        name: 'AddingBoardParams',
        params: {
            setStep: {
                type: Function
            }
        },
        components: {
            ValidateParamsMessage
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
                scribing: false,
                
                maxWidth: 400,
                maxHeight: 600,
                resultBlockWidth: 0,
                resultBlockHeight: 0
            },
            panel: {
                width: 250,
                height: 290,
                maxWidth: 400,
                maxHeight: 600
            }
        }),
        created: function (){
            const boardParams = AddingBoardStorageServices.getItem(AddingBoardStorageServices.STORAGE_KEY_PARAM);
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
                return [0]
            },
            getPanelRenderY() {
                if(this.form.panelY){
                    return parseInt(this.form.panelY)
                }
                return [0]
            },
            getPanelStyleWidth() {
                if(!this.$v.form.panelX.$invalid && !this.$v.form.panelGapX.$invalid){
                    const panelWidth = Number(this.panel.width)
                    const panelHeight = Number(this.panel.height)
                    
                    const plateWidth = Number(this.form.widthX)
                    const plateHeight = Number(this.form.heightY)

                    const plateCountX = this.form.panelX ? Number(this.form.panelX) : 1
                    const plateCountY = this.form.panelY ? Number(this.form.panelY) : 1

                    const plateGapX = Number(this.form.panelGapX)
                    const plateGapY = Number(this.form.panelGapY)

                    const plateGapCountX = plateCountX - 1
                    const plateGapCountY = plateCountY - 1

                    const WSUM = (plateWidth * plateCountX) + (plateGapX * plateGapCountX)
                    const HSUM = (plateHeight * plateCountY) + (plateGapY * plateGapCountY)

                    let percentPlateWidth = 0;
                    
                    if(WSUM >= HSUM) {
                        percentPlateWidth = 100 * plateWidth / WSUM
                    } else {
                        const tempPlateWidth = 100 * panelHeight / panelWidth
                        const coefficient = 100 / tempPlateWidth
                        percentPlateWidth = (100 * plateWidth / HSUM) / coefficient
                    }

                    return percentPlateWidth
                }
                return null
            },
            getPanelStyleHeight() {
                if(!this.$v.form.panelY.$invalid && !this.$v.form.panelGapY.$invalid){
                    const panelWidth = Number(this.panel.width)
                    const panelHeight = Number(this.panel.height)
                    
                    const plateWidth = Number(this.form.widthX)
                    const plateHeight = Number(this.form.heightY)

                    const plateCountX = this.form.panelX ? Number(this.form.panelX) : 1
                    const plateCountY = this.form.panelY ? Number(this.form.panelY) : 1

                    const plateGapX = Number(this.form.panelGapX)
                    const plateGapY = Number(this.form.panelGapY)

                    const plateGapCountX = plateCountX - 1
                    const plateGapCountY = plateCountY - 1

                    const WSUM = (plateWidth * plateCountX) + (plateGapX * plateGapCountX)
                    const HSUM = (plateHeight * plateCountY) + (plateGapY * plateGapCountY)

                    let percentPlateHeight = 0

                    if(WSUM >= HSUM) {
                        const tempPlateHeight = 100 * panelHeight / panelWidth
                        const coefficient = tempPlateHeight / 100
                        
                        percentPlateHeight = (100 * plateHeight / WSUM) / coefficient
                    } else {
                        percentPlateHeight = 100 * plateHeight / HSUM
                    }

                    return percentPlateHeight
                }
                return null
            },
            getPanelStyleMarginBottom() {
                if (this.form.panelGapY && this.form.panelGapX){
                    const panelWidth = Number(this.panel.width)
                    const panelHeight = Number(this.panel.height)
                    
                    const plateWidth = Number(this.form.widthX)
                    const plateHeight = Number(this.form.heightY)

                    const plateCountX = this.form.panelX ? Number(this.form.panelX) : 1
                    const plateCountY = this.form.panelY ? Number(this.form.panelY) : 1

                    const plateGapX = Number(this.form.panelGapX)
                    const plateGapY = Number(this.form.panelGapY)

                    const plateGapCountX = plateCountX - 1
                    const plateGapCountY = plateCountY - 1

                    const WSUM = (plateWidth * plateCountX) + (plateGapX * plateGapCountX)
                    const HSUM = (plateHeight * plateCountY) + (plateGapY * plateGapCountY)

                    let percentPlateGapY = 0

                    if(WSUM >= HSUM) {
                        const tempPlateHeight = 100 * panelHeight / panelWidth
                        const coefficient = tempPlateHeight / 100
                        
                        percentPlateGapY = (100 * plateGapY / WSUM) / coefficient
                    } else {
                        percentPlateGapY = 100 * plateGapY / HSUM
                    }

                    return percentPlateGapY
                }
                return null
            },
            getPanelStyleMarginRight() {
                if (this.form.panelGapY && this.form.panelGapY){
                    const panelWidth = Number(this.panel.width)
                    const panelHeight = Number(this.panel.height)
                    
                    const plateWidth = Number(this.form.widthX)
                    const plateHeight = Number(this.form.heightY)

                    const plateCountX = this.form.panelX ? Number(this.form.panelX) : 1
                    const plateCountY = this.form.panelY ? Number(this.form.panelY) : 1

                    const plateGapX = Number(this.form.panelGapX)
                    const plateGapY = Number(this.form.panelGapY)

                    const plateGapCountX = plateCountX - 1
                    const plateGapCountY = plateCountY - 1

                    const WSUM = (plateWidth * plateCountX) + (plateGapX * plateGapCountX)
                    const HSUM = (plateHeight * plateCountY) + (plateGapY * plateGapCountY)

                    let percentPlateGapX = 0;
                    
                    if(WSUM >= HSUM) {
                        percentPlateGapX = 100 * plateGapX / WSUM
                    } else {
                        const tempPlateWidth = 100 * panelHeight / panelWidth
                        const coefficient = 100 / tempPlateWidth
                        percentPlateGapX = (100 * plateGapX / HSUM) / coefficient
                    }
                    
                    return percentPlateGapX
                }
                return null
            },
            square() {
                if(this.form.widthX && this.form.heightY && this.form.panelX && this.form.panelY && this.form.panelGapX && this.form.panelGapY && this.form.isPanel) {
                    const result = ((Number(this.form.widthX) + Number(this.form.panelGapX)) * Number(this.form.panelX) - Number(this.form.panelGapX)) * ((Number(this.form.heightY) + Number(this.form.panelGapY)) * Number(this.form.panelY) - Number(this.form.panelGapY)) / 10000
                    return parseFloat(result).toFixed(2)
                } else if(this.form.widthX && this.form.heightY) {
                    return parseFloat(this.form.widthX).toFixed(2) * parseFloat(this.form.heightY).toFixed(2) / 10000
                } else {
                    return 0
                }
            }
        },
        methods: {
            ...mapActions([
                'CHECK_BOARD_PARAM_NAME'
            ]),
            getPartOfNumber(number) {
                return 50 / 100 * number;
            },
            getRemainderPercentTwoNumber(numberOne, nubmerTwo) {
                const numberA = Number(numberOne);
                const numberB = Number(nubmerTwo);
                if(numberA < numberB){
                    return 100 - ((numberA / numberB) * 100)
                } else {
                    return 100 - ((numberB / numberA) * 100)
                }
            },
            changeInput(event) {
                if(event.data || event.data === 0 || event.data === null){
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
            '$v.$invalid': function _watch$vForm$invalid (value) {
                if(!this.$v.form.$invalid){
                    this.isSuccessNextBtn = true
                } else {
                    this.isSuccessNextBtn = false
                }
            },
            'form.widthX': function limitWidthX (value) {
                const result = parseFloat(value).toFixed(2);
                if(isNaN(result)){
                    this.form.widthX = '';
                } else {
                    this.form.widthX = result
                }
            },
            'form.heightY': function limitHeightY (value) {
                const result = parseFloat(value).toFixed(2);
                if(isNaN(result)){
                    this.form.heightY = '';
                } else {
                    this.form.heightY = result
                }
            },
            'form.panelX': function limitPanelX (value) {
                const result = Number(value);
                if(isNaN(result)){
                    this.form.panelX = '';
                } else {
                    this.form.panelX = result
                }
            },
            'form.panelY': function limitPanelY (value) {
                const result = Number(value);
                if(isNaN(result)){
                    this.form.panelY = '';
                } else {
                    this.form.panelY = result
                }
            },
            'form.panelGapX': function limitPanelGapX (value) {
                const result = parseFloat(value).toFixed(2);
                if(isNaN(result)){
                    this.form.panelGapX = '';
                } else {
                    this.form.panelGapX = result
                }
            },
            'form.panelGapY': function limitpanelGapY (value) {
                const result = parseFloat(value).toFixed(2);
                if(isNaN(result)){
                    this.form.panelGapY = '';
                } else {
                    this.form.panelGapY = result
                }
            },
            'form.milling': function millingChange (value) {
                if(this.form.milling === true) {
                    if(this.form.panelGapX < 2){
                        this.form.panelGapX = 2
                    }
                    if(this.form.panelGapY < 2){
                        this.form.panelGapY = 2
                    }
                }
                if(this.form.scribing === true) {
                    if(this.form.panelGapX > 0){
                        this.form.panelGapX = 0
                    }
                    if(this.form.panelGapY > 0){
                        this.form.panelGapY = 0
                    }
                }
                if(this.form.milling === true && this.form.scribing === true) {
                    if(this.form.panelGapX < 2){
                        this.form.panelGapX = 2
                    }
                    if(this.form.panelGapY < 2){
                        this.form.panelGapY = 2
                    }
                }
            },
            'form.scribing': function scribingChange (value) {
                if(this.form.milling === true) {
                    if(this.form.panelGapX < 2){
                        this.form.panelGapX = 2
                    }
                    if(this.form.panelGapY < 2){
                        this.form.panelGapY = 2
                    }
                }
                if(this.form.scribing === true) {
                    if(this.form.panelGapX > 0){
                        this.form.panelGapX = 0
                    }
                    if(this.form.panelGapY > 0){
                        this.form.panelGapY = 0
                    }
                }
                if(this.form.milling === true && this.form.scribing === true) {
                    if(this.form.panelGapX < 2){
                        this.form.panelGapX = 2
                    }
                    if(this.form.panelGapY < 2){
                        this.form.panelGapY = 2
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
                isPanel: {
                    millingAndScribing() {
                        if(this.form.isPanel) {
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
                        return true;
                    }
                },
                panelX: {
                    requiredCustom() {
                        if(this.form.isPanel) {
                            if(this.form.panelX !== 0 && this.form.panelX !== null && this.form.panelX !== ''){
                                return true
                            }
                            return false
                        } else {
                            return true;
                        }
                    },
                    betweenCustom() {
                        if(this.form.isPanel) {
                            if(this.form.panelX >= 1 && this.form.panelX <= 10){
                                return true
                            }
                            return false
                        } else {
                            return true;
                        }
                    },
                    isInt() {
                        if(this.form.isPanel) {
                            return this.form.panelX % 1 === 0;
                        } else {
                            return true;
                        }
                    }
                },
                panelY: {
                    requiredCustom() {
                        if(this.form.isPanel) {
                            if(this.form.panelY !== 0 && this.form.panelY !== null && this.form.panelY !== ''){
                                return true
                            }
                            return false
                        } else {
                            return true;
                        }
                    },
                    betweenCustom() {
                        if(this.form.isPanel) {
                            if(this.form.panelY >= 1 && this.form.panelY <= 10){
                                return true
                            }
                            return false
                        } else {
                            return true;
                        }
                    },
                    isInt() {
                        if(this.form.isPanel) {
                            return this.form.panelY % 1 === 0;
                        } else {
                            return true;
                        }
                    }
                },
                panelGapX: {
                    requiredCustom() {
                        if(this.form.isPanel) {
                            if(this.form.panelGapX !== '' && this.form.panelGapX !== null){
                                return true
                            }
                            return false
                        } else {
                            return true;
                        }
                    },
                    betweenCustom() {
                        if(this.form.isPanel) {
                            if(this.form.panelGapX >= 0 && this.form.panelGapX <= 10){
                                return true
                            }
                            return false
                        } else {
                            return true;
                        }
                    }
                },
                panelGapY: {
                    requiredCustom() {
                        if(this.form.isPanel) {
                            if(this.form.panelGapY !== '' && this.form.panelGapY !== null){
                                return true
                            }
                            return false
                        } else {
                            return true;
                        }
                    },
                    betweenCustom() {
                        if(this.form.isPanel) {
                            if(this.form.panelGapY >= 0 && this.form.panelGapY <= 10){
                                return true
                            }
                            return false
                        } else {
                            return true;
                        }
                    }
                },
                milling: {
                    notNull() {
                        if(this.form.isPanel) {
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
                        return true;
                    },
                    panelXMin() {
                        if(this.form.isPanel) {
                            if(this.form.milling === true && this.form.scribing === false) {
                                if(this.form.panelGapX >= 2){
                                    return true
                                }
                                return false
                            }
                            return true;
                        }
                        return true
                    },
                    panelYMin() {
                        if(this.form.isPanel) {
                            if(this.form.milling === true && this.form.scribing === false) {
                                if(this.form.panelGapY >= 2){
                                    return true
                                }
                                return false
                            }
                            return true;
                        }
                        return true
                    },
                    millingAndScribingPanelX() {
                        if(this.form.isPanel) {
                            if(this.form.milling === true && this.form.scribing === true) {
                                if(this.form.panelGapX === 0 || this.form.panelGapX >= 2){
                                    return true
                                }
                                return false
                            }
                            return true;
                        } 
                        return true
                    },
                    millingAndScribingPanelY() {
                        if(this.form.isPanel) {
                            if(this.form.milling === true && this.form.scribing === true) {
                                if(this.form.panelGapY === 0 || this.form.panelGapY >= 2){
                                    return true
                                }
                                return false
                            }
                            return true;
                        }
                        return true
                    }
                },
                scribing: {
                    notNull() {
                        if(this.form.isPanel) {
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
                        return true
                    },
                    panelXMin() {
                        if(this.form.isPanel) {
                            if(this.form.scribing === true && this.form.milling === false) {
                                if(parseInt(this.form.panelGapX).toFixed(2) === parseInt(0).toFixed(2)){
                                    return true
                                }
                                return false
                            }
                            return true;
                        }
                        return true
                    },
                    panelYMin() {
                        if(this.form.isPanel) {
                            if(this.form.scribing === true && this.form.milling === false) {
                                if(parseInt(this.form.panelGapY).toFixed(2) === parseInt(0).toFixed(2)){
                                    return true
                                }
                                return false
                            }
                            return true;
                        }
                        return true
                    }
                },
                maxWidth: {
                    maxWidthPanel() {
                        if(this.form.isPanel) {
                            const width = Number(this.form.widthX)
                            const countPlat = Number(this.form.panelX)
                            const gap = Number(this.form.panelGapX)
                            const result = ((width * countPlat) + ((gap * 2) * countPlat))
                            if(result <= Number(this.panel.maxWidth)) {
                                return true
                            }

                            return false
                        }
                        return true
                    }
                },
                maxHeight: {
                    maxHeightPanel() {
                        if(this.form.isPanel) {
                            const height = Number(this.form.heightY)
                            const countPlat = Number(this.form.panelY)
                            const gap = Number(this.form.panelGapY)
                            const result = ((height * countPlat) + ((gap * 2) * countPlat))
                            if(result <= Number(this.panel.maxHeight)) {
                                return true
                            }

                            return false
                        }
                        return true
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
            padding: 15px;
            background: linear-gradient(0deg, rgba(42, 163, 150, 0.03), rgba(42, 163, 150, 0.03)), #FFFFFF;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 280px;
            height: 320px;
            
            &-panel{
                height: auto;
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                width: 100%;
                height: 100%;
                
                &-inner{
                    display: flex;
                    width: 100%;
                    justify-content: center;

                    &:last-child{
                        margin-bottom: 0px !important
                    }
                }

                &__block{
                    width: 100%;
                    padding: 1px;
                    position: relative;
                    height: 100%;
                    background: linear-gradient(90deg, #14B775 0%, #3D8FB4 100%);
                    background-blend-mode: soft-light, normal;
                    position: relative;

                    &::before{
                        content: '';
                        width: 100%;
                        height: 100%;
                        background: #f9fcfc;
                        position: relative;
                        left: 0px;
                        top: 0px;
                        display: block;
                    }

                    &:last-child{
                        margin-right: 0 !important;
                    }
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
