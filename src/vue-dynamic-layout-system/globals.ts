import { type InjectionKey, type ShallowRef, shallowRef } from "vue"
import type { LayoutComponentLike } from "./types"

export const LSBaseKey = Symbol() as InjectionKey<ShallowRef<LayoutComponentLike | undefined>>
export const currentLayout = shallowRef<LayoutComponentLike | undefined>()
export const LSSlotsUtilsKey = Symbol() as InjectionKey<ShallowRef<LayoutComponentLike | undefined>>