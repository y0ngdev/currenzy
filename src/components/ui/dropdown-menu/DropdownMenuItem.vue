<script setup lang="ts">
import { cn } from '@/lib/utils'
import { DropdownMenuItem, type DropdownMenuItemProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DropdownMenuItemProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuItem
    v-bind="forwardedProps"
    :class="cn(
      'cz-relative cz-flex cz-cursor-default cz-select-none cz-items-center cz-rounded-sm cz-px-2 cz-py-1.5 cz-text-sm cz-outline-none cz-transition-colors focus:cz-bg-accent focus:cz-text-accent-foreground data-[disabled]:cz-pointer-events-none data-[disabled]:cz-opacity-50',
      inset && 'cz-pl-8',
      props.class,
    )"
  >
    <slot />
  </DropdownMenuItem>
</template>
