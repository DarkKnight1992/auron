<script setup lang="ts">
import { alertVariants } from '@auron/styles'
import { composeClassName } from '../../utils/composeClassName'

const props = defineProps<{
  class?: string
}>()

const styles = alertVariants()
</script>

<template>
  <div :class="composeClassName(styles.description(), props.class)">
    <slot />
  </div>
</template>
