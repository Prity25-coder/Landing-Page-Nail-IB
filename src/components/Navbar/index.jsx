import Features from "../Pages/Features";

function Navbar() {
  return (
    <div className="flex py-4 bg-white font-integralCF">
      <img
        src="https://cdn.nailib.com/_next/static/media/logo-small.5691114d.svg"
        alt=""
        className="w-10 h-10 ml-4"
      />

      <div className="mx-4">
        <ul className=" flex justify-center gap-4 cursor-pointer font-bold text-blue-600 ">
          <li>Home</li>
          <li onClick={<Features/>}>Features</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="text-blue-600">
        <button className=" border-blue-500 border-2 px-2 py-2 cursor-pointer font-bold rounded-lg ">
          Sign-Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
