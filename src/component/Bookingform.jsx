import React from 'react'

const Bookingform = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow space-y-4">
            <div className="text-gray-400 line-through">₹3500</div>
            <div className="text-2xl font-bold">₹2600 /night</div>

            <div className="bg-gray-100 rounded-lg p-4 space-y-2 text-sm">
              <div>Feb 02 – Feb 06</div>
              <div>Check in – Check out</div>
              <div>4 Guests</div>
            </div>

            <div className="flex justify-between text-sm">
              <span>₹1900.00 x 3 day</span>
              <span>₹5700.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹5700.00</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900">
              Reserve
            </button>
          </div>
  )
}

export default Bookingform
