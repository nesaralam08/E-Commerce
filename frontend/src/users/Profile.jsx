import React from 'react'

function Profile() {
  return (
    <>
      <div className='bg-white shadow-md lg:col-span-2 p-6'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl'>Personal information</h2>
            <div>
              <input type="text" placeholder="Full name" name="name" className="input input-bordered w-full max-w-xs" value={userdata.name} onChange={handleChange} />
            </div>
            <div className='flex flex-col gap-3'>
              <h4 className='text-md'>Your Gender</h4>
              <select className="select select-bordered w-full max-w-xs" name='gender' value={userdata.gender} onChange={handleChange}>
                <option disabled>select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Custom">Custom</option>
              </select>
            </div>
            <h2 className='text-md'>Email address</h2>
            <div>
              <input type="text" placeholder="Email address" name='email' disabled className="input input-bordered w-full max-w-xs" onChange={handleChange} value={userdata.email} />
            </div>
            <h2 className='text-md'>Mobile number</h2>
            <div>
              <input type="text" placeholder="Mobile number" name='mobile_no' className="input input-bordered w-full max-w-xs" onChange={handleChange} value={userdata.mobile_no} />
            </div>
            <button className='btn btn-primary' type='submit'>Save Changes</button>

          </div>
        </form>
      </div>
    </>
  )
}

export default Profile