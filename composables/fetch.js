import { getActivePinia } from "pinia"

//Перед запросом
async function onRequest({ request, options }) {
    options.headers = options.headers || {}
    options.headers.set('Accept', 'application/json')
    options.headers.set('Referer', useRuntimeConfig().public.appUrl)
    options.credentials = 'include'
    const auth = useAuthStore()
    if (options.method != 'GET') {
        options.headers.set('X-XSRF-TOKEN', auth.authToken)
    }
    //options.headers.Authorization = `Bearer ${auth.authToken}`
    // TODO: Добавлять headers по правилам
    console.log('ADD HEADERS', JSON.stringify(options))
}

//Ошибки в запросе
function onRequestError({ request, options, error }) {
    useErrorDisplay(error)
}

//Получили ответ
function onResponse(response) {
    if (response._data && response._data instanceof Object) {
        const pinia = getActivePinia()
        for (let key in response._data) {
            if (!key.startsWith('#')) continue
            const store = pinia._s.get(key.substring(1))
            useInjectToStore(store, response._data[key])
        }
    }
}

async function httpRequest(url, method, body, query) {
    const auth = useAuthStore()
    if (method != 'GET' && !auth.authToken) await auth.setNewAuthToken()
    let _resolve, _reject
    const result = new Promise((resolve, reject) => {
        _resolve = resolve
        _reject = reject
    })
    //Посылаем запрос и получаем ответ
    const params = {
        method, body, query,
        watch: false,
        onRequest, onRequestError,
        //onResponseError,
        onResponse: ({ response }) => {
            if (response.ok) {
                onResponse(response)
                _resolve(response._data)
            } else {
                _reject(createError({ statusCode: response.status, data: response._data}))
            }
        },
    }
    if (useIndexStore().appMounted) {
        try {
            await $fetch(url, params)
        } catch(e) {
            //При ошибке все равно попадет в onResponse
        }
    } else await useLazyFetch(url, params)

    return result
}

export function useGet(url, body, query) {
    return httpRequest(url, 'GET', body, query)
}

export function usePost(url, body, query, a) {
    return httpRequest(url, 'POST', body, query)
}

export function usePut(url, body, query) {
    return httpRequest(url, 'PUT', body, query)
}

export function useDelete(url, body, query) {
    return httpRequest(url, 'DELETE', body, query)
}