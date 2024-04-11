import React from "react";

const OutfitCard = ({ outfit, id }) => {
  var articleType = "Not Defined";
  switch (id) {
    case 0:
      articleType = "Top Wear";
      break;
    case 1:
      articleType = "Bottom Wear";
      break;
    case 2:
      articleType = "Foot Wear";
      break;
    case 3:
      articleType = "Accessories";
      break;
    default:
      break;
  }

  return (
    <div className="bg-white border border-white rounded-lg shadow-md hover:shadow-lg hover:border-gray-300 transition-all duration-300 ease-in-out">
      <div className="relative">
        <img
          src={outfit.product_display_name}
          alt={outfit.brand_name}
          className="w-full h-64 object-cover rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{outfit.product_display_name}</h3>
        <p className="text-gray-500">Brand: {outfit.brand_name}</p>
        <p className="text-gray-500">Color: {outfit.color}</p>
        {/* <p className="text-gray-500">MasterCategory: {outfit.master_category}</p>
        <p className="text-gray-500">SubCategory: {outfit.sub_category}</p> */}
        <p className="text-gray-500">ArticleType: {outfit.article_type}</p>
        <p className="text-gray-500">HardCodedType: {articleType}</p>
      </div>
    </div>
  );
};

export default OutfitCard;