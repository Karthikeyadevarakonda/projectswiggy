
import "@fortawesome/fontawesome-free/css/all.min.css";





// eslint-disable-next-line react/prop-types
const Card = ({info}) => {
  // eslint-disable-next-line react/prop-types
  const {name,costForTwo,cloudinaryImageId,avgRating,totalRatingsString} = info;


  
  return (
    <div className="shadow p-4 w-[48%] sm:w-[48%] h-64 sm:h-64 md:h-90  md:w-[48%] lg:w-[24%] bg-white rounded ">
        <div className="w-35 h-30 md:w-55 md:h-40 rounded  overflow-hidden m-auto shadow">
            <img src={cloudinaryImageId} className="w-full h-full rounded shadow" alt="ProductImage" />
        </div>
       
        <div className="mt-2">
        <h4 className="ratingAndCount text-xs md:text-lg">{avgRating} <i className="fa-solid fa-star text-yellow-500 text-sm md:text-lg"></i> | {totalRatingsString}</h4>
            <h3 className="font-bold md:text-lg truncate">{name}</h3>
            <p className="truncate md:text-lg text-gray-400">{costForTwo}</p>
            <button className="w-full border border-green-500 text-green-500 rounded  mt-2 sm:mt-4 md:mt-3 h-7 md:h-8 text-base">ADD TO CART</button>
        </div>
    </div>
  )
}

export default Card
