import { Link } from "react-router-dom";
import img from "../assets/img/under-construction.png";

const PageUnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen  text-center p-6 transition-all">
      {/* Animated Image */}
      <img
        src={img}
        alt="Under Construction"
        className="w-2/3 max-w-md mb-6 animate-float"
      />

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
      We&apos;re Polishing Things Up! 🦷✨
      </h1>

      {/* Description */}
      <p className="text-gray-600  mb-6 max-w-lg">
      This section is currently under maintenance. We&apos;re working to improve your experience. Stay tuned!
      </p>

      {/* CTA Buttons */}
      <div className="flex space-x-4">
        <Link
          to="/"
          className="px-6 py-3 bg-green-500 text-white text-lg rounded-lg shadow-md 
                    hover:bg-green-600 transition duration-300"
        >
          Back to Dashboard
        </Link>
        
      </div>
    </div>
  );
};

export default PageUnderConstruction;
