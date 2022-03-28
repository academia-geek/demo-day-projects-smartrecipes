
export const fetchProduct = async (urlInfo) => {
    const url = urlInfo
    const resp = await fetch(url)
    const data = await resp.json()
    
    return data
}
