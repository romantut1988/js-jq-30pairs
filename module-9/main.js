let request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open("GET", "text.txt");
request.onreadystatechange = function () {
    console.log("readyState = " + request.readyState);
    if (request.readyState === 4) {
        alert(request.response);
    }
}
request.send();

let request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open("GET", "person.json");
request.responseType = "json";
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status == 200) {
        let person = request.response;
        console.log(person);
    }
}
request.send();

let request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open("GET", "text.txt");
request.responseType = "json";
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status == 200) {
        alert(request.response);
    }
}
request.send();