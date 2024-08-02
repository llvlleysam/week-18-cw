import { useContext } from "react"
import { RootContext } from "../../Context/Context.context"

export default function Checkout() {
    const{showCheckOut,setShowCheckOut}=useContext(RootContext)
  return (
    <>
    {showCheckOut && <div className="flex justify-center items-center">
        <form action="" className="w-3/4 flex flex-col gap-4 ">
            <label htmlFor="">Email
                <br />
                <input type="email" className="w-full py-2 pl-2 border border-black"/>
            </label>
            <label htmlFor="">Name
                <br />
                <input type="text" className="w-full py-2 pl-2 border border-black"/>
            </label>
            <label htmlFor="">Address
                <br />
                <input type="text" className="w-full py-2 pl-2 border border-black"/>
            </label>
            <input onClick={()=>{
                alert("Will be Sent :))")
                setShowCheckOut(false)}} type="submit" className="bg-yellow-500 py-4  text-sm hover:bg-yellow-400" value="Check Out"/>
        </form>
      
    </div>}
    </>
  )
}
