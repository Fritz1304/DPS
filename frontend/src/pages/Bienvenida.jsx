import React from 'react';

function Bienvenida() {
  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
    },
    heading: {
      fontSize: '3em',
      color: '#2196f3', // Color azul llamativo
    },
    message: {
      fontSize: '1.5em',
      color: '#333',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>¡Bienvenido a nuestra LECALCONNECT !</h1>
      <p style={styles.message}>
        Estamos aquí para ayudarte a llegar mas clientes para explotar al máximo tu profesión de Abogado.
        ¡Explora nuestros servicios y no dudes en contactarnos!
      </p>
    </div>
  );
}

export default Bienvenida;
