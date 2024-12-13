import React, { useEffect, useState } from 'react'
import { handleSuccess } from '../utils/ReactToast'
import { Link } from 'react-router-dom'
import AxiosInstance from '../utils/AxiosInstance'
import { MdDeleteForever } from "react-icons/md";
import PageLoading from '../components/PageLoading'
function Cart() {
  const [cartItem, setCartItem] = useState([])
  const [waiting, setWaiting] = useState(false)
  const getItem = () => {
    AxiosInstance.get(`/api/cart/get-all?uid=${localStorage.getItem("uid")}`)
      .then((d) => setCartItem(d.data.result))
  }
  useEffect(() => {
    getItem()
  }, [getItem])
  const handleRemove = (uid) => {
    setWaiting(true)
    AxiosInstance.delete(`/api/cart/delete-one?uid=${uid}`)
      .then((d) => {
        setWaiting(false)
        handleSuccess(d.data.message)
      })
      .catch((e) => setWaiting(false))
    getItem()
  }
  var total = 0
  return (
    <>
      {
        waiting ? <section className='hero min-h-screen h-auto'>
          <div className='grid xl:grid-cols-3 grid-cols-1 h-full w-full px-6 gap-4 py-4 bg-slate-100'>
            <div className=' col-span-2 overflow-y-auto scrollbar-hide p-4 max-h-screen bg-white'>
              
              {/* Item Details */}
              {
                waiting ? <span className="loading loading-spinner loading-md text-slate-400 items-center"></span> : null
              }

              {
                cartItem.length > 0 ? cartItem.map((i, index) => (
                  <div className=' w-full min-h-48 h-auto flex items-center justify-between gap-4 px-4' key={index}>
                    <figure>
                      <img src={i.product_id.image_url} alt="" className='h-24 min-w-24' />
                    </figure>

                    <div className='w-full'>
                      <Link className='text-xs lg:text-sm font-semibold hover:text-primary' to={`/item/${i.product_id.url}?itemid=${i.product_id._id}`}>{i.product_id.description}</Link>
                      <p className='text-sm'>SELLER : Alam Bazaar</p>
                      <p className='text-md font-semibold'>₹{i.product_id.price}</p>
                      {/* {total+=i.product_id.price} */}
                      <p className='hidden'>{total += i.product_id.price}</p>
                      <button className='px-6 py-1 rounded-sm bg-primary mt-2 flex items-center ' onClick={() => handleRemove(i._id)}>Remove <MdDeleteForever className='text-xl' /></button>
                    </div>
                  </div>
                ))
                  :
                  <div className='flex flex-col md:flex-row items-center justify-evenly '>
                    <figure>
                      <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="" className='h-96 w-96' />
                    </figure>
                    <div>
                      <h1 className='text-2xl mb-6 font-semibold'>Your cart is empty</h1>
                      <Link className='px-10 py-2 bg-primary rounded-sm' to="/">Shop Now</Link>
                    </div>
                  </div>
              }

            </div>
            {/* Price Details */}
            <div className=' h-full w-full flex items-center flex-col gap-2 pb-3 bg-slate-50 rounded-sm'>
              <div className='h-12 w-full'>
                <h1 className='uppercase text-lg font-semibold text-slate-500 bg-slate-300 px-3 py-2'>Price Details</h1>
              </div>
              <div className='w-full px-3 py-3 flex flex-col gap-3'>
                <div className='flex items-center justify-between w-full'><p>Price({cartItem.length} items)</p> <p>₹{total}</p></div>
                <div className='flex items-center justify-between w-full'><p>Discount </p> <p>₹0.00</p></div>
                <div className='flex items-center justify-between w-full'><p>Coupons for you</p> <p>₹0.00</p></div>
                <div className='flex items-center justify-between w-full'><p>Platform fee</p> <p>+₹3</p></div>
                <div className='flex items-center justify-between w-full'><p>Delivery Charges</p> <p><del>₹40</del> Free</p></div>
                <hr />
                <div className='flex items-center justify-between w-full'><p className='text-lg font-semibold'>Total </p> <p className='text-lg font-semibold'>₹{cartItem.length > 0 ? total + 3 : total}</p></div>
                <hr />
                <p className='text-primary'>You will save ₹0 on this order</p>
              </div>
              {
                cartItem.length > 0 ? <button className='w-1/2 btn btn-primary'>Place Order</button> : <button className='w-1/2 btn btn-primary disabled cursor-not-allowed'>Place Order</button>
              }

            </div>

          </div>
        </section>
          :
          <PageLoading />
      }
    </>
  )
}

export default Cart