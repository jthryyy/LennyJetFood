import styled from 'styled-components'
import { styleProps, isntStyleProp } from './style-props'
import type { PrimitiveComponent } from './types'

/**
 * A styled div to always display flex, allows for much easier use of styled components
 */
export const Flex: PrimitiveComponent<'div'> = styled.div.withConfig({
  shouldForwardProp: isntStyleProp,
})`
  display: flex;
  ${styleProps}
`
