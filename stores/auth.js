const XSRF_TOKEN_URL = '/sanctum/csrf-cookie'
const LOGIN_URL = '/login'
const LOGOUT_URL = '/logout'
const REGISTER_URL = '/register'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        _xsrfToken: null,
        _personalAccessToken: null,
        userInfo: null,
        role: null
    }),
    getters: {
        authToken() {
            return this._xsrfToken
        },
        isAuth() {
            return false
        },
        xsrfTokenUrl() {
            return useRuntimeConfig().public.apiUrl + XSRF_TOKEN_URL
        },
        registerURL() {
            return useRuntimeConfig().public.apiUrl + REGISTER_URL
        },
    },
    actions: {
        //_updateState({ accessToken, user, role }) {
        _updateState(data) {
            console.log(data)
            //if (accessToken) this._setToken(accessToken)
            //if (user) this.userInfo = user
            //if (role) this.role = role
        },
        async setNewAuthToken() {
            this._xsrfToken = null
            await useGet(this.xsrfTokenUrl)
            const token = useCookie('XSRF-TOKEN')
            if (!token) throw new Error('Не удалось получить токен для общения с сервером')
            this._xsrfToken = token
        },
        async login(formData) {
            return useTryMessage(async () => {
                this._updateState(await usePost(LOGIN_URL, formData))
            })
        },
        async logout(send = false) {
            //TODO:
        },
        async register(formData) {
            return useTryMessage(async () => {
                this._updateState(await usePost(this.registerURL, formData))
            })
        },
    }
})