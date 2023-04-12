import { useState, useEffect } from 'react'
import { Edit, Delete }  from '@material-ui/icons'

import { BalanceTableModel } from '@/interfaces'
import { 
  Alert,
  Button, 
  Input,
  Modal,
  Select 
} from '@components'
import { theme } from '@/styles/theme'
import { 
  TableWrapper, 
  TableHeader, 
  TableHeaderColumn,
  TableLine,
  TableColumn,
  TableControl
} from './styles'

interface TableProps {
  data: BalanceTableModel
}

const Table = ({ data }: TableProps) => {
  const [checkedList, setCheckedList] = useState<number[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAlertOpen, setIsAlertOpen] = useState(false)


  const onSelectAll = () => {
    const list = checkedList.length !== data.entries.length
      ? data.entries.map(entry => entry.id)
      : []

    setCheckedList(list)
  }

  const onSelectItem = (id: number) => {
    const list = [...checkedList]
    const index = list.findIndex((item) => item === id)

    if(index === -1) list.push(id)
    else list.splice(index, 1)
    
    setCheckedList(list)
  }

  useEffect(() => {
    const masterInput = document.getElementById('masterInput') as HTMLInputElement
    masterInput.checked = checkedList.length === data.entries.length

    data.entries.forEach(entry => {
      const input = document.getElementById(`input${entry.id}`) as HTMLInputElement
      input.checked = checkedList.findIndex(item => item === entry.id) !== -1
    })

  }, [checkedList, data])

  return (
    <TableWrapper>
      <Modal 
        title="Edit Entry"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <li>
          <Input name='name' placeholder='Name' />
        </li>
        <li>
          <Select 
            name='type' 
            placeholder='type' 
            options={[{
              id: 0,
              label: 'Income'
            }, {
              id: 1,
              label: 'Outcome'
            }]}
          />
        </li>
        <li>
          <Input name='date' placeholder='Date' />
        </li>
        <li>
          <Input name='value' placeholder='Value' />
        </li>
      </Modal>
      <Alert 
        description="Are you sure that you want to delete this item?"
        actions={[{
          id: 0,
          label: 'CANCEL',
          class: 'primary',
          onClick: () => setIsAlertOpen(false)
        }, {
          id: 1,
          label: 'DELETE',
          class: 'secondary',
          onClick: () => setIsAlertOpen(false)
        }]}
        isOpen={isAlertOpen}
        onClose={() => setIsAlertOpen(false)}
      />
      <TableHeader>
        <TableHeaderColumn>
          <input 
            id="masterInput"
            type="checkbox" 
            onChange={onSelectAll}
          />
          <strong>Entry</strong>
        </TableHeaderColumn>
        {data.months.map(month => (
          <TableHeaderColumn key={month.date}>
            <strong>{new Date(month.date).getMonth()}</strong>
          </TableHeaderColumn>
        ))}
      </TableHeader>
      {data.entries.map(entry => (
        <TableLine key={entry.id}>
          <TableColumn>
            <input 
              id={`input${entry.id}`}
              type="checkbox" 
              onChange={() => onSelectItem(entry.id)}
            />
            <strong>{entry.name}</strong>
          </TableColumn>
          {data.months.map((month) => {
            const isEntryFound = month.entriesId.find((a) => a === entry.id)
            const key = `${month.date}-${entry.id}`

            return (
              <TableColumn key={key} type={entry.type}>
                <strong>{isEntryFound && entry.value}</strong>
              </TableColumn>
            )
          })}
        </TableLine>
      ))}
      <TableControl>
        <Button 
          type="button" 
          label="Edit" 
          icon={Edit}
          className='tertiary'
          disabled={!checkedList.length || checkedList.length > 1}
          onClick={() => setIsModalOpen(true)}
        />
        <Button 
          type="button" 
          label="Delete" 
          icon={Delete}
          iconColor={theme.red}
          className='tertiary'
          disabled={!checkedList.length}
          onClick={() => setIsAlertOpen(true)}
        />
      </TableControl>
    </TableWrapper>
  )
}

export default Table