import React from 'react'
import styles from "./index.module.css"

interface Variant {
  name: string;
  inStock: boolean;
};

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  variants?: Variant[];        
  selectedVariant?: string;  
  onVariantChange: (variant: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, description, category, image, rating, variants, selectedVariant, onVariantChange }) => {
  const allOutOfStock = variants?.every((v) => !v.inStock);
  
  const handleVariantChange = (value: string) => {
    onVariantChange?.(value);
  };

  return (
    <div className={styles.productCard}>
      <img src={image} alt={`title-${id}`} />

      <div className={styles.productDetails}>
        <h2>{title.substring(0, 12)}...</h2>
        <p>{description.substring(0, 90)}...</p>
      </div>

      <div className={styles.price}>$ {price}</div>

      <div className={styles.productInfo}>
        <p><span>Category:</span> {category}</p>
        <p><span>Rating:</span> {rating.rate} ({rating.count} reviews)</p>

        <div>
          {variants && variants.length > 0 && (
            <select
              value={selectedVariant}
              onChange={(e) => handleVariantChange(e.target.value)}
              className={styles.variantDropdown}
              disabled={allOutOfStock}
            >
              {variants.map((variant, index) => (
                <option
                  key={index}
                  value={variant.name}
                  disabled={!variant.inStock}
                >
                  {variant.name} {variant.inStock ? '' : '(Out of stock)'}
                </option>
              ))}
            </select>
          )}

          {selectedVariant &&
            variants?.find((v) => v.name === selectedVariant)?.inStock ? (
              <button className={styles.addToCartButton}>Add to Cart</button>
            ) : (
              <div className={styles.outOfStockLabel}>Out of Stock</div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ProductCard