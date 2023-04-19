import React, { useRef } from 'react';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FileUpload from './FileUpload';

const NewsletterV2 = ({ children }) => {
  const initialValues = {
    files: ""
  };
  const fileRef = useRef(null);

  return (
    <div className='formikUpload'>
      <h2>Formik Upload Files</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          files: Yup.mixed()
            .test("is-file-too-big", "File exceeds 10MB", () => {
              let valid = true;
              const files = fileRef?.current?.files;
              if (files) {
                const fileArr = Array.from(files);
                fileArr.forEach((file) => {
                  const size = file.size / 1024 / 1024;
                  if (size > 10) {
                    valid = false;
                  }
                });
              }
              return valid;
            })
            .test(
              "is-file-of-correct-type",
              "File is not of supported type",
              () => {
                let valid = true;
                const files = fileRef?.current?.files;
                if (files) {
                  const fileArr = Array.from(files);
                  fileArr.forEach((file) => {
                    const type = file.type.split("/")[1];
                    const validTypes = [
                      "zip",
                      "xml",
                      "xhtml+xml",
                      "plain",
                      "svg+xml",
                      "rtf",
                      "pdf",
                      "jpeg",
                      "png",
                      "jpg",
                      "ogg",
                      "json",
                      "html",
                      "gif",
                      "csv"
                    ];
                    if (!validTypes.includes(type)) {
                      valid = false;
                    }
                  });
                }
                return valid;
              }
            )
        })}
        onSubmit={(values) => {
          console.log("form values", values);
          console.log("all selected files", fileRef.current.files);
        }}
      >
        <Form>
          <FileUpload name="files" fileRef={fileRef}/>
          <button type="submit">Go Console</button>
        </Form>
      </Formik>
    </div>
  )
}

export default NewsletterV2