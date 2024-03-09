import React from 'react';
import { Form, Formik } from 'formik';
import { Button, TextField } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import { formSchema, IForm, initialValues } from './const';

export const ContactForm = () => {
  async function sendMessage(values: IForm) {
    console.log(values);
  }
  return (
    <Formik
      onSubmit={sendMessage}
      initialValues={initialValues}
      validationSchema={formSchema}
    >
      {({ touched, errors, values, handleChange, isValid, dirty }) => (
        <Form autoComplete='off'>
          <TextField
            id='name'
            name='name'
            helperText={touched.name ? errors.name : ''}
            error={touched.name && Boolean(errors.name)}
            label='Nombre'
            value={values.name}
            onChange={handleChange}
            style={{ marginBottom: '20px' }}
            variant='outlined'
            color='secondary'
            fullWidth
          />
          <TextField
            id='email'
            name='contact'
            label='Metodo de contacto'
            helperText={touched.contact ? errors.contact : ''}
            error={touched.contact && Boolean(errors.contact)}
            value={values.contact}
            onChange={handleChange}
            variant='outlined'
            color='secondary'
            fullWidth
            style={{ marginBottom: '20px' }}
          />
          <TextField
            id='email'
            name='message'
            helperText={touched.message ? errors.message : ''}
            error={touched.message && Boolean(errors.message)}
            value={values.message}
            onChange={handleChange}
            label='Enviame un mensaje'
            fullWidth
            style={{ marginBottom: '20px' }}
            variant='outlined'
            color='secondary'
            multiline
            minRows={4}
          />
          <Button
            endIcon={<Send />}
            size='large'
            variant='contained'
            color='secondary'
            type='submit'
            style={{ padding: '15px 45px', fontWeight: 'bold' }}
          >
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  );
};
