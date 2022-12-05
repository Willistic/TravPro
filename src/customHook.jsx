const { useState, useEffect } = require("react");

function CustomHook(url) {
    const [data, setData] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const info = await fetch(url)
            const res = await info.json()
            setData(res)
            } catch (error) {
                setError(error)
            }
        }
        fetchData()
    }, [url])
    return [data, error]
    
}
export default CustomHook