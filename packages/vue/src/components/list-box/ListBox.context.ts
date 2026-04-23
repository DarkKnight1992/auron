import { createContext } from '../../utils/context'
import type { Ref } from 'vue'
import type { ListBoxVariants } from '@auron/styles'
import type { ListBoxItemVariants } from '@auron/styles'

export interface ListBoxContext {
  variant: Ref<ListBoxVariants['variant']>
  itemVariant: Ref<ListBoxItemVariants['variant']>
  isDisabled: Ref<boolean>
}

export const {
  useProvide: useListBoxProvide,
  useInject: useListBoxInject,
  key: listBoxContextKey,
} = createContext<ListBoxContext>('ListBox')
