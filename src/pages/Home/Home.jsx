import React from 'react';
import Hero from '../../components/Hero/Hero';
import BrowseRange from '../../components/BrowseRange/BrowseRange';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import Inspiration from '../../components/Inspiration/Inspiration';
import FurnitureGallery from '../../components/FurnitureGallery/FurnitureGallery';

export default function Home() {
  return (
    <div>
      <Hero />
      <BrowseRange />
      <ProductGrid />
      <Inspiration />
      <FurnitureGallery />
    </div>
  );
}