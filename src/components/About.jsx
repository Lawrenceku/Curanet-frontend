import { Text } from "../utils/index";
// import { cn } from "@/lib/utils"; // Helper for conditional classes if using shadcn-ui's className merging utility

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <p as="h2" size="2xl" className="mb-4">
          About Curanet
        </p>
        <p size="lg" className="mx-auto max-w-3xl">
          Curanet is a cutting-edge platform designed to bridge the gap between healthcare providers and patients, ensuring better access to services, faster responses, and more personalized care. Our goal is to make healthcare more efficient, accessible, and user-friendly for everyone.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
