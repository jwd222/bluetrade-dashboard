import Cards from '@/components/Cards'
import Chart from '@/components/Chart'
import Header from '@/components/Header'
import Market from '@/components/Market'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <Cards />
      <div className="p-4 flex sm:flex-row flex-col gap-2 ml-2 ">
        <Chart />
        <Market />
      </div>
    </div>
  )
}
