import { LocalStorageService } from './LocalStorageService'

export const STORAGE_KEY = 'addingBoard'

export const AddingBoardStorageServices = {
	STORAGE_KEY_FILE: 'file',
	STORAGE_KEY_PARAM: 'param',
	getItem(name) {
		const data = LocalStorageService.getItem(STORAGE_KEY, {});
		if(data[name]) {
			return data[name];
		} else {
			return null;
		}
	},
	getAll() {
		return LocalStorageService.getItem(STORAGE_KEY, {})
	},
	setItem(name, value) {
		const data = LocalStorageService.getItem(STORAGE_KEY);
		if(data){
			const resultAssign = Object.assign(data, {
				[name]: value
			})
			LocalStorageService.setItem(STORAGE_KEY, resultAssign)
		} else {
			LocalStorageService.setItem(STORAGE_KEY, {
				[name]: value
			})
		}
	},
	deleteItem(name) {
		const items = AddingBoardStorageServices.getAll()
		delete items[name]
		AddingBoardStorageServices.saveAll(items)
	},
	saveAll (items) {
		LocalStorageService.setItem(STORAGE_KEY, items)
	},
	clearAll() {
		LocalStorageService.removeItem(STORAGE_KEY)
	}
}
