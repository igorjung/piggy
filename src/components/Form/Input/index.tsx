import { InputHTMLAttributes } from 'react'
import { SvgIcon } from '@material-ui/core'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'

import { FormInputWrapper, FormInputSpan } from './styles'

interface InputProps extends InputHTMLAttributes<any>{
  icon?: OverridableComponent<any>
  onIconClick?: React.MouseEventHandler<HTMLButtonElement>
  error?: string
  touched?: boolean
}

const Input = ({
  icon,
  error,
  touched,
  onIconClick,
  ...rest
}: InputProps) => {
  return (
    <FormInputWrapper isInvalid={!!error && touched}>
      <input type="text" {...rest}/>
      {icon && (
        <button type="button" onClick={onIconClick}>
          <SvgIcon component={icon}/>
        </button>
      )}
      {error && touched && (
        <FormInputSpan>{error}</FormInputSpan>
      )}
    </FormInputWrapper>
  )
}

export default Input