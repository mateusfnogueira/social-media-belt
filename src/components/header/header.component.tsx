/* eslint-disable @next/next/no-img-element */
import List from '@public/icons/list.svg'
import Chain from '@public/icons/chain.svg'
import Bell from '@public/icons/bell.svg'
import ArrowDown from '@public/icons/arrow-down-filled.svg'

export function Header() {
  return (
    <header className="z-40 flex items-center justify-between w-full h-16">
      <div className="block ml-6 lg:hidden">
        <button className="flex items-center p-2 text-gray-500 bg-white rounded-full shadow text-md">
          <List className="text-gray-400" />
        </button>
      </div>
      <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
        <div className="relative flex items-center justify-end w-full p-1 space-x-4">
          <button className="flex items-center p-2 text-gray-400 bg-white rounded-full shadow hover:text-gray-700 text-md">
            <Chain />
          </button>
          <button className="flex items-center p-2 text-gray-400 bg-white rounded-full shadow hover:text-gray-700 text-md">
            <Bell className="text-gray-400" />
          </button>
          <span className="w-1 h-8 bg-gray-200 rounded-lg"></span>
          <a href="#" className="relative block">
            <img
              alt="profil"
              src="/images/person/1.jpg"
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </a>
          <button className="flex items-center text-gray-500 dark:text-white text-md">
            Charlie R
            <ArrowDown className="ml-2 text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  )
}
