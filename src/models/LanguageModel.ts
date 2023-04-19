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
    myProfile: string
    editProfile: string
    deleteProfile: string
    settingProfile: string
  }
  spans: {
    required: string
    invalid: string
    passwordRules: string
    passwordMatch: string
  }
  layout: {
    footer: string
    profile: {
      myProfile: string
      settings: string
      edit: string
      delete: string
    }
  }
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