export default async function (path) {
    const baseUrl = "https://enkoder-website-002.azurewebsites.net/api/page";
    const apiPromise = fetch(`${baseUrl}${path}`); 

    return apiPromise.then(res => res.json())
        .then(data => {
            return { blocks: data.blocks }
        })
}