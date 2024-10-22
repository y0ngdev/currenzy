<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Circle } from 'lucide-vue-next'
import {
  DropdownMenuItemIndicator,
  DropdownMenuRadioItem,
  type DropdownMenuRadioItemEmits,
  type DropdownMenuRadioItemProps,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DropdownMenuRadioItemProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<DropdownMenuRadioItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DropdownMenuRadioItem
    v-bind="forwarded"
    :class="cn(
      'cz-relative cz-flex cz-cursor-default cz-select-none cz-items-center cz-rounded-sm cz-py-1.5 cz-pl-8 cz-pr-2 cz-text-sm cz-outline-none cz-transition-colors focus:cz-bg-accent focus:cz-text-accent-foreground data-[disabled]:cz-pointer-events-none data-[disabled]:cz-opacity-50',
      props.class,
    )"
  >
    <span class="cz-absolute cz-left-2 cz-flex cz-h-3.5 cz-w-3.5 cz-items-center cz-justify-center">
      <DropdownMenuItemIndicator>
        <Circle class="cz-h-2 cz-w-2 cz-fill-current" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuRadioItem>
</template>
