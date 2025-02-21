
import "@fortawesome/fontawesome-free/css/all.min.css";


const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/your-cloud-name/image/upload/";




// eslint-disable-next-line react/prop-types
const Card = ({info}) => {
  // eslint-disable-next-line react/prop-types
  const {name,costForTwo,cloudinaryImageId,avgRating,totalRatingsString} = info;
  console.log("Image URL:", CLOUDINARY_BASE_URL + cloudinaryImageId);

  
  return (
    <div className="shadow p-4 w-[48%] sm:w-[48%] h-64 sm:h-64 md:h-90  md:w-[48%] lg:w-[24%] bg-white rounded ">
        <div className="w-full h-[50%] md:h-[55%] ">
            <img src={CLOUDINARY_BASE_URL + cloudinaryImageId} className="w-full h-full " alt="ProductImage" />
        </div>
        <div className="mt-2">
        <h4 className="ratingAndCount text-xs md:text-lg">{avgRating} <i className="fa-solid fa-star text-yellow-500 text-sm md:text-lg"></i> | {totalRatingsString}</h4>
            <h3 className="font-bold md:text-lg truncate">{name}</h3>
            <p className="truncate md:text-lg text-gray-400">{costForTwo}</p>
            <button className="w-full border border-green-500 text-green-500 rounded  mt-3 sm:mt-4 md:mt-3 h-7 md:h-8 text-base">ADD TO CART</button>
        </div>
    </div>
  )
}

export default Card
