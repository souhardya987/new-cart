import React from 'react'
import { useEffect, useState } from 'react';
import ProductTile from "../components/product-tile";


export default function home() {


    const [products, setProducts] = useState([]);

    async function fetchListofProducts() {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();

        setProducts(data);



    }
    useEffect(()=> {
        fetchListofProducts();
    },[]);

    return (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-4   ">
            {
                products && products.length ?
                products.map(productItem=> <ProductTile product={productItem}/>)
                :null

            }


        </div>
    )
}
