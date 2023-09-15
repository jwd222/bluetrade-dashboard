import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <div
      className="flex flex-row justify-between dark:bg-gray-900 
    dark:text-white bg-white w-full h-10"
    >
      <h2>Dashboard</h2>
      <ThemeSwitch />
      <h2>Welcome, back</h2>
    </div>
  )
}
export default Header
