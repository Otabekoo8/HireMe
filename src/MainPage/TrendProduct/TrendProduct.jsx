import React from 'react'

const TrendProduct = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-black dark:text-white py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Trending Rental Products</h2>
        <p className="text-gray-400 mb-8">
          Check out our weekly updated trending rental products.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Generator Rental */}
          <div className="dark:bg-gray-800 rounded-lg p-4 shadow-lg">
            <img 
              src="https://img.freepik.com/premium-photo/stock-photo-machinery-construction-showroom-engine-reliable-electricity-mobile-backup-power-bird39s-eye-view-portable-diesel-generator-ac-showroom-bird-s-eye-view_1336356-20186.jpg?w=1380" 
              alt="Diesel Generator" 
              className="rounded-lg mb-4" 
            />
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">Portable Diesel Generator</h3>
                <p className="text-gray-400">By PowerSupply Rentals</p>
              </div>
              <span className="bg-purple-600 text-white py-1 px-3 rounded-full">
                $20/day
              </span>
            </div>
          </div>

          {/* Photography Lighting Setup Rental */}
          <div className="dark:bg-gray-800 rounded-lg p-4 shadow-lg">
            <img 
              src="https://img.freepik.com/premium-photo/professional-lighting-setup-camera-photography_952286-22765.jpg?w=1380" 
              alt="Photography Lighting Setup" 
              className="rounded-lg mb-4 h-[310px]" 
            />
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">Photography Lighting Setup</h3>
                <p className="text-gray-400">By Studio Rentals</p>
              </div>
              <span className="bg-purple-600 text-white py-1 px-3 rounded-full">
                $40/day
              </span>
            </div>
          </div>

          {/* Snorkeling Gear Rental */}
          <div className="dark:bg-gray-800 rounded-lg p-4 shadow-lg">
            <img 
              src="https://img.freepik.com/premium-photo/snorkeling-gear-layout-white-background_36722-1986.jpg?w=1380" 
              alt="Snorkeling Gear" 
              className="rounded-lg mb-4 h-[310px]" 
            />
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">Snorkeling Gear</h3>
                <p className="text-gray-400">By AquaAdventures</p>
              </div>
              <span className="bg-purple-600 text-white py-1 px-3 rounded-full">
                $17/day
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrendProduct;
