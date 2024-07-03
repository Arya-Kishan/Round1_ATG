import React from 'react'
import CategoryPage from './CategoryPage'
import AddPage from './AddPage'
import TestimonialPage from './TestimonialPage'
import Footer from './Footer'
import Banner from './Banner'
import End from './End'

const Home = () => {
    return (
        <div>
            <Banner />
            <CategoryPage />
            <AddPage />
            <TestimonialPage />
            <End />
            <Footer />
        </div>
    )
}

export default Home