<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span :class="cn('cz-ml-auto cz-text-xs cz-tracking-widest cz-opacity-60', props.class)">
    <slot />
  </span>
</template>
