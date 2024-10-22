<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-vue-next'
import {
  DropdownMenuSubTrigger,
  type DropdownMenuSubTriggerProps,
  useForwardProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DropdownMenuSubTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="forwardedProps"
    :class="cn(
      'cz-flex cz-cursor-default cz-select-none cz-items-center cz-rounded-sm cz-px-2 cz-py-1.5 cz-text-sm cz-outline-none focus:cz-bg-accent data-[state=open]:cz-bg-accent',
      props.class,
    )"
  >
    <slot />
    <ChevronRight class="cz-ml-auto cz-h-4 cz-w-4" />
  </DropdownMenuSubTrigger>
</template>
