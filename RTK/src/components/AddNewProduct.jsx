import React from "react";
import { useAddNewProductMutation } from "../app/service/dummyData";

const AddNewProduct = () => {
    const [addNewProduct, { data, error, isLoading }] = useAddNewProductMutation();

    console.log(data, error, isLoading);

    const handleAddProduct = async () => {
        try {
            const newProductData = {
                name: "Test Product",
                price: 100,
                title: "Test Product",
                description: "Test product description",
                image: "https://example.com/image.jpg",
                category: "Electronics",
                brand: "Test Brand",
                rating: 4.5,
                quantity: 50,
            };
            const response = await addNewProduct(newProductData);
            console.log("Product added:", response);
        } catch (err) {
            console.error("Error adding product:", err);
        }
    };

    if (error) return <p>Error: {error.message}</p>;
    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h1>ID: {data?.id }</h1>
            <h1>Title: {data?.title }</h1>
            <h1>Description: {data?.description || "No Description"}</h1>
            <button onClick={handleAddProduct} disabled={isLoading}>
                Add New Product
            </button>
        </div>
    );
};

export default AddNewProduct;
