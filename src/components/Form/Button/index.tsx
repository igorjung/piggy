import { ButtonHTMLAttributes } from 'react'
import { SvgIcon } from '@material-ui/core'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'

import { FormButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<any> {
  icon?: OverridableComponent<any>
  label: string
}

const Button = ({
  icon,
  label,
  className = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <FormButton 
      type="button"
      className={className} 
      {...rest}
    >
      {icon && <SvgIcon component={icon}/>}
      <strong>{label}</strong>
    </FormButton>
  )
}

export default Button