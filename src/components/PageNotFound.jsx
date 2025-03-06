import { Link } from 'react-router-dom';
import img from '../assets/img/404.svg';
// import vdo from '../assets/img/pagenotfound.mp4'
const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
            {/* Image */}
            <img src={img} alt="Page Not Found" className="w-1/2 max-w-md mb-6 animate-fade-in" />
            {/* <video src={vdo}/> */}

            {/* Text */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
            <p className="text-gray-600 text-lg md:text-xl mb-6">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>

            {/* CTA Button */}
            <Link
                to="/"
                className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
                Go Back to Home
            </Link>
        </div>
    );
};

export default PageNotFound;
