import React from 'react'
import BalanceCard from './BalanceCard'
import { list } from '@/lib/data'

const Cards = () => {
  return (
    <div className="grid lg:grid-cols-8 gap-4 p-4 w-full">
      {list.map((item, index) => (
        <React.Fragment key={index}>
          <BalanceCard {...item} />
        </React.Fragment>
      ))}
    </div>
  )
}
export default Cards
