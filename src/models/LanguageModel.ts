export interface BaseTextModel {
  labels: {
    submit: string
    cancel: string
    signin: string
    signup: string
    delete: string
  }
  placeholders: {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
    newPassword: string
    oldPassword: string
    type: string
  }
  titles: {
    home: string
    entry: string
    signin: string
    signup: string
    myProfile: string
    editProfile: string
    editPasswordProfile: string
    deleteProfile: string
    settingProfile: string
  }
  spans: {
    required: string
    invalid: string
    passwordRules: string
    passwordMatch: string
    confirmDeletion: string
  }
  layout: {
    footer: string
    profile: {
      myProfile: string
      edit: string
      newPassword: string
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