import styles from "./ProductCard.module.css";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}>
        <img src={image} alt={name} className={styles.image} />
      </div>

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
