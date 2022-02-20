

/*Hoe ver zijn we!?*/
var lijn = document.getElementById ('myChart').getContext ('2d');
var chart = new Chart(lijn, {
    type: 'line',
    data: {
        labels: ['week 1', 'week 2', 'week 3', 'week 4', 'week 5', 'week 6', 'week 7'],
        datasets: [{
            label: 'Afgelegde afstand in km',
            borderColor: 'rgb(0,191,255)',
            pointBorderColor: 'rgb(173,216,230)',
            pointStyle: 'star',  /* vorm van de punten */
            pointBorderWidth: 30, /* vorm van de punten */
            lineTension: 1, 
            data: [1.000, 2.000, 3.000, 4.000, 5.000, 6.000, 7.000,], /* kilometers */
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: 'white' /* naam "afgelegde afstand in km" */
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color:'#FFC0CB' /* kleur van verticale lijnen */
                },
            }],
            yAxes:[{
                gridLines:{
                    color:'#FFC0CB' /* kleur van horizontale lijnen */
                }
            }]
        } 
    }    
});

/*Het is gevaarlijk, wees voorzichtig!*/
var rad = document.getElementById ('myChart2').getContext ('2d');
var myRadarChart = new Chart(rad, {
    type: 'radar',
    data: {
        labels: ['Westen', 'Noorden', 'Oosten', 'Zuiden'], /* indexpunten van radar */
        datasets: [{
            label: 'Piraten',
            backgroundColor: 'rgba(0, 60, 255, 0.5)',
            data: [60, 80, 60, 80], /* aantal piraten */
            borderColor: 'white',
            pointBorderColor: 'white',
    },{ 
            label : 'Ruimte stenen',
            backgroundColor: 'rgb(234, 221, 202)',
            data: [50,60, 70, 60], /* aantal ruimte stenen */
            borderColor: 'rgba(0, 60, 255, 0.5)',
            pointBorderColor: 'rgb(234, 221, 202)',
        }]
    },
    options: {
        legend: {
            position: 'left', /* positie van de namen van gevaren */
            labels: {
                fontColor: 'white' /* kleur van richtingen */
            }
        },
        scale: {
            gridLines:{
                color:'rgba(255, 255, 255, 0.3)' /* ruit silhouet lijn */
            },
            ticks: {
                suggestedMin: 5,
                suggestedMax: 60
            }
        }
    }
});

/*Het kan hier heet worden!*/
var bars = document.getElementById ('myChart3').getContext ('2d');
var myBarChart = new Chart(bars, {
    type: 'bar',
    data: { 
        labels: ['Cabine', 'Zaal 1', 'Zaal 2', 'Zaal 3', 'Zaal 4', 'Zaal 5', 'Zaal 6'],
        datasets: [{
            label: 'Temperaturen van de kamers:',
            data: [2, 5, 7, 1, 3, 4, 2, 0], /* lengte van de balken */
            backgroundColor: 'yellow',
            hoverBackgroundColor: 'red',
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: 'white' /* naam "temperatuur van de kamers" */
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color:'rgba(255, 255, 255, 0.3)' /* kleur van verticale lijnen */
                },
            }],
            yAxes:[{
                gridLines:{
                    color:'rgba(255, 255, 255, 0.3)' /* kleur van horizontale lijnen */
                }
            }]
        }
    }
});


