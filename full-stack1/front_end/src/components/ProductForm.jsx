import React,{useState} from 'react'
import axios from 'axios';

const ProductForm = () => {

    const [product,setProduct] = useState({
        name:"",
        price:"",
        category:""
    })


    const handleSubmit = async(e)=>{
         e.preventDefault();
        try {
           
            await axios.post(
                "http://localhost:5001/product/create",
                product
            );
            alert("Product added")

             setProduct({
               name: "",
               price: "",
               category: "",
             });
        } catch (error) {
            console.log(error);
            
        }
    }

    const handleChange = (e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={product.name}
        onChange={handleChange}
      />
      <input
        name="price"
        type="number"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
      />
      <input
        name="category"
        type="text"
        placeholder="Category"
        value={product.category}
        onChange={handleChange}
      />
      <button>Add Product</button>
    </form>
  );
}

export default ProductForm
