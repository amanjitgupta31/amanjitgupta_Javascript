function alertFunction() {
    var u = 0;
    var p = 0;
    var str1 = document.getElementById("uname").value;
    var str2 = document.getElementById("pass").value;
    if (str1.length < 1) {

        u = 1;
    }
    if (str2.length < 1) {

        p = 1;
    }
    if (u == 1 && p == 0) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'style1.css';
        document.getElementsByTagName('HEAD')[0].appendChild(link);
        alert("Mail Id field can't be blank...");

    } else if (u == 0 && p == 1) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'style2.css';
        document.getElementsByTagName('HEAD')[0].appendChild(link);
        alert("Password field can't be blank...");

    } else if (u == 1 && p == 1) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'style3.css';
        document.getElementsByTagName('HEAD')[0].appendChild(link);
        alert("Enter your registered mail id and password...");

    } else
        window.location.href = "errorpage.html";
}