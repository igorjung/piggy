import { SvgIcon } from '@material-ui/core';
import { ReportProblem } from '@material-ui/icons'

import { Button } from '@components';
import { 
  ModalWrapper, 
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalControl
} from './styles'

interface ModalProps {
  title: string
  children: React.ReactNode
  onClose: () => void
  isOpen: boolean
}

const Modal = ({ 
  title,
  children,
  onClose,
  isOpen 
}: ModalProps) => {
  return (
    <ModalWrapper isOpen={isOpen} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h1>{title}</h1>
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
        <ModalControl>
          <Button 
            type="button" 
            className="primary"
            label="SUBMIT"
            onClick={onClose}
          />
        </ModalControl>
      </ModalContainer>
    </ModalWrapper>
  )
}

export default Modal