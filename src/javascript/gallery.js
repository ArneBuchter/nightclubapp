fetch(`http://localhost:4000/gallery-photos`,{
        'method': 'GET'

    })
    .then(response => response.json())
    .then(data => {
        data.forEach((element, i) => {
            if(i < 7){
            let Template = document.querySelector('.gallery__template');
            let list = document.querySelector('.gallery');
            fetch(`http://localhost:4000/assets/${element.asset}`,{
                'method': 'GET'
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let galimg = data.url
                let clone = Template.content.cloneNode(true);
                clone.querySelector('.gallery__img').src = galimg
                list.appendChild(clone);     
            })
        }
        });
    })