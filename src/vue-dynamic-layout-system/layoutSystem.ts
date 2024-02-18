import { inject, shallowRef, type ShallowRef } from "vue"
import type { LayoutComponentLike } from "./types"
import { currentLayout } from "./globals"
import { _config, type LSConfig } from "."

function defineUseLS<Layouts extends LSConfig['layouts']>(sharedLayoutRef: ShallowRef<LayoutComponentLike | undefined>,  config: LSConfig) {
  return () => {

    // gets the shared current layout
    const _layout = sharedLayoutRef

    /**
     * Sets the current layout
     */
    function setLayout(layout: Extract<keyof Layouts, string> | LayoutComponentLike) {
      if (typeof layout === 'string') {

        const component = config.layouts[layout]

        _layout.value = component || layout
      } else {

        _layout.value = layout
      }
    }

    return { setLayout, layout: _layout }
  }
}

export function defineLayoutSystem<C extends LSConfig>(init: C) {

  const currentLayout = shallowRef<LayoutComponentLike | undefined>()

  const useLayoutSystem = defineUseLS<C['layouts']>(currentLayout, init)

  return { useLayoutSystem }

}

/**
 * Centralized version
 */
export const useLayoutSystem = defineUseLS(currentLayout, _config)

// const fif = defineLayoutSystem({ layouts: { default: 'aside', stronzio: 'article' } })
// fif.useLayoutSystem().setLayout('stronzio')