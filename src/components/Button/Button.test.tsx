import { fireEvent, render } from '@testing-library/react'

import Button from './Button'
import { ButtonProps, ButtonSize, ButtonType } from './types'

// 默认
const defaultProps = {
  onClick: jest.fn()
}

const testProps: Partial<ButtonProps> = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'testClass'
}

// disabled button props
const disabledProps: Partial<ButtonProps> = {
  disable: true,
  onClick: jest.fn()
}

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument() // element in document?
    expect(element.tagName).toEqual('BUTTON') // element is button element?
    expect(element.disabled).toBeFalsy() // disabled to be false?
    expect(element).toHaveClass('btn btn-default-outset') // these className is in the ELement?
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled() // the fn to Haven Been Called?
  })

  it('should render the correct component base on different props', () => {
    const wrapper = render(<Button {...testProps}>Primary Button</Button>)
    const element = wrapper.getByText('Primary Button')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn btn-primary-outset testClass')
  })

  it('should render disabled button when disable to be true', () => {
    const wrapper = render(<Button {...disabledProps}>Primary Button</Button>)
    const element = wrapper.getByText('Primary Button') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(defaultProps.onClick).not.toHaveBeenCalled()
  })
})
