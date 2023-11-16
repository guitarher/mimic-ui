import React, { createContext } from 'react'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectIndex: string) => void

export interface MenuProps {
  defaultIndex?: string
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  onSelect?: SelectCallback
  children?: React.ReactNode
  defaultOpenKeys?: string[]
}

export interface MenuItemProps {
  index?: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface SubMenuProps {
  index?: string
  title: string
  className?: string
  children?: React.ReactNode
}

export interface IMenuContext {
  index: string
  onSelect?: SelectCallback
  mode?: MenuMode
  defaultOpenKeys?: string[]
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })
