import { POWERED_LIST } from "../utils/helper"

const PowerBy = () => {
  return (
    <div className="py-[120px] max-lg:py-10 px-4">
      <h2 className="text-5xl font-bold text-white leading-[61.2px] max-lg:text-[40px] max-md:text-4xl max-sm:text-3xl max-lg:leading-[50px] max-md:leading-[40px] text-center pb-[68px] max-lg:pb-14 max-md:pb-12 max-sm:pb-8"> <span className="bg-gradient-to-r from-[#7f5dc9] to-[#5b79dc] bg-clip-text text-transparent">Powered </span> By: </h2>
      <div className="max-w-[1320px] mx-auto flex items-center max-lg:flex-wrap gap-4 max-sm:gap-2 max-lg:justify-center justify-between">
        {POWERED_LIST.map((item, index) => (
          <div className="max-w-[312px] max-sm:max-w-[150px] flex justify-center items-center powered-card w-full p-[1px] max-sm:rounded-xl rounded-3xl" key={index}>
            <div className="powered-card-items transition-all max-sm:justify-center duration-300 cursor-pointer h-full rounded-3xl min-h-[212px] max-sm:min-h-[144px] max-sm:rounded-xl flex justify-center items-center w-full">
              {index && index === 2 ? (
                <img className="w-full h-full max-w-[247px] max-sm:max-w-[120px] mx-auto" src={item} alt={item.title} />
              ) : (
                <span className="sm-svgs w-full flex justify-center">{item}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PowerBy