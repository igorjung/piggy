import { useState, useEffect } from 'react'

import { BalanceTableModel } from '@/interfaces'
import { 
  TableWrapper, 
  TableHeader, 
  TableHeaderColumn,
  TableLine,
  TableColumn
} from './styles'

interface TableProps {
  data: BalanceTableModel
}

const Table = ({ data }: TableProps) => {
  const [checkedList, setCheckedList] = useState<number[]>([])


  const onSelectAll = (event: React.FormEvent<HTMLInputElement>) => {

  }

  const onSelectItem = (id: number) => {
    const list = checkedList
    const index = list.findIndex((item) => item === id)

    if(index === -1) list.push(id)
    else list.splice(index, 1)
    
    console.log(list)

    setCheckedList(list)
  }

  return (
    <TableWrapper>
      <TableHeader>
        <TableHeaderColumn>
          <input 
            checked={checkedList.length === data.entries.length}
            type="checkbox" 
            onChange={(e) => onSelectAll(e)}
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
              checked={!!checkedList.find(a => a === entry.id)}
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
    </TableWrapper>
  )
}

export default Table