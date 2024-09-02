import React, { useState } from 'react';
import { Box, TextField, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import LoadingButton from '@mui/lab/LoadingButton';

function Contacto() {
  const {} = useSnackbar();
  const [formulario, datos] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [loading, setLoading] = useState(false);

  const validacion = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (value.length <= 3) {
          error = 'El nombre debe tener más de 3 caracteres';
        }
        break;
      case 'email':
        if (!value.includes('@')) {
          error = 'El email debe contener el símbolo "@"';
        }
        break;
      case 'phone':
        if (value.length <= 10) {
          error = 'El teléfono debe tener más de 10 dígitos';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const momento = (e) => {
    const { name, value } = e.target;
    datos({ ...formulario, [name]: value });
    validacion(name, value);
  };

  const envio = () => {
    const { name, email, phone } = formulario;
    validacion('name', name);
    validacion('email', email);
    validacion('phone', phone);

    if (!errors.name && !errors.email && !errors.phone) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        console.log(`Datos del formulario: ${name}, ${email}, ${phone}`);
        alert(`MIRA LA CONSOLAAAA`)
      }, 500);
    } else {
      setTimeout(() => {
        setLoading(false);
        alert(`Nesecito que llenes los datos`);
      }, 300);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="80vh"
        >
          <Card sx={{ width: '100%', maxWidth: 400, padding: 2}}>
            <CardContent>
              <Typography component="h2" variant="h5" align="center" gutterBottom>
                Formulario de Contacto
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    error={Boolean(errors.name)}
                    label="Nombre"
                    type="text"
                    name="name"
                    value={formulario.name}
                    onChange={momento}
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    helperText={errors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={Boolean(errors.email)}
                    label="Email"
                    type="email"
                    name="email"
                    value={formulario.email}
                    onChange={momento}
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={Boolean(errors.phone)}
                    label="Teléfono"
                    type="tel"
                    name="phone"
                    value={formulario.phone}
                    onChange={momento}
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    helperText={errors.phone}
                  />
                </Grid>
                <Grid item xs={12}>
                  <LoadingButton
                    size="small"
                    onClick={envio}
                    loading={loading}
                    variant="contained"
                    fullWidth
                  >
                    Enviar
                  </LoadingButton>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </header>
    </div>
  );
}

export default Contacto;
