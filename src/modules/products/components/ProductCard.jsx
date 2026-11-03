import { useNavigate } from "react-router";
import productHook from "../hook/productHook";
import { useAuthContext } from "../../../context/Auth.context";

const ProductCard = ({ product }) => {
    const navigate=useNavigate()
    const {getById,removeHandle}=productHook()
    const context = useAuthContext()
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-600 shadow">
          {product.sizes.reduce((total, item) => total + item.stock, 0)} In Stock
        </span>
      </div>

      {/* Product Details */}
      <div className="space-y-4 p-5">

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {product.title}
          </h2>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500">
            {product.description}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-extrabold text-indigo-600">
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: product.price.currency
            }).format(product.price.amount)}
          </span>
        </div>

        {/* Available Sizes */}
        <div>
          <p className="mb-2 text-sm font-semibold text-gray-700">
            Available Sizes
          </p>

          <div className="flex flex-wrap gap-2">
            {product.sizes.map((item) => (
              <div
                key={item._id}
                className="rounded-lg border border-indigo-100 bg-indigo-50 px-3 py-2 text-sm"
              >
                <span className="font-bold text-indigo-700">
                  {item.size}
                </span>

                <span className="ml-2 text-gray-500">
                  ({item.stock})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
        onClick={()=>{
            navigate(`/main/product/${product._id}`)
            
        }}
          className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
        >
          View Product
        </button>
        {
          context?.user?.role==='seller'&&
          <button
          onClick={()=>{
            console.log('removeed');
            removeHandle(product._id)
            
          }}
          className="w-full rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
        >
          Remove Product
        </button>
        }
      </div>
    </div>
  );
};

export default ProductCard;