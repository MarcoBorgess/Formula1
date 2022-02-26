
fetch('https://ergast.com/api/f1/2022.json').then(function(response) {
  response.json().then(function(data) {
    var races = data.MRData.RaceTable.Races;
    races.every(element => {
        var now = new Date().getTime();
        var gpDate = new Date(element.date + 'T' + element.time).getTime();
        const url = "https://en.wikipedia.org/wiki/" + element.raceName;
        if (gpDate > now){
            var x = setInterval(function() {
                // Get today's date and time
                var now = new Date().getTime();
        
                // Find the distance between now and the count down date
                var distance = gpDate - now;
              
                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
              
                // Display the result in the element with id="timer"
                document.getElementById("timer").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";
                document.getElementById("desc").innerHTML = 'até o ' + '<a href="" target="_blank" id="raceName"></a>';
                document.getElementById("raceName").innerHTML = element.raceName;
                document.getElementById("raceName").href = url;
            }, 1000);
            
            

            return false;
        }else return true;
    });
  });
}).catch(function(err) {
  console.error('Failed retrieving information', err);
});

