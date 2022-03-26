import React from 'react'
import styled from 'styled-components'

import { COLORS, SIZES } from './constants'

const Button = ({ variant, size, children }) => {
  const styles = SIZES[size]
  let Component

  if (variant === 'fill') {
    Component = FillButton
  } else if (variant === 'outline') {
    Component = OutlineButton
  } else if (variant === 'ghost') {
    Component = GhostButton
  }

  return <Component style={styles}>{children}</Component>
}

const ButtonBase = styled.button`
  padding: var(--padding);
  border: 2px solid transparent;
  border-radius: var(--borderRadius);

  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: var(--fontSize);
  font-weight: 500;
  text-transform: uppercase;

  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 4px;
  }
`

const FillButton = styled(ButtonBase)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`
const OutlineButton = styled(ButtonBase)`
  border: 2px solid ${COLORS.primary};

  background-color: ${COLORS.white};
  color: ${COLORS.primary};

  &:hover {
    background-color: ${COLORS.offwhite};
  }
`
const GhostButton = styled(ButtonBase)`
  background-color: transparent;
  color: ${COLORS.gray};

  &:focus {
    outline: 2px solid ${COLORS.transparentGray75};
    outline-offset: 3px;
  }

  &:hover {
    color: ${COLORS.black};
    background-color: ${COLORS.transparentGray15};
  }
`

export default Button
