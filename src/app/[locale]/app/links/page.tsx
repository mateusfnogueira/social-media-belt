'use client'
import { HeadingH1, HeadingH2 } from '@/components'
import { ICreateLink } from '@/interfaces'
import { useTranslations } from 'next-intl'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from 'zod'

const schema = zod.object({
  internalName: zod.string(),
  publicName: zod.string(),
  url: zod.string(),
  appUrl: zod.string().optional(),
  identifyAdmin: zod.string()
})

export default function PageLinks() {
  const t = useTranslations('Links')

  const { register, handleSubmit } = useForm<ICreateLink>({
    mode: 'all',
    resolver: zodResolver(schema)
  })

  const onSubmit: SubmitHandler<ICreateLink> = (data) => {
    console.log(data)
  }

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container max-w-2xl mx-auto shadow-md md:w-3/4"
      >
        <div className="p-4 border-indigo-400 rounded-lg bg-gray-100/5 ">
          <HeadingH2>{t('form.create')}</HeadingH2>
        </div>
        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">{t('form.identify')}</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div className=" relative ">
                <input
                  type="text"
                  id="internalName"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder={t('form.internal name')}
                  {...register('internalName')}
                />
              </div>
              <div className=" relative ">
                <input
                  type="text"
                  id="publicName"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder={t('form.public name')}
                  {...register('publicName')}
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">{t('form.destiny')}</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div className=" relative ">
                <input
                  type="text"
                  id="url"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="https://"
                  {...register('url')}
                />
              </div>
              <div className=" relative ">
                <input
                  type="text"
                  id="appUrl"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder={t('form.internal link app')}
                  {...register('appUrl')}
                />
              </div>
              <div className=" relative ">
                <input
                  type="text"
                  id="identifyAdmin"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder={t('form.identify admin')}
                  {...register('identifyAdmin')}
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            <button
              type="submit"
              className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
