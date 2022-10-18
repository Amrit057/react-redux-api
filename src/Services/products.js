import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com/',
    }),

    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: () => ({
                url: 'products',
                method: 'GET'
            })
        }),

        getProductById: builder.query({
            query: (id) => {
                console.log("Id:", id)
                return{
                    url: `products/${id}`,
                    method: 'GET'
                }
            }
        })
    })
})

export const {useGetAllProductQuery, useGetProductByIdQuery} = productApi