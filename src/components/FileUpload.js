import { useField } from 'formik'
import React from 'react'

const FileUpload = ({ fileRef, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className='fileUpload'>
      {/* <label htmlFor='files'>Choisir un fichier</label> */}
      <input
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