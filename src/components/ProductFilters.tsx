import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { categories, priceRanges } from '@/data/products';

interface ProductFiltersProps {
  selectedCategory: string;
  selectedPriceRange: { min: number; max: number };
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: { min: number; max: number }) => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedCategory,
  selectedPriceRange,
  onCategoryChange,
  onPriceRangeChange,
}) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {priceRanges.map((range) => (
            <Button
              key={range.label}
              variant={
                selectedPriceRange.min === range.min && 
                selectedPriceRange.max === range.max 
                  ? 'default' 
                  : 'ghost'
              }
              className="w-full justify-start"
              onClick={() => onPriceRangeChange({ min: range.min, max: range.max })}
            >
              {range.label}
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};