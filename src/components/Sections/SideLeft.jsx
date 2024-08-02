import { useGetProducts } from "../../hooks/useGetProducts";
import Cart from "../Common/Cart";

export default function SideLeft() {
  const { data, isLoading } = useGetProducts();
  console.log(data)

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="col-span-2">
      <div className="flex border-b-2 border-black justify-evenly py-4">
        <p>6 Products</p>
        <label htmlFor="">
          Order
          <select className="border border-black rounded-md ml-2" name="" id="">
            <option value="lowest">lowest</option>
            <option value="highest">highest</option>
          </select>
        </label>
        <label htmlFor="">
          Filter
          <select className="border border-black rounded-md ml-2" name="" id="">
            <option value="all">ALL</option>
            <option value="xs">xs</option>
            <option value="x">x</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
          </select>
        </label>
      </div>
      <div className="grid grid-cols-3">
        {data?.map((cart)=> <Cart key={cart.id} cart={cart}/>)}
      </div>
    </div>
  );
}
