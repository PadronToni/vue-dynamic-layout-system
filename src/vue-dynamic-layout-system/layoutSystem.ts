import { shallowRef, type ShallowRef } from "vue"
import type { LayoutComponentLike } from "./types"
import { currentLayout } from "./globals"
import { _config, type LSConfig } from "."

function defineUseLS<Layouts extends LSConfig['layouts']>(sharedLayoutRef: ShallowRef<LayoutComponentLike | undefined>, config: LSConfig) {
  return () => {

    /** Sets the current layout */
    function setLayout(layout: Extract<keyof Layouts, string> | LayoutComponentLike) {
      if (typeof layout === 'string') {

        const component = config.layouts[layout]

        sharedLayoutRef.value = component || layout
      } else {

        sharedLayoutRef.value = layout
      }
    }

    return { setLayout, layout: sharedLayoutRef }
  }
}

export function defineLayoutSystem<Config extends LSConfig>(config: Config) {

  const layoutRef = shallowRef<LayoutComponentLike | undefined>()

  const useLayoutSystem = defineUseLS<Config['layouts']>(layoutRef, config)

  return { useLayoutSystem }

}

/**
 * Centralized version
 */
export const useLayoutSystem = defineUseLS(currentLayout, _config)
