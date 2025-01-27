
import RoadmapLine from '../assets/images/png/roadmap-line.png'
import { ROADMAP_LIST } from '../utils/helper'
const Roadmap = () => {
  return (

    <div id='nodes' className="max-w-[1920px] mx-auto pt-[92px] max-lg:pt-24 max-md:py-16 max-sm:py-12 pb-[75px] w-full px-5">
      <h2 className="text-5xl font-bold pb-[128px] max-lg:pb-24 max-md:pb-16 max-sm:pb-10 text-white leading-[61.2px] max-lg:text-[40px] max-md:text-4xl max-sm:text-3xl max-lg:leading-[50px] max-md:leading-[40px] text-center"> <span className="text-[#6C6BD2]">Road</span>map</h2>
      <div className="max-w-[1620px] relative max-lg:justify-center max-lg:items-center max-lg:flex w-full ml-auto">
        <div className='w-full max-lg:relative max-lg:max-w-[760px] max-md:max-w-[375px] lg:mx-auto'>
          <div className="flex max-lg:hidden absolute max-w-[1620px] w-full right-0">
            <div className="max-w-[972px] w-full pb-0.5 bg-white/20"></div>
            <img src={RoadmapLine} alt="roadmap line" />
          </div>
          <div className='w-0.5 h-[75%] absolute bg-white/20 left-[25.5%] max-md:left-[0%] max-[460px]:left-[10.5%] top-0 lg:hidden'></div>
          <div className='max-w-[1246px] w-full lg:pt-[69px] flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-y-10 justify-between'>
            {ROADMAP_LIST.map((item, index) => (
              <div className=' relative max-w-[300px] max-[400px]:max-w-[260px] max-lg:ml-[100px] w-full' key={index}>
                <div className='absolute top-[-100px] w-[65px] h-[62px] rounded-full max-lg:left-[-120px] max-[460px]:left-[-80px] max-[460px]:size-14 max-lg:top-0 roadmap-item'> </div>
                <p className='text-lg font-semibold font-poppins text-white leading-[23.22px] '>{item.step}</p>
                <h3 className='text-white font-bold font-poppins text-4xl leading-[46.44px] max-lg:text-3xl max-md:text-2xl max-sm:text-xl'>{item.question}</h3>
                <ul className='text-white/70 list-inside list-disc flex flex-col gap-3 pt-3'>
                  {item.list.map((point, index) => (
                    <li className='text-lg leading-[18.75px] font-normal font-montserrat' key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Roadmap