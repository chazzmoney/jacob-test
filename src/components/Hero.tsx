import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

function HomePageHeroSection() {
    const handleButtonClick = () => {
        console.log("Button clicked: Start using LandingFolio");
        // Implement navigation or further action here
    };

    return (
        <div className="flex w-full min-h-screen items-center justify-center bg-white">
            <div className="space-y-12">
                <div className="bg-blue-100 rounded-3xl p-6 flex items-center justify-center">
                    <FontAwesomeIcon icon={faCamera} size="3x" className="text-blue-600" />
                </div>
                <div>
                    <h1 className="text-6xl font-bold leading-tight text-gray-800">
                        Meet the New Landingfolio Kit
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.
                    </p>
                    <button 
                        className="mt-5 px-6 py-3 bg-blue-600 rounded-lg text-white text-lg leading-7"
                        onClick={handleButtonClick}
                    >
                        Start using LandingFolio
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomePageHeroSection;