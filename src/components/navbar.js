import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { HashLink as Link } from 'react-router-hash-link';
import { Route, Switch } from 'react-router-dom';
import logo from '../logo.svg';
import Home from './Home/Home';
import Rush from './Rush/Rush';
import Leadership from './Leadership/Leadership';

const navigation = [
  { name: 'Home', href: '/#home' },
  { name: 'About Us', href: '/#aboutUs' },
  { name: 'Rush', href: '/rush#video' },
  { name: 'Leadership', href: '/leadership#executive-board' },
  // { name: 'Apply Now', href: '/apply' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure as="nav" class="sticky top-0 z-50 bg-black">
      {({ open }) => (
        <>
          <div className="max-w-9xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex sticky items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="hidden sm:flex h-16  pb-2 w-auto"
                    src={logo}
                    alt="PCT Logo"
                  />
                  <Link className="flex h-8 w-auto mb-2" to="/#home"><p class="text-3xl text-base text-white">Phi Chi Theta</p></Link>
                </div>
                <div className="hidden sm:flex sm:mt-2 sm:mb-2">
                    {navigation.map((item) => (
                      <Link
                        // key={item.name}
                        // href={item.href}
                        to={item.href}
                        className={classNames(
                          'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-lg font-medium'
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <a href="https://bubble.io/domain_not_supported?domain=rush.pctumich.com" target="_blank" rel="noopener noreferrer" className={classNames(
                      'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'px-3 py-2 rounded-md text-lg font-medium'
                    )} >
                      Apply Now
                    </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  //   key={item.name}
                  to={item.href}
                  className={classNames(
                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <a href="https://bubble.io/domain_not_supported?domain=rush.pctumich.com" target="_blank" rel="noopener noreferrer" className={classNames(
                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}>
                      Apply Now
                    </a>
            </div>
          </Disclosure.Panel>
        </>
      )}

    </Disclosure>
  )
}
