import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SecondaryHeader from '../components/SecondaryHeader';
import axios from 'axios';
import '../css/Product.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_PRODUCTS_MICROSERVICE}/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div className="product-container">Cargando...</div>;
  }

  return (
    <div className="product-container">
      <SecondaryHeader className="header"/>
      <div className="product-details">
        <h1>Detalles del Producto {product.id}</h1>
        <h1>Nombre: {product.name}</h1>
        <h2>Descripción: {product.description}</h2>
        <h2>Precio: {product.price}$</h2>
        <h2>Rareza: {product.rarity}</h2>
      </div>
    </div>
  );
};

export default ProductDetails;
