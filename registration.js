function alertFunction() {
    //first name
    var x = document.getElementById("fname").value;
    if (x.length < 1)
        document.getElementById("fname_error").innerHTML = "Field cannot be empty";
    else if (!x.match(/^[A-Za-z]+$/))
        document.getElementById("fname_error").innerHTML = "Not a valid first name";
    else
        document.getElementById("fname_error").innerHTML = "";
    //middle name
    x = document.getElementById("mname").value;
    if (x.match(/^[0-9]+$/))
        document.getElementById("mname_error").innerHTML = "Not a valid middle name";
    else
        document.getElementById("mname_error").innerHTML = "";
    //last name
    x = document.getElementById("lname").value;
    if (x.length < 1)
        document.getElementById("lname_error").innerHTML = "Field cannot be empty";
    else if (!x.match(/^[A-Za-z]+$/))
        document.getElementById("lname_error").innerHTML = "Not a valid last name";
    else
        document.getElementById("lname_error").innerHTML = "";
    //date
    x = document.getElementById("ddmmyyyy").value;
    var myDate = new Date(x);
    var today = new Date();
    if (x.length < 1)
        document.getElementById("date_error").innerHTML = "Field cannot be empty";
    else if (myDate > today)
        document.getElementById("date_error").innerHTML = "Date cannot be greater than today";
    else
        document.getElementById("date_error").innerHTML = "";
    //gender
    if (document.getElementById("radiom").checked || document.getElementById("radiof").checked || document.getElementById("radioo").checked)
        document.getElementById("gender_error").innerHTML = "";
    else
        document.getElementById("gender_error").innerHTML = "Field cannot be empty";
    //email
    x = document.getElementById("email").value;
    if (x.length < 1)
        document.getElementById("email_error").innerHTML = "Field cannot be empty";
    else if (!x.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
        document.getElementById("email_error").innerHTML = "Not a valid email";
    else
        document.getElementById("email_error").innerHTML = "";
    //mobile
    x = document.getElementById("mobno").value;
    if (x.length < 1)
        document.getElementById("mobile_error").innerHTML = "Field cannot be empty";
    else if (x.length < 10 || parseInt(x) < 1000000000)
        document.getElementById("mobile_error").innerHTML = "Not a valid mobile no.";
    else if (/\D/.test(x))
        document.getElementById("mobile_error").innerHTML = "Not a valid mobile no.";
    else
        document.getElementById("mobile_error").innerHTML = "";
    //street
    x = document.getElementById("street").value;
    if (x.length < 1)
        document.getElementById("street_error").innerHTML = "Field cannot be empty";
    else
        document.getElementById("street_error").innerHTML = "";
    //area
    x = document.getElementById("area").value;
    if (x.length < 1)
        document.getElementById("area_error").innerHTML = "Field cannot be empty";
    else
        document.getElementById("area_error").innerHTML = "";
    //city
    x = document.getElementById("city").value;
    if (x.length < 1)
        document.getElementById("city_error").innerHTML = "Field cannot be empty";
    else if (!x.match(/^[A-Za-z]+$/))
        document.getElementById("city_error").innerHTML = "Not a valid city";
    else
        document.getElementById("city_error").innerHTML = "";
    //pin
    x = document.getElementById("pin").value;
    if (x.length < 1)
        document.getElementById("pin_error").innerHTML = "Field cannot be empty";
    else if (x.length < 6 || parseInt(x) < 100000 || parseInt(x) > 999999)
        document.getElementById("pin_error").innerHTML = "Not a valid PIN code";
    else if (/\D/.test(x))
        document.getElementById("pin_error").innerHTML = "Not a valid PIN code";
    else
        document.getElementById("pin_error").innerHTML = "";

}