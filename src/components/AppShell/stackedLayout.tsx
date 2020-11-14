import React, { useState, PropsWithChildren } from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react'

// <!--
// Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
// Read the documentation to get started: https://tailwindui.com/documentation
// -->

interface StackedLayoutProps {
  menu: boolean
  setMenu: (state: boolean) => void
}

export function StackedLayout({ menu, setMenu, children }: PropsWithChildren<StackedLayoutProps>) {
  const [login, setLogin] = useState(false)

  const headerLayout = false ? (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-lg leading-6 font-semibold text-gray-900">Dashboard</h1>
      </div>
    </header>
  ) : null

  const loginElement = false ? (
    <Transition
      show={login}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
        <div className="py-1 rounded-md bg-white shadow-xs">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Your Profile
          </a>

          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Settings
          </a>

          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Sign out
          </a>
        </div>
      </div>
    </Transition>
  ) : null

  const focusedMenuItem =
    'px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
  const focusedMenuItem2 =
    'block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'

  return (
    <div className="relative min-h-screen flex flex-col">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" src="/Vilhelmina_vapen.svg" alt="Vilhelmina vapen" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/">
                    <a
                      onClick={() => setMenu(false)}
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      Start
                    </a>
                  </Link>

                  <Link href="/om-mig">
                    <a
                      onClick={() => setMenu(false)}
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      Om mig
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              {/* <!-- Mobile menu button --> */}
              <HamburgerIcon menu={menu} setMenu={setMenu} />
            </div>
          </div>
        </div>

        {/* <!--
      Mobile menu, toggle classNamees based on menu state.

      Open: "block", closed: "hidden"
    --> */}
        <div className={menu ? 'block md:block' : 'hidden md:hidden'}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <a
                onClick={() => setMenu(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >
                Hem
              </a>
            </Link>

            <Link href="/om-mig">
              <a
                onClick={() => setMenu(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >
                Om mig
              </a>
            </Link>
          </div>
        </div>
      </nav>

      {headerLayout}

      {/*
                <main>

           <!-- Replace with your content --> */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8" onClick={() => setMenu(false)}>
        {children}
      </div>
      {/* <!-- /End replace -->

      </main>
          */}
    </div>
  )
}

interface HamburgerIconProps {
  menu: boolean
  setMenu: (state: boolean) => void
}

function HamburgerIcon({ menu, setMenu }: HamburgerIconProps) {
  // {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}

  // {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
  const iconElement = menu ? (
    <svg className={'block h-6 w-6 '} stroke="currentColor" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ) : (
    <svg className={'block h-6 w-6'} stroke="currentColor" fill="none" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  )

  return (
    <button
      onClick={() => setMenu(!menu)}
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
    >
      {iconElement}
    </button>
  )
}
