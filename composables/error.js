const indexStore = useIndexStore()

const fieldErrorDefault = 'Сервер не принял данные с формы'

function getStrError(error) {
    if (error instanceof Error) {
        if (error.data) {
            const msg = error.data.message
            if (msg) return msg
        }
    } else if (typeof error == 'string' || error === null) return error
    console.error(error)
    return "Системная ошибка. Попробуйте перезагрузить страницу и повторить операцию"
}

function showFieldsError(error, fields) {
    if (error instanceof Error && error.data?.errors instanceof Object) {
        const { $toast } = useNuxtApp()
        const fieldStore = useFieldStore()
        let errorShowed = false
        for (const fieldName in error.data.errors) {
            const field = fields.find(field => field.name === fieldName)
            if (!field.invalid) continue
            const globalMessage = fieldStore.messages[fieldName]
            error.data.errors[fieldName].forEach(errorName => {
                if (!field.invalid[errorName]) {
                    if (globalMessage && errorName in globalMessage) {
                        errorShowed = true
                        $toast.error(globalMessage[errorName] || fieldErrorDefault)
                    }
                    return
                }
                errorShowed = true
                indexStore.setValidation(fieldName, field.invalid[errorName])
            })
        }
        if (!errorShowed) $toast.error(fieldErrorDefault)
        return true
    }
}

export function useErrorDisplay(newError = null) {
    const { $toast } = useNuxtApp();
    const fields = indexStore.submitFields
    if (fields instanceof Array && fields.length && showFieldsError(newError, fields)) return
    $toast.error(getStrError(newError))
}