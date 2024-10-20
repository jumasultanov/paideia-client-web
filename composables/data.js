export async function useInjectToStore(store, data) {
    if (!store || !data || !(data instanceof Object)) return false
    for (let key in data) {
        if (!(key in store)) continue
        store[key] = data[key]
    }
}

export function getApiUrl(name) {
    const urls = useIndexStore().urls
    if (name in urls) return useRuntimeConfig().public.apiUrl + urls[name]
    return null
}