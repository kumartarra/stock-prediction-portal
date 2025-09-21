import React from 'react'
import Button from './Button'
import Footer from './Footer'

const Main = () => {
  return (
    <>
    <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>Stock Prediction App</h1>
            <p className='text-light lead'>Stock market prediction is the act of trying to determine the future value of a company stock or other financial instrument traded on an exchange.
                 The successful prediction of a stock's future price could yield significant profit.</p>
                 <Button text="Explore Now" class="btn-outline-info" url='/dashboard'/>
        </div>
    </div>
  
    </>
  )
}

export default Main
