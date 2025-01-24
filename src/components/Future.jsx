import OuotesOpen from '../assets/images/png/quotes-open.png'
import OuotesClose from '../assets/images/png/quotes-close.png'

const Future = () => {
    return (
        <div className="bg-[url('./assets/images/png/future-bg-image.png')] flex justify-center py-[228.5px] max-lg:py-[170px] max-md:py-24 px-5 max-sm:py-16">
            <div className="max-w-[940px] mx-auto relative">
                <h3 className="text-white text-[40px] leading-[62.4px] text-center max-lg:text-4xl max-md:text-3xl max-lg:leading-[50px] max-md:leading-[40px] "> <span className=' relative'>Gilded <img src={OuotesOpen} alt="Quotes open" className=' absolute left-[-80%] top-[-70px] max-lg:left-0 max-lg:top-[-100px] max-md:max-w-[80px] max-md:top-[-80px] max-sm:max-w-[60px] max-sm:top-[-60px]' /></span> Games is a new type of gaming platform, partially owned and operated by its players. Earn Gild tokens by playing and use them to decide the future of the <span className=' relative'>game! <img className=' absolute bottom-[-70px] right-[-110px] max-lg:bottom-[-100px] max-lg:right-0 max-md:max-w-[80px] max-md:bottom-[-80px] max-sm:max-w-[60px] max-sm:bottom-[-60px]' src={OuotesClose} alt="Quotes close" /> </span> </h3>
            </div>
        </div>
    )

}
export default Future