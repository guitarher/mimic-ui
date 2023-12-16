import React from 'react'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Success = 'success',
  Link = 'link'
}

// 拟态模式
export enum MimicType {
  None = 'none',
  Outset = 'outset', // 默认
  Inset = 'inset'
}

// 按钮形状
export type ButtonShape = 'default' | 'circle'

export type ButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>

export interface BaseButtonProps {
  className?: string
  disable?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  mimicType?: MimicType
  shape?: ButtonShape
  children: React.ReactNode
}
