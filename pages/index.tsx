import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-gray-200/90 '>
      <Head>
        <title>Next Js Tailwind Typescript Starter</title>
        <meta name="description" content="Next Js Tailwind Typescript Starter boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col relative overflow-hidden justify-center items-start w-screen h-screen px-40  gap-16'>
        <h1 className="text-6xl text-slate-800 max-w-2xl font-bold z-30">Next Js Tailwind Typescript Starter</h1>
        <p className="text-md text-slate-600 leading-7 max-w-3xl z-30"> The Next.js Tailwind Typescript Starter repo provides all the necessary boilerplate to get started with a modern, minimalistic web application development project. With this useful set of tools, developers can quickly start their projects without needing to spend time configuring each part themselves! </p>
        <Link href={'https://github.com/baydisng13/nextjs-tailwind-ts-starter'} className='bg-slate-800 z-30 hover:bg-slate-900 text-slate-200 text-lg font-semibold py-4 px-12 rounded-md '>Star The Repo</Link>
        <svg className='absolute  -top-[30rem] rotate-45 motion-safe:animate-pulse duration-1000  -right-80  fill-slate-600/20 blur-3xl' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M52.4,-61.5C67.2,-61.4,77.9,-45.1,75.8,-29.8C73.7,-14.4,58.8,-0.1,53.2,17.3C47.6,34.7,51.2,55.1,43.9,68.5C36.6,81.8,18.3,88.2,4.2,82.3C-9.8,76.5,-19.7,58.6,-24,44.2C-28.3,29.9,-27.1,19.2,-33.4,8.8C-39.7,-1.7,-53.4,-11.7,-55.5,-22C-57.6,-32.2,-48,-42.6,-36.8,-43.7C-25.6,-44.9,-12.8,-36.9,3,-41.1C18.8,-45.2,37.7,-61.5,52.4,-61.5Z" transform="translate(100 100)" />
        </svg>
          <Link 
            className=' text-slate-900 underline absolute top-12 hover:tracking-wide transform transition-all duration-600 right-20 capitalize p-8'
            href="https://github.com/baydisng13"
          >
            created by  Theodore
          </Link>
      </main>
    </div>
  )
}
