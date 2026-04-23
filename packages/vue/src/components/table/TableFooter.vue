<script setup lang="ts">
import { computed } from 'vue'
import { tableVariants } from '@auron/styles'
import { useTableInject } from './table.context'

const ctx = useTableInject()
const slotFns = computed(() => tableVariants({ variant: ctx.variant.value }))
</script>

<template>
  <tfoot :class="slotFns.footer()">
    <slot />
  </tfoot>
</template>
