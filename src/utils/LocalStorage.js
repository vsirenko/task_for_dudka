export const loadLS = (name) => {
    const defaultState = localStorage.getItem(name);
    if (defaultState === null) {
        return []
    }
    return JSON.parse(defaultState)
}

export const setLS = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item))
}

export const removeLS = (name) => {
    localStorage.removeItem(name)
}