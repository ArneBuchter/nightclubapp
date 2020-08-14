# nightclubapp

## værktøjer 

Gulp, Automatiseringsværktøj.
Babel, sikrer at kodesproget bliver ændret til at kunne bruges i alle nuværende og tidligere browsere.
imagemin, sikrer at mine billeder fylder mindst muligt uden det har betydning for det man ser.
EJS, er min template builder og her jeg skriver min html.
scss, bruger jeg som forprosessor til css, 
BEM, nameconvension der bruges til at strukturere classes i css
Vanilla javascript, 
github, versionsstyring af min kode og let adgang fra diverse devices via cloud.
github project, bruges til kanbanboard.

## arbejdsprocess

Jeg benytter mig af github til versionsstyring og github projects, hvor jeg har sat et kanbanboard op, til at strukturere mine opgaver, så jeg på den måde kan skabe mig et overblik.

Jeg har pushet alle mine ændringer minimum 2 gange om dagen til master branch. Det har jeg valgt, for at spare tid, da jeg alligevel arbejder alene på et projekt der ikke er online. 

Jeg har fra start sat et kanbanboard op, som kan ses i github projects. Der har jeg inddelt opgaverne og på den måde heletiden vidst hvad næste skridt skulle være. Da jeg kunne se at jeg ikke ville nå i mål med opgaven, valgte jeg at fokusere på mobilversionen. Mit projekt skal derfor ses i mobilvisning, for at kunne se hvad jeg har arbejdet med. Mit API og min opgave ligger på to forskellige repositories hvor Troels Agergaard er med på begge. Api'et skal resettes manuelt, når man starter det op.

## Teknologier

Jeg har valgt at sætte mit site op med følgende teknologier

Gulp, EJS, scss, BEM 

Jeg har valgt gulp som automatiseringsværktøj og ejs template builder, da det er en fremgangsmåde jeg føler mig godt hjemme i. 
Siden der skal laves inbyder til brug af modulopbygning og det tillader dette setup.
Man kunne også have brugt andre teknologier som f.eks. React. Men da jeg ikke føler mig stærk nok her endnu valgte jeg gulp.

Jeg bruger min egen css struktur bygget på BEM. Da jeg arbejder med et scss sheet for hver enkel partial er min navngivning istedet for den almindelige Block Element Module, Stylesheet Element Module.

Scss. 
Jeg har valgt at bruge scss, da det giver mig en mere dynamisk måde at arbejde med min style. Med det mener jeg letheden med variabler, muligheden for let at importere til et master stylesheet. 

Javascript.
Jeg arbejder med vanilla javascript i hovedparten af mit projekt, da jeg vurderede at der ikke skulle laves alt for store mængder javascript. Jeg har skrevet min formvalidering og post af indhold til api, via atributter direkte i html.

## teknisk dokumentation

Jeg har valgt at tage udgangspunkt i hvordan jeg fetcher via dette api, når jeg skal hente både tekst og billeder. 
I dette tilfælde fremhæver jeg hvordan jeg henter mine galleri billeder.




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

                    let galimg = data.url
                    let clone = Template.content.cloneNode(true);

                    clone.querySelector('.gallery__img').src = galimg
                    list.appendChild(clone);   

                })
            }
        });
    })


Det der sker i dette eksempel er at man i dette api er nødsaget til at lave to fetch for at få både tekst og billeder. Det er samme opbygning som de nyere cms systemer contentful og netlify benytter. Det give få linier ekstra kode, men det giver store perfomance fordele, da man kun henter de billeder (der jo fylder meget) man behøver

Det der sker er at man henter f.eks sit galleri, som består af oplysninger om de billeder der tilhører galleriet. En af oplysningerne i dette api er asset nummer f.eks asset 1. derefter laver man et fetch til sit asset kartotek, som indeholder alle det assets man har lagt ud på siden, men ved at sprøge specifikt efter asset nummer et, får man ikke de 27 andre og man sikrer sig på den måde hurtigst mulige fetch og siteload.




