function Signup({ onClose }) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <div className="top-1 right-1 text-end ">
          <button
            className="rounded-lg shadow-lg bg-gray-300 hover:bg-red-500 cursor-pointer "
            onClick={onClose}
          >
            ✖️
          </button>
        </div>

        <img
          src="https://cdn.nailib.com/_next/static/media/logo.0d9c890e.svg?w=256&q=75"
          alt=""
          className="text-center mb-4 h-8"
        />

        <form className="flex flex-col space-y-4">
          <div>
            <label htmlFor="Fname" className="block font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="Fname"
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="Uname" className="block font-medium">
              Username
            </label>
            <input
              type="text"
              id="Uname"
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="pass" className="block font-medium">
              Password
            </label>
            <input
              type="password"
              id="pass"
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="Cpass" className="block font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="Cpass"
              className="border rounded p-2 w-full"
            />
          </div>

          <div className="flex justify-between mt-4">
            <button className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition cursor-pointer">
              Register
            </button>
            <button
              className="bg-gray-300 text-gray-700 rounded px-4 py-2 hover:bg-gray-400 transition cursor-pointer"
              type="reset"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
