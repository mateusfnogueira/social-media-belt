'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { activeClass, inactiveClass, MenuItemClass } from './class-style.util'
import { usePathname } from 'next/navigation'

import House from '../../../public/icons/house.svg'
import Compass from '@public/icons/compass.svg'
import Folder from '@public/icons/folder.svg'
import Chats from '@public/icons/chats.svg'

export function SideBar() {
  const t = useTranslations('SideBar')

  const path = usePathname()

  const locale = path.split('/')[1]

  function getLastPathSegment() {
    const segments = path.replace(/^\//, '').split('/')

    const lastSegment = segments[segments.length - 1]

    const locales = ['pt', 'en', 'es', 'fr']
    if (locales.includes(lastSegment)) {
      return 'home'
    }

    return lastSegment
  }

  function getActiveClass(path: string) {
    return path === getLastPathSegment() ? activeClass : inactiveClass
  }

  return (
    <div className="relative hidden h-screen shadow-lg lg:block w-80">
      <div className="h-full bg-white dark:bg-gray-700">
        <div className="flex items-center justify-start pt-6 ml-8">
          <p className="text-xl font-bold dark:text-white">Plannifer</p>
        </div>
        <nav className="mt-6">
          <div>
            <Link className={MenuItemClass + ' ' + getActiveClass('app')} href={`/${locale}/app`}>
              <span className="text-left">
                <House />
              </span>
              <span className="mx-2 text-sm font-normal">{t('home')}</span>
            </Link>
            <Link className={MenuItemClass + ' ' + inactiveClass} href="#">
              <span className="text-left">
                <Compass />
              </span>
              <span className="mx-2 text-sm font-normal">
                {t('user account')}
                <span className="w-4 h-2 p-1 ml-4 text-xs text-gray-400 bg-gray-200 rounded-lg">
                  0
                </span>
              </span>
            </Link>
            <Link className={MenuItemClass + ' ' + getActiveClass('links')} href="app/links">
              <span className="text-left">
                <Folder />
              </span>
              <span className="mx-4 text-sm font-normal">{t('links')}</span>
            </Link>
            <Link
              className={MenuItemClass + ' ' + getActiveClass('config')}
              href={`/${locale}/settings`}
            >
              <span className="text-left">
                <Chats />
              </span>
              <span className="mx-4 text-sm font-normal">{t('config')}</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
