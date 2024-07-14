import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../tag-types";

export const productApi = baseApi.injectEndpoints({
    
    endpoints:(builder) =>({
        
        createProduct: builder.mutation({
            query:(info)=> {
                return {
                url:'/products',
                method: 'POST',
                body: info,
            }
            },
            invalidatesTags: [tagTypes.product],
        }),
        getAllProduct: builder.query({
            query:()=> ({
                url:'/products',
                method: 'GET'
            }),
            providesTags: [tagTypes.product],
        }),
        getProductId: builder.query({
            query:(id)=> {
                console.log(id.id)
                // const params = new URLSearchParams();
                // if(params){
                //     params.append("_id", id);
                // }
                return {
                url:`/products/${id.id}`,
                method: 'GET',
            }},
            providesTags: [tagTypes.product],
        }),
        
    updateTodo: builder.mutation({
      query: (data) => {
        console.log("inside base api =>", data);
        return {
          url: `/products/${data.id}`,
          method: "PUT",
          body: data.data,
        };
      },
      invalidatesTags: [tagTypes.product],
    }),
    })
        
})


export const {useGetAllProductQuery, useCreateProductMutation, useGetProductIdQuery} = productApi;