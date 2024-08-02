/* eslint-disable react/prop-types */
import { useContext } from "react";
import { RootContext } from "../../Context/Context.context";
import { useOrderMutation } from "../../hooks/useGetProducts";

export default function Cart({ cart }) {
  const { setShowModal, setCurrentCart } = useContext(RootContext);
  // const qc = useQueryClient();
  const x = useOrderMutation();
  return (
    <div className="col-span-1 flex flex-col gap-2 p-3">
      <img
        onClick={() => {
          setShowModal(true);
          setCurrentCart(cart);
        }}
        src={cart.images[0]}
        alt={`${cart.title} image`}
      />
      <h1 className="text-lg font-bold hover:text-red-700">{cart.title}</h1>
      <div className="flex justify-between items-center">
        <p>Prices $ {cart.price}</p>
        <button
          onClick={() => x.mutate(cart)}
          className="bg-yellow-500 py-2 px-4 text-sm hover:bg-yellow-400"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
