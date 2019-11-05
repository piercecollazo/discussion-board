import React, { Component } from 'react'
import Banner from '../../assets/images/banner.jpg'

const styles = {

}

export default class Header extends Component {
    render() {
        return (
            <div className='banner'>
                <img src={Banner} alt='' />
            </div>
        )
    }
}
