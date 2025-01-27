import { GILDED_INFO_LIST } from "../utils/helper";

const GIldedInfo = () => {
    return (
        <>
            <div className='bg-[url("./assets/images/png/gilded-info-bg-image.png")] bg-no-repeat bg-cover pt-[130px] pb-[136px] max-lg:py-16 max-md:py-10 max-sm:py-6 mt-8 max-lg:mt-0'>
                <div className='max-w-[1352px] mx-auto px-4'>
                    <h2 className="text-5xl font-bold text-white text-center pb-[59px] leading-[61.2px] max-lg:text-[40px] max-md:text-4xl max-sm:text-3xl max-lg:leading-[50px] max-md:leading-[40px]"> <span className="bg-gradient-to-r from-[#7f5dc9] to-[#5b79dc] bg-clip-text text-transparent">$GILD </span> Token Info</h2>
                    <div className='flex items-center flex-wrap -mx-3 justify-center'>
                        {GILDED_INFO_LIST.map(function (item, i) {
                            return (
                                <div key={i} className='w-1/4 max-md:w-1/3 max-sm:w-1/2 px-3 max-sm:px-2 max-md:pt-6 max-sm:pt-4'>
                                    <div className='bg-gradient-to-b h-full from-white/20 to-white/10 p-[1px] rounded-[13px]'>
                                        <div className='bg-gradient-to-b from-[#262626] to-[#040404] h-[181px] max-sm:h-36 hover:bg-gradient-to-br cursor-pointer hover:from-[#7f5dc9] hover:to-[#1BABFE] max-h-[181px] flex items-center justify-center flex-col py-[18px] rounded-[13px] hover:shadow-[0px_8px_30px_0px] hover:shadow-[#1BABFE]'>
                                            <img src={item.logo} alt='images' className='h-[70px] max-lg:h-12 max-sm:h-10 pointer-events-none' />
                                            <p className='font-bold text-3xl max-lg:text-2xl max-sm:text-xl leading-[38.25px] text-white pt-[10px] pb-1 max-lg:pb-0 text-center'>{item.title}</p>
                                            <p className='text-lg max-lg:text-base max-sm:text-sm max-sm:leading-2 leading-[23px] text-white'>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default GIldedInfo;
