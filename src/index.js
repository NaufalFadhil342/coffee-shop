import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FilterSortProvider } from './context/filterContext';
import { CartProvider } from './context/cartContext';
import { OrderProvider } from './context/orderContext';
import { SearchProvider } from './context/searchContext';
import { NotificationProvider } from './context/notificationContext';
import { shopData } from './data/dummyCoffee';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <FilterSortProvider shopData={shopData}>
      <CartProvider>
        <OrderProvider>
          <SearchProvider>
            <NotificationProvider>
              <App />
            </NotificationProvider>
          </SearchProvider>
        </OrderProvider>
      </CartProvider>
    </FilterSortProvider>
  </BrowserRouter>
);
