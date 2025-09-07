import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();

  const handleCheckout = () => {
    if (!user) {
      toast({
        title: 'Please sign in',
        description: 'You need to be signed in to checkout.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Checkout successful!',
      description: `Your order of $${totalPrice.toFixed(2)} has been placed.`,
    });
    
    clearCart();
    onClose();
  };

  if (items.length === 0) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <ShoppingBag className="h-16 w-16 text-muted-foreground" />
            <div className="text-center">
              <h3 className="text-lg font-semibold">Your cart is empty</h3>
              <p className="text-muted-foreground">Add some products to get started!</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle>Shopping Cart ({items.length} items)</SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto space-y-4 py-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 object-cover rounded"
              />
              
              <div className="flex-1 space-y-1">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-muted-foreground">{item.category}</p>
                <p className="font-semibold">${item.price}</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                
                <span className="w-8 text-center font-medium">
                  {item.quantity}
                </span>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-destructive hover:text-destructive"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t pt-4 space-y-4">
          <div className="flex items-center justify-between text-lg font-semibold">
            <span>Total: ${totalPrice.toFixed(2)}</span>
          </div>
          
          <div className="space-y-2">
            <Button
              onClick={handleCheckout}
              className="w-full"
              variant="hero"
              size="lg"
            >
              Checkout
            </Button>
            
            <Button
              onClick={clearCart}
              variant="outline"
              className="w-full"
            >
              Clear Cart
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};