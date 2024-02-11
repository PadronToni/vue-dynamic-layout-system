import { type App, type InjectionKey, inject, shallowRef, type ShallowRef } from 'vue'

export type LayoutComponentLike<L = abstract new (...args: any) => any> = L | keyof HTMLElementTagNameMap

const currentLayout = shallowRef<LayoutComponentLike | undefined>()
const LSInjectionKey = Symbol() as InjectionKey<ShallowRef<LayoutComponentLike | undefined>>

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
	function setLayout(layout: LayoutComponentLike) {
		_layout.value = layout
	}

	return { setLayout, layout: _layout }
}

