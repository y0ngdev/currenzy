<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
</script>

<template>
<main>


  <Button variant="outline" @click="next()" size="xs">
    <Icon
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      icon="radix-icons:moon"
      v-if="state === 'dark'"
    />
    <Icon
      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      icon="radix-icons:sun"
      v-if="state === 'light'"
    />
    <Icon
      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      icon="radix-icons:laptop"
      v-if="state === 'auto'"
    />
  </Button>

  <RouterView />

  
</template>
