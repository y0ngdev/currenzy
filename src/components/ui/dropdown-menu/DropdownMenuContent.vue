<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  DropdownMenuContent,
  type DropdownMenuContentEmits,
  type DropdownMenuContentProps,
  DropdownMenuPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = withDefaults(
  defineProps<DropdownMenuContentProps & { class?: HTMLAttributes['class'] }>(),
  {
    sideOffset: 4,
  },
)
const emits = defineEmits<DropdownMenuContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuContent
      v-bind="forwarded"
      :class="cn('cz-z-50 cz-min-w-32 cz-overflow-hidden cz-rounded-md cz-border cz-bg-popover cz-p-1 cz-text-popover-foreground cz-shadow-md data-[state=open]:cz-animate-in data-[state=closed]:cz-animate-out data-[state=closed]:cz-fade-out-0 data-[state=open]:cz-fade-in-0 data-[state=closed]:cz-zoom-out-95 data-[state=open]:cz-zoom-in-95 data-[side=bottom]:cz-slide-in-from-top-2 data-[side=left]:cz-slide-in-from-right-2 data-[side=right]:cz-slide-in-from-left-2 data-[side=top]:cz-slide-in-from-bottom-2', props.class)"
    >
      <slot />
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>
