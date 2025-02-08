import Image from "next/image";
import products from "../Data/products";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";


const Products: React.FC = () => {
    return (
        <main className="min-h-screen overflow-x-hidden sm:overflow-x-hidden bg-white">
            {/* Banner Section */}
            <div className="relative w-full">
                <Image
                    src="/productsBanner.png" 
                    alt="All Products Banner"
                    layout="responsive"
                    width={1600} // 100% width for all screen sizes
                    height={400} // Default height for larger screens
                    className="object-cover sm:h-[500px]" // Increased height for mobile screens
                />
                {/* Banner Heading */}
                <h1 className="absolute inset-0 flex items-center justify-start text-4xl md:text-6xl text-white px-4 py-2 
        sm:bottom-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 md:bottom-8 md:left-8 md:transform-none md:translate-x-0 md:translate-y-0 ">
                    All Products
                </h1>
            </div>


            <div className="container mx-auto px-6 py-8">
                {/* Filters and Product Listing Grid */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Section */}
                    <aside className="hidden lg:block w-1/4  p-4">
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-4">Product Type</h2>
                            <ul className="space-y-2">
                                {["Furniture", "Homeware", "Sofas", "Light fittings", "Accessories"].map(
                                    (type) => (
                                        <li key={type} className="flex items-center gap-2">
                                            <input type="checkbox" id={type} className="form-checkbox" />
                                            <label htmlFor={type} className="text-gray-700">
                                                {type}
                                            </label>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-4">Prices</h2>
                            <ul className="space-y-2">
                                {["0 - 10", "101 - 250", "250+"].map((price) => (
                                    <li key={price} className="flex items-center gap-2">
                                        <input type="checkbox" id={price} className="form-checkbox" />
                                        <label htmlFor={price} className="text-gray-700">
                                            {price}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Designer</h2>
                            <ul className="space-y-2">
                                {["Robert Smith", "Liam Gallagher", "Biggie Smalls", "Thom Yorke"].map(
                                    (designer) => (
                                        <li key={designer} className="flex items-center gap-2">
                                            <input type="checkbox" id={designer} className="form-checkbox" />
                                            <label htmlFor={designer} className="text-gray-700">
                                                {designer}
                                            </label>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </aside>

                    {/* Filters for Mobile */}
                    <div className="flex lg:hidden justify-center gap-5 items-center mb-4">
                        <button className="bg-gray-100 text-black w-[150px] px-6 py-3 flex items-center justify-between">
                            Filters <IoMdArrowDropdown className="ml-2 text-lg" />
                        </button>
                        <button className="bg-gray-100 text-black w-[150px] px-6 py-3 flex items-center justify-between">
                            Sorting <IoMdArrowDropdown className="ml-2 text-lg" />
                        </button>
                    </div>


                    {/* Products Grid */}
                    <section className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="p-4 transform transition"
                                >
                                    <Link href={"/products-details"}>
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={400}
                                            height={600}
                                            className="w-[500px] h-[48] transition transform hover:scale-110 duration-300 object-cover mb-4"
                                        />
                                    </Link>
                                    <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                                    <p className="text-lg text-gray-600 mt-2 mb-2">${product.price}</p>
                                </div>
                            ))}
                        </div>

                        {/* Load More / View Collection */}
                        <div className="flex justify-center mt-8">
                            <button className="bg-gray-200 text-black hover:text-white px-8 py-3 hover:bg-gray-700 transition transform duration-300">
                                Load More
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Products;
