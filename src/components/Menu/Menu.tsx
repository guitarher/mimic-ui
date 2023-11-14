import React, { FC, useEffect, useState } from 'react'
import classNames from 'classnames'

import { IMenuContext, MenuContext, MenuItemProps, MenuProps } from './types'

const Menu: FC<MenuProps> = (props: MenuProps) => {
  const { mode, className, defaultIndex, style, onSelect, children, defaultOpenKeys } = props
  // current active index
  const [currentActive, setCurrentActive] = useState(defaultIndex)

  const classes = classNames('mimic-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })

  const handleClick = (index: string) => {
    setCurrentActive(index)
    if (onSelect) onSelect(index)
  }

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenKeys
  }

  // render children
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem component')
      }
    })
  }

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>{renderChildren()}</MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenKeys: []
}

export default Menu
