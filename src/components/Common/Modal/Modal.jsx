import { useContext } from "react"
import { RootContext } from "../../../Context/Context.context"

export default function Modal() {
    const{showModal,setShowModal}=useContext(RootContext)
  return (
    <>
    {showModal && <div>
        <div className="fixed top-0 bottom-0 right-0 left-0 bg-black opacity-55 backdrop-blur-lg">
        </div>
        <div onClick={()=>setShowModal(false)} className="fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center z-[10000]">
            <div className="h-4/5 w-4/5 bg-white border-2 border-black flex justify-center gap-6 ">
                <img src="../../../public/dress5.jpg" alt="" />
                <div className="flex flex-col gap-8 p-4">
                    <div className="flex justify-between">
                        <h1 className="text-lg font-bold">
                        Frill mini dress in yellow polka dot
                        </h1>
                        <button onClick={()=>setShowModal(false)} className="bg-gray-200 text-xs border border-black py-1 px-2" >X</button>
                    </div>
                    <span>
                                This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to
                        ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity.
                        Created by us, styled by you.
                    </span>
                    <div className="flex justify-around">
                    <p>Price : 10.9 $</p>
                    <button className="bg-yellow-500 py-2 px-4 text-sm hover:bg-yellow-400" >Add To Cart</button>
                    </div>
                </div>

            </div>
        </div>
    </div>}
    </>
  )
}
