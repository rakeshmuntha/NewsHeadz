import React, { Component } from 'react'
import spin from './spin.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img style={{height: '50px', width: '50px'}} src={spin} alt='loading'/>
            </div>
        )
    }
}

export default Spinner