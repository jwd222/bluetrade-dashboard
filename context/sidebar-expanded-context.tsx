'use client'
import { createContext, useContext, useState } from 'react'

const SidebarContext = createContext<SidebarContextType | null>(null)

type SidebarContextType = {
  expanded: boolean
  toggleExpanded: () => void
}

type SidebarContextProviderProps = {
  children: React.ReactNode
}

const SidebarContextProvider = ({ children }: SidebarContextProviderProps) => {
  const [expanded, setExpanded] = useState(true)

  const toggleExpanded = () => {
    setExpanded((curr) => !curr)
  }

  return (
    <SidebarContext.Provider
      value={{
        expanded,
        toggleExpanded,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

const useExpanded = () => {
  const context = useContext(SidebarContext)
  if (context === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider')
  }

  return context
}
export { SidebarContextProvider, useExpanded }
