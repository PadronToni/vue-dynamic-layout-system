import { provide, shallowRef, useSlots } from "vue"
import { LSSlotsUtilsKey } from "./globals"


export function useLSSlotsUtils() {

  // const internalSlots = useSlots()
  const _slots = shallowRef()
  provide(LSSlotsUtilsKey, _slots)

  return {}
}