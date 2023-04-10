import { InputHTMLAttributes } from 'react'
import { SvgIcon } from '@material-ui/core'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'

import { FormInputWrapper } from './styles'

interface InputProps extends InputHTMLAttributes<any> {
  icon?: OverridableComponent<any>
}

const Input = ({
  icon,
  className = 'primary',
  ...rest
}: InputProps) => {
  return (
    <FormInputWrapper className={className}>
      {icon && <SvgIcon component={icon}/>}
      <input type="text" {...rest}/>
    </FormInputWrapper>
  )
}

export default Input