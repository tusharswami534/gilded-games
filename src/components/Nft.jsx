import NftImage from '../assets/images/png/nft-image.png'
import PlayToEran from '../components/PlayToEran.jsx'

export const Nft = () => {
    return (
        <>
            <div id="about" className="bg-[url('./assets/images/png/nft-bg-image.png')] bg-no-repeat bg-center bg-cover lg:min-h-[1079px] max-lg:py-24 max-md:py-16 max-sm:py-12 flex items-center justify-center px-5">
                <div className="max-w-[1205px] w-full flex items-center max-lg:flex-col max-lg:justify-center justify-between gap-y-10 max-sm:gap-y-5">
                    <div className="lg:max-w-[649px] ">
                        <h2 className="text-5xl font-bold text-white pb-[14px] leading-[61.2px] max-lg:text-[40px] max-md:text-4xl max-sm:text-3xl max-lg:leading-[50px] max-md:leading-[40px]"><span className="bg-gradient-to-r from-[#7f5dc9] to-[#5b79dc] bg-clip-text text-transparent">NFT</span>  Utility </h2>
                        <p className="text-white max-lg:text-center text-xl max-md:text-lg max-sm:leading-[30px] max-sm:text-base font-normal leading-[35.9px] font-poppins opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin curabitur iaculis id cursus dignissim. Volutpat placerat volutpat commodo id ultricies volutpat vestibulum. Egestas venenatis dignissim fames maecenas. Blandit orci consectetur mauris, ipsum viverra quisque. Vulputate sollicitudin tellus eget consequat lectus dignissim integer in vitae. Commodo integer dis tortor cras maecenas sit. Et nunc et platea elementum, cursus morbi. Placerat molestie nibh parturient lectus magna sed fusce diam urna. Quam magna duis imperdiet posuere iaculis.</p>
                    </div>
                    <img className="max-w-[369px] w-full" src={NftImage} alt="nft-image" />
                </div>
            </div>
            <PlayToEran />
        </>
    )
}
