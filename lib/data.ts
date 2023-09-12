import React from 'react'
import { BiSolidWallet } from 'react-icons/bi'
import { BsCurrencyBitcoin, BsCoin } from 'react-icons/bs'
import { FaEthereum } from 'react-icons/fa'

export const list = [
  {
    title: 'Estimated Balance',
    description: '',
    content: '$123,987',
    footer: 'Monthly profit',
    icon: React.createElement(BiSolidWallet),
    units: 2560.78,
    rate: 14.67,
  },
  {
    title: 'BTCUSDT',
    description: 'Bitcoin',
    content: '$23,738',
    footer: 'PNL daily',
    icon: React.createElement(BsCurrencyBitcoin),
    units: -16.78,
    rate: 14.67,
  },
  {
    title: 'ETHUSDT',
    description: 'Etherium',
    content: '$23,738',
    footer: 'PNL daily',
    icon: React.createElement(FaEthereum),
    units: 189.91,
    rate: 24.86,
  },
  {
    title: 'SOLUSDT',
    description: 'Solana',
    content: '$23,738',
    footer: 'PNL daily',
    icon: React.createElement(BsCoin),
    units: 556.14,
    rate: 64.11,
  },
] as const
