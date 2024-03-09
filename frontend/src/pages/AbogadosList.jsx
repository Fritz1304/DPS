import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
//import AbogadoItem from './AbogadoItem';

function AbogadosList() {
  const { getAbogados,Abogados } = useAuth();
  
  useEffect(()=>{
    getAbogados()
  },[])

  const styles = {
    abogadosList: {
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#e0f7fa',
      padding: '20px',
    },
    abogadoContainer: {
      display: 'grid',
      gap: '20px',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    },
    abogadoItem: {
      border: '1px solid #ccc',
      padding: '15px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      textAlign: 'center', // Centrar el contenido
    },
    userIcon: {
      fontSize: '3em', // Tamaño grande
      marginBottom: '10px', // Espaciado inferior
    },
    heading: {
      color: '#333',
      fontSize: '1.5em',
    },
    paragraph: {
      margin: '5px 0',
      color: '#666',
      fontSize: '1.2em',
    },
    whatsappButton: {
      backgroundColor: '#4caf50',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      textDecoration: 'none',
      display: 'inline-block',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.abogadosList}>
      <h1 style={styles.heading}>Listado de Abogados</h1>
      <div style={styles.abogadoContainer}>
        {Abogados.map(abogado => (
          <div style={styles.abogadoItem} key={abogado._id}>
            <span role="img" aria-label="user" style={styles.userIcon}>
              👤
            </span>
            <h2 style={styles.heading}>{abogado.name}</h2>
            <p style={styles.paragraph}>Email: {abogado.email}</p>
            <p style={styles.paragraph}>Teléfono: {abogado.phone}</p>
            <p style={styles.paragraph}>Categoría: {abogado.category}</p>
            <a
              href={`https://wa.me/${abogado.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.whatsappButton}
            >
              Contactar por WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AbogadosList;
