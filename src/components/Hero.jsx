import { Button, Container, Heading, Text } from 'shadcn-ui';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center" style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50" />
      <Container className="relative text-center text-white py-16">
        <Heading as="h1" size="xl" className="mb-4">
          Welcome to Curanet
        </Heading>
        <Text size="lg" className="mb-8">
          Your one-stop platform for all your healthcare needs, connecting patients and professionals.
        </Text>
        <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
          Get Started
        </Button>
      </Container>
    </section>
  );
};

export default HeroSection;
