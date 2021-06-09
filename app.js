
fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json')
    .then(response => response.json())
    .then(function(data) {

        let datajson = (data.slice(-1));

        let testodata = document.querySelector(".testodata");
        testodata.innerHTML = datajson[0].data;

        let testotamponi = document.querySelector(".testotamponi");
        testotamponi.innerHTML = datajson[0].tamponi;
        
        let testonuovipositivi = document.querySelector(".testonuovipositivi");
        testonuovipositivi.innerHTML = datajson[0].nuovi_positivi;

        let testototalepositivi = document.querySelector(".testototalepositivi");
        testototalepositivi.innerHTML = datajson[0].totale_positivi;

        let testodeceduti = document.querySelector(".testodeceduti");
        testodeceduti.innerHTML = datajson[0].deceduti;

        let testoricoveri = document.querySelector(".testoricoveri");
        testoricoveri.innerHTML = datajson[0].ricoverati_con_sintomi;

        let testoterapia = document.querySelector(".testoterapia");
        testoterapia.innerHTML = datajson[0].terapia_intensiva;

        let testocasitotali = document.querySelector(".testocasitotali");
        testocasitotali.innerHTML = datajson[0].totale_casi;

      })
    .catch((error) => {
        console.error('Error:', error);
    });

    