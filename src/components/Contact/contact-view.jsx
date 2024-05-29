import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Contact() {
  const [state, handleSubmit, reset] = useForm("mnqeyyel");

  if (state.succeeded) {
    return (
        <Container  maxWidth="sm" sx={{
            mt: 5, mb: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center'
            }}>
            <CheckCircleIcon sx={{ fontSize: 50, color: '#4caf50' }} />
            <Typography variant='h5'>
                Thanks for the message
            </Typography>
            <Typography variant='h5'>
                I will respond shortly :D
            </Typography>
            <Button 
            onClick={reset}
            variant="contained" 
            color="primary"
            fullWidth
            sx={{
                mt: 5
            }}
            >
                Return
            </Button>
        </Container>
    );
    }

  return (
    <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="First Name"
                    id="first-name"
                    type="text"
                    name="first-name"
                    variant="outlined"
                    required
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Last Name"
                    id="last-name"
                    type="text"
                    name="last-name"
                    variant="outlined"
                    required
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    fullWidth
                    label="Email Address"
                    id="email"
                    type="email"
                    name="email"
                    variant="outlined"
                    required
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    fullWidth
                    label="Subject"
                    id="subject"
                    type="subject"
                    name="subject"
                    variant="outlined"
                />
                <ValidationError 
                    prefix="Subject" 
                    field="subject"
                    errors={state.errors}
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    fullWidth
                    label="Message"
                    id="message"
                    name="message"
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                disabled={state.submitting}
                fullWidth
                >
                Send Message
                </Button>
            </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Contact