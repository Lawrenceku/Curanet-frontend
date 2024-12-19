import { Container, Heading, Text } from 'shadcn-ui';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <Container className="text-center">
        <Heading as="h2" size="xl" className="mb-4">
          About Curanet
        </Heading>
        <Text size="lg" className="mx-auto max-w-3xl">
          Curanet is a cutting-edge platform designed to bridge the gap between healthcare providers and patients, ensuring better access to services, faster responses, and more personalized care. Our goal is to make healthcare more efficient, accessible, and user-friendly for everyone.
        </Text>
      </Container>
    </section>
  );
};

export default AboutSection;
