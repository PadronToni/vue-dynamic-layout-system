import type { App } from "vue"
import { LSBaseKey, currentLayout } from "./globals"

export const createLayoutSystem = () => {

  function install(app: App) {
    app.provide(LSBaseKey, currentLayout)
  }

  return { install }
}