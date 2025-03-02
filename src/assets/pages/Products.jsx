import React from 'react'
import client from '../../sanityClient';

const Products = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const data = await client.fetch('*[_type == "product"]{_id, title, price, image}');
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchProducts();
    }, []);
  
    return (
      <div className="p-6">
        <h1 className="text-emerald-400 text-3xl font-bold mb-4">Products</h1>
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product._id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-700">${product.price}</p>
              {product.image && (
                <img src={product.image} alt={product.title} className="w-32 h-32 object-cover mt-2 rounded-md" />
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Products;