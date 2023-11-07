import React, { FC, useEffect, useState } from 'react'
import classNames from 'classnames'

import { ButtonProps, ButtonType, MimicType } from './types'

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { btnType, className, disable, size, mimicType, children, ...resetProps } = props
  const classes = classNames('btn', className, {
    [`btn-${btnType}-${mimicType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disable
  })

  return (
    <button className={classes} disabled={disable} {...resetProps}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  disable: false,
  btnType: ButtonType.Default,
  mimicType: MimicType.Outset
}

export default Button
