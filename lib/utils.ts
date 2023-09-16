import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formattedDate(milliseconds: number): string {
  const date = new Date(milliseconds)

  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  } as const

  const formatter = new Intl.DateTimeFormat('en-US', options)
  return formatter.format(date)
}
