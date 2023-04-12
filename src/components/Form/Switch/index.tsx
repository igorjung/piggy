import { FormSwitchWrapper, FormSwitchButton } from './styles'

interface SwitchProps {
  options: {
    id: number
    label: string
    isActivated?: boolean
    onClick: React.MouseEventHandler<HTMLButtonElement>
  }[]
}

const Switch = ({ options }: SwitchProps) => {
  return (
    <FormSwitchWrapper>
      {options.map(option => (
        <FormSwitchButton 
          key={option.id}
          type="button" 
          onClick={option.onClick}
          isActivated={!!(option.isActivated)}
        >
          <strong>{option.label}</strong>
        </FormSwitchButton>
      ))}
    </FormSwitchWrapper>
  )
}

export default Switch