import { useContext } from "react";
import CartWallet from "../Common/Cart-Wallet";
import Checkout from "../Common/Checkout";
import { RootContext } from "../../Context/Context.context";

export default function SideRight() {
    const{showCheckOut,setShowCheckOut}=useContext(RootContext)
  return (
    <div className='col-span-1'>
      <div className='flex border-b-2 border-black justify-evenly py-4'>
        <p>Cart is empty now</p>
      </div>
      <div >
        <CartWallet/>
      </div>
      <div className="flex justify-around items-center">
        <span>Total : $ 999</span>
        <button onClick={()=>setShowCheckOut(true)} className="bg-yellow-500 py-4 px-6 text-sm hover:bg-yellow-400">Proceed</button>
      </div>
      <Checkout/>
    </div>
  )
}
