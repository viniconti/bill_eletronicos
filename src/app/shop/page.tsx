"use client";

import ProductCard from "../components/ProductCard";
import styles from "./page.module.css";
import Link from "next/link";

const products = [
  { name: "MacBook Pro", price: "R$ 19.999", image: "/products/macbook.png"},
  { name: "iPhone 15", price: "R$ 7.499", image: "/products/iphone15.png" },
  { name: "Samsung Galaxy S24", price: "R$ 6.999", image: "/products/galaxys24.png" },
  { name: "Headphone Bluetooth", price: "R$ 899", image: "/products/headphone.png" },
  { name: 'Mouse Logitec G', price: "R$ 699", image: "/products/mouse.png" },
  { name: "Iphone 17 Pro", price: "R$ 11.499", image: "/products/iphone17pro.png" },
  { name: "Apple Watch", price: "R$ 5.499", image: "/products/applewatch.png" },
  { name: "Acer Nitro V", price: "R$ 4.699", image: "/products/acernitro.png" },
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
          image={product.image}
        />        
        ))}
      </main>
    </div>
  );
}
