import { LocalStorageService } from './LocalStorageService'

export const STORAGE_KEY = 'addingBoard'

export const AddingBoardStorageServices = {
	getItem(name) {
		const data = LocalStorageService.getItem(STORAGE_KEY);
		console.log(data);
	},
	getAll() {
		return LocalStorageService.getItem(STORAGE_KEY, [])
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
		
	}
}
