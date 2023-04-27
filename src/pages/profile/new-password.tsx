import type { NextPage } from 'next'
import * as yup from "yup"
import { Formik } from 'formik'

import { Button, Input } from '@components'
import { useLanguageContext } from '@contexts'
import { FormWrapper, FormBody } from '@styles/global'
import { BaseTextModel } from '@models'

const validationSchema = (baseText: BaseTextModel) => yup.object({
  newPassword: yup.string()
    .min(8, baseText.spans.passwordRules)
    .typeError(baseText.spans.invalid)
    .required(baseText.spans.required),
  confirmPassword: yup.string()
    .typeError(baseText.spans.invalid)
    .oneOf([yup.ref('newPassword'), ''], baseText.spans.passwordMatch)
    .required(baseText.spans.required),
  oldPassword: yup.string()
    .typeError(baseText.spans.invalid)
    .required(baseText.spans.required),
})

const NewPasswordProfile: NextPage = () => {
  const { baseText } = useLanguageContext()

  const editProfile = (data: any) => {}

  return (
    <Formik           
      initialValues={{
        newPassword: '',
        confirmPassword: '',
        oldPassword: '',
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
          <h1>{baseText.titles.editPasswordProfile}</h1>
          <FormBody>
            <li>
              <Input 
                name='newPassword' 
                placeholder={baseText.placeholders.newPassword}
                error={errors.newPassword} 
                touched={touched.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </li>
            <li>
              <Input 
                name='confirmPassword' 
                placeholder={baseText.placeholders.confirmPassword}
                error={errors.confirmPassword} 
                touched={touched.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </li>
            <li>
              <Input 
                name='oldPassword' 
                placeholder={baseText.placeholders.oldPassword}
                error={errors.oldPassword} 
                touched={touched.oldPassword}
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

export default NewPasswordProfile
