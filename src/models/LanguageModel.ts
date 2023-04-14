export interface BaseTextModel {
  labels: {
    submit: string
    cancel: string
    login: string
    signup: string
  }
  placeholders: {
    name: string
    email: string
    password: string
    confirmPassword: string
    type: string
  }
  titles: {
    home: string
    entry: string
    login: string
    signup: string
  }
  spans: {
    required: string
    invalid: string
    passwordRules: string
    emailRules: string
  }
}

export interface LanguageModel {
  pt: BaseTextModel
  en: BaseTextModel
}