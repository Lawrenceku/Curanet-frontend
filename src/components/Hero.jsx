import { Text, Button } from "../utils/index"

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          className="w-full h-full absolute inset-0 object-cover"
          src="https://www.youtube.com/embed/Nx0N-DrPf7M?frameBorder=0&autoplay=1&mute=1&loop=1&playlist=Nx0N-DrPf7M&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&showinfo=0"          
          title="YouTube video background"
          allow="autoplay; fullscreen; encrypted-media"
        ></iframe>
      </div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-green-950 bg-opacity-50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative text-3xl container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
        <p className="text-7xl font-bold text-white">
          Welcome to Curanet
        </p>
        <p className="text-lg my-6">
          Your one-stop platform for all your healthcare needs, connecting patients and professionals.
        </p>
        <Button variant="outlined" color="primary" size="lg">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
