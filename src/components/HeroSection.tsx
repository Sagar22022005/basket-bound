import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, Zap, Shield } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

interface HeroSectionProps {
  onShopNow: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onShopNow }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Premium tech products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-2xl">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Premium Tech
                <span className="block gradient-primary bg-clip-text text-transparent">
                  Redefined
                </span>
              </h1>

              {/* <p className="text-xl text-muted-foreground max-w-lg">
                Discover cutting-edge technology products with exceptional quality, 
                innovative design, and unmatched performance.
              </p> */}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={onShopNow}
                variant="hero"
                size="xl"
                className="shadow-glow"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
              </Button>

              <Button variant="outline" size="xl">
                Learn More
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                  <Star className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Premium Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    Carefully curated products
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Fast Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Free shipping worldwide
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Secure Shopping</h3>
                  <p className="text-sm text-muted-foreground">
                    Protected transactions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
