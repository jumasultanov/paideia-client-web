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
        const { $toast } = useNuxtApp();
        let errorShowed = false
        for (const fieldName in error.data.errors) {
            const field = fields.value.find(field => field.name === fieldName)
            if (!field.invalid) continue
            error.data.errors[fieldName].forEach(errorName => {
                if (!field.invalid[errorName]) return
                errorShowed = true
                useState(`validation.${fieldName}`, () => field.invalid[errorName])
            })
        }
        if (!errorShowed) $toast.error('Сервер не принял данные с формы')
        return true
    }
    useState('submitFields', () => null)
}

export function useErrorDisplay(newError = null) {
    const { $toast } = useNuxtApp();
    const fields = useState('submitFields')
    if (fields.value && showFieldsError(newError, fields)) return
    $toast.error(getStrError(newError))
}