import { listCategories } from "@lib/data/categories";
import { listCollections } from "@lib/data/collections";
import { Text, clx } from "@modules/common/components/ui";

import LocalizedClientLink from "@modules/common/components/localized-client-link";
import MedusaCTA from "@modules/layout/components/medusa-cta";

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  });
  const productCategories = await listCategories();

  return (
  <footer className="bg-gray-600 text-white mt-16">

    {/* TOP SECTION */}
    <div className="max-w-8xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-8">

      {/* LOGO + ABOUT */}
      <div>

        <LocalizedClientLink
          href="/"
          className="text-3xl font-bold uppercase tracking-wide"
        >
          <img src="/logo.png" />
        </LocalizedClientLink>

        <p className="mt-5 text-sm text-gray-200 leading-7">
          Your trusted online pharmacy for affordable medicines,
          healthcare products, lab tests, and wellness essentials.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 mt-6">

          <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" />
          </div>

          <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/3840px-YouTube_full-color_icon_%282017%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" />
          </div>
          
          <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/X_icon.svg/250px-X_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" />
          </div>

        </div>

      </div>

      {/* QUICK LINKS */}
      <div>

        <h2 className="text-xl font-semibold mb-5">
          Quick Links
        </h2>

        <ul className="space-y-3 text-gray-200">

          <li>
            <LocalizedClientLink href="/">
              Home
            </LocalizedClientLink>
          </li>

          <li>
            <LocalizedClientLink href="/store">
              Medicines
            </LocalizedClientLink>
          </li>

          <li>
            <LocalizedClientLink href="/account">
              My Account
            </LocalizedClientLink>
          </li>

          <li>
            <LocalizedClientLink href="/cart">
              Cart
            </LocalizedClientLink>
          </li>

        </ul>

      </div>

      {/* HEALTHCARE */}
      <div>

        <h2 className="text-xl font-semibold mb-5">
          Healthcare
        </h2>

        <ul className="space-y-3 text-gray-200">

          <li>
            <LocalizedClientLink href="/health/diabetes">
              Diabetes Care
            </LocalizedClientLink></li>

          <li>
            <LocalizedClientLink href="/health/heart-care">
              Heart Care
            </LocalizedClientLink></li>

          <li>
            <LocalizedClientLink href="/health/stomach-care">
              Stomach Care
            </LocalizedClientLink></li>

          <li>
            <LocalizedClientLink href="/health/kidney-care">
              Kidney Care
            </LocalizedClientLink></li>
          
          <li>
            <LocalizedClientLink href="/health/respiratory">
              Respiratory Care
            </LocalizedClientLink></li>

        </ul>

      </div>

      {/* CONTACT */}
      <div>

        <h2 className="text-xl font-semibold mb-5">
          Contact Us
        </h2>

        <div className="space-y-4 text-gray-200 text-sm">

          <p>📍 Pune, Maharashtra, India</p>

          <p>📞 +91 9876543210</p>

          <p>✉️ support@genericmedicine.com</p>

          <p>
            ⏰ 24/7 Service Available
          </p>

        </div>

      </div>

    </div>

    {/* BOTTOM */}
    <div className="border-t border-white/10">

      <div className="max-w-8xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white">

        <p>
          © {new Date().getFullYear()} Generic Medicine Store. All rights reserved.
        </p>

        <div className="flex items-center gap-5">

          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Refund Policy</span>

        </div>

      </div>

    </div>

  </footer>
);
}
