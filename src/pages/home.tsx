import type { NextPage } from 'next'

import { Table } from '@components'

import data from '../mocks/tableData';

const Home: NextPage = () => {
  return (
    <Table data={data} />
  )
}

export default Home
