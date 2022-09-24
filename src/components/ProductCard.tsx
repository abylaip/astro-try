import { IProduct } from "../types";
import styles from "./productcard.module.css";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles._outline}>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <img src={product.image} alt="" className={styles.main_image} />
    </div>
  );
};

export default ProductCard;
