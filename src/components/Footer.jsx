import React from 'react'
import { InforLogo } from '../assets'
import { container } from '../utils/Constant'

const Footer = () => {
  return (
    <>
      <div className="border-t-2 border-gray-300">
        <div className={`${container} py-24`}>
          <div className="flex justify-between sm:items-center sm:flex-row flex-col gap-y-12">
            <div className="flex items-center gap-x-4">
              <img src={InforLogo} alt="logo" className="sm:w-[100px] w-[50px]"/>
              <h1 className="sm:text-4xl text-3xl font-bold">INCODE22</h1>
            </div>
            <div className="sm:w-auto w-full flex gap-x-6 sm:mx-0 mx-auto sm:justify-none justify-evenly">
              <a className="text-md font-normal">Facebook</a>
              <a className="text-md font-normal">Instagram</a>
              <a className="text-md font-normal">Twitter</a>
            </div>
          </div>
        </div>
        <p className="text-center py-12 text-sm font-normal text-gray-500">Created By Incode 2023</p>
      </div>
    </>
  )
}

export default Footer