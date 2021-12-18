/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Example() {

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <>
    </>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 content">
        <div className="max-w-md w-full space-y-8">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="input-from">
                <span>From </span>
                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full">Polygon Testnet</span>
                <input
                  id="from-address"
                  name="from-address"
                  type="number"
                  autoComplete="from-address"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="0.0"
                />
                <select className="selected-from">
                  <option>MATIC</option>
                  <option>ETH</option>
                  <option>ONE</option>
                  <option>CLV</option>
                  <option>MORV</option>
                  <option>SKL</option>
                </select>
              </div>
              <div>
                <button className="transfer-logo">
                  <img src="https://cbridge.celer.network/static/media/arrowupdown.cfbf4c38.svg" />
                </button>
              </div>
              <div className="input-to">
                <span>To </span>
                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-blue-600 rounded-full">Carambola Testnet</span>
                <input
                  id="to-address"
                  name="to-address"
                  type="text"
                  autoComplete="to-address"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Receiver address"
                />
              </div>
            </div>
            <div>
              <button
                id="transfer"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Transfer
              </button>
            </div>
        </div>
      </div>
    </>
  )
}
