import { ReactNode } from "react";

import styles from "./style.module.css";

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return <div className={styles.card}>{children}</div>;
}
