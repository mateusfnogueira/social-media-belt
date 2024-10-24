import Head from 'next/head'

interface IHeadComponentProps {
  title: string
  description: string
}

export function HeadComponent({ title, description }: IHeadComponentProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
  )
}
