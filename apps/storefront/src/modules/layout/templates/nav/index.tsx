export const dynamic = "force-dynamic"
import { Suspense } from "react"

import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { Search, MapPin } from "lucide-react"
import { retrieveCustomer } from "@lib/data/customer"
import SearchBox from "@modules/layout/components/search-box"
import CurrentLocation from "@modules/layout/components/current-location"
import CategoryNavbar from "@modules/layout/components/category-navbar"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])
  const customer = await retrieveCustomer()

  return (
    <div className="sticky top-0 inset-x-0 z-50">
      {/* MAIN NAVBAR */}
      <header className="bg-white shadow-sm border-b">
        <nav className="max-w-9xl mx-auto px-4 lg:px-6 h-18 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <SideMenu
              regions={regions}
              locales={locales}
              currentLocale={currentLocale}
            />

            {/* LOGO */}
            <LocalizedClientLink
              href="/"
              className="flex items-center gap-3"
              data-testid="nav-store-link"
            >
              <div className="leading-tight">
                <h1 className="text-lg md:text-2xl font-extrabold text-gray-900">
                  GENERIC
                </h1>

                <p className="text-cyan-600 font-bold text-sm md:text-xl">
                  MEDICINE STORE
                </p>
              </div>
            </LocalizedClientLink>
          </div>

          {/* CENTER MENU */}
          <div className="hidden lg:flex items-center gap-10 text-lg">
            <LocalizedClientLink
              href="/"
              className="font-semibold text-gray-700 hover:text-cyan-600 transition"
            >
              Medicines
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/lab-test"
              className="font-semibold text-gray-700 hover:text-cyan-600 transition"
            >
              Lab-Test
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/consult-doc"
              className="font-semibold text-gray-700 hover:text-cyan-600 transition"
            >
              Consult Doctors
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/ayurveda"
              className="font-semibold text-gray-700 hover:text-cyan-600 transition"
            >
              Ayurveda
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/cancer-care"
              className="font-semibold text-gray-700 hover:text-cyan-600 transition"
            >
              Cancer Care
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/offers"
              className="font-semibold text-gray-700 hover:text-cyan-600 transition"
            >
              Offers
            </LocalizedClientLink>

            <LocalizedClientLink 
              href="/contact-us" 
              className="font-semibold text-gray-700 hover:text-cyan-600 transition"
            >
              Contact Us
            </LocalizedClientLink>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5">
            {customer ? (
              <LocalizedClientLink
                href="/account"
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-full shadow-md hover:opacity-90 transition"
              >
                <div className="w-8 h-8 rounded-full bg-white text-cyan-600 flex items-center justify-center text-sm font-bold">
                  {customer.first_name?.charAt(0).toUpperCase()}
                </div>

                <span className="text-sm font-medium">
                  {customer.first_name}
                </span>
              </LocalizedClientLink>
            ) : (
              <LocalizedClientLink
                className="hidden md:flex font-semibold text-gray-700 hover:text-cyan-600 whitespace-nowrap"
                href="/account"
                data-testid="nav-account-link"
              >
                Login / Signup
              </LocalizedClientLink>
            )}

            <Suspense
              fallback={
                <LocalizedClientLink
                  className="flex gap-2 font-semibold"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  🛒 Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
            <LocalizedClientLink
              href="/contact-us"
              className="
                hidden lg:flex
                items-center
                gap-2
                font-semibold
                text-gray-800
                hover:text-cyan-600
                transition
              "
            >
              Need Help?
            </LocalizedClientLink>
          </div>
        </nav>
      </header>

      {/* SEARCH BAR SECTION */}
      <div className="bg-white/90 backdrop-blur-md border-b sticky top-0 z-40">
        <div className="max-w-9xl mx-auto px-4 lg:px-6 py-1 flex items-center gap-6">
          {/* LOCATION */}
          <div className="hidden md:flex items-center gap-2 min-w-fit bg-cyan-200 border border-cyan-300 rounded-xl px-4 py-3 hover:bg-cyan-300 transition cursor-pointer">
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
              <CurrentLocation />
            </span>
          </div>

          {/* SEARCH */}
          <div className="flex-1">
            <SearchBox />
          </div>
          <div className="hidden lg:flex items-center whitespace-nowrap text-gray-800 font-medium px-12">
            🚚 Free Delivery On orders above ₹499
          </div>
          {/* QUICK ORDER */}
          <LocalizedClientLink
            href="/quick-order"
            className="
              hidden lg:flex
              items-center gap-2
              bg-gradient-to-r
              from-cyan-500
              to-teal-500
              text-white
              px-4 py-3
              rounded-xl
            "
          >
            ⚡ Quick Order
          </LocalizedClientLink>
        </div>
      </div>
      <div className="bg-white/90 backdrop-blur-md border-b-1 sticky top-0 z-30">
        <CategoryNavbar />
      </div>
    </div>
  )
}
