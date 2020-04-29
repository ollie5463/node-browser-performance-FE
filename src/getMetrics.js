export const getMetrics  = (async() => {
    let response;
    await fetch('http://localhost:4000/getMetrics').then(response => response.json()).then(data => response = data)
    return response;
})

