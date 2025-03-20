import { useState } from "react";
import Features from "../Pages/Features";
import Signup from "../Pages/Signup";
import WorkSteps from "../Pages/WorkSteps";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenF, setIsModalOpenF] = useState(false);
  const [isModalOpenHowItWork, setIsModalOpenHowItWork] = useState(false);

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
          <div>
            <li onClick={() => setIsModalOpenF(true)}>Features</li>
            {isModalOpenF && (
              <Features onClose={() => setIsModalOpenF(false)} />
            )}
          </div>

          <div>
            <li onClick={() => setIsModalOpenHowItWork(true)}>How it works</li>
            {isModalOpenHowItWork && (
              <WorkSteps onClose={() => setIsModalOpenHowItWork(false)} />
            )}
          </div>
        </ul>
      </div>

      <div className="text-blue-600">
        <button
          className=" border-blue-500 border-2 px-2 py-2 cursor-pointer font-bold rounded-lg "
          onClick={() => setIsModalOpen(true)}
        >
          Sign-Up
        </button>

        {isModalOpen && <Signup onClose={() => setIsModalOpen(false)} />}
      </div>
    </div>
  );
}

export default Navbar;
