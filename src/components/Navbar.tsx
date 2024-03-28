import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-5 bg-gray-900">
      <div className="grid grid-cols-2 text-zinc-100">
        <div className="scroll-m-20 text-md font-extrabold tracking-tight lg:text-xl px-10 cursor-pointer">
          <Link to={"/"}>TODO</Link>
        </div>
        <div>
          <ul className="list-none flex flex-row justify-end">
            <li className="px-5 font-semibold hover:font-bold cursor-pointer transition-all ease-in-out">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="pr-10 px-5 font-semibold hover:font-bold cursor-pointer transition-all ease-in-out">
              <Link to={"/todo"}>Todo</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
