import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { assets } from '~/utils/constants'

export function TokenChooser({
  isOpen,
  setIsOpen,
  onChange
}: {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  onChange: (asset: string) => void
}) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-bg1 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-col">
                  <Dialog.Title
                    as="h3"
                    className="px-6 py-5 text-sm font-medium text-gray-900 border-b border-gray-border"
                  >
                    Select a token
                  </Dialog.Title>
                  <div className="px-3 py-2 text-sm border-b border-gray-border flex flex-col">
                    {assets.map((asset) => {
                      return (
                        <button
                          key={asset.symbol}
                          className="flex items-center gap-3 hover:bg-white rounded p-2 cursor-pointer"
                          onClick={() => {
                            onChange(asset.symbol)
                            setIsOpen(false)
                          }}
                        >
                          <img
                            src={asset.src}
                            alt={asset.symbol}
                            className="h-8"
                          />
                          <div className="flex flex-col items-start">
                            <div className="font-medium">{asset.name}</div>
                            <div className="text-gray-500">{asset.symbol}</div>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                  <div className="px-6 py-5 bg-white text-sm font-medium">
                    More EigenLayer assets coming soon...
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
