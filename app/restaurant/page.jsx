import AboutOne from '@/components/AboutOne'
import AboutTwo from '@/components/AboutTwo'
import HeaderFour from '@/components/HeaderFour'
import RestaurantOne from '@/components/RestaurantOne'
import { restaurantOne } from '@/data'
import React from 'react'

function Restaurant() {
  return (
    <>
    <AboutTwo data={restaurantOne} order={true}/>
    <RestaurantOne />
    <HeaderFour />
    </>
  )
}

export default Restaurant