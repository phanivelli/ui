function onLoads() {
    var xhttp = new XMLHttpRequest();
    var txt ="";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status==200) {
            var data = this.responseText;
            var array = data.split(',');
            var arr = JSON.parse(JSON.stringify(array));
            txt += "<ul>";
            for (var i=0 ; i<=arr.length-1 ; i++) {
               txt += "<li>"+arr[i]; 
            }
            txt += "</ul>";
          
            document.getElementById('demo').innerHTML = txt;
        }
    };
    xhttp.open("get","http://localhost:2019/ArrayOfCitys/citys",true);
    xhttp.send();
}