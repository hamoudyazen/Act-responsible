import React from 'react'
import Pageone from '../components/Pageone'
import Pagetwo from '../components/Pagetwo'
import Pagethree from '../components/Pagethree'
import Pagefour from '../components/Pagefour'
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <div>
            <Pageone></Pageone>
            <Pagetwo></Pagetwo>
            <Pagefour></Pagefour>
            <Pagethree></Pagethree>
            <Footer></Footer>
        </div>
    )
}

export default HomePage
