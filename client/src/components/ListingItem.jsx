import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function ListingItem({ listing }) {
  const {
    _id,
    imageUrls,
    name,
    address,
    description,
    offer,
    discountPrice,
    regularPrice,
    bedrooms,
    bathrooms,
    type,
  } = listing;

  const image =
    imageUrls[0] ||
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJDVyUM1MgIX2q0bec5HnG8TnpQDTSVt58w&usqp=CAU";
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[260px]">
      <Link to={`/listing/${_id}`}>
        <img
          src={image}
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="text-lg font-semibold text-slate-700 truncate">
            {name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-sm text-gray-600 truncate w-full">{address}</p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          <p className="text-slate-500 mt-2 font-semibold">
            R${" "}
            {offer
              ? discountPrice.toLocaleString("en-US")
              : regularPrice.toLocaleString("en-US")}
            {type === "rent" && "/month"}
          </p>
          <div className="text-slate-700 font-bold text-xs flex gap-4">
            <div className="">
              {bedrooms > 1 ? `${bedrooms} beds` : `${bedrooms} bed`}
            </div>
            <div className="">
              {bathrooms > 1 ? `${bathrooms} baths` : `${bathrooms} bath`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
