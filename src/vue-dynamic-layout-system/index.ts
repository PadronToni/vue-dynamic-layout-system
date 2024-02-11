import { type App, type InjectionKey, inject, shallowRef, type ShallowRef } from 'vue'

const currentLayout = shallowRef<string>('section')
const LSInjectionKey = Symbol() as InjectionKey<ShallowRef<string>>

export const createLayoutSystem = () => {

	function install(app: App) {
		app.provide(LSInjectionKey, currentLayout)
	}

	return { install }
}

export const useLayoutSystem = () => {
	const _layout = inject(LSInjectionKey)!

	/**
	 * Sets the current layout
	 */
	function setLayout(layout: any) {
		_layout.value = layout
	}

	return { setLayout, layout: _layout }
}

