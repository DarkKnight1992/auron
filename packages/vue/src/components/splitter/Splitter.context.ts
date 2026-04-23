import type { ComputedRef, InjectionKey } from 'vue'
import type { SplitterVariants } from '@auron/styles'

export interface SplitterGroupContext {
  direction: ComputedRef<SplitterVariants['direction']>
}

export const splitterContextKey = Symbol('SplitterGroup') as InjectionKey<SplitterGroupContext>
