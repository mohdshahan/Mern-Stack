import React from 'react'

const Notfound = () => {
  return (
    <div className='flex justify-center items-center h-screen'>

        <div className='text-center space-y-6'>
            <h1 className='text-9xl font-bold'>404</h1>
            <p className='text-2xl'>Page Not Found</p>
            <button className='bg-black text-white rounded px-3 py-2'>
                Back To Home
            </button>


        </div>
    </div>
  )
}

export default Notfound;