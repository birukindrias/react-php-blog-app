export const send = async (input, route, method = 'POST',func) => {
    await fetch('http://localhost:8080/api/v1/' + route, {
        method: method,
        body: JSON.stringify(input)
        ,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    }).then(res => res.json()).then(res => {
        console.log(res);
        func(res.data)
    });
}