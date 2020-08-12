document.addEventListener('DOMContentLoaded', function() {

fetch(`http://localhost:4000/events `,{
        'method': 'GET'

    })
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {        
            console.log(element)
            document.querySelector('#spanOne').innerText = data[0].eventDate + data[0].location;
        });
        
    });
        
    fetch(`http://localhost:4000/assets`, {
        "method": "GET"
        })
        .then(response => response.json())
        .then(data => { 
                document.querySelector('#imgOne').src = data[4].url ;
                document.querySelector('#imgTwo').src = data[5].url;
                document.querySelector('#imgThree').src = data[6].url;
                document.querySelector('#imgFour').src = data[7].url;
                document.querySelector('#imgFive').src = data[8].url;
                document.querySelector('#imgSix').src = data[9].url;
        })
        
})