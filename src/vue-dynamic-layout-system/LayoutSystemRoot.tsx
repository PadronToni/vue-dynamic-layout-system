import { RouterView, useRouter } from 'vue-router'
import { useLayoutSystem, type LayoutComponentLike } from '.'
import { defineComponent, computed } from 'vue'

export const LayoutSystemRoot = defineComponent({
  setup() {
    const _ls = useLayoutSystem()
    const router = useRouter()

    // sets current layout to be the specified in page meta data
    router.afterEach((to) => (_ls.layout.value = to.meta.layout as LayoutComponentLike))

    // the actual layout
    const layout = computed(() => _ls.layout.value ?? 'div')

    return () => (
      <layout.value>
        <RouterView></RouterView>
      </layout.value>
    )
  }
})
