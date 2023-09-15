import React from 'react'
import BalanceCard from './BalanceCard'
import { topCardList } from '@/lib/data'

const Cards = () => {
  return (
    <div className="flex sm:flex-row flex-col gap-2 p-2">
      {topCardList.map((item, index) => (
        <React.Fragment key={index}>
          <BalanceCard {...item} />
        </React.Fragment>
      ))}
    </div>
  )
}
export default Cards
