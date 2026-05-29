export default function OrderConfirmedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">

        <h1 className="text-4xl font-bold mb-4">
          Order Placed Successfully 🎉
        </h1>

        <p className="text-gray-600 mb-6">
          Your payment was successful and your order has been placed.
        </p>

        <a
          href="/"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Continue Shopping
        </a>

      </div>
    </div>
  )
}