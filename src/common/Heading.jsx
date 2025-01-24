const Heading = ({ blueHeading, customHeading, secondBlueHeading, myClass }) => {
    return (
        <h2 className={`text-5xl font-bold text-white leading-[61.2px] max-lg:text-[40px] max-md:text-4xl max-sm:text-3xl max-lg:leading-[50px] max-md:leading-[40px] ${myClass}`}><span className="text-[#6C6BD2]">{blueHeading}</span> {customHeading} <span className="text-[#6C6BD2]">{secondBlueHeading}</span></h2>
    )
}

export default Heading