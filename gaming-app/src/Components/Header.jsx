import React, { useContext, useEffect, useState } from 'react'
import logo from "../assets/images/steam-logo.png"
import { CiSearch } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import { ThemeContext } from '../Context/ThemeContext';

const Header = () => {
    const [toggle, setToggle] = useState(true);
    const { theme, setTheme } = useContext(ThemeContext);
    useEffect(() => {

    }, [])
    return (
        <div className='flex items-center p-3'>
            <img src={logo} width={60} height={60} />
            <div className='flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full'>
                <CiSearch />
                <input type='text' placeholder='Search Games' className='px-2 bg-inherit dark:bg-cyan-500 outline-none' />
            </div>
            <div>
                {theme == 'light' ? (
                    <IoMoon className='text-[35px] bg-slate-200 text-black p-1 rounded-full' onClick={() => setTheme('dark')} />) :
                    (<IoSunnySharp className='text-[35px] bg-slate-200 text-black p-1 rounded-full' onClick={() => setTheme('light')} />)}
            </div>
        </div>

    )
}

export default Header