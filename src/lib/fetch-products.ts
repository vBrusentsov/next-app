export async function fetchProducts() {
  return new Promise<{ id: number; name: string }[]>(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, name: '🍕 Pizza' },
        { id: 2, name: '🍔 Burger' },
        { id: 3, name: '🥗 Salad' },
      ]);
    }, 1000);
  });
}