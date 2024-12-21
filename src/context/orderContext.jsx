import { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
    const [orderData, setOrderData] = useState(null);

    return <OrderContext.Provider value={{ orderData, setOrderData }}>{children}</OrderContext.Provider>
};