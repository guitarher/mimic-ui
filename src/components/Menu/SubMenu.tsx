import React, { FC, MouseEvent, useContext, useEffect, useState } from 'react'
import classNames from 'classnames'

import { MenuContext, MenuItemProps, SubMenuProps } from './types'

const SubMenu: FC<SubMenuProps> = (props) => {
  const { index, title, className, children } = props
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenKeys as Array<string>
  const isOpened = index && context.mode === 'vertical' ? openedSubMenus.includes(index) : false

  // control menu open
  const [menuOpen, setMenuOpen] = useState(isOpened)

  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index
  })

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }

  // submenu mouse event
  let timer: any
  const handleMouse = (e: MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setMenuOpen(toggle)
    }, 0)
  }

  // click events
  const clickEvents =
    context.mode === 'vertical'
      ? {
          onClick: handleClick
        }
      : {}

  // hover events
  const hoverEvents =
    context.mode !== 'vertical'
      ? {
          onMouseEnter: (e: MouseEvent) => {
            handleMouse(e, true)
          },
          onMouseLeave: (e: MouseEvent) => {
            handleMouse(e, false)
          }
        }
      : {}

  // render children
  const renderChildren = () => {
    const subMenuClasses = classNames('mimic-submenu', {
      'menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`
        })
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem component')
      }
    })

    return <ul className={subMenuClasses}>{childrenComponent}</ul>
  }

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu
