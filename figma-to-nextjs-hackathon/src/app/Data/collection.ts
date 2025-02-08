// src/app/data/collection.ts

export interface Collection {
    id: number;
    name: string;
    price: string;
    image: string;
  }
  
  const collection: Collection[] = [
    {
      id: 1,
      name: "The Dandy Chair",
      price: `£250`,
      image: "/collection/1.png",
    },
    {
      id: 2,
      name: "Rustic Vase Set",
      price: `£155`,
      image: "/collection/2.png",
    },
    {
      id: 3,
      name: "The Dandy Chair",
      price: `£250`,
      image: "/collection/3.png",
    },
    {
      id: 4,
      name: "The Dandy Chair",
      price: `£250`,
      image: "/collection/4.png",
    },
      // Add more products as needed
  ];
  
  export default collection