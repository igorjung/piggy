import { SvgIcon } from '@material-ui/core';
import { ReportProblem } from '@material-ui/icons'

import { Button } from '@components';
import { 
  AlertWrapper, 
  AlertContainer,
  AlertBody,
  AlertControl
} from './styles'

interface AlertProps {
  description: string
  actions: {
    id: number
    label: string
    class: string
    onClick: () => void
  }[]
  onClose: () => void
  isOpen: boolean
}

const Alert = ({ 
  description,
  actions,
  onClose,
  isOpen 
}: AlertProps) => {
  return (
    <AlertWrapper isOpen={isOpen} onClick={onClose}>
      <AlertContainer onClick={(e) => e.stopPropagation()}>
        <AlertBody>
          <SvgIcon component={ReportProblem}/>
          <strong>{description}</strong>
        </AlertBody>
        <AlertControl itemsNumber={actions.length}>
          {actions.map(action => (
            <li key={action.id}>
              <Button 
                type="button" 
                className={action.class}
                label={action.label}
                onClick={action.onClick}
              />
            </li>
          ))}
        </AlertControl>
      </AlertContainer>
    </AlertWrapper>
  )
}

export default Alert