import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function AboutUs() {
  const [videoId, setVideoId] = useState(null);
  const [open, setOpen] = useState(false);

  const videoIds = [
    'qjgeCjzk1V8',
    'RZo4BDPzPOI',
    'snmjWTG9v8o',
    'ajA8KReztAU',
    'RtJGsnz356A',
    'lVBcIGaLsKc',
    'iKp4emzBC_w',
  ];

  const ramdon = () => {
    const randomIndex = Math.floor(Math.random() * videoIds.length);
    setVideoId(videoIds[randomIndex]);
    setOpen(true); 
  };


  const salida = () => {
    setOpen(false); 
    setVideoId(null); 
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '20vh',
        padding: 4,
        textAlign: 'center',
        color: '#fff',
        backgroundImage: 'url(/path/to/your/background-image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Sobre nosotros
      </Typography>
      <Typography variant="body1" component="p" sx={{ maxWidth: '800px', lineHeight: 1.8, marginBottom: 4 }}>
        Una página de videos aleatorios es una plataforma en línea que ofrece a los usuarios una experiencia única al reproducir videos seleccionados al azar de una vasta biblioteca de contenido.
      </Typography>

     
      <Button variant="contained" color="primary" onClick={ramdon} style={{margin:'270px 0 0 0',  height:'70px'}}>
        ¡Reproducir Ya!
      </Button>


      <Dialog open={open} onClose={salida} maxWidth="md" fullWidth>
        <DialogContent>
          {videoId && (
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <iframe
                width="100%"
                height="340"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&showinfo=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={salida} color="primary" variant="contained">
            SALIR
          </Button>
          <Button onClick={ramdon} color="primary" variant="contained">
            OTRO
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AboutUs;
