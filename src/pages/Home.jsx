import React from 'react'
import Carousel from '../components/Carousel'
import ProductSection from '../components/ProductSection'

const featuredProducts = [
  {
    name: "Classic Leather Loafer",
    price: "$120",
    description: "Elegant brown leather loafer for timeless style.",
    images: [
      "https://via.placeholder.com/320x220?text=Loafer+1",
      "https://via.placeholder.com/320x220?text=Loafer+2"
    ]
  },
  {
    name: "Prestige Wallet",
    price: "$45",
    description: "Sleek bifold wallet in premium calfskin.",
    images: [
      "https://via.placeholder.com/320x220?text=Wallet+1",
      "https://via.placeholder.com/320x220?text=Wallet+2"
    ]
  }
]

const latestCollections = [
  {
    name: "Travel Watch Box",
    price: "$95",
    description: "Keep your watches safe on the go.",
    images: [
      "https://via.placeholder.com/320x220?text=Watch+Box+1",
      "https://via.placeholder.com/320x220?text=Watch+Box+2"
    ]
  },
  {
    name: "Signature Leather Belt",
    price: "$60",
    description: "Minimal buckle, maximum style.",
    images: [
      "https://via.placeholder.com/320x220?text=Belt+1",
      "https://via.placeholder.com/320x220?text=Belt+2"
    ]
  }
]

function Home() {
  return (
    <div>
      <Carousel />
      <section className="slogan">
        <h1>Elevating elegance, one step at a time.</h1>
      </section>
      <ProductSection title="Featured Products" products={featuredProducts} />
      <ProductSection title="Latest Collections" products={latestCollections} />
    </div>
  )
}

export default Home