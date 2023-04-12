import { InputHTMLAttributes } from 'react'
import { SvgIcon } from '@material-ui/core'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'

import { FormInputWrapper } from './styles'

interface InputProps extends InputHTMLAttributes<any> {
  icon?: OverridableComponent<any>
  onIconClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Input = ({
  icon,
  onIconClick,
  ...rest
}: InputProps) => {
  return (
    <FormInputWrapper>
      <input type="text" {...rest}/>
      {icon && (
        <button type="button" onClick={onIconClick}>
          <SvgIcon component={icon}/>
        </button>
      )}
    </FormInputWrapper>
  )
}

export default Input