import type { NextPage } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import * as yup from "yup"
import { Form, Formik } from 'formik';
import { Visibility, VisibilityOff } from '@material-ui/icons'

import { useLanguageContext  } from '@contexts'
import { 
  Button, 
  Input, 
  Switch 
} from '@components'
import { BaseTextModel } from '@/models';

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
  gap: 16px;

  margin-top: 32px;
`

const validationSchema = (baseText: BaseTextModel) => yup.object({
  email: yup.string()
    .email(baseText.spans.invalid)
    .typeError(baseText.spans.invalid)
    .required(baseText.spans.required),
  password: yup.string()
    .typeError(baseText.spans.invalid)
    .required(baseText.spans.required),
})

const Login: NextPage = () => {
  const [passwordType, setPasswordType] = useState(true)
  const router = useRouter()
  const { baseText } = useLanguageContext()

  const onSubmit = (data: any) => console.log('$$$$', data)

  return (
    <Formik           
      initialValues={{
        email: '',
        password: '',
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
          <h1>{baseText.titles.login}</h1>
          <Switch 
            options={[{
              id: 1,
              label: baseText.labels.login,
              onClick: () => router.push('/login'),
              isActivated: true,
            }, {
              id: 2,
              label: baseText.labels.signup,
              onClick: () => router.push('/signup'),
            }]}
          />
          <FormBody>
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
              <Input 
                name='password' 
                type={passwordType ? 'password' : 'text'}
                placeholder={baseText.placeholders.password} 
                error={errors.password} 
                touched={touched.password}
                onChange={handleChange}
                onBlur={handleBlur}
                icon={passwordType ? Visibility : VisibilityOff}
                onIconClick={() => setPasswordType(!passwordType)}
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

export default Login
