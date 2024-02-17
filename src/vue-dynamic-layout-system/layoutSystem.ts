import { inject } from "vue"
import type { LayoutComponentLike } from "./types"
import { LSBaseKey } from "./globals"

export const useLayoutSystem = () => {
  const _layout = inject(LSBaseKey)!

  /**
   * Sets the current layout
   */
  function setLayout(layout: LayoutComponentLike) {
    _layout.value = layout
  }

  return { setLayout, layout: _layout }
}