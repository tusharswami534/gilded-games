import UniSwapBox from '../assets/images/png/uniswap-box.png'
import { UniIcon } from '../utils/icon'
const UniSwap = () => {
  return (
    <div className='bg-[url("./assets/images/png/uniswamp-bg-image.png")] bg-cover bg-no-repeat pt-[300px] pb-[220px] max-lg:py-16 max-md:py-10 max-sm:py-6 relative'>
      <div className='absolute h-[539px] rounded-tl-full rounded-bl-full max-lg:hidden bg-white/10 w-[50%] right-0 top-[25%]'></div>
      <div className='max-w-[1352px] mx-auto px-4 flex items-center justify-between max-sm:flex-wrap gap-10 max-sm:gap-8'>
        <div className='w-full max-lg:justify-center max-lg:items-center max-lg:flex flex flex-col'>
        <h2 className="text-5xl font-bold text-white pb-[59px] max-sm:pb-5 max-lg:pb-12 max-md:pb-10 leading-[61.2px] max-lg:text-[40px] max-md:text-4xl max-sm:text-3xl max-lg:leading-[50px] max-md:leading-[40px]"> <span className="bg-gradient-to-r from-[#7f5dc9] to-[#5b79dc] bg-clip-text text-transparent">$GILD </span> Token Info</h2>
        <ul className='list-disc pl-6 max-lg:w-max max-lg:mx-auto'>
             <li className='josefin text-xl max-md:text-lg max-md:pb-2 max-sm:pb-1 leading-[25.5px] text-white pb-[11px]'>100,000+ Airdrop</li>
             <li className='josefin text-xl max-md:text-lg max-md:pb-2 max-sm:pb-1 leading-[25.5px] text-white pb-[11px]'>NFT $GILD giveaway</li>
             <li className='josefin text-xl max-md:text-lg max-md:pb-2 max-sm:pb-1 leading-[25.5px] text-white pb-[11px]'>Announcement and Games</li>
          </ul>
          <button className='text-white mt-[30px] cursor-pointer hover:scale-110 transition-all duration-300 flex gap-2.5 items-center text-2xl leading-[24px] rounded-[79px] max-w-max whitespace-nowrap py-3.5 px-[19.5px] common-btn'> <UniIcon/> Buy Now</button>
        </div>
        <img src={UniSwapBox} alt="gold-box" className='h-[365px] max-lg:h-72 max-md:h-60 object-cover pointer-events-none mr-[188px] max-xl:mr-0 max-sm:mx-auto' />
      </div>
    </div>
  )
}

export default UniSwap