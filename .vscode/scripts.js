
function switchChart() {
    if (document.getElementById('map2').style.display == 'none') {
        document.getElementById('map').style.display = 'none';
        document.getElementById('map2').style.display = 'block';
    } else {
        document.getElementById('map2').style.display = 'none';
        document.getElementById('map').style.display = 'block';
        currentChart = 1;
    }
}

function switchChart2() {
    if (document.getElementById('box-plot').style.display == 'none') {
        document.getElementById('line').style.display = 'none';
        document.getElementById('box-plot').style.display = 'block';
    } else {
        document.getElementById('box-plot').style.display = 'none';
        document.getElementById('line').style.display = 'block';
        currentChart = 1;
    }
}