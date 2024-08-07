import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../tag-types";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => {
        return {
          url: "/order",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.order],
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
