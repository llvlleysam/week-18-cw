import { useContext } from "react";
import { RootContext } from "../../../Context/Context.context";
import { useOrderMutation } from "../../../hooks/useGetProducts";

export default function Modal() {
  const { showModal, setShowModal, currentCart, setCurrentCart } =
    useContext(RootContext);

    const x = useOrderMutation();
    // console.log(currentCart);
    // const { title , description , images , price } = currentCart;
  return (
    <>
      {showModal && (
        <div>
          <div className="fixed top-0 bottom-0 right-0 left-0 bg-black opacity-55 backdrop-blur-lg"></div>
          <div
            onClick={() => {
              setShowModal(false);
              setCurrentCart(null);
            }}
            className="fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center z-[10000]"
          >
            <div className="h-4/5 w-4/5 bg-white border-2 border-black flex justify-center gap-6 ">
              <img src={currentCart?.images[0]} alt={`${currentCart?.title} image`} />
              <div className="flex flex-col gap-8 p-4">
                <div className="flex justify-between">
                  <h1 className="text-lg font-bold">{currentCart?.title}</h1>
                  <button
                    onClick={() => {
                      setShowModal(false);
                      setCurrentCart(null);
                    }}
                    className="bg-gray-200 text-xs border border-black py-1 px-2"
                  >
                    X
                  </button>
                </div>
                <span>
                  {currentCart?.description}
                </span>
                <div className="flex justify-around">
                  <p>Price : {currentCart?.price} $</p>
                  <button onClick={() => x.mutate(currentCart)} className="bg-yellow-500 py-2 px-4 text-sm hover:bg-yellow-400">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
