<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input v-model="modelValue" :class="cn('cz-flex cz-h-10 cz-w-full cz-rounded-md cz-border cz-border-input cz-bg-background cz-px-3 cz-py-2 cz-text-sm cz-ring-offset-background file:cz-border-0 file:cz-bg-transparent file:cz-text-sm file:cz-font-medium placeholder:cz-text-muted-foreground focus-visible:cz-outline-none focus-visible:cz-ring-2 focus-visible:cz-ring-ring focus-visible:cz-ring-offset-2 disabled:cz-cursor-not-allowed disabled:cz-opacity-50', props.class)">
</template>
