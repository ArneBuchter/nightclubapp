fetch(`http://localhost:4000/assets `,{
        'method': 'GET'

    }) //fetch
    .then(response => response.json())
    .then(data => {
        console.log(data)
    });