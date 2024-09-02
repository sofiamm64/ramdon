import React from 'react';
import Typography from '@mui/material/Typography';

const gente = [
  {
    name: "Pepito",
    feedback: "¡Excelente servicio y productos de alta calidad! Recomiendo esta empresa a todos mis amigos.",
  },
  {
    name: "Gómez",
    feedback: "Un lugar confiable con un equipo muy profesional. Estoy muy satisfecho con mi compra.",
  },
  {
    name: "Martica",
    feedback: "La atención al cliente es fantástica. Me sentí muy valorada como cliente.",
  },
];

function Clients() {
  const contenedor = {
    padding: '40px',
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'center',
  };


  const parrafo = {
    fontSize: '2rem',
    color: '#666',
    marginBottom: '30px',
  };

  const card = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  };

  const cardinter = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '300px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  };

  const nombre = {
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#000000'
  };

  const opinion = {
    fontSize: '1rem',
    color: '#444',
  };

  return (
    <div style={contenedor}>
      <Typography variant="h3" component="h1" gutterBottom>
        Clientes
      </Typography>
      <p style={parrafo}>
        Opiniones o testimonios de los consumidores.
      </p>
      <div style={card}>
        {gente.map((comentario, index) => (
          <div key={index} style={cardinter}>
            <p style={nombre}>{comentario.name}</p>
            <p style={opinion}>{comentario.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;
