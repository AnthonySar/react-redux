import { useField } from 'formik'
import React from 'react'

/**
 * @param useField 
 * @description
 * useField : est utilisée pour associer le champ 'name' du formulaire à l'input.
 * Permet de gérer les états de validations et les valeurs de champs 
 */

/**
 * @param fileRef
 * @description
 * La référence est utilisé pour récupérer les fichiers sélectionnés dans le composant parent
 */

const FileUpload = ({ fileRef, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className='fileUpload'>
      {/* <label htmlFor='files'>Choisir un fichier</label> */}
      <input
      data-testid='input-upload'
        ref={fileRef} 
        type='file'
        multiple={true}
        {...field}
      />
      { meta.touched && meta.error ? 
        (
          <div style={{color: 'red'}}>{meta.error}</div>
        ) 
        : null
      }
    </div>
  )
}

export default FileUpload;