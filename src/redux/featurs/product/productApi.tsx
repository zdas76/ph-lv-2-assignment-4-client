import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../tag-types";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (info) => {
        return {
          url: "/products",
          method: "POST",
          body: info,
        };
      },
      invalidatesTags: [tagTypes.product],
    }),
    getAllProduct: builder.query({
      query: (data) => {
        const params = new URLSearchParams();
        if (data.limit) {
          params.append("limit", data.limit);
        }

        if (data.searchTerm) {
          params.append("searchTerm", data.searchTerm);
        }

        if (data.sort) {
          params.append("sort", data.sort);
        }
        if (data?.fields?.length > 0) {
          params.append("category", data.fields);
        }

        return {
          url: "/products",
          method: "GET",
          params: params,
        };
      },
      providesTags: [tagTypes.product],
    }),
    getProductCategory: builder.query({
      query: () => {
        return {
          url: "/products/category",
          method: "GET",
        };
      },
      providesTags: [tagTypes.product],
    }),
    getProductId: builder.query({
      query: (id) => {
        console.log(id);
        return {
          url: `/products/${id.id}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.product],
    }),

    updateProduct: builder.mutation({
      query: (data) => {
        console.log(data.id);
        const updateData = {
          name: data.name,
          category: data.category,
          description: data.description,
          price: data.price,
          stock: data.stock,
        };
        return {
          url: `/products/${data.id}`,
          method: "PUT",
          body: updateData,
        };
      },
      invalidatesTags: [tagTypes.product],
    }),
    deteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.product],
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useCreateProductMutation,
  useGetProductIdQuery,
  useGetProductCategoryQuery,
  useUpdateProductMutation,
  useDeteProductMutation,
} = productApi;
