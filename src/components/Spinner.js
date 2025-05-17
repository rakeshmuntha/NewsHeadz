import React from 'react'
import spin from './spin.gif'

const Spinner = () => {

    return (
        <div className='text-center'>
            <img style={{ height: '50px', width: '50px' }} src={spin} alt='loading' />
        </div>
    )

}

export default Spinner