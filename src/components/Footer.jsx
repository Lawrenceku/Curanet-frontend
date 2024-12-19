import { Container, Text, Link } from 'shadcn-ui';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <Container className="text-center">
        <Text size="sm">
          &copy; {new Date().getFullYear()} Curanet. All rights reserved.
        </Text>
        <div className="mt-4">
          <Link href="/privacy-policy" className="text-gray-400 hover:text-white mx-2">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-gray-400 hover:text-white mx-2">
            Terms of Service
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
