import { ButtonHTMLAttributes } from 'react'
import { SvgIcon } from '@material-ui/core'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'

import { FormButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<any> {
  icon?: OverridableComponent<any>
  iconColor?: string
  label: string
}

const Button = ({
  icon,
  iconColor = '#000',
  label,
  className = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <FormButton 
      type="button"
      className={className} 
      iconColor={iconColor}
      {...rest}
    >
      {icon && <SvgIcon component={icon}/>}
      <strong>{label}</strong>
    </FormButton>
  )
}

export default Button