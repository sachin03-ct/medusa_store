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
import CurrentLocation from
  "@modules/layout/components/current-location"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])
  const customer = await retrieveCustomer()

  return (
  <div className="sticky top-0 inset-x-0 z-50">

    {/* TOP HEADER */}
    <div className="hidden lg:block bg-gradient-to-r from-cyan-50 to-teal-50 border-b">
      <div className="max-w-8xl mx-auto px-6 py-2 flex items-center justify-between text-sm text-gray-700">

        <div className="flex items-center gap-10">

          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>Bavdhan, Pune 411021</span>
          </div>

          <div className="flex items-center gap-2">
            <span>🚚</span>
            <span>Free Delivery on orders above ₹499</span>
          </div>

        </div>

        <div className="flex items-center gap-10">

          <div className="flex items-center gap-2">
            <span>🎧</span>
            <span>24/7 Customer Support</span>
          </div>

        </div>

      </div>
    </div>

    {/* MAIN NAVBAR */}
    <header className="bg-white shadow-sm border-b">

      <nav className="max-w-8xl mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">

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
              Login | Signup
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

        </div>

      </nav>

    </header>

    {/* SEARCH BAR SECTION */}
    <div className="bg-white/90 backdrop-blur-md border-b sticky top-0 z-40">

      <div className="max-w-8xl mx-auto px-4 lg:px-6 py-3 flex items-center gap-4">

        {/* LOCATION */}
        <div className="hidden md:flex items-center gap-2 min-w-fit bg-cyan-50 border border-cyan-100 rounded-xl px-4 py-3 hover:bg-cyan-100 transition cursor-pointer">

          <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
            <CurrentLocation />
          </span>

        </div>

        {/* SEARCH */}
        <div className="flex-1">
          <SearchBox />
        </div>

        {/* QUICK ORDER */}
        <LocalizedClientLink
          href="/store"
          className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-md transition-all duration-300"
        >
          ⚡ Quick Order
        </LocalizedClientLink>

      </div>

    </div>

  </div>
)
}
