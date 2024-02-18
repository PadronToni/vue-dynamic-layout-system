import { inject } from "vue"
import type { LayoutComponentLike } from "./types"
import { LSBaseKey } from "./globals"
import { _config } from "."

export const useLayoutSystem = () => {

  // gets the shared current layout
  const _layout = inject(LSBaseKey)!

  type fif = Extract<keyof typeof _config.layouts, string>
  /**
   * Sets the current layout
   */
  function setLayout(layout: fif | LayoutComponentLike) {
    if (typeof layout === 'string') {

      const component = _config.layouts[layout]

      _layout.value = component || layout
    } else {

      _layout.value = layout
    }
  }

  return { setLayout, layout: _layout }
}