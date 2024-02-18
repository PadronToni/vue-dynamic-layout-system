import type { App } from "vue"
import { LSBaseKey, currentLayout } from "./globals"
import type { LayoutComponentLike } from "."

export interface LSConfig {
  layouts: {
    default: LayoutComponentLike
    [key: string]: LayoutComponentLike
  }
}

export const _config: LSConfig = {
  layouts: {
    default: 'div'
  }
}

export const createLayoutSystem = (config?: LSConfig) => {

  // saves possible custom config
  config && Object.assign(_config, config);

  function install(app: App) {
    app.provide(LSBaseKey, currentLayout)
  }

  return { install }
}