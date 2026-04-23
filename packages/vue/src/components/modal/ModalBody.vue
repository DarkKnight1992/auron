<script setup lang="ts">
import { modalVariants } from '@auron/styles/components/modal'
import { composeClassName } from '../../utils/composeClassName'
import { useModalInject } from './Modal.vue'

const props = withDefaults(defineProps<{
  class?: string
}>(), {})

const ctx = useModalInject({ size: 'md', scroll: 'inside', variant: 'opaque', placement: 'auto' })
const styles = modalVariants()
</script>

<template>
  <div :class="composeClassName(styles.body({ scroll: ctx.scroll }), props.class)">
    <slot />
  </div>
</template>
