import type { NextPage } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'
import * as yup from "yup"
import { Formik } from 'formik';
import { Visibility, VisibilityOff } from '@material-ui/icons'

import { useAuthContext, useLanguageContext  } from '@contexts'
import { 
  Button, 
  Input, 
  Switch 
} from '@components'
import { BaseTextModel } from '@models';
import { FormWrapper, FormBody } from '@styles/global'

const validationSchema = (baseText: BaseTextModel) => yup.object({
  email: yup.string()
    .email(baseText.spans.invalid)
    .typeError(baseText.spans.invalid)
    .required(baseText.spans.required),
  password: yup.string()
    .typeError(baseText.spans.invalid)
    .required(baseText.spans.required),
})

const Signin: NextPage = () => {
  const [passwordType, setPasswordType] = useState(true)
  const router = useRouter()
  const { baseText } = useLanguageContext()
  const { login } = useAuthContext()

  return (
    <Formik           
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema(baseText)}
      onSubmit={(data) => login(data)}
    >
      {({ 
        handleChange, 
        handleBlur, 
        errors, 
        touched 
      }) => (
        <FormWrapper>
          <h1>{baseText.titles.signin}</h1>
          <Switch 
            options={[{
              id: 1,
              label: baseText.labels.signin,
              onClick: () => router.push('/auth/signin'),
              isActivated: true,
            }, {
              id: 2,
              label: baseText.labels.signup,
              onClick: () => router.push('/auth/signup'),
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

export default Signin
