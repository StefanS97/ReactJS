import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <ul>
        <li>
          <Link to="/products/book">A Book</Link>
        </li>
        <li>
          <Link to="/products/soda">A Can of Soda</Link>
        </li>
        <li>
          <Link to="/products/item">An Item</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
