import { useState } from 'react'
import PageLogo from '../assets/images/png/page-logo.png'
import { HEADER_LIST } from '../utils/helper'
import { Discord } from '../utils/icon'

const Header = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
    document.body.style.overflow = open ? '' : 'hidden'
  }

  const closeHandler = () => {
    setOpen(false)
  }

  return (
    <div className="bg-black/80">
      <div className="bg-opacity-0">
        <div className="max-w-[1355px] flex items-center justify-between py-5 max-lg:px-5 px-4 mx-auto w-full">
          <a className='max-md:max-w-[170px]' href="/"> <img src={PageLogo} alt="page-logo" /> </a>
          <div className={`flex gap-[29px] max-xl:gap-5 max-lg:fixed max-lg:top-0 max-lg:-right-full max-lg:h-full max-lg:w-full max-lg:justify-center max-lg:items-center transition-all duration-300 max-lg:flex-col max-lg:bg-black max-lg:z-10 ${open ? 'max-lg:!right-0' : ''}`}>
            <div className='flex gap-10 max-xl:gap-6 max-lg:flex-col items-center' >
              {HEADER_LIST.map((item, index) => (
                <a onClick={closeHandler} href={item.link} key={index} className="text-white !whitespace-nowrap text-[22px] font-semibold ">{item.title}</a>
              ))}
            </div>
            <button onClick={closeHandler} className='text-white cursor-pointer hover:scale-110 transition-all duration-300 flex gap-2.5 items-center text-2xl leading-[24px] rounded-[79px] py-3.5 px-[34px] common-btn'><Discord />Discord</button>
          </div>
          <button onClick={handleClick} className='lg:hidden size-6 relative z-20 overflow-hidden flex flex-col items-center justify-between'>
            <span className={`transition-all duration-300 w-6 h-0.5 bg-white rounded-lg ${open ? ' translate-x-10' : ''}`}></span>
            <span className={`transition-all duration-300 w-6 h-0.5 bg-white rounded-lg relative after:absolute after:top-0 after:left-0 after:w-6 after:h-0.5 after:bg-white after:rounded-lg ${open ? 'after:rotate-90 rotate-45' : ''}`}></span>
            <span className={`transition-all duration-300 w-6 h-0.5 bg-white rounded-lg ${open ? ' -translate-x-10' : ''}`}></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header