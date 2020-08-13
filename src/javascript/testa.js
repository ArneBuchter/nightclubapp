let testaData = []

fetch(`http://localhost:4000/testemonials`,{
        'method': 'GET'

    })
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {

            fetch(`http://localhost:4000/assets/${element.asset}`,{
                'method': 'GET'
                
            })
            .then(response => response.json())
            .then(data => {
                testaData.push({src: data.url, text: element.content, name: element.name, facebook: element.facebook, twitter: element.twitter})
                
                document.querySelector('#testa__profilimgOne').src = testaData[0].src
/*                 document.querySelector('#testa__profilimgTwo').src = testaData[1].src
                document.querySelector('#testa__profilimgThree').src = testaData[2].src */

                document.querySelector('#testa__textOne').innerText = testaData[0].text
/*                 document.querySelector('#testa__textTwo').innerText = testaData[1].text
                document.querySelector('#testa__textThree').innerText = testaData[2].text */
 

            })
            
        });
    })