export interface BaseTextModel {
  labels: {
    submit: string
    cancel: string
    signin: string
    signup: string
  }
  placeholders: {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
    type: string
  }
  titles: {
    home: string
    entry: string
    signin: string
    signup: string
  }
  spans: {
    required: string
    invalid: string
    passwordRules: string
    passwordMatch: string
  },
  layout: {
    footer: string
  },
  sidebar: {
    dashboard: string
    entry: string
    logout: string
  }
}

export interface LanguageModel {
  pt: BaseTextModel
  en: BaseTextModel
}