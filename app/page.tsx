import Asset from '@/components/Asset'
import Cards from '@/components/Cards'
import Chart from '@/components/Chart'
import Converter from '@/components/Coverter'
import Header from '@/components/Header'
import History from '@/components/History'
import Market from '@/components/Market'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <Cards />
      <div className="p-4 pt-1 flex sm:flex-row gap-2 justify-between">
        <Chart />
        <Market />
      </div>
      <div className="p-4 pt-1 flex sm:flex-row gap-2 justify-between">
        <Asset />
        <Converter />
        <History />
      </div>
    </div>
  )
}
