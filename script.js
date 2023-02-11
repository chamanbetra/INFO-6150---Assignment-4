var regEXname = /^[a-zA-Z]+$/;
var regEeMID = /[a-zA-Z0-9]+@northeastern.edu+$/;
var regEXphNo = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
var regEXadrs = /[A-Za-z0-9'\.\-\s\,]/;
var regEXnum = /^\d{5}$/;
var regEXComment = /[A-Za-z0-9'\.\-\s\,]+$/;

const miss = document.getElementById('miss');
const mr = document.getElementById('mr');
const mrs = document.getElementById('mrs');
const fName = document.getElementById('firstName');
const lName = document.getElementById('lastName');
const eMID = document.getElementById('emailId');
const phNumber = document.getElementById('phoneNumber');
const sAddress1 = document.getElementById('streetAddress1');
const sAddress2 = document.getElementById('streetAddress2');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zipCode = document.getElementById('zipcode');
const facebook = document.getElementById('facebook');
const google = document.getElementById('google');
const yelp = document.getElementById('yelp');

const comments = document.getElementById('comments');

var sodaCB = document.getElementById("sodaCB");
var coffeeCB = document.getElementById("coffeeCB");
var teaCB = document.getElementById("teaCB");
var hotcocCB = document.getElementById("hotcocCB");
var icetcCB = document.getElementById("icetcCB");

//grabbing Soda text field
var sodaLText = document.getElementById('sodaLText');
var sodaMText = document.getElementById('sodaMText');
var sodaSText = document.getElementById('sodaSText');

//grabbing coffee text field
var coffeeLText = document.getElementById('coffeeLText');
var coffeeMText = document.getElementById('coffeeMText');
var coffeeSText = document.getElementById('coffeeSText');

//grabbing Tea text field
var teaLText = document.getElementById('teaLText');
var teaMText = document.getElementById('teaMText');
var teaSText = document.getElementById('teaSText');

//grabbing Hot Choco text field
var hotcocLText = document.getElementById('hotcocLText');
var hotcocMText = document.getElementById('hotcocMText');
var hotcocSText = document.getElementById('hotcocSText');

//grabbing Ice Tea/Coffee text field
var icetcLText = document.getElementById('icetcLText');
var icetcMText = document.getElementById('icetcMText');
var icetcSText = document.getElementById('icetcSText');

var sodaCBL = document.getElementById("sodaCBL");
var sodaCBM = document.getElementById("sodaCBM");
var sodaCBS = document.getElementById("sodaCBS");

var coffeeCBL = document.getElementById("coffeeCBL");
var coffeeCBM = document.getElementById("coffeeCBM");
var coffeeCBS = document.getElementById("coffeeCBS");

var teaCBL = document.getElementById("teaCBL");
var teaCBM = document.getElementById("teaCBM");
var teaCBS = document.getElementById("teaCBS");

var hotcocCBL = document.getElementById("hotcocCBL");
var hotcocCBM = document.getElementById("hotcocCBM");
var hotcocCBS = document.getElementById("hotcocCBS");

var icetcCBL = document.getElementById("icetcCBL");
var icetcCBM = document.getElementById("icetcCBM");
var icetcCBS = document.getElementById("icetcCBS");

//grabbing Table 
var tableload = document.getElementById("myTable");

var vfnameCheck = false;
var vlnameCheck = false;
var vemailCheck = false;
var vphnoCheck = false;
var vstadd1Check = false;
var vcityCheck = false;
var vstateCheck = false;
var vzipCheck = false;
var vstateCheck = false;


function whenLoaded() {
    tableload.style.display = "none";

    sodaCB.style.display = "block";
    coffeeCB.style.display = "none";
    teaCB.style.display = "none";
    hotcocCB.style.display = "none";
    icetcCB.style.display = "none";

    sodaLText.style.display = "none";
    sodaMText.style.display = "none";
    sodaSText.style.display = "none";

}

function check(e) {
    var value = e.target.value;
    console.log(value);
    var type = this.id;
    var em = "error_" + type;
    console.log(em);

    switch (type) {
        case "firstName":
            if (!value.trim().match(regEXname)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                vfnameCheck = true;
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                vfnameCheck = false;
            }
            break;

        case "lastName":
            if (!value.trim().match(regEXname)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                vlnameCheck = true;
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                vlnameCheck = false;
            }
            break;
        case "emailId":
            if (!value.trim().match(regEeMID)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                vemailCheck = true;
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                vemailCheck = false;
            }
            break;
        case "phoneNumber":
            if (!value.trim().match(regEXphNo)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                vphnoCheck = true;
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                vphnoCheck = false;
            }
            break;
        case "streetAddress1":
            if (!value.trim().match(regEXadrs)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                vstadd1Check = true;
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                vstadd1Check = false;
            }
            break;
        case "city":
            if (!value.trim().match(regEXname)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                vcityCheck = true;
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                vcityCheck = false;
            }
            break;
        case "state":
            if (!value.trim().match(regEXname)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                vstateCheck = true;
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                vstateCheck = false;
            }
            break;
        case "zipcode":
            if (!value.trim().match(regEXnum)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                vzipCheck = true;
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                vzipCheck = false;
            }
            break;
        case "comments":
            if (!value.trim().match(regEXComment)) {
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                vstateCheck = true;
            }
            else {
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                vstateCheck = false;
            }
            break;

    }

}

function drinkOption() {

    if (document.getElementById("soda").selected) {
        sodaCB.style.display = "block";

        coffeeCB.style.display = "none";
        teaCB.style.display = "none";
        hotcocCB.style.display = "none";
        icetcCB.style.display = "none";

        sodaLText.style.display = "none";
        sodaMText.style.display = "none";
        sodaSText.style.display = "none";

    }
    else if (document.getElementById("coffee").selected) {
        coffeeCB.style.display = "block";

        sodaCB.style.display = "none";
        teaCB.style.display = "none";
        hotcocCB.style.display = "none";
        icetcCB.style.display = "none";

        coffeeLText.style.display = "none";
        coffeeMText.style.display = "none";
        coffeeSText.style.display = "none";
    }

    else if (document.getElementById("tea").selected) {
        teaCB.style.display = "block";

        sodaCB.style.display = "none";
        coffeeCB.style.display = "none";
        hotcocCB.style.display = "none";
        icetcCB.style.display = "none";

        teaLText.style.display = "none";
        teaMText.style.display = "none";
        teaSText.style.display = "none";
    }
    else if (document.getElementById("hotcoc").selected) {
        hotcocCB.style.display = "block";

        sodaCB.style.display = "none";
        coffeeCB.style.display = "none";
        teaCB.style.display = "none";
        icetcCB.style.display = "none";

        hotcocLText.style.display = "none";
        hotcocMText.style.display = "none";
        hotcocSText.style.display = "none";
    }
    else if (document.getElementById("icetc").selected) {
        icetcCB.style.display = "block";

        sodaCB.style.display = "none";
        coffeeCB.style.display = "none";
        hotcocCB.style.display = "none";
        teaCB.style.display = "none";

        icetcLText.style.display = "none";
        icetcMText.style.display = "none";
        icetcSText.style.display = "none";
    }
    else {
        /* DO NOTHING */
    }
}

function checkBox() {
    //alert("IN checkBox() FUNCTION")

    if (sodaCBL.checked) { sodaLText.style.display = "block"; }
    else { sodaLText.style.display = "none"; }

    if (sodaCBM.checked) { sodaMText.style.display = "block"; }
    else { sodaMText.style.display = "none"; }

    if (sodaCBS.checked) { sodaSText.style.display = "block"; }
    else { sodaSText.style.display = "none"; }

    if (coffeeCBL.checked) { coffeeLText.style.display = "block"; }
    else { coffeeLText.style.display = "none"; }

    if (coffeeCBM.checked) { coffeeMText.style.display = "block"; }
    else { coffeeMText.style.display = "none"; }

    if (coffeeCBS.checked) { coffeeSText.style.display = "block"; }
    else { coffeeSText.style.display = "none"; }

    if (teaCBL.checked) { teaLText.style.display = "block"; }
    else { teaLText.style.display = "none"; }

    if (teaCBM.checked) { teaMText.style.display = "block"; }
    else { teaMText.style.display = "none"; }

    if (teaCBS.checked) { teaSText.style.display = "block"; }
    else { teaSText.style.display = "none"; }

    if (hotcocCBL.checked) { hotcocLText.style.display = "block"; }
    else { hotcocLText.style.display = "none"; }

    if (hotcocCBM.checked) { hotcocMText.style.display = "block"; }
    else { hotcocMText.style.display = "none"; }

    if (hotcocCBS.checked) { hotcocSText.style.display = "block"; }
    else { hotcocSText.style.display = "none"; }

    if (icetcCBL.checked) { icetcLText.style.display = "block"; }
    else { icetcLText.style.display = "none"; }

    if (icetcCBM.checked) { icetcMText.style.display = "block"; }
    else { icetcMText.style.display = "none"; }

    if (icetcCBS.checked) { icetcSText.style.display = "block"; }
    else { icetcSText.style.display = "none"; }
}
var count = 0;
function onSubmit_Check() {
    count = 0;
    if ((document.getElementById("miss").checked == false) &&
        (document.getElementById("mr").checked == false) &&
        (document.getElementById("mrs").checked == false)) {
        count++;

        document.getElementById("error_title").style.display = "block";
    }
    if ((document.getElementById("sodaCBL").checked == false) &&
        (document.getElementById("sodaCBM").checked == false) &&
        (document.getElementById("sodaCBS").checked == false) &&
        (document.getElementById("coffeeCBL").checked == false) &&
        (document.getElementById("coffeeCBM").checked == false) &&
        (document.getElementById("coffeeCBS").checked == false) &&
        (document.getElementById("teaCBL").checked == false) &&
        (document.getElementById("teaCBM").checked == false) &&
        (document.getElementById("teaCBS").checked == false) &&
        (document.getElementById("hotcocCBL").checked == false) &&
        (document.getElementById("hotcocCBM").checked == false) &&
        (document.getElementById("hotcocCBS").checked == false) &&
        (document.getElementById("icetcCBL").checked == false) &&
        (document.getElementById("icetcCBM").checked == false) &&
        (document.getElementById("icetcCBS").checked == false)) {
        count++;
        document.getElementById("error_Drnkopt").style.display = "block";
    }
    if (((document.getElementById("sodaCBL").checked == true) && (document.getElementById("sodaLText").value == "")) ||
        ((document.getElementById("sodaCBM").checked == true) && (document.getElementById("sodaMText").value == "")) ||
        ((document.getElementById("sodaCBS").checked == true) && (document.getElementById("sodaSText").value == "")) ||
        ((document.getElementById("coffeeCBL").checked == true) && (document.getElementById("coffeeLText").value == "")) ||
        ((document.getElementById("coffeeCBM").checked == true) && (document.getElementById("coffeeMText").value == "")) ||
        ((document.getElementById("coffeeCBS").checked == true) && (document.getElementById("coffeeSText").value == "")) ||
        ((document.getElementById("teaCBL").checked == true) && (document.getElementById("teaLText").value == "")) ||
        ((document.getElementById("teaCBM").checked == true) && (document.getElementById("teaMText").value == "")) ||
        ((document.getElementById("teaCBS").checked == true) && (document.getElementById("teaSText").value == "")) ||
        ((document.getElementById("hotcocCBL").checked == true) && (document.getElementById("hotcocLText").value == "")) ||
        ((document.getElementById("hotcocCBM").checked == true) && (document.getElementById("hotcocMText").value == "")) ||
        ((document.getElementById("hotcocCBS").checked == true) && (document.getElementById("hotcocSText").value == "")) ||
        ((document.getElementById("icetcCBL").checked == true) && (document.getElementById("icetcLText").value == "")) ||
        ((document.getElementById("icetcCBM").checked == true) && (document.getElementById("icetcMText").value == "")) ||
        ((document.getElementById("icetcCBS").checked == true) && (document.getElementById("icetcSText").value == ""))) {
        count++;
        document.getElementById("error_Drnktxt").style.display = "block";
    }

    if((document.getElementById("facebook").checked == false) &&
       (document.getElementById("google").checked == false) &&
       (document.getElementById("yelp").checked== false))
    {
        count++;
        document.getElementById("error_hear").style.display = "block";

    }


    if ((count == 0) && (vfnameCheck == false) && (vlnameCheck == false)&&
        (vemailCheck == false) && (vphnoCheck == false) && (vstadd1Check == false) 
        && (vcityCheck == false) && (vstateCheck == false) && (vzipCheck == false)&&
        (vstateCheck == false)) 
    {
        
        onSubmit_CreateTable();
    }
    else
    {
        alert("Please enter a valid value");
    }

}

function title_check() {
    document.getElementById("error_title").style.display = "none";
}
function drinkopt_check() {
    document.getElementById("error_Drnkopt").style.display = "none";
}

function drinktxt_check() {
    if ((document.getElementById("sodaLText").value != "") ||
        (document.getElementById("sodaMText").value != "") ||
        (document.getElementById("sodaSText").value != "") ||
        (document.getElementById("coffeeLText").value != "") ||
        (document.getElementById("coffeeMText").value != "") ||
        (document.getElementById("coffeeLText").value != "") ||
        (document.getElementById("teaLText").value != "") ||
        (document.getElementById("teaMText").value != "") ||
        (document.getElementById("teaLText").value != "") ||
        (document.getElementById("hotcocLText").value != "") ||
        (document.getElementById("hotcocMText").value != "") ||
        (document.getElementById("hotcocSText").value != "") ||
        (document.getElementById("icetcLText").value != "") ||
        (document.getElementById("icetcMText").value != "") ||
        (document.getElementById("icetcSText").value != "")) {
        document.getElementById("error_Drnktxt").style.display = "none";
    }

}

function hear_check()
{
    document.getElementById("error_hear").style.display = "none";
}


function onSubmit_CreateTable() {


    alert("Submit done, the data entered is stored.");
    tableload.style.display = "block";
    var row = tableload.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    var cell7 = row.insertCell();
    var cell8 = row.insertCell();
    var cell9 = row.insertCell();
    var cell10 = row.insertCell();
    var cell11 = row.insertCell();
    var cell12 = row.insertCell();
    var cell13 = row.insertCell();

    if (document.getElementById("miss").checked) {
        cell1.innerHTML = document.getElementById("miss").value;
    }
    else if (document.getElementById("mr").checked) {
        cell1.innerHTML = document.getElementById("mr").value;
    }
    else if (document.getElementById("mrs").checked) {
        cell1.innerHTML = document.getElementById("mrs").value;
    }
    else {
        /*DO NOTHING*/
    }


    cell2.innerHTML = document.getElementById("firstName").value;
    cell3.innerHTML = document.getElementById("lastName").value;
    cell4.innerHTML = document.getElementById("emailId").value;
    cell5.innerHTML = document.getElementById("phoneNumber").value;
    cell6.innerHTML = document.getElementById("streetAddress1").value;
    cell7.innerHTML = document.getElementById("streetAddress2").value;
    cell8.innerHTML = document.getElementById("city").value;
    cell9.innerHTML = document.getElementById("state").value;
    cell10.innerHTML = document.getElementById("zipcode").value;

    var hear = "";

    if (document.getElementById("facebook").checked) {
        hear = document.getElementById("facebook").value + " ";
    }
    if (document.getElementById("google").checked) {
        hear = hear + document.getElementById("google").value + " ";
    }
    if (document.getElementById("yelp").checked) {
        hear = hear + document.getElementById("yelp").value;
    }

    cell11.innerHTML = hear;


    if (document.getElementById("soda").selected) {

        var sodaTypes = document.getElementById("soda").value;

        if (sodaCBL.checked) {
            sodaTypes = document.getElementById("sodaCBL").value;
            sodaTypes = sodaTypes + "(" + document.getElementById("sodaLText").value + ")";
        }
        else if (sodaCBM.checked) {
            sodaTypes = document.getElementById("sodaCBM").value;
            sodaTypes = sodaTypes + "(" + document.getElementById("sodaMText").value + ")";
        }
        else if (sodaCBS.checked) {
            sodaTypes = document.getElementById("sodaCBS").value;
            sodaTypes = sodaTypes + "(" + document.getElementById("sodaSText").value + ")";
        }
        else {
            /*Do Nothing*/
        }

        cell12.innerHTML = sodaTypes;
    }
    else if (document.getElementById("coffee").selected) {

        var coffeeTypes = document.getElementById("coffee").value;

        if (coffeeCBL.checked) {
            coffeeTypes = document.getElementById("coffeeCBL").value;
            coffeeTypes = coffeeTypes + "(" + document.getElementById("coffeeLText").value + ")";
        }
        else if (coffeeCBM.checked) {
            coffeeTypes = document.getElementById("coffeeCBM").value;
            coffeeTypes = coffeeTypes + "(" + document.getElementById("coffeeMText").value + ")";
        }
        else if (coffeeCBS.checked) {
            coffeeTypes = document.getElementById("coffeeCBS").value;
            coffeeTypes = coffeeTypes + "(" + document.getElementById("coffeeSText").value + ")";
        }
        else {
            /*Do Nothing*/
        }

        cell12.innerHTML = coffeeTypes;
    }
    else if (document.getElementById("tea").selected) {
        var teaTypes = document.getElementById("tea").value;

        if (teaCBL.checked) {
            teaTypes = document.getElementById("teaCBL").value;
            teaTypes = teaTypes + "(" + document.getElementById("teaLText").value + ")";
        }
        else if (teaCBM.checked) {
            teaTypes = document.getElementById("teaCBM").value;
            teaTypes = teaTypes + "(" + document.getElementById("teaMText").value + ")";
        }
        else if (teaCBS.checked) {
            teaTypes = document.getElementById("teaCBS").value;
            teaTypes = teaTypes + "(" + document.getElementById("teaSText").value + ")";
        }
        else {
            /*Do Nothing*/
        }

        cell12.innerHTML = teaTypes;
    }
    else if (document.getElementById("hotcoc").selected) {
        var hotcocTypes = document.getElementById("hotcoc").value;

        if (hotcocCBL.checked) {
            hotcocTypes = document.getElementById("hotcocCBL").value;
            hotcocTypes = hotcocTypes + "(" + document.getElementById("hotcocLText").value + ")";
        }
        else if (hotcocCBM.checked) {
            hotcocTypes = document.getElementById("hotcocCBM").value;
            hotcocTypes = hotcocTypes + "(" + document.getElementById("hotcocMText").value + ")";
        }
        else if (hotcocCBS.checked) {
            hotcocTypes = document.getElementById("hotcocCBS").value;
            hotcocTypes = hotcocTypes + "(" + document.getElementById("hotcocSText").value + ")";
        }
        else {
            /*Do Nothing*/
        }

        cell12.innerHTML = hotcocTypes;
    }
    else if (document.getElementById("icetc").selected) {

        var icetcTypes = document.getElementById("icetc").value;

        if (icetcCBL.checked) {
            icetcTypes = document.getElementById("icetcCBL").value;
            icetcTypes = icetcTypes + "(" + document.getElementById("icetcLText").value + ")";
        }
        else if (icetcCBM.checked) {
            icetcTypes = document.getElementById("icetcCBM").value;
            icetcTypes = icetcTypes + "(" + document.getElementById("icetcMText").value + ")";
        }
        else if (icetcCBS.checked) {
            icetcTypes = document.getElementById("icetcCBS").value;
            icetcTypes = icetcTypes + "(" + document.getElementById("icetcSText").value + ")";
        }
        else {
            /*Do Nothing*/
        }

        cell12.innerHTML = icetcTypes;
    }
    else {
        /* DO NOTHING */
    }

    cell13.innerHTML = document.getElementById("comments").value;

    var elements = document.getElementsByTagName("input");

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type == "radio") {
            elements[i].checked = false;
        }
        else if (elements[i].type == "text") {
            elements[i].value = "";
        }
        else if (elements[i].type == "checkbox") {
            elements[i].checked = false;
        }
    }

    document.getElementById("soda").selected = true;
    document.getElementById("comments").value ="";

    sodaLText.style.display = "none";
    sodaMText.style.display = "none";
    sodaSText.style.display = "none";
    coffeeLText.style.display = "none";
    coffeeMText.style.display = "none";
    coffeeSText.style.display = "none";
    teaLText.style.display = "none";
    teaMText.style.display = "none";
    teaSText.style.display = "none";
    hotcocLText.style.display = "none";
    hotcocMText.style.display = "none";
    hotcocSText.style.display = "none";
    icetcLText.style.display = "none";
    icetcMText.style.display = "none";
    icetcSText.style.display = "none";

}


miss.addEventListener("input", title_check);
mr.addEventListener("input", title_check);
mrs.addEventListener("input", title_check);

sodaCBL.addEventListener("input", drinkopt_check);
sodaCBM.addEventListener("input", drinkopt_check);
sodaCBS.addEventListener("input", drinkopt_check);
coffeeCBL.addEventListener("input", drinkopt_check);
coffeeCBM.addEventListener("input", drinkopt_check);
coffeeCBS.addEventListener("input", drinkopt_check);
teaCBL.addEventListener("input", drinkopt_check);
teaCBM.addEventListener("input", drinkopt_check);
teaCBS.addEventListener("input", drinkopt_check);
hotcocCBL.addEventListener("input", drinkopt_check);
hotcocCBM.addEventListener("input", drinkopt_check);
hotcocCBS.addEventListener("input", drinkopt_check);
icetcCBL.addEventListener("input", drinkopt_check);
icetcCBM.addEventListener("input", drinkopt_check);
icetcCBS.addEventListener("input", drinkopt_check);

sodaLText.addEventListener("input", drinktxt_check);
sodaMText.addEventListener("input", drinktxt_check);
sodaSText.addEventListener("input", drinktxt_check);
coffeeLText.addEventListener("input", drinktxt_check);
coffeeMText.addEventListener("input", drinktxt_check);
coffeeSText.addEventListener("input", drinktxt_check);
teaLText.addEventListener("input", drinktxt_check);
teaMText.addEventListener("input", drinktxt_check);
teaSText.addEventListener("input", drinktxt_check);
hotcocLText.addEventListener("input", drinktxt_check);
hotcocMText.addEventListener("input", drinktxt_check);
hotcocSText.addEventListener("input", drinktxt_check);
icetcLText.addEventListener("input", drinktxt_check);
icetcMText.addEventListener("input", drinktxt_check);
icetcSText.addEventListener("input", drinktxt_check);

facebook.addEventListener("input", hear_check);
google.addEventListener("input", hear_check);
yelp.addEventListener("input", hear_check);

fName.addEventListener("input", check);
lName.addEventListener("input", check);
eMID.addEventListener("input", check);
phNumber.addEventListener("input", check);
sAddress1.addEventListener("input", check);
city.addEventListener("input", check);
state.addEventListener("input", check);
zipCode.addEventListener("input", check);
comments.addEventListener("input", check);