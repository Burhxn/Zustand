import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com"
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "/products",

        }),
        addNewProduct: builder.mutation({
            query: (newProduct) => ({
                url: "/products/add",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: newProduct
            })


        })
    }),
})

export const { useGetAllProductsQuery, useAddNewProductMutation } = productsApi;