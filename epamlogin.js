function alertFunction() {
    var u = 0;
    var p = 0;
    var str1 = document.getElementById("uname").value;
    var str2 = document.getElementById("pass").value;
    if (str1.length < 1) {

        u = 1;
    } else if (!str1.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        u = 2;
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

    } else if (u == 2 && p == 1) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'style3.css';
        document.getElementsByTagName('HEAD')[0].appendChild(link);
        alert("Enter a valid mail id and password cannot be left blank...");
    } else if (u == 2 && p == 0) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'style1.css';
        document.getElementsByTagName('HEAD')[0].appendChild(link);
        alert("Enter a valid mail id...");
    } else
        alert("Error:Page not found.");
}
