/**
 * Попытка выполнить запрос c сообщением об ошибке
 * @param {Function} callback Выполняемая функция
 * @param {Function} errorCallback Функция при ошибке
 * @returns {Boolean} С ошибкой или нет
 */
export async function useTryMessage(callback, errorCallback = null) {
    try {
        await callback()
        return true
    } catch(error) {
        if (error.statusCode == 401) {
            useAuthStore().logout()
            return false
        }
        if (process.client) {
            if (!error.withoutMessage) {
                useErrorDisplay(error)
            }
            if (error.redirect) {
                navigateTo(error.redirect)
            }
        }
        if (errorCallback instanceof Function) {
            await errorCallback(error)
        }
        return false
    }
}