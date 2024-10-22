<script setup lang="ts">
import { Input } from '@/components/ui/input'

import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
import { useColorMode,useCycleList } from '@vueuse/core'
import { watchEffect } from 'vue'

// Pass { disableTransition: false } to enable transitions
const mode = useColorMode({ disableTransition: false })

  const { state, next } = useCycleList(['dark', 'light', 'auto'] as const, { initialValue: mode })

  watchEffect(() => mode.value = state.value)

</script>

<template>
  <main class="cz-container cz-mx-auto">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="100"
      height="100"
    />

    <Input />

   </main>
</template>
