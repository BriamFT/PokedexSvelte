import { isSSR } from '../stores/renderstore';

export default async function (path) {
    let isSSRPage;
    const baseUrl = "https://enkoder-website-002.azurewebsites.net/api/page";
    const apiPromise = fetch(`${baseUrl}${path}`); 

    const unsubscribe = isSSR.subscribe(value => {
        isSSRPage = value;
    });
    unsubscribe();
    
    if(!isSSRPage) {
        return { blocks: apiPromise };
    }

    return apiPromise.then(res => res.json())
        .then(data => {
            return { blocks: data.blocks }
        })
}