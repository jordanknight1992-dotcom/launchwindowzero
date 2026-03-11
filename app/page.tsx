import Starfield from '@/components/Starfield';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Discovery from '@/components/Discovery';
import Crew from '@/components/Crew';
import Universe from '@/components/Universe';
import Book from '@/components/Book';
import Signup from '@/components/Signup';
import Author from '@/components/Author';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Starfield />
      <Navigation />
      <Hero />
      <Discovery />
      <Crew />
      <Universe />
      <Book />
      <Signup />
      <Author />
      <Footer />
    </main>
  );
}
