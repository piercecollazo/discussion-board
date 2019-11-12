import React, { Component } from 'react'
import Banner from '../../assets/images/banner.jpg'

const styles = {
    bannerStyle: {
        width:100,
        height: 20
    }
}

export default class Header extends Component {
    render() {
        return (
            <div className='banner' style={styles.bannerStyle}>
                <img src={Banner} alt='' />
            </div>
        )
    }
}
