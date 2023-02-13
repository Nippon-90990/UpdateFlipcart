import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart , AiFillCloseCircle , AiFillMinusCircle , AiFillPlusCircle} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import dynamic from "next/dynamic";

const Navbar = () => {
    const toogleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }

        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }

    const ref = useRef()

  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-xl'>
        <div className="logo mx-10 mt-1">
            <Link href={'/'}><Image width={100} height={50} src='/flipcart.jpg' alt='' /></Link>
        </div>
        <div class="nav">
            <ul className='flex items-center space-x-7 font-bold md:text-xl'>
                <Link href={'/TShirts'}><li>T - Shirts</li></Link>
                <Link href={'/Hoodies'}><li>Hoodies</li></Link>
                <Link href={'/Stickers'}><li>Stickers</li></Link>
                <Link href={'/Headphones'}><li>Headphones</li></Link>
                <Link href={'/Games'}><li>Games</li></Link>
            </ul>
        </div>
        <div  className='cart absolute right-0 mx-7 top-12 flex'>
            <Link href={'/Login'}><MdAccountCircle className='text-3xl mx-2'/></Link>
            <AiOutlineShoppingCart onClick={toogleCart} className='text-3xl'/>   {/* text-xl md:text-3xl     IF YOU WANT */}
        </div>


        <div ref={ref} className='w-72 h-full sideCart absolute top-0 right-0 bg-orange-300 px-10 py-10 transform transition-transform translate-x-full'>
            <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
            <span onClick={toogleCart} className='absolute top-5 right-5 cursor-pointer text-2xl text-orange-500'><AiFillCloseCircle /></span>
            <ol className='list-decimal font-semibold'>
                <li>
                    <div className='item flex my-5'>
                        <span className='w-2/3 font-semibold'>T - Shirts</span>
                        <span className='w-1/3 flex items-center justify-center font-semibold text-lg'> <AiFillMinusCircle className='cursor-pointer text-orange-500 text-sm'/> <span className='mx-2'>1</span> <AiFillPlusCircle className='cursor-pointer text-orange-500 text-sm'/> </span>
                    </div>
                </li>

                <li>
                    <div className='item flex my-5'>
                        <span className='w-2/3 font-semibold'>T - Shirts</span>
                        <span className='w-1/3 flex items-center justify-center font-semibold text-lg'> <AiFillMinusCircle className='cursor-pointer text-orange-500 text-sm'/> <span className='mx-2'>1</span> <AiFillPlusCircle className='cursor-pointer text-orange-500 text-sm'/> </span>
                    </div>
                </li>

                <li>
                    <div className='item flex my-5'>
                        <span className='w-2/3 font-semibold'>T - Shirts</span>
                        <span className='w-1/3 flex items-center justify-center font-semibold text-lg'> <AiFillMinusCircle className='cursor-pointer text-orange-500 text-sm'/> <span className='mx-2'>1</span> <AiFillPlusCircle className='cursor-pointer text-orange-500 text-sm'/> </span>
                    </div>
                </li>

                <li>
                    <div className='item flex my-5'>
                        <span className='w-2/3 font-semibold'>T - Shirts</span>
                        <span className='w-1/3 flex items-center justify-center font-semibold text-lg'> <AiFillMinusCircle className='cursor-pointer text-orange-500 text-sm'/> <span className='mx-2'>1</span> <AiFillPlusCircle className='cursor-pointer text-orange-500 text-sm'/> </span>
                    </div>
                </li>

                <li>
                    <div className='item flex my-5'>
                        <span className='w-2/3 font-semibold'>T - Shirts</span>
                        <span className='w-1/3 flex items-center justify-center font-semibold text-lg'> <AiFillMinusCircle className='cursor-pointer text-orange-500 text-sm'/> <span className='mx-2'>1</span> <AiFillPlusCircle className='cursor-pointer text-orange-500 text-sm'/> </span>
                    </div>
                </li>
            </ol>
            <button class="flex mx-auto mt-16 text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg"><BsFillBagCheckFill className='m-1'/> Checkout</button>
        </div>


    </div>
  )
}

export default dynamic (() => Promise.resolve(Navbar), {ssr: false})
