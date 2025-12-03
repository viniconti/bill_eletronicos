import styles from "./ProductCard.module.css";

type ProductProps = {
  name: string;
  price: string;
};

export default function ProductCard({ name, price }: ProductProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder} />

      <div className={styles.cardContent}>
        <h2 className={styles.productName}>{name}</h2>
        <p className={styles.price}>{price}</p>
        <button className={styles.addButton}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
