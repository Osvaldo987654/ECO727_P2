import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Canciones from './components/CancionList';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section id="nosotros">
        <h2>Sobre Nosotros</h2>
        <p>La estudiantina de la UPIICSA da inicio el 17 de febrero del 2016.
          Estudiantina de la UPIICSA fue fundada por parte de Osvaldo Cisneros – Bacalao. al ingresar a la unidad en el 2015, con idea de integrarse a la Tuna universitaria de UPIICSA, y darse cuenta que al no existir ningún grupo de esta naturaleza como en otras escuelas pertenecientes al IPN; surge la idea de conformar una estudiantina universitaria dentro de la unidad, llamada “Estudiantina de la UPIICSA”,  por lo que se da inicio al proyecto por parte de Osvaldo Cisneros, estudiante de la carrera de ciencias de la informática, y con ayuda del área de difusión y fomento a la cultura, con el apoyo de M. en C. Emmanuel González, profesor  de informática de la UPIICSA y la Lic. Karina Domínguez, Jefa del área de difusión y fomento a la cultura de la unidad.
          Proyecto de la estudiantina que es aceptado formalmente en diciembre de 2015, estimando una fecha de inicio en febrero de 2016, por lo que el primer ensayo de la estudiantina de la UPIICSA toma su primer ensayo oficial y tomándolo como fecha de fundación el 17 de febrero de 2016.
        </p>
        <img className='Logo' src="/assets/escudos/Escudo_EUPIICSA.png" alt="Escudo Estudiantina" />
      </section>

      <section id="mision-vision">
        <h2>Misión y Visión </h2>
        <p><strong>Misión:</strong> <br /> Promover la identidad cultural, el compañerismo y el amor por la música dentro de la comunidad politécnica, a través del arte y la tradición de la estudiantina. Buscamos compartir alegría, talento y orgullo universitario en cada presentación, fortaleciendo los valores humanos y la unión entre generaciones.</p>
        <p><strong>Visión:</strong> <br /> Ser un referente artístico del Instituto Politécnico Nacional reconocido por su calidad musical, su espíritu festivo y su compromiso con la difusión de la cultura universitaria, llevando el nombre de la UPIICSA y del IPN con orgullo a todos los escenarios donde nos sea invitados. </p>
      </section>

      <Services />
      <Gallery />
      <Testimonials />
      <Canciones />
      <Footer />
    </>
  );
}

export default App;
