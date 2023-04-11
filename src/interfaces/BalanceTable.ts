import { EntryModel } from '@interfaces'

export interface BalanceMonthModel {
  date: string
  entriesId: number[]
}

export interface BalanceTableModel {
  year: string
  months: BalanceMonthModel[]
  entries: Omit<EntryModel, 'date' | 'frequency'>[]
}