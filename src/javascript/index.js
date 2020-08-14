document.addEventListener('DOMContentLoaded', function() {

let welcome = document.querySelector('.index__welcome-imgwrapper');
let hoveritem = document.querySelector('.index__hidden')

welcome.addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target.classList.contains('index__welcome-img')){
        hoveritem.classList.add('index__hover')
    }else if(e.target.classList.contains('pinkbox')){
        hoveritem.classList.remove('index__hover')
    }
})

fetch(`http://localhost:4000/events `,{
        'method': 'GET'

    })
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {        
    /*         console.log(element) */
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