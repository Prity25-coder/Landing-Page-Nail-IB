function Features({ onClose }) {
  return (
    <div className="font-sans mt-20 shadow-lg rounded-lg  bg-blue-200 text-black pb-2">
      <div className="top-1 right-1 text-end ">
        <button
          className="rounded-lg shadow-lg bg-gray-300 hover:bg-red-500 cursor-pointer "
          onClick={onClose}
        >
          ✖️
        </button>
      </div>

      <h3 className="font-sans text-2xl font-bold flex justify-center">
        Key Benefits of Using Videos for IB Study
      </h3>

      <div className="ml-8 mt-8">
        <h5 className="flex justify-start font-bold">
          1. Visual Learning Enhances Understanding
        </h5>

        <p className="flex justify-start font-light">
          Videos provide animated explanations, real-world examples, and
          step-by-step problem-solving that help students grasp complex IB
          concepts more easily than just reading textbooks.
        </p>
      </div>

      <div className="ml-8 mt-4">
        <h5 className="flex justify-start font-bold">
          2.Engaging & Interactive
        </h5>

        <p className="flex justify-start font-light">
          Unlike static text, videos are engaging and dynamic, keeping students
          focused and motivated while studying.
        </p>
      </div>

      <div className="ml-8 mt-4">
        <h5 className="flex justify-start font-bold">
          3. Learn at Your Own Pace
        </h5>
        <p className="flex justify-start font-light">
          - Pause, rewind, and replay difficult topics anytime.
        </p>
        <p className="flex justify-start font-light">
          - Speeds up revision before IB exams
        </p>
      </div>

      <div className="ml-8 mt-4">
        <h5 className=" flex justify-start font-bold">
          4. Access to Expert IB Tutors
        </h5>
        <p className=" flex justify-start font-light">
          High-quality video content is created by experienced IB educators,
          ensuring students receive accurate and effective explanations.
        </p>
      </div>

      <div className="ml-8 mt-4">
        <h5 className="flex justify-start font-bold">
          5. Covers All IB Subjects
        </h5>
        <p className="flex justify-start font-light">
          Videos provide structured lessons across subjects like:-
        </p>
        <p className="flex justify-start font-light">
          - Mathematics: Step-by-step problem-solving
        </p>
        <p className="flex justify-start font-light">
          -Sciences: 3D animations of biological & chemical processes
        </p>
        <p className="flex justify-start font-light">
          - Humanities: In-depth historical & literary analysis
        </p>
      </div>

      <div className="ml-8 mt-4">
        <h5 className="flex justify-start font-bold">
          6. Perfect for IB Exam Preparation
        </h5>
        <p className="flex justify-start font-light">
          - Exam-style question walkthroughs.
        </p>
        <p className="flex justify-start font-light">
          - Past paper solutions & strategies
        </p>
        <p className="flex justify-start font-light">
          - Time management tips for IB assessments
        </p>
      </div>

      <div className="ml-8 mt-4">
        <h5 className="flex justify-start font-bold">
          7. Study Anytime, Anywhere
        </h5>
        <p className="flex justify-start font-light">
          -Available on mobile, tablet, and desktopAvailable on mobile, tablet,
          and desktop
        </p>
        <p className="flex justify-start font-light">
          - Learn on-the-go with 24/7 access
        </p>
      </div>

      <div className="ml-8 mt-4 mb-10">
        <h5 className="flex justify-start font-bold">
          Boosts IB Scores & Confidence
        </h5>
        <p className=" flex justify-start font-light">
          Students using videos for IB preparation often score higher, as they
          understand concepts better and retain information more effectively.
        </p>
      </div>
    </div>
  );
}

export default Features;
