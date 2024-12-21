import React from 'react';
import { motion } from 'framer-motion';
import ShopFilter from '../shopFilter'

const ShopGridFilter = (props) => {
    const {
        setFilterShopGrid,
        filterShopGrid,
        setPriceRange,
        setCategoryFilter,
        shopData,
        setSearchQuery,
        searchQuery
    } = props;

    return (
        <motion.div
            className="w-full h-full"
            initial={{
                opacity: 0,
                visibility: 'hidden',
            }}
            animate={{
                opacity: filterShopGrid ? 1 : 0,
                visibility: filterShopGrid ? 'visible' : 'hidden',
            }}
            transition={{ duration: 0.3 }}
        >
            <div className="w-full h-screen top-0 left-0 bg-gray-800/55 fixed z-[10]" onClick={() => setFilterShopGrid(false)} />
            <div className="w-3/4 xm:w-[22rem] h-screen bg-transparent fixed top-0 left-0 z-10">
                <ShopFilter setFilterShopGrid={setFilterShopGrid} shopGrid={true} setPriceRange={setPriceRange} setCategoryFilter={setCategoryFilter} shopData={shopData} setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
            </div>
        </motion.div>
    )
}

export default ShopGridFilter;