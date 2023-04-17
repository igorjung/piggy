import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import * as yup from "yup"
import { Formik } from 'formik';

import { useLanguageContext } from '@contexts';
import { 
  Button, 
  Input, 
  Switch 
} from '@components'
import { BaseTextModel } from '@models';
import { FormWrapper, FormBody } from '@styles/global'

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
  password: yup.string()
    .min(8, baseText.spans.passwordRules)
    .typeError(baseText.spans.invalid)
    .required(baseText.spans.required),
  confirmPassword: yup.string()
    .typeError(baseText.spans.invalid)
    .oneOf([yup.ref('password'), ''], baseText.spans.passwordMatch)
    .required(baseText.spans.required)
})

const Signup: NextPage = () => {
  const router = useRouter()
  const { baseText } = useLanguageContext()

  const onSubmit = (data: any) => console.log('$$$$', data)

  return (
    <Formik           
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema(baseText)}
      onSubmit={onSubmit}
    >
      {({ 
        handleChange, 
        handleBlur, 
        errors, 
        touched 
      }) => (
        <FormWrapper>
          <h1>{baseText.titles.signup}</h1>
          <Switch 
            options={[{
              id: 1,
              label: baseText.labels.signin,
              onClick: () => router.push('/auth/signin'),
            }, {
              id: 2,
              label: baseText.labels.signup,
              onClick: () => router.push('/auth/signup'),
              isActivated: true,
            }]}
          />
          <FormBody>
            <li>
              <Input 
                name="firstName"
                placeholder={baseText.placeholders.firstName}
                error={errors.firstName} 
                touched={touched.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </li>
            <li>
              <Input 
                name="lastName"
                placeholder={baseText.placeholders.lastName}
                error={errors.lastName} 
                touched={touched.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </li>
            <li>
              <Input 
                name="email"
                placeholder={baseText.placeholders.email}
                error={errors.email} 
                touched={touched.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </li>
            <li>
              <Input 
                name="password"
                placeholder={baseText.placeholders.password}
                error={errors.password} 
                touched={touched.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </li>
            <li>
              <Input 
                name="confirmPassword"
                placeholder={baseText.placeholders.confirmPassword}
                error={errors.confirmPassword} 
                touched={touched.confirmPassword}
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
    </Formik>
  )
}

export default Signup
