import type { NextPage } from 'next'
import styled from 'styled-components'

import { useLanguageContext } from '@contexts'
import { Button } from '@components'

const SectionContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    margin: 32px 0;
  }
`

const DeleteProfile: NextPage = () => {
  const { baseText } = useLanguageContext()

  return (
    <SectionContent>
      <h1>{baseText.titles.deleteProfile}</h1>
      <strong>{baseText.spans.confirmDeletion}</strong>
      <Button 
        type="button"
        className="secondary"
        label={baseText.labels.delete}
      />
    </SectionContent>
  )
}

export default DeleteProfile
