import React from 'react'
import { BiSolidWallet } from 'react-icons/bi'
import { BsCurrencyBitcoin, BsCoin } from 'react-icons/bs'
import { FaEthereum } from 'react-icons/fa'
import TinyLineChart from '@/components/TinyLineChart'
import { RxDashboard } from 'react-icons/rx'
import { RiArrowUpDownLine } from 'react-icons/ri'
import { GoArrowSwitch, GoPerson } from 'react-icons/go'
import { IoIosSettings } from 'react-icons/io'
import { formattedDate } from './utils'

export const topCardList = [
  {
    title: 'Estimated Balance',
    description: '',
    content: '$123,987',
    footer: 'Monthly profit',
    icon: React.createElement(BiSolidWallet),
    graph: '',
    units: 2560.78,
    rate: 14.67,
  },
  {
    title: 'BTCUSDT',
    description: 'Bitcoin',
    content: '$23,738',
    footer: 'PNL daily',
    icon: React.createElement(BsCurrencyBitcoin),
    graph: React.createElement(TinyLineChart),
    units: -16.78,
    rate: 14.67,
  },
  {
    title: 'ETHUSDT',
    description: 'Etherium',
    content: '$23,738',
    footer: 'PNL daily',
    icon: React.createElement(FaEthereum),
    graph: React.createElement(TinyLineChart),
    units: 189.91,
    rate: 24.86,
  },
  {
    title: 'SOLUSDT',
    description: 'Solana',
    content: '$23,738',
    footer: 'PNL daily',
    icon: React.createElement(BsCoin),
    graph: React.createElement(TinyLineChart),
    units: 556.14,
    rate: 64.11,
  },
] as const

export const sideBarButtons = [
  {
    title: 'Dashboard',
    icon: React.createElement(RxDashboard),
  },
  {
    title: 'Markets',
    icon: React.createElement(RiArrowUpDownLine),
  },
  {
    title: 'Transactions',
    icon: React.createElement(GoArrowSwitch),
  },
  {
    title: 'Profile',
    icon: React.createElement(GoPerson),
  },
  {
    title: 'Settings',
    icon: React.createElement(IoIosSettings),
  },
] as const

export const chartData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
]

export const historyData = [
  {
    status: 'pending',
    name: 'Deposit',
    value: 23738,
    time: formattedDate(88546),
    type: 'in',
  },
  {
    status: 'done',
    name: 'BTCUSDT',
    value: -576,
    time: formattedDate(8165488546),
    type: 'out',
  },
  {
    status: 'done',
    name: 'DOGEUSDT',
    value: 3500,
    time: formattedDate(2315646),
    type: 'in',
  },
  {
    status: 'done',
    name: 'FTMUSDT',
    value: 791,
    time: formattedDate(81488546),
    type: 'out',
  },
] as const

export const marketData = [
  {
    currToUsdt: 'BTCUSDT',
    currencyName: 'Bitcoin',
    currentValue: ' $26,053',
    percentage: +23.4,
  },
  {
    currToUsdt: 'ETHUSDT',
    currencyName: 'Ethereum',
    currentValue: '$1670',
    percentage: -0.3,
  },
  {
    currToUsdt: 'DOTUSDT',
    currencyName: 'Polkadot',
    currentValue: '$4.46',
    percentage: +0.5,
  },
  {
    currToUsdt: 'SOLUSDT',
    currencyName: 'Solana',
    currentValue: '$21.18',
    percentage: +11.1,
  },
  {
    currToUsdt: 'BNBUSDT',
    currencyName: 'Bianance',
    currentValue: '$209.13',
    percentage: -2.6,
  },
  {
    currToUsdt: 'ADAUSDT',
    currencyName: 'Cardano',
    currentValue: '$0.2666',
    percentage: -1.03,
  },
  {
    currToUsdt: 'TRXUSDT',
    currencyName: 'TRON',
    currentValue: '$0.07469',
    percentage: +6.3,
  },
  {
    currToUsdt: 'XRPUSDT',
    currencyName: 'Ripple',
    currentValue: '$0.5246',
    percentage: +0.11,
  },
  {
    currToUsdt: 'DAIUSDT',
    currencyName: 'Dai',
    currentValue: '$0.9998',
    percentage: +0.41,
  },
  {
    currToUsdt: 'DOGEUSDT',
    currencyName: 'Dogecoin',
    currentValue: '$0.06248',
    percentage: -5.16,
  },
] as const

export const tinyChartData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]
