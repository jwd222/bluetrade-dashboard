import Cards from '@/components/Cards'
import Chart from '@/components/Chart'
import Header from '@/components/Header'
import Market from '@/components/Market'

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-50 min-h-screen w-full p-2">
      <Header />
      <Cards />
      <div className="p-2 flex sm:flex-row flex-col gap-2">
        <Chart />
        <Market />
      </div>
    </div>
  )
}
