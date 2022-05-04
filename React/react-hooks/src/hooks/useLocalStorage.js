import { useEffect, useState } from 'react'

export function useLocalStorage(key, defaultValue) {
    const [message, setMessage] = useState(defaultValue)
        // 每次只要message变化，就会自动同步到本地localStroge
    useEffect(() => {
        window.localStorage.setItem(key, message)
    }, [message, key])
    return [message, setMessage]
}