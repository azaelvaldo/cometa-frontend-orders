type OrderItem = {
    name: string;
    price_per_unit: number;
    total: number;
  };
  
  type OrderData = {
    created: string;
    paid: boolean;
    subtotal: number;
    taxes: number;
    discounts: number;
    total: number;
    items: OrderItem[];
  };