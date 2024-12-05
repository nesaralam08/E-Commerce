import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { handleSuccess } from '../utils/ReactToast'
function Cart() {
  const [cartItem, setCartItem] = useState([])
  const getItem = () => {
    axios.get(`http://localhost:4000/api/cart/get-all?uid=${localStorage.getItem("uid")}`)
      .then((d) => setCartItem(d.data.result))
  }
  useEffect(() => {
    getItem()
  }, [getItem])

  const handleRemove = (uid) => {
    axios.delete(`http://localhost:4000/api/cart/delete-one?uid=${uid}`)
      .then((d) => handleSuccess(d.data.message))
    getItem()
  }
  var total = 0
  return (
    <>
      <section className='hero min-h-screen h-auto'>
        <div className='grid xl:grid-cols-3 grid-cols-1 h-full w-full px-6 gap-4 py-4 bg-slate-100'>
          <div className=' col-span-2 overflow-y-auto scrollbar-hide p-4 max-h-screen bg-white'>
            {/* Item Details */}


            {
              cartItem.map((i, index) => (
                <div className=' w-full min-h-48 h-auto flex items-center justify-between gap-4 px-4' key={index}>
                  <figure>
                    <img src={i.product_id.image_url} alt="" className='h-24 min-w-24' />
                  </figure>
                  <div className='w-full'>
                    <p className='text-sm font-semibold'>{i.product_id.description}</p>
                    <p className='text-sm'>SELLER : Alam Bazaar</p>
                    <p className='text-md font-semibold'>₹{i.product_id.price}</p>
                    {/* {total+=i.product_id.price} */}
                    <p className='hidden'>{total+=i.product_id.price}</p>
                    <button className='px-6 py-1 rounded-sm bg-primary mt-2' onClick={() => handleRemove(i.user_id)}>Remove</button>
                  </div>
                </div>
              ))
            }

          </div>
          {/* Price Details */}
          <div className=' h-full w-full flex items-center flex-col gap-2 pb-3 bg-slate-50 rounded-sm'>
            <div className='h-12 w-full'>
              <h1 className='uppercase text-lg font-semibold text-slate-500 bg-slate-300 px-3 py-2'>Price Details</h1>
            </div>
            <div className='w-full px-3 py-3 flex flex-col gap-3'>
              <div className='flex items-center justify-between w-full'><p>Price({cartItem.length} items)</p> <p>₹{total}</p></div>
              <div className='flex items-center justify-between w-full'><p>Discount </p> <p>-₹5</p></div>
              <div className='flex items-center justify-between w-full'><p>Coupons for you</p> <p>-₹15</p></div>
              <div className='flex items-center justify-between w-full'><p>Platform fee</p> <p>+₹3</p></div>
              <div className='flex items-center justify-between w-full'><p>Delivery Charges 1</p> <p><del>₹40</del> Free</p></div>
              <hr />
              <div className='flex items-center justify-between w-full'><p className='text-lg font-semibold'>Total </p> <p className='text-lg font-semibold'>₹{total-17}</p></div>
              <hr />
              <p className='text-primary'>You will save ₹17 on this order</p>
            </div>
            <button className='w-1/2 btn btn-primary'>Place Order</button>
          </div>

        </div>
      </section>
    </>
  )
}

export default Cart