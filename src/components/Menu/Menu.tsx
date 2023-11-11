import React, { FC, useEffect, useState } from 'react'
import classNames from 'classnames'

import { IMenuContext, MenuContext, MenuProps } from './types'

const Menu: FC<MenuProps> = (props: MenuProps) => {
  const { mode, className, defaultIndex, style, onSelect, children } = props
  // current active index
  const [currentActive, setCurrentActive] = useState(defaultIndex)

  const classes = classNames('mimic-menu', className, {
    'menu-vertical': mode === 'vertical'
  })

  const handleClick = (index: number) => {
    setCurrentActive(index)
    if (onSelect) onSelect(index)
  }

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
  }

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>{children}</MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu
