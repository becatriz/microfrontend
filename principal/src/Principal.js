import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar';
import { ServiceProvider } from './Service';

const ProductList = React.lazy(() => import('productlist/ProductList'));
const ProductDetails = React.lazy(() => import('productdetails/ProductDetails'));

const Principal = () => (
  <ServiceProvider>
    <BrowserRouter>
      <AppBar />
      <div className="container mt-24">
        <React.Suspense fallback={'Loading'}>
          <Routes>
            <Route path="list/*" element={<ProductList />} />
            <Route path="detail/*" element={<ProductDetails amount="140" />} />
            <Route path="*" element={<Navigate to="/list" replace />} />
          </Routes>
        </React.Suspense>
      </div>
    </BrowserRouter>
  </ServiceProvider>
);

export default Principal;
