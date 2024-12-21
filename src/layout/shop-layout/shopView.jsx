import { useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useCart } from '../../context/cartContext';
import { useNotification } from '../../context/notificationContext';

const ShopView = ({ product }) => {
    const [shopView, setShopView] = useState(false);
    const { addToCart } = useCart();
    const { addNotification } = useNotification();

    const addToCartHandler = () => {
        addToCart(product);
        addNotification(`${product.name} has been added to your cart!`);
    }

    return (
        <motion.div
            className="w-full h-full bg-white/30 px-10 hidden lg:flex items-center justify-center absolute z-[2]"
            onMouseEnter={() => setShopView(true)}
            onMouseLeave={() => setShopView(false)}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: shopView ? 1 : 0,
            }}
            transition={{ duration: 0.25 }}
        >
            <button type="button" className="button w-full h-12 bg-accent flex text-white justify-between items-center gap-2 uppercase font-medium text-lg hover:bg-[#9D6842] duration-200 transition-colors" onClick={addToCartHandler}>
                <MdShoppingCart size={20} /> <>Add to Cart</>
            </button>
        </motion.div>
    );
};

export default ShopView;