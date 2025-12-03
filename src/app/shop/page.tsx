"use client";

import ProductCard from "../components/ProductCard";
import styles from "./page.module.css";
import Link from "next/link";

const products = [
  { name: "MacBook Pro", price: "R$ 14.999" },
  { name: "iPhone 15", price: "R$ 7.499" },
  { name: "Samsung Galaxy S24", price: "R$ 6.999" },
  { name: "Headphone Bluetooth", price: "R$ 899" },
  { name: 'Smart TV 55"', price: "R$ 3.499" },
  { name: "Notebook Gamer", price: "R$ 5.999" },
];

export default function Shop() {
  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <h1 className={styles.title}>Shop</h1>

        <Link href="/carrinho" className={styles.cartButton}>
          Ir para o carrinho
        </Link>
      </div>

      <main className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            price={product.price}
          />
        ))}
      </main>
    </div>
  );
}
