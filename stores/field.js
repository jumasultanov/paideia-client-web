import * as validators from '@vuelidate/validators'

export const useFieldStore = defineStore('field', {
    state: () => ({
        fields: {
            userName: {
                name: 'name',
                label: 'Ваше имя',
                placeholder: 'Например, Иванов Иван',
                rules: ['required'],
                invalid: {
                    required: 'Введите Ваше имя',
                }
            },
            userEmail: {
                name: 'email',
                label: 'Адрес электронной почты',
                placeholder: 'Например, test@test.com',
                type: 'email',
                rules: ['required', 'email'],
                invalid: {
                    required: 'Введите адрес электронной почты',
                    email: 'Указан некорректный адрес электронной почты',
                    'validation.unique': 'Такой адрес электронной почты уже был зарегистрирован ранее'
                }
            },
            userPassword: {
                name: 'password',
                label: 'Пароль',
                type: 'password',
                rules: ['required', 'minLength:8'],
                invalid: {
                    required: 'Введите пароль',
                    minLength: 'Пароль должен быть из 8 символов или больше'
                }
            },
            userConfirmationPassword: {
                name: 'password_confirmation',
                label: 'Пароль еще раз',
                type: 'password',
                rules: ['required', 'sameAs:password'],
                invalid: {
                    required: 'Введите повторный пароль',
                    sameAs: 'Пароли должны совпадать'
                }
            },
            userSubscribeNews: {
                name: 'subscribe_news',
                label: 'Отправляйте мне письма о событиях и мероприятиях платформы',
                type: 'checkbox',
                default: true
            },
            loginEmail: {
                name: 'email',
                label: 'Электронная почта',
                type: 'email',
                rules: ['required', 'email'],
                invalid: {
                    required: 'Введите электронную почту или имя пользователя',
                    email: 'Указан некорректный адрес электронной почты',
                }
            },
            loginPassword: {
                name: 'password',
                label: 'Пароль',
                type: 'password',
                rules: ['required'],
                invalid: {
                    required: 'Введите пароль',
                }
            },
            userOrg: {
                name: 'name',
                label: 'Ваше имя или организация',
                rules: ['required'],
                invalid: {
                    required: 'Введите Ваше имя или организацию',
                }
            },
            userContactLink: {
                name: 'link',
                label: 'Эл. почта, социальная сеть',
                placeholder: 't.me/username',
                rules: ['required'],
                invalid: {
                    required: 'Введите электронную почту или ссылку на социальную сеть',
                }
            },
        },
        groups: {
            registration: ['userName', 'userEmail', 'userPassword', 'userConfirmationPassword', 'userSubscribeNews'],
            login: ['loginEmail', 'loginPassword'],
            contactUs: ['userOrg', 'userContactLink'],
        },
        messages: {
            email: {
                'auth.failed': 'Вы указали неверную почту или пароль'
            }
        }
    }),
    actions: {
        getData(groupName) {
            const result = reactive({
                fields: [],
                rules: {},
                formData: {}
            })
            this.groups[groupName]?.forEach(alias => {
                const field = this.fields[alias]
                if (!field) return
                result.fields.push(field)
                result.formData[field.name] = this.getDefault(field)
                result.rules[field.name] = this.getRule(field, result.formData)
            })
            return result
        },
        getDefault(field) {
            if (field.default) return field.default
            if (field.type == 'checkbox' || field.type == 'radio') return false
            return ''
        },
        getRule(field, models) {
            const list = {}
            if (field.rules instanceof Array) {
                field.rules.forEach(rule => {
                    const argPos = rule.indexOf(':')
                    let arg = null
                    if (argPos > -1) {
                        arg = rule.substring(argPos + 1)
                        rule = rule.substring(0, argPos)
                    }
                    if (!(rule in validators)) return
                    let ruleObj = validators[rule]
                    if (arg !== null) {
                        if (rule == 'sameAs') {
                            const name = arg
                            arg = computed(() => models[name])
                        }
                        ruleObj = ruleObj(arg)
                    }
                    if (field.invalid[rule]) ruleObj = validators.helpers.withMessage(field.invalid[rule], ruleObj)
                    list[rule] = ruleObj
                })
            }
            return list
        }
    }
})