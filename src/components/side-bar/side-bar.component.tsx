'use client'

import House from '../../../public/icons/house.svg'
import Compass from '@public/icons/compass.svg'
import Folder from '@public/icons/folder.svg'
import Chats from '@public/icons/chats.svg'

export function SideBar() {
  return (
    <div className="relative hidden h-screen shadow-lg lg:block w-80">
      <div className="h-full bg-white dark:bg-gray-700">
        <div className="flex items-center justify-start pt-6 ml-8">
          <p className="text-xl font-bold dark:text-white">Plannifer</p>
        </div>
        <nav className="mt-6">
          <div>
            <a
              className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4 border-purple-500 dark:text-white"
              href="#"
            >
              <span className="text-left">
                <House />
              </span>
              <span className="mx-2 text-sm font-normal">Home</span>
            </a>
            <a
              className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
              href="#"
            >
              <span className="text-left">
                <Compass />
              </span>
              <span className="mx-2 text-sm font-normal">
                Refered Projects
                <span className="w-4 h-2 p-1 ml-4 text-xs text-gray-400 bg-gray-200 rounded-lg">
                  0
                </span>
              </span>
            </a>
            <a
              className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
              href="#"
            >
              <span className="text-left">
                <Folder />
              </span>
              <span className="mx-4 text-sm font-normal">Resources</span>
            </a>
            <a
              className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
              href="#"
            >
              <span className="text-left">
                <Chats />
              </span>
              <span className="mx-4 text-sm font-normal">Store feedback</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}
