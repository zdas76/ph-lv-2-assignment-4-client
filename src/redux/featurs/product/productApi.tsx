import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../tag-types";

export const productApi = baseApi.injectEndpoints({
    
    endpoints:(builder) =>({
        
        createProduct: builder.mutation({
            query:(info)=> {
                console.log(info)
                return {
                url:'products',
                method: 'POST',
                body: info,
            }
            },
            invalidatesTags: [tagTypes.product],
        }),
        getAllProduct: builder.query({
            query:()=> ({
                url:'products',
                method: 'GET'
            }),
            providesTags: [tagTypes.product],
        })
    })
})

export const {useGetAllProductQuery, useCreateProductMutation} = productApi;