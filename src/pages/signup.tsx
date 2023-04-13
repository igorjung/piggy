import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import * as yup from "yup"
import { Form, Formik } from 'formik';
import styled from 'styled-components'

import { 
  Button, 
  Input, 
  Switch 
} from '@components'

const FormWrapper = styled(Form)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 32px;
  }
`
const FormBody = styled.ul`
  width: 100%;
  max-width: 600px;
  height: 100%;

  display: grid;
  justify-content: center;
  grid-template-columns: auto;
  gap: 8px;

  margin-top: 32px;
`

const validationSchema = yup.object({
  firstName: yup.string()
    .typeError('Invalid value')
    .required('Field required'),
  lastName: yup.string()
    .typeError('Invalid value')
    .required('Field required'),
  email: yup.string()
    .email()
    .typeError('Invalid value')
    .required('Field required'),
  password: yup.string()
    .min(8, 'Password must have 8 at least character')
    .typeError('Invalid value')
    .required('Field required'),
  confirmPassword: yup.string()
    .typeError('Invalid value')
    .oneOf([yup.ref('password'), ''], 'Password values must match')
    .required('Field required')
})

const Signup: NextPage = () => {
  const router = useRouter()

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
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ 
        handleChange, 
        handleBlur, 
        errors, 
        touched 
      }) => (
        <FormWrapper>
          <h1>Welcome! Create your account</h1>
          <Switch 
            options={[{
              id: 1,
              label: 'Sign in',
              onClick: () => router.push('/login'),
            }, {
              id: 2,
              label: 'Sign up',
              onClick: () => router.push('/signup'),
              isActivated: true,
            }]}
          />
          <FormBody>
            <li>
              <Input 
                name="firstName"
                placeholder='First Name'
                error={errors.firstName} 
                touched={touched.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </li>
            <li>
              <Input 
                name="lastName"
                placeholder='Last Name'
                error={errors.lastName} 
                touched={touched.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </li>
            <li>
              <Input 
                name="email"
                placeholder='Email'
                error={errors.email} 
                touched={touched.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </li>
            <li>
              <Input 
                name="password"
                placeholder='Password'
                error={errors.password} 
                touched={touched.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </li>
            <li>
              <Input 
                name="confirmPassword"
                placeholder='Confirm Password'
                error={errors.confirmPassword} 
                touched={touched.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </li>
            <li>
              <Button type="submit" label="Submit"/>
            </li>
          </FormBody>
        </FormWrapper>
      )}
    </Formik>
  )
}

export default Signup
