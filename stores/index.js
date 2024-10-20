export const useIndexStore = defineStore('index', {
    state: () => ({
        urls: {
            //Ссылки для аутентификации
            xsrfToken: '/sanctum/csrf-cookie',
            login: '/login',
            logout: '/logout',
            register: '/register',
            userAuth: '/api/user-auth',
        },
        appMounted: false, //true, если приложение смонтируется в DOM
        validation: {}, //Ошибки валидации для полей
        submitFields: null, //Поля, которые участвуют при отправке формы, после запроса очищаются
    }),
    actions: {
        getValidationError(fieldName) {
            return this.validation[fieldName] || null
        },
        resetValidation(fieldName) {
            delete this.validation[fieldName]
        },
        setValidation(fieldName, value) {
            this.validation[fieldName] = value
        }
    }
})