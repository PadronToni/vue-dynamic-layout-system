import { type App, type InjectionKey, inject } from 'vue'

const currentLayout = 'example string'
const LSInjectionKey = Symbol() as InjectionKey<string>

export const createLayoutSystem = () => {

	function install(app: App) {
		app.provide(LSInjectionKey, currentLayout)
	}

	return { install }
}

export const useLayoutSystem = () => {
	const layout = inject(LSInjectionKey)
	console.log('there is the layout: ', layout)
	return { layout }
}

