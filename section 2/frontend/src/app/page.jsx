import React from 'react'

const Home = () => {

  const cartItems = 10;
  const displayMessage = (msg) => {
    return (
      <div className=' border border-red bg-red-100 p-3 rounded-md w-1/2 mx-auto my-3'>
        <span className='text-red-500 font-bold'>{msg}</span>

      </div>

    )
  }

  return (
    <div>
      {displayMessage('some message')}
      <h1 style={{ color: 'blue', textAlign: 'center', fontSize: 50 }}>My Home Page</h1>
      <h2 className='text-2xl text-center'>cart items : {cartItems + 5} </h2>
      <button className='btn'>My Button</button>
      <img src="/next.svg" alt="" />
    </div>
  )
}


export default Home;