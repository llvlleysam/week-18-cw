import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchOrder, fetchProducts, postOrder } from "../api";
import { httpRequest } from "../services";

// export const useGetProducts = () => {
//     const {data, isLoading} = useQuery({
//         queryKey: ["product"],
//         queryFn: fetchProducts,
//     })

//     return {data, isLoading}
// }

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["product"],
    queryFn: fetchProducts,
  });
};

export const useGetOrder = () => {
  return useQuery({
    queryKey: ["order"],
    queryFn: fetchOrder,
  });
};

export const useOrderMutation = () => {
  const qc = useQueryClient();
  const x = useMutation({
    mutationFn: async (newProduct) =>
      await httpRequest.post(`/order`, newProduct),
    onSuccess: () => {
      qc.invalidateQueries("order");
    },
  });

  return x
};

export const useDeleteOrder = () =>{
  const quaryClientDelete = useQueryClient();
  return useMutation({
    mutationFn: async(deletedOrderId)=>
      await httpRequest.delete(`/order/${deletedOrderId}`),
    onSuccess:()=>{
      quaryClientDelete.invalidateQueries("order")
    }
  })
}