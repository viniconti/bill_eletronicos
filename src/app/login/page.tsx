import styles from "./page.module.css";
import Link from "next/link";

export default function Login() {
  return (
    <div className={styles.background}>
      <main className={styles.container}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form} autoComplete="off">
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="Digite seu email"
            required
          />

          <label htmlFor="senha" className={styles.label}>
            Senha
          </label>
          <input
            type="password"
            id="senha"
            className={styles.input}
            placeholder="Digite sua senha"
            required
          />

          <Link href="/shop" className={styles.button}>
            Entrar
          </Link>
        </form>
      </main>
    </div>
  );
}