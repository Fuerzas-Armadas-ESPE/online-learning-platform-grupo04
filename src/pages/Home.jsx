import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-blue-900 text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-4">¡Aprende lo que quieras, cuando quieras!</h1>
          <p className="text-2xl mb-8">Descubre una amplia variedad de cursos en nuestra plataforma de educación en línea.</p>
          <Button variant="contained" component={Link} to="/courses" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded">
            Explora Cursos
          </Button>
        </div>
      </section>

      {/* Sección de Información */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Aprende de los mejores</h2>
              <p className="text-xl mb-6">Nuestros cursos son impartidos por expertos en la industria para asegurarte una educación de alta calidad y relevante.</p>
              <Button variant="contained" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded">
                Conócenos
              </Button>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4">¿Listo para comenzar?</h2>
              <p className="text-xl mb-6">Regístrate ahora y comienza tu viaje de aprendizaje con nosotros. ¡Es rápido, fácil y gratuito!</p>
              <Button variant="contained" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded">
                Registrarse
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Tienes alguna pregunta?</h2>
          <p className="text-2xl mb-6">¡No dudes en ponerte en contacto con nosotros!</p>
          <Button variant="contained" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded">
            Contáctame
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Plataforma de Educación en Línea. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
