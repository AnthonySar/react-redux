import React from 'react';
import { useFormik } from 'formik';

const Newsletter = () => {

  // Custom validation function.
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'Champ requis';
    } else if (values.firstName.length > 15) {
      errors.firstName = "Indiquer 15 characters ou moins"
    }

    if (!values.lastName) {
      errors.lastName = 'Champ requis';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Indiquer 20 characters ou moins';
    }
 
    if (!values.email) {
      errors.email = 'Champ requis';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email invalide';
    }

    return errors;
  }

  const formik = useFormik({
    // Déclaration de l'ensemble des values utilisées dans le formulaire
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    // Validate fait réfèrence à notre custom fct (gestion des erreurs)
    validate,
    
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className='formikContainer'>
      <h2>Test de Formik</h2>

      <form onSubmit={formik.handleSubmit}>
        <div className='formikGroup'>
          <label htmlFor='firstName'>Prénom</label>
          <input 
            id='firstName'
            name='firstName'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          { formik.touched.firstName && formik.errors.firstName ? <span>{formik.errors.firstName}</span> : null }
        </div>

        <div className='formikGroup'>
          <label htmlFor='lastName'>Nom</label>
          <input 
            id='lastName'
            name='lastName'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          { formik.touched.lastName && formik.errors.lastName ? <span>{formik.errors.lastName}</span> : null }
        </div>

        <div className='formikGroup'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          { formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null }
        </div>

        <button data-testid="button-submit" type='submit'>Valider</button>
      </form>
    </div>
  )
}

export default Newsletter