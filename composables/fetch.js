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
function onResponse({ request, response, options }) {
    // TODO: Спарсить в stories, если указано что-то
    console.log('ОТВЕТ: ', response)
}

async function httpRequest(url, method, body, query) {
    const auth = useAuthStore()
    //Если нет токена, когда он нужен, то получаем сначала его
    if (method != 'GET' && !auth.authToken) await auth.setNewAuthToken()
    //Посылаем запрос и получаем ответ
    const { data, error: { value: h3error } } = await useLazyFetch(url, {
        method, body, query,
        onRequest, onRequestError, onResponse
    })
    if (h3error instanceof Error) {
        // Если какой-либо запрос выполнится с 401 ошибкой
        /*if (h3error.statusCode == 401) {
            auth().logout()
        }*/
        throw h3error
    }
    return data.value || {}
}

export function useGet(url, body, query) {
    return httpRequest(url, 'GET', body, query)
}

export function usePost(url, body, query) {
    return httpRequest(url, 'POST', body, query)
}

export function usePut(url, body, query) {
    return httpRequest(url, 'PUT', body, query)
}

export function useDelete(url, body, query) {
    return httpRequest(url, 'DELETE', body, query)
}