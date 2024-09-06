export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Z3KlR4TCACimFI5w6hk5cV2MrB74FFe2&q=${category}&limit=20`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gifs)
    return gifs;
}