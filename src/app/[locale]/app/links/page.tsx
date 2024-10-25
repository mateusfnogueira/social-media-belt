'use client'
import { HeadingH1, HeadingH2 } from '@/components'
import { useTranslations } from 'next-intl'

export default function PageLinks() {
  const t = useTranslations('Links')
  return (
    <div className="px-4 pb-24 overflow-auto md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <HeadingH1>{t('title')}</HeadingH1>
          <HeadingH2>Description</HeadingH2>
        </div>

        <div className="flex items-center">
          <button
            type="button"
            className="w-full px-4 py-2 text-base font-medium text-black bg-white border-t border-b border-l rounded-l-md hover:bg-gray-100"
          >
            {t('add')}
          </button>
          <button
            type="button"
            className="w-full px-4 py-2 text-base font-medium text-black bg-white border-t border-b border-r rounded-r-md hover:bg-gray-100"
          >
            {t('create group')}
          </button>
        </div>
      </div>
    </div>
  )
}
