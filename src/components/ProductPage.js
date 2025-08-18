import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductPage.css';
import { productConfig } from '../config';

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const currentProduct = productConfig[productId];

  useEffect(() => {
    if (!currentProduct) {
      navigate('/');
    }
  }, [currentProduct, navigate]);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  const handleNextClick = () => {
    const currentId = parseInt(productId);
    const productIds = Object.keys(productConfig).map(Number);
    const currentIndex = productIds.indexOf(currentId);
    const nextIndex = (currentIndex + 1) % productIds.length;
    const nextId = productIds[nextIndex];
    // 滚动到页面顶部
    window.scrollTo(0, 0);
    navigate(`/product/${nextId}`);
  };

  if (!currentProduct) {
    return null;
  }

  return (
    <div className="fullscreen-product">
      <div className="product-header">
        <button className="simple-back-button" onClick={handleBackClick}>
          ← 返回首页
        </button>
        <h1 className="product-title-header">{currentProduct.title}</h1>
      </div>
      
      {imageLoading && (
        <div className="simple-loading">
          <div className="simple-spinner"></div>
          <span>加载中...</span>
        </div>
      )}
      
      {imageError ? (
        <div className="simple-error">
          <span>图片加载失败</span>
          <button onClick={() => window.location.reload()}>重试</button>
        </div>
      ) : (
        <img
          src={currentProduct.image}
          alt="Product"
          className="fullscreen-image"
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ display: imageLoading ? 'none' : 'block' }}
        />
      )}
      
      {!imageLoading && (
        <button className="simple-next-button" onClick={handleNextClick}>
          下一个作品 →
        </button>
      )}
    </div>
  );
};

export default ProductPage;