import { useContext } from "react"
import { RootContext } from "../../Context/Context.context"

export default function Cart() {
  const {showModal,setShowModal}=useContext(RootContext)
  return (
    <div className="col-span-1 flex flex-col gap-2 p-3">
      <img onClick={()=>setShowModal(true)} src="../../../public/dress5.jpg" alt="" />
      <h1 className="text-lg font-bold hover:text-red-700">Frill mini dress in yellow polka dot</h1>
      <div className="flex justify-between items-center">
        <p>Prices $ 10.9</p>
        <button className="bg-yellow-500 py-2 px-4 text-sm hover:bg-yellow-400">Add To Cart</button>
      </div>
    </div>
  )
}
