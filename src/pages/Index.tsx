import React, { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { ProductFilters } from "@/components/ProductFilters";
import { AuthModal } from "@/components/AuthModal";
import { Cart } from "@/components/Cart";
import { products } from "@/data/products";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState({
    min: 0,
    max: Infinity,
  });
  const { user } = useAuth();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === "All" || product.category === selectedCategory;
      const priceMatch =
        product.price >= selectedPriceRange.min &&
        product.price <= selectedPriceRange.max;
      return categoryMatch && priceMatch;
    });
  }, [selectedCategory, selectedPriceRange]);

  const handleAuthRequired = () => {
    if (!user) {
      setIsAuthModalOpen(true);
    }
  };

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        onAuthClick={() => setIsAuthModalOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main>
        <HeroSection onShopNow={scrollToProducts} />

        <section id="products" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Premium Collection
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover the latest in technology with our carefully curated
                selection of premium products.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <aside className="lg:w-64 flex-shrink-0">
                <ProductFilters
                  selectedCategory={selectedCategory}
                  selectedPriceRange={selectedPriceRange}
                  onCategoryChange={setSelectedCategory}
                  onPriceRangeChange={setSelectedPriceRange}
                />
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-muted-foreground">
                    Showing {filteredProducts.length} product
                    {filteredProducts.length !== 1 ? "s" : ""}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAuthRequired={handleAuthRequired}
                    />
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-xl text-muted-foreground">
                      No products found matching your criteria.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Astrape
            </h3>
            <p className="text-muted-foreground">
              Premium technology products for the modern world.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 Astraoe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Index;
