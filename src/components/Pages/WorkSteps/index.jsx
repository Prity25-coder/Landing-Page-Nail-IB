function WorkSteps({ onClose }) {
  return (
    <div className="font-sans mt-20 shadow-lg rounded-lg bg-blue-200 px-4 pb-2">
      <div className="top-1 right-1 text-end ">
        <button
          className="rounded-lg shadow-lg bg-gray-300 hover:bg-red-500 cursor-pointer "
          onClick={onClose}
        >
          ✖️
        </button>
      </div>

      <h2 className="flex justify-center font-sans text-2xl font-bold text-black">
        How It Works: Accessing Nailib’s Video Content for IB Students
      </h2>

      <div className="mt-4  text-black">
        <h4 className=" text-xl"> Step 1: Sign Up for Free</h4>
        <p className=" font-light">- Click the "Sign Up" button on the homepage.</p>

        <p className=" font-light">- Create an account using your email and password.</p>

        <p className=" font-light">- Get instant access to free trial videos.</p>
      </div>

      <div className="mt-4 text-black">
        <h4 className="text-xl"> Step 2: Explore Subject-Specific Content</h4>
        <p className=" font-light">
          - Browse subject-wise video lessons for IB Mathematics, Sciences,
          Humanities, and more.
        </p>
        <p className=" font-light">
          - Choose from exam-style walkthroughs, topic explanations, and
          revision guides.
        </p>
      </div>

      <div className="mt-4 text-black">
        <h4 className="text-xl"> Step 3: Watch & Learn Anytime, Anywhere</h4>
        <p className=" font-light">
          -Stream high-quality IB video lessons on mobile, tablet, or desktop.
        </p>
        <p className=" font-light">
          - Use playback controls to pause, rewind, and take notes at your own
          pace.
        </p>
      </div>

      <div className="mt-4 text-black">
        <h4 className="text-xl"> Step 4: Access Study Resources & Practice Questions</h4>
        <p className=" font-light">
          -Get downloadable notes, quizzes, and IB past paper solutions
          alongside videos.
        </p>
        <p className=" font-light">
          - Test your knowledge with interactive exercises and practice
          questions.
        </p>
      </div>

      <div className="mt-4 text-black">
        <h4 className="text-xl"> Step 5: Track Progress & Improve Performance</h4>
        <p className=" font-light">-Save favorite videos and track completed lessons.</p>

        <p className=" font-light">- Receive personalized recommendations based on your IB syllabus.</p>
      </div>

      <div className="mt-4 text-black">
        <h4 className="text-xl"> Step 6: Upgrade for Full Access</h4>
        <p className=" font-light">
          -Unlock premium content with advanced IB lessons and expert exam
          strategies.
        </p>
        <p className=" font-light">
          - Get exclusive tips from IB educators and high-achieving students.
        </p>
      </div>

    </div>
  );
}

export default WorkSteps;
