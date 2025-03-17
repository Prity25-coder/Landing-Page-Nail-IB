import { TiSocialLinkedin, TiSocialYoutube } from "react-icons/ti";

function Footer() {
  const socialLinks = [
    {
      name: "Youtube",
      icon: <TiSocialYoutube />,
      url: "https://www.youtube.com/channel/UC-YN3xxfJs8W8q-L6Jo2mUw",
    },

    {
      name: "LinkedIn",
      icon: <TiSocialLinkedin />,
      url: "https://www.linkedin.com/company/nail-ib/",
    },
  ];

  return (
    <div>
      <h4 className="font-sans font-bold flex justify-center text-2xl">
        Newsletter
      </h4>

      <div className="flex justify-center">
        <p className=" font-light font-sans">
          Subscribe and get the free IB videos, notes, tips and product guides.
        </p>
      </div>

      <div className="flex justify-center mt-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="py-2 border-1 "
        />
        <button className="text-white bg-blue-600 ml-2 px-2 rounded-sm cursor-pointer">
          Subscribe
        </button>
      </div>

      <div>
        <p className=" font-sans flex justify-center mx-40 mt-4 font-light ">
          Contact Us IA Examples 100% FREE EE Examples 100% FREE IB Resources IB
          Flashcards Question Bank Sell Your IB Docs Earn Company About Us
          Careers We're Hiring Affiliate Program Earn Honor Code Privacy Policy
          Cookie Policy Refund Policy Subprocessors Terms of Service Trademark
          Policy EU & Swiss Privacy Policy Compare Nail IB Vs. Kognity Nail IB
          Vs. IB Question Bank Nail IB Vs. InThinking Nail IB Vs. Oxford Study
          Courses Nail IB Vs. Revision Village Newsletter Subcribe and get the
          free IB videos, notes, tips and product guides. Enter your email
          Subscribe By submitting this form, I agree to the data entered being
          used by Nail IB (nailib.com is a product of Turnix) for sending
          newsletters and promotional offers. Your data shall be kept until you
          unsubscribe. In accordance with current laws and regulations, you can
          unsubscribe at any time by clicking on the link in the promotional
          emails that we send to you. Subject to the conditions provided for by
          applicable legislation, you have rights in relation to your data.
        </p>
      </div>

      <div>
        <h4 className=" flex justify-center font-bold font-sans text-2xl mt-4 ">
          Follow Us
        </h4>

        <div className="flex space-x-6 justify-center mt-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              className="p-3 bg-pink-400 rounded-full shadow-md hover:bg-blue-600 transition"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-[#1a1f2d] flex justify-center h-15">
        <img
          src="https://cdn.nailib.com/_next/static/media/turnix.7b86b656.gif?w=64&q=75"
          alt=""
          className="pt-4 h-10 w-8 mx-2"
        />
        <p className="pt-4 font-sans font-bold  text-white">
          nailib.com is a product of Turnix
        </p>
        <img
          src="https://cdn.nailib.com/_next/static/media/turnix.7b86b656.gif?w=64&q=75"
          alt=""
          className="pt-4 h-10 w-8 mx-2"
        />
      </div>
    </div>
  );
}

export default Footer;
