"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import useToggleState from "@lib/hooks/use-toggle-state"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Text, clx } from "@modules/common/components/ui"
import { Fragment } from "react"
import CountrySelect from "../country-select"
import LanguageSelect from "../language-select"
import { Locale } from "@lib/data/locales"
import { Menu } from "lucide-react"

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Account: "/account",
  Cart: "/cart",
  "Lab-Test": "/lab-test",
  "Consult Doctors": "/consult-doc",
  Ayurveda: "/ayurveda",
  "Cancer Care": "/cancer-care",
  Offers: "/offers",
  ContactUs: "/contact-us",
}

type SideMenuProps = {
  regions: HttpTypes.StoreRegion[] | null
  locales: Locale[] | null
  currentLocale: string | null
}

const SideMenu = ({ regions, locales, currentLocale }: SideMenuProps) => {
  const countryToggleState = useToggleState()
  const languageToggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base"
                >
                  <Menu size={24} />
                </Popover.Button>
              </div>

              {open && (
                <div
                  className="fixed inset-0 z-[50] bg-black/30 backdrop-blur-sm"
                  onClick={close}
                  data-testid="side-menu-backdrop"
                />
              )}

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
              >
                <PopoverPanel
                  className="
                fixed
                top-0
                left-0
                h-screen
                w-[360px]
                z-[100]
                " >
                  <div
                    data-testid="nav-menu-popup"
                    className="
                    flex
                    flex-col
                    h-full
                    bg-white
                    shadow-2xl
                    border-r
                    border-gray-100
                    "
                  >
                    {/* HEADER */}
                    <div className="flex items-center justify-between px-6 py-5 border-b">
                      <div>
                        <h2 className="text-2xl font-bold text-cyan-600">
                          Generic Medicine
                        </h2>

                        <p className="text-sm text-gray-500">
                          Healthcare at your fingertips
                        </p>
                      </div>

                      <button
                        data-testid="close-menu-button"
                        onClick={close}
                        className="
                        w-10
                        h-10
                        rounded-full
                        hover:bg-gray-100
                        flex
                        items-center
                        justify-center
                        "
                      >
                        <XMark />
                      </button>
                    </div>

                    {/* USER CARD */}
                    <div className="p-4">
                      <div className="bg-cyan-50 rounded-2xl p-4">
                        <div className="font-semibold text-gray-800">
                          Welcome 👋
                        </div>

                        <div className="text-sm text-gray-500 mt-1">
                          Manage medicines, orders and healthcare services.
                        </div>
                      </div>
                    </div>

                    {/* MENU ITEMS */}
                    <div className="flex-1 px-4 overflow-y-auto">
                      <ul className="space-y-2">
                        {Object.entries(SideMenuItems).map(([name, href]) => (
                          <li key={name}>
                            <LocalizedClientLink
                              href={href}
                              onClick={close}
                              className="
                              flex
                              items-center
                              justify-between
                              px-4
                              py-4
                              rounded-2xl
                              text-gray-700
                              hover:bg-cyan-50
                              hover:text-cyan-600
                              transition-all
                              group
                              "
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-xl">
                                  {name === "Home" && "🏠"}
                                  {name === "Store" && "💊"}
                                  {name === "Account" && "👤"}
                                  {name === "Cart" && "🛒"}
                                  {name === "Lab-Test" && "🧪"}
                                  {name === "Consult Doctors" && "👨‍⚕️"}
                                  {name === "Ayurveda" && "🌿"}
                                  {name === "Cancer Care" && "🎗️"}
                                  {name === "Offers" && "🔥"}
                                  {name === "Contact-Us" && "📞"}
                                </span>

                                <span className="font-medium">{name}</span>
                              </div>

                              <ArrowRightMini
                                className="
                                group-hover:translate-x-1
                                transition-transform
                                "
                              />
                            </LocalizedClientLink>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* FOOTER */}
                    <div className="border-t p-4">
                      {!!locales?.length && (
                        <div
                          className="flex justify-between items-center py-3"
                          onMouseEnter={languageToggleState.open}
                          onMouseLeave={languageToggleState.close}
                        >
                          <LanguageSelect
                            toggleState={languageToggleState}
                            locales={locales}
                            currentLocale={currentLocale}
                          />

                          <ArrowRightMini />
                        </div>
                      )}

                      {regions && (
                        <div
                          className="flex justify-between items-center py-3"
                          onMouseEnter={countryToggleState.open}
                          onMouseLeave={countryToggleState.close}
                        >
                          <CountrySelect
                            toggleState={countryToggleState}
                            regions={regions}
                          />

                          <ArrowRightMini />
                        </div>
                      )}

                      <div className="mt-4 text-xs text-gray-400">
                        © {new Date().getFullYear()}
                        <br />
                        Generic Medicine Store
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
