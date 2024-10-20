export const useAuthStore = defineStore('auth', {
    state: () => ({
        _xsrfToken: null,
        _personalAccessToken: null,
        user: null,
        //role: null
    }),
    getters: {
        authToken() {
            return this._xsrfToken
        },
        isAuth() {
            return Boolean(this.user?.id)
        },
    },
    actions: {
        async init() {
            /*token = useCookie('_accessToken', {
                secure: true
            })
            if (token.value && typeof token.value == 'string' && token.value.length > 150) {
                this.accessToken = token.value
                this._waitRefresh()
            } else this._refresh()*/
            if (process.client) {
                useTryMessage(async () => {
                    await useGet(getApiUrl('userAuth'))
                })
            }
        },
        resetUser() {
            this.user = null
        },
        async setNewAuthToken() {
            this._xsrfToken = null
            await useGet(getApiUrl('xsrfToken'))
            const token = useCookie('XSRF-TOKEN')
            if (!token) throw new Error('Не удалось получить токен для общения с сервером')
            this._xsrfToken = token
        },
        async login(formData) {
            return useTryMessage(async () => {
                await usePost(getApiUrl('login'), formData)
            })
        },
        async logout() {
            if (!this.isAuth) return
            return useTryMessage(async () => {
                await usePost(getApiUrl('logout'))
                this.resetUser()
            })
        },
        async register(formData) {
            return useTryMessage(async () => {
                await usePost(getApiUrl('register'), formData)
            })
        },
    }
})