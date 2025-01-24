import Heading from "../common/Heading"
import NftImage from '../assets/images/png/nft-image.png'
import PlayToEran from '../components/PlayToEran.jsx'

export const Nft = () => {
    return (
        <>
            <div className="bg-[url('./assets/images/png/nft-bg-image.png')] bg-no-repeat bg-center bg-cover lg:min-h-[1079px] max-md:py-24 max-sm:py-16 flex items-center justify-center px-5">
                <div className="max-w-[1205px] w-full flex items-center max-lg:flex-col max-lg:justify-center justify-between gap-y-10 max-sm:gap-y-5">
                    <div className="lg:max-w-[649px] ">
                        <Heading blueHeading={'NFT'} myClass={'max-lg:text-center'} customHeading={'Utility'} />
                        <p className="text-white max-lg:text-center text-xl max-md:text-lg max-sm:leading-[30px] max-sm:text-base font-normal leading-[35.9px] font-poppins opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin curabitur iaculis id cursus dignissim. Volutpat placerat volutpat commodo id ultricies volutpat vestibulum. Egestas venenatis dignissim fames maecenas. Blandit orci consectetur mauris, ipsum viverra quisque. Vulputate sollicitudin tellus eget consequat lectus dignissim integer in vitae. Commodo integer dis tortor cras maecenas sit. Et nunc et platea elementum, cursus morbi. Placerat molestie nibh parturient lectus magna sed fusce diam urna. Quam magna duis imperdiet posuere iaculis.</p>
                    </div>
                    <img className="max-w-[369px] w-full" src={NftImage} alt="nft-image" />
                </div>
            </div>
            <PlayToEran />
        </>
    )
}
