import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formattedDate = (milliseconds: number): string => {
  const date = new Date(milliseconds)

  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  } as const

  const formatter = new Intl.DateTimeFormat('en-US', options)
  return formatter.format(date)
}

export const generateArray = (): number[] => {
  const numbers: number[] = []
  let start: number = 19000
  while (numbers.length < 5) {
    const number: number = start + Math.floor(Math.random() * 4000)
    if (!numbers.includes(number) && number <= 23000) {
      numbers.push(number)
    }
    start = number
  }
  numbers.sort((a: number, b: number) => a - b)
  return numbers
}
