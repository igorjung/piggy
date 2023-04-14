export interface EntryFrequencyModel {
  id: number
  name: string
  value: number
}

export interface EntryModel {
  id: number
  name: string
  value: number
  date: string
  type: number
  frequency: EntryFrequencyModel
}