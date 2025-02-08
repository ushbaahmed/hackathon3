import Image from "next/image";

function Cart() {
  return (
    <main className="container mx-auto min-h-screen px-4 py-8">
      {/* Heading */}
      <h1 className="text-left text-4xl mb-8">Your shopping Cart</h1>

      {/* Desktop View */}
      <div className="hidden lg:grid grid-cols-3 gap-8 items-center border-b pb-4">
        {/* Column Headers */}
        <div className="font-semibold text-lg">Products</div>
        <div className="font-semibold text-lg text-center">Quantity</div>
        <div className="font-semibold text-lg text-right">Total</div>
      </div>

      {/* First Product */}
      <div className="grid lg:grid-cols-3 gap-8 items-center py-4 border-b">
        {/* Product Column */}
        <div className="flex items-center">
          <Image
            src="/cart/1.png"
            alt="Product"
            width={64}
            height={64}
            className="w-16 h-16 rounded object-cover mr-4"
          />
          <div>
            <p className="font-medium text-base">Product Name</p>
            <p className="text-sm text-gray-500">Short description of the product.</p>
            <p className="text-sm font-semibold">£100</p>
          </div>
        </div>

        {/* Quantity Column */}
        <div className="text-center lg:text-center">
          <p className="text-lg">1</p>
        </div>

        {/* Total Column */}
        <div className="text-right lg:text-right">
          <p className="text-lg font-semibold">£100</p>
        </div>
      </div>

      {/* Second Product */}
      <div className="grid lg:grid-cols-3 gap-8 items-center py-4 border-b">
        {/* Product Column */}
        <div className="flex items-center">
          <Image
            src="/cart/2.png"
            alt="Product"
            width={64}
            height={64}
            className="w-16 h-16 rounded object-cover mr-4"
          />
          <div>
            <p className="font-medium text-base">Another Product</p>
            <p className="text-sm text-gray-500">Another short description.</p>
            <p className="text-sm font-semibold">£110</p>
          </div>
        </div>

        {/* Quantity Column */}
        <div className="text-center lg:text-center">
          <p className="text-lg">1</p>
        </div>

        {/* Total Column */}
        <div className="text-right lg:text-right">
          <p className="text-lg font-semibold">£110</p>
        </div>
      </div>

      {/* Subtotal and Checkout */}
      <div className="mt-8">
        {/* Subtotal */}
        <div className="flex justify-end items-center">
          <p className="text-lg font-semibold">Subtotal: £210</p>
        </div>
        <p className="text-sm text-gray-500 mt-2 text-right">
          Taxes and shipping are calculated at checkout
        </p>
        {/* Checkout Button */}
        <div className="flex justify-center lg:justify-end">
          <button className="bg-black text-white px-6 py-3 mt-4">
            Go to Checkout
          </button>
        </div>
      </div>
    </main>
  );
}

export default Cart;
