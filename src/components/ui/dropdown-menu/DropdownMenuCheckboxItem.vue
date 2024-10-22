<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Check } from 'lucide-vue-next'
import {
  DropdownMenuCheckboxItem,
  type DropdownMenuCheckboxItemEmits,
  type DropdownMenuCheckboxItemProps,
  DropdownMenuItemIndicator,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DropdownMenuCheckboxItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<DropdownMenuCheckboxItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DropdownMenuCheckboxItem
    v-bind="forwarded"
    :class=" cn(
      'cz-relative cz-flex cz-cursor-default cz-select-none cz-items-center cz-rounded-sm cz-py-1.5 cz-pl-8 cz-pr-2 cz-text-sm cz-outline-none cz-transition-colors focus:cz-bg-accent focus:cz-text-accent-foreground data-[disabled]:cz-pointer-events-none data-[disabled]:cz-opacity-50',
      props.class,
    )"
  >
    <span class="cz-absolute cz-left-2 cz-flex cz-h-3.5 cz-w-3.5 cz-items-center cz-justify-center">
      <DropdownMenuItemIndicator>
        <Check class="cz-w-4 cz-h-4" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuCheckboxItem>
</template>
