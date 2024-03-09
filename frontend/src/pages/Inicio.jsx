import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div>
      <header style={{ backgroundColor: '#3498db', color: '#fff', padding: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5em' }}>legalCONNECT</h1>
        <p style={{ fontSize: '1.2em' }}>Conectando Abogados y Clientes</p>
      </header>

      <section style={{ padding: '50px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2em', color: '#333' }}>Bienvenido a legalCONNECT</h2>
        <p style={{ fontSize: '1.3em', color: '#666' }}>La plataforma que simplifica la conexión entre abogados y clientes. Encuentra el abogado adecuado para tus necesidades legales o amplía tu práctica legal llegando a nuevos clientes.</p>
        <p style={{ fontSize: '1.2em' }}>
          <Link to="/login" style={{ marginRight: '10px', color: '#3498db', textDecoration: 'none' }}>
            Login Usuario
          </Link>
          <Link to="/register" style={{ marginRight: '10px', color: '#3498db', textDecoration: 'none' }}>
            Registro de Usuario
          </Link>
          <Link to="/registerAbogados" style={{ color: '#3498db', textDecoration: 'none' }}>
            Registro de Abogado
          </Link>
          <Link to="/loginAbogado" style={{  marginLeft: '10px' , color: '#3498db', textDecoration: 'none' }}>
            Login Abogado
          </Link>
        </p>
       
      </section>

      <footer style={{ backgroundColor: '#2c3e50', color: '#fff', textAlign: 'center', padding: '20px', position: 'fixed', bottom: '0', width: '100%' }}>
        <p style={{ fontSize: '1.2em' }}>&copy; 2024 legalCONNECT. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Inicio;
