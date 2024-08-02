import { useDeleteOrder } from "../../hooks/useGetProducts"

export default function CartWallet({order}) {
  const {mutate}=useDeleteOrder()
  return (
    <div className="flex justify-around p-4" >
      <img className="w-14 h-20" src={order.images[0]} alt={`${order.title}'s image`} />
      <div className="flex flex-col gap-4">
        <p>{order.title}</p>
        <div className="flex  justify-evenly items-center">
            <div className="flex">
                <p>{order.price} $</p>
                <p>X</p>
                <p>2</p>
            </div>
            <button onClick={()=>mutate(order.id)} className="bg-gray-200 border border-black py-2 px-4 text-sm hover:bg-gray-400">Remove</button>
        </div>
      </div>
    </div>
  )
}
