import React from 'react';

const DesktopProductDescription = (props) => {
    const { activeTab, setActiveTab, reviews } = props;

    return (
        <div className="w-full h-auto hidden px-[8%] lg:flex lg:justify-center lg:items-center">
            <div
                className={`w-fit px-6 h-11 font-semibold text-xl flex items-center border-b-2 hover:text-accent hover:border-accent cursor-pointer transition-all duration-200 ${activeTab === 'description' ? 'text-accent border-accent' : 'text-gray-700 border-transparent'
                    }`}
                onClick={() => setActiveTab('description')}
            >
                Description
            </div>
            <div
                className={`w-fit px-6 h-11 font-semibold text-xl flex items-center border-b-2 hover:text-accent hover:border-accent cursor-pointer transition-all duration-200 ${activeTab === 'additionalInfo' ? 'text-accent border-accent' : 'text-gray-700 border-transparent'
                    }`}
                onClick={() => setActiveTab('additionalInfo')}
            >
                Additional Information
            </div>
            <div
                className={`w-fit px-6 h-11 font-semibold text-xl flex items-center border-b-2 hover:text-accent hover:border-accent cursor-pointer transition-all duration-200 ${activeTab === 'reviews' ? 'text-accent border-accent' : 'text-gray-700 border-transparent'
                    }`}
                onClick={() => setActiveTab('reviews')}
            >
                Reviews ({reviews.length})
            </div>
        </div>
    )
}

export default DesktopProductDescription;