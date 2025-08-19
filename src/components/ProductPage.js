import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductPage.css';
import { productConfig } from '../config';

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [previewLoading, setPreviewLoading] = useState(true);
  const [fullImageLoading, setFullImageLoading] = useState(true);
  const [fullImageLoaded, setFullImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const currentProduct = productConfig[productId];

  useEffect(() => {
    if (!currentProduct) {
      navigate('/');
    }
  }, [currentProduct, navigate]);

  const handlePreviewLoad = () => {
    setPreviewLoading(false);
  };

  const handleFullImageLoad = () => {
    setFullImageLoading(false);
    setFullImageLoaded(true);
  };

  const handleImageError = () => {
    setPreviewLoading(false);
    setFullImageLoading(false);
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

    navigate(`/product/${nextId}`, { replace: true });
    // 滚动到页面顶部
    window.scrollTo({
      top: 0,
      behavior: 'auto' // 'auto' 表示无动画，'smooth' 表示有动画
    });
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

      {previewLoading && (
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
        <div className="image-container">
          {/* 预览图 - 快速加载显示 */}
          <img
            src={currentProduct.previewImage}
            alt="Product Preview"
            className={`fullscreen-image preview-image ${fullImageLoaded ? 'fade-out' : ''}`}
            onLoad={handlePreviewLoad}
            onError={handleImageError}
            style={{ display: previewLoading ? 'none' : 'block' }}
          />

          {/* 原图 - 后台加载 */}
          <img
            src={currentProduct.image}
            alt="Product"
            className={`fullscreen-image full-image ${fullImageLoaded ? 'fade-in' : ''}`}
            onLoad={handleFullImageLoad}
            onError={handleImageError}
            style={{ display: fullImageLoaded ? 'block' : 'none' }}
          />
        </div>
      )}

      {!previewLoading && (
        <button className="simple-next-button" onClick={handleNextClick}>
          下一个作品 →
        </button>
      )}
    </div>
  );
};

export default ProductPage;