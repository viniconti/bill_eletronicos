"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";

type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

const initialCart: CartItem[] = [
  { name: "MacBook Pro", price: 14999, quantity: 1 },
  { name: "iPhone 15", price: 7499, quantity: 2 },
];

const priceFormat = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  const handleQuantity = (index: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item, i) =>
          i === index
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
    );
  };

  const handleRemove = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 29.9 : 0;
  const total = subtotal + shipping;

  return (
    <div className={styles.background}>
      <header className={styles.header}>
        <h1 className={styles.title}>Shopping Cart</h1>
        <Link href="/shop" className={styles.backButton}>
          Voltar para a loja
        </Link>
      </header>
      <main className={styles.main}>
        <section className={styles.cartSection}>
          {cart.length === 0 ? (
            <div className={styles.empty}>Seu carrinho está vazio.</div>
          ) : (
            cart.map((item, idx) => (
              <div className={styles.cartItem} key={item.name}>
                <div className={styles.itemImage} />
                <div className={styles.itemInfo}>
                  <div className={styles.itemName}>{item.name}</div>
                  <div className={styles.itemPrice}>{priceFormat(item.price)}</div>
                </div>
                <div className={styles.quantityControl}>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => handleQuantity(idx, -1)}
                    aria-label="Diminuir quantidade"
                  >
                    -
                  </button>
                  <span className={styles.qtyValue}>{item.quantity}</span>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => handleQuantity(idx, 1)}
                    aria-label="Aumentar quantidade"
                  >
                    +
                  </button>
                </div>
                <button
                  className={styles.removeBtn}
                  onClick={() => handleRemove(idx)}
                  aria-label="Remover item"
                >
                  &times;
                </button>
              </div>
            ))
          )}
        </section>
        <aside className={styles.summarySection}>
          <h2 className={styles.summaryTitle}>Resumo</h2>
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>{priceFormat(subtotal)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Entrega</span>
            <span>{priceFormat(shipping)}</span>
          </div>
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>{priceFormat(total)}</span>
          </div>
          <button className={styles.checkoutBtn} disabled={cart.length === 0}>
            Finalizar compra
          </button>
        </aside>
      </main>
    </div>
  );
}