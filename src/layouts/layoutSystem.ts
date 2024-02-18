import { defineLayoutSystem } from "@/vue-dynamic-layout-system";
import DefaultLayout from "./DefaultLayout.vue";

export const { useLayoutSystem: useLS} = defineLayoutSystem({
  layouts: {
    default: DefaultLayout
  }
})