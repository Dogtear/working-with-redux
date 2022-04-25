import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  {
    id: "pd-1",
    title: "First Product",
    price: 6,
    description: 'This is a first product - amazing!'
  },
  {
    id: "pd-2",
    title: "Second Product",
    price: 9,
    description: 'This is the Second  product - Very Good !'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map(item => <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}  
        />)}
      </ul>
    </section>
  );
};

export default Products;
