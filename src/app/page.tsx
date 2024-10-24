import { redirect } from 'next/navigation'

export default function Home() {
  const path = 'pt'
  redirect(`/${path}`)
}
