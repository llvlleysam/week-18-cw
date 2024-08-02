
export default function CartWallet() {
  return (
    <div className="flex justify-around p-4" >
      <img className="w-14 h-20" src="../../../public/dress5.jpg" alt="" />
      <div className="flex flex-col gap-4">
        <p>Frill mini dress in yellow polka dot</p>
        <div className="flex  justify-evenly items-center">
            <div className="flex">
                <p>10.9 $</p>
                <p>X</p>
                <p>2</p>
            </div>
            <button className="bg-gray-200 border border-black py-2 px-4 text-sm hover:bg-gray-400">Remove</button>
        </div>
      </div>
    </div>
  )
}
