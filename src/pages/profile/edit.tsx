import type { NextPage } from 'next'
import * as yup from "yup"
import { Formik } from 'formik'


import { Button, Input } from '@components'
import { useLanguageContext } from '@contexts'
import { FormWrapper, FormBody } from '@styles/global'
import { BaseTextModel } from '@models'

const validationSchema = (baseText: BaseTextModel) => yup.object({
  firstName: yup.string()
    .typeError(baseText.spans.invalid)
    .required(baseText.spans.required),
  lastName: yup.string()
    .typeError(baseText.spans.invalid)
    .required(baseText.spans.required),
  email: yup.string()
    .email()
    .typeError(baseText.spans.invalid)
    .required(baseText.spans.required),
})


const EditProfile: NextPage = () => {
  const { baseText } = useLanguageContext()

  const editProfile = (data: any) => {}

  return (
    <Formik           
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={validationSchema(baseText)}
      onSubmit={(data) => editProfile(data)}
    >
      {({ 
        handleChange, 
        handleBlur, 
        errors, 
        touched 
      }) => (
        <FormWrapper>
          <h1>{baseText.titles.editProfile}</h1>
          <FormBody>
            <li>
              <Input 
                name='firstName' 
                placeholder={baseText.placeholders.firstName}
                error={errors.firstName} 
                touched={touched.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </li>
            <li>
              <Input 
                name='lastName' 
                placeholder={baseText.placeholders.lastName}
                error={errors.lastName} 
                touched={touched.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </li>
            <li>
              <Input 
                name='email' 
                placeholder={baseText.placeholders.email}
                error={errors.email} 
                touched={touched.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </li>
            <li>
              <Button type="submit" label={baseText.labels.submit}/>
            </li>
          </FormBody>
        </FormWrapper>
      )}
    </ Formik>
  )
}

export default EditProfile
