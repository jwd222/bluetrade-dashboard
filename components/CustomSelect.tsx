'use client'

import { optionList } from '@/lib/data'
import React, { useEffect, useState } from 'react'

type Option = (typeof optionList)[number]

type CustomSelectProps = {
  options: Option[]
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string>('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [optionText, setOptionText] = useState<Option>({
    title: 'undefined',
    description: 'Bitcoin',
    content: '$23,738',
    rate: 14.67,
  })

  //   const handleOptionClick = (value: string) => {
  //     setSelectedOption(value)
  //     // console.log(value)

  //     let text = options.find((option) => option.title == selectedOption) || {
  //       title: 'undefined',
  //       description: 'Bitcoin',
  //       content: '$23,738',
  //       rate: 14.67,
  //     }
  //     console.log(`text: ${text.title}`)
  //     setOptionText(text)
  //     console.log(`optionText: ${optionText.title}`)
  //     setIsDropdownOpen(false)
  //   }

  return (
    <div className="relative inline-block text-left">
      <div>
        <span
          className="rounded-md shadow-sm"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div
            className=" justify-center w-full rounded-md border 
            border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium 
            text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 
            focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {selectedOption ? (
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <h1>{optionText.title}</h1>
                  <h1>
                    {/* {
                      options.find((option) => option.title === selectedOption)
                        ?.content
                    } */}
                  </h1>
                </div>
                <div className="flex justify-between">
                  <h1>
                    {/* {
                      options.find((option) => option.title === selectedOption)
                        ?.description
                    } */}
                  </h1>
                  <h1>
                    {/* {
                      options.find((option) => option.title === selectedOption)
                        ?.rate
                    } */}
                  </h1>
                </div>
              </div>
            ) : (
              'Select an option'
            )}
          </div>
        </span>
      </div>

      {isDropdownOpen && (
        <div
          className="origin-top-right z-30 absolute mt-2 right-0 top-100 w-56 rounded-md 
        shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <div
                key={index}
                className={`px-4 py-2 text-sm text-gray-700 
                hover:bg-gray-100 hover:text-gray-900 flex flex-row 
                justify-between`}
                onClick={() => {
                  console.log(option.title)
                  let text = options.find(
                    (item) => item.title == option.title
                  ) as Option
                  console.log(text)
                  setOptionText(text)
                  console.log(optionText)
                  setIsDropdownOpen(false)
                }}
                role="menuitem"
              >
                {option.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomSelect
