import Image from 'next/image'
import CalendarView from "./CalendarView/CalendarView"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CalendarView />
    </main>
  )
}
