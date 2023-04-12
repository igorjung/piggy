import { SelectHTMLAttributes } from 'react'

import { FormSelect } from './styles'

interface SelectProps extends SelectHTMLAttributes<any> {
  options: {
    id: number
    label: string
  }[]
}

const Select = ({ options, ...rest }: SelectProps) => {
  return (
    <FormSelect {...rest}>
      {options.map(option => (
        <option key={option.id}>{option.label}</option>
      ))}
    </FormSelect>
  )
}

export default Select