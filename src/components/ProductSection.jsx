import React from 'react'
import ProductCard from './ProductCard'

function ProductSection({ title, products }) {
  return (
    <section className="product-section">
      <h2>{title}</h2>
      <div className="product-list">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductSection
