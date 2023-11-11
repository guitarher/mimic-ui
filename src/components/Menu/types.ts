import React, { createContext } from 'react'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectIndex: number) => void

export interface MenuProps {
  defaultIndex?: number
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  onSelect?: SelectCallback
  children?: React.ReactNode
}

export interface MenuItemProps {
  index: number
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface IMenuContext {
  index: number
  onSelect?: SelectCallback
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })
