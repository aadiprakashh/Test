const Payment = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* <div className="max-w-4xl mx-auto"> */}
{/* header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Process Payment
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Complete payment for dental services
              </p>
            </div>{" "}
            {/* <img
              src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
              alt="Clinic Logo"
              className="h-10"
            /> */}
          </div>

{/* patient info */}
          <div className="bg-white shadow rounded-lg mb-8 p-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Invoice Details
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Invoice ID:</span>{" "}
                    <span className="font-medium">INV-20250301-001</span>
                  </div>
                  <div className="flex justify-between">
                    {" "}
                    <span className="text-gray-500">Date:</span>
                    <span>March 1, 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Status:</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Partially Paid
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Patient Information
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    {" "}
                    <span className="text-gray-500">Name:</span>
                    <span>John Smith</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Patient ID:</span>
                    <span>PT-10234</span>
                  </div>
                  <div className="flex justify-between">
                    {" "}
                    <span className="text-gray-500">Insurance:</span>
                    <span>Delta Dental #45678</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

<div className="grid  grid-cols-2 gap-7">
{/* method info */}
          <div className="bg-white shadow rounded-lg mb-8 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">
              Payment Method
            </h2>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <button className="!rounded-button flex flex-col items-center justify-center px-1 py-1 border-2 border-custom bg-custom bg-opacity-5 hover:bg-opacity-10">
                <i className="fas fa-money-bill-wave text-2xl text-custom mb-2"></i>
                <span className="text-sm font-medium">Cash</span>
              </button>
              <button className="!rounded-button flex flex-col items-center justify-center px-1 py-1 border-2 border-gray-200 hover:border-custom hover:bg-custom hover:bg-opacity-5">
                <i className="fas fa-credit-card text-2xl text-gray-400 mb-2"></i>
                <span className="text-sm font-medium">Card</span>
              </button>
              <button className="!rounded-button flex flex-col items-center justify-center px-1 py-1 border-2 border-gray-200 hover:border-custom hover:bg-custom hover:bg-opacity-5">
                <i className="fas fa-qrcode text-2xl text-gray-400 mb-2"></i>
                <span className="text-sm font-medium">UPI</span>
              </button>
              <button className="!rounded-button flex flex-col items-center justify-center px-1 py-1 border-2 border-gray-200 hover:border-custom hover:bg-custom hover:bg-opacity-5">
                <i className="fas fa-university text-2xl text-gray-400 mb-2"></i>
                <span className="text-sm font-medium">Bank</span>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                {" "}
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount to Pay
                </label>
                <div className="relative">
                  {" "}
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                    $
                  </span>
                  <input
                    type="text"
                    className="!rounded-button pl-8 block w-full border-gray-300 focus:ring-custom focus:border-custom"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Transaction ID
                </label>
                <input
                  type="text"
                  className="!rounded-button block w-full border-gray-300 focus:ring-custom focus:border-custom"
                  placeholder="Enter transaction ID"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes (Optional)
                </label>
                <textarea
                  className="!rounded-button block w-full border-gray-300 focus:ring-custom focus:border-custom"
                  rows="3"
                  placeholder="Add any additional notes"
                ></textarea>
              </div>
            </div>
          </div>
    {/* payment info */}
    <div className="bg-white shadow rounded-lg mb-8 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">
              Payment Summary
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Total Invoice Amount</span>
                <span className="font-medium">$500.00</span>
              </div>
              <div className="flex justify-between text-green-600">
                {" "}
                <span>Discount Applied</span>
                <span>-$50.00</span>
              </div>
              <div className="flex justify-between">
                {" "}
                <span className="text-gray-500">Tax (5%)</span>
                <span>$25.00</span>
              </div>
              <div className="border-t pt-4 flex justify-between text-lg font-medium">
                <span>Final Amount</span> <span>$475.00</span>
              </div>
              <div className="flex justify-between text-gray-500">
                {" "}
                <span>Amount Paid</span>
                <span>$200.00</span>
              </div>
              <div className="flex justify-between text-custom font-semibold">
                {" "}
                <span>Remaining Balance</span>
                <span>$275.00</span>
              </div>
            </div>
          </div>

</div>

{/* footer navigation */}
          <div className="flex justify-between items-center">
            {" "}
            <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <i className="fas fa-arrow-left mr-2"></i>
              Back
            </button>
            <div className="space-x-4">
              {" "}
              <button className=" rounded-md inline-flex items-center px-4 py-2 border border-black text-sm font-medium text-black  hover:bg-opacity-20">
                <i className="fas fa-print mr-2"></i>
                Generate Receipt
              </button>{" "}
              <button className="!rounded-button inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium text-white bg-green-500 hover:bg-green-500">
                Process Payment
                <i className="fas fa-arrow-right ml-2"></i>
              </button>{" "}
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Payment;
