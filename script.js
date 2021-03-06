var dashboard = 'https://docs.google.com/spreadsheets/d/11D2-5ZAmew6l6lHPPf259ahIJFMYCNGc9Ee5rf4LWhE/edit?usp=sharing';
var members = 'https://docs.google.com/spreadsheets/d/1gAb8ngUywP7lRhIQdUZvOZOXuD47VHFHRM6kTzg68uA/edit?usp=sharing';

function init() {
    Tabletop.init({
        key: dashboard,
        callback: dashboard_container,
        simpleSheet: true
    }
    )
}
function init1() {
    Tabletop.init({
         key: members,
        callback: members_container,
        simpleSheet: true
        }
    )
}
 function members_container(data) {

     var path = window.location.pathname;
    var path_arr = path.split("/");
    var page = path_arr[path_arr.length - 1];
    if (page === "members.html") {
        console.log(data);
        left(data);
        right(data);
    }
 }
function left(data) {
    for (let i = 0; i < data.length; i++) {
        var add = data[i]["DBF-members"];
        if (add === "") {
            continue;
        }
        $("#dbf-members").append("<div>\n" +
            add +
            "            </div>");
    }
}

function right(data) {
    for (let i = 0; i < data.length; i++) {
        var add = data[i]["Micro-g-members"];
        if (add === "") {
            continue;
        }
        $("#micro-members").append("<div>\n" +
            add +
            "            </div>");
    }
}

function dashboard_container(data) {
    var path = window.location.pathname;
    var path_arr = path.split("/");
    var page = path_arr[path_arr.length - 1];
    console.log(page);
    if (page === "Dashboard.html") {
        console.log(data);
        dbf(data);
        micro(data);
        AIAA(data);
        dbf_eve(data);
        micro_eve(data);
        AIAA_eve(data);
        progress(data);
    }


}

window.addEventListener('DOMContentLoaded', init)
window.addEventListener('DOMContentLoaded', init1)

function progress(data) {
    var prog = data[0]["progress"];
    console.log("This semester is " + prog + " done!");
    var bar = document.getElementById("prog").style;
    var bar1 = document.getElementById("prog-mob").style;
    document.getElementById("done").innerText= prog;
    bar.width = prog;
    bar1.width = prog;
}

function desk_card(name,add,link,team){
    $(name).append("<a href=\""+ link +"\" class=\"card-link\">\n" +
            "                                <div class=\"card dash-card " + team + " text-center dash-cards\">\n" +
            "                                    <div class=\"card-body dash-card-body\">\n" +
            "                                        <h5 style=\"margin: 0\" class=\"card-title\">"+ add +"</h5>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                            </a>");
}

function mob_card(name,add,link,team){
     $(name).append("<a href=\""+ link +"\" class=\"card-link\">\n" +
            "                       <div class=\"card " + team + " dash-card-mobile\">\n" +
            "                           <div class=\"card-body\">\n" +
            "                               <h5 style=\"margin: 0\" class=\"card-title\">" + add + "</h5>\n" +
            "                           </div>\n" +
            "                       </div>\n" +
            "                            </a>");
}

function dbf(data) {
    for (let i = 0; i < data.length; i++) {
        var add1 = data[i]["DBF"];
        if(add1.includes("$")){
            var res = add1.split("$");
            var add = res[0];
            var zoom_link = res[1];
        }else {
            var add = add1;
            var zoom_link = "#";
        }
        if (add === "") {
            continue;
        }
        desk_card("#dbf-meet",add,zoom_link,"dbf");
        mob_card("#dbf-meet-mob",add,zoom_link,"dbf");
    }
}

function micro(data) {
    for (let i = 0; i < data.length; i++) {
        var add1 = data[i]["Micro-g"];
        if(add1.includes("$")){
            var res = add1.split("$");
            var add = res[0];
            var zoom_link = res[1];
        }else {
            var add = add1;
            var zoom_link = "#";
        }
        if (add === "") {
            continue;
        }
        desk_card("#micro-meet",add,zoom_link,"micro");
        mob_card("#micro-meet-mob",add,zoom_link,"micro");
    }
}

function AIAA(data) {
    for (let i = 0; i < data.length; i++) {
        var add1 = data[i]["AIAA"];
        if(add1.includes("$")){
            var res = add1.split("$");
            var add = res[0];
            var zoom_link = res[1];
        }else {
            var add = add1;
            var zoom_link = "#";
        }
        if (add === "") {
            continue;
        }
        desk_card("#aiaa-meet",add,zoom_link,"club");
        mob_card("#aiaa-meet-mob",add,zoom_link,"club");
    }
}

function dbf_eve(data) {
    for (let i = 0; i < data.length; i++) {
        var add1 = data[i]["DBF-eve"];
        if(add1.includes("$")){
            var res = add1.split("$");
            var add = res[0];
            var zoom_link = res[1];
        }else {
            var add = add1;
            var zoom_link = "#";
        }
        if (add === "") {
            continue;
        }
        desk_card("#dbf-eve",add,zoom_link,"dbf");
        mob_card("#dbf-eve-mob",add,zoom_link,"dbf");
    }
}

function micro_eve(data) {
    for (let i = 0; i < data.length; i++) {
        var add1 = data[i]["Micro-g-eve"];
        if(add1.includes("$")){
            var res = add1.split("$");
            var add = res[0];
            var zoom_link = res[1];
        }else {
            var add = add1;
            var zoom_link = "#";
        }
        if (add === "") {
            continue;
        }
        desk_card("#micro-eve",add,zoom_link,"micro");
        mob_card("#micro-eve-mob",add,zoom_link,"micro");
    }
}

function AIAA_eve(data) {
    for (let i = 0; i < data.length; i++) {
        var add1 = data[i]["AIAA-eve"];
        if(add1.includes("$")){
            var res = add1.split("$");
            var add = res[0];
            var zoom_link = res[1];
        }else {
            var add = add1;
            var zoom_link = "#";
        }
        if (add === "") {
            continue;
        }
        desk_card("#aiaa-eve",add,zoom_link,"club");
        mob_card("#aiaa-eve-mob",add,zoom_link,"club");
    }
}

function go_dark() {
    var back1 = document.getElementById('real-dashboard');
    var head = document.getElementById('dash-head');
    var head1 = document.getElementById('dash-head-2');
    document.getElementById('semester').style.color = "white";
    document.getElementById('prog_bar').style.backgroundColor = "#242424";
    var cards_mob = document.querySelectorAll(".dash-card-mobile");
    var cards = document.querySelectorAll(".dash-card");
    for (let i = 0; i < cards.length; i++) {
        cards_mob[i].style.boxShadow = '-5px 10px 10px 0 #000000';
        cards[i].style.boxShadow = '-5px 10px 10px 0 #000000';
    }
    for (let i = 0; i < cards.length; i++) {
        cards_mob[i].style.boxShadow = '-5px 10px 10px 0 #000000';
        cards[i].style.boxShadow = '-5px 10px 10px 0 #000000';
    }
    var elements = document.getElementsByClassName('dash-teams'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#242424";
		elements[i].style.color = "white";
		elements[i].style.boxShadow = '-5px 10px 10px 0 #000000';
	}
    back1.style.backgroundColor = 'rgb(22, 22, 22)';
    head.style.backgroundImage = 'linear-gradient(50deg, #fbb040 0%, #f9ed32 74%)';
    head1.style.backgroundImage = 'linear-gradient(50deg, #fbb040 0%, #f9ed32 74%)';

}

function go_light() {
    var back = document.getElementById('real-dashboard');
    var head = document.getElementById('dash-head');
    var head1 = document.getElementById('dash-head-2');
    document.getElementById('semester').style.color = "black";
    document.getElementById('prog_bar').style.backgroundColor = "#dedede";

    var cards_mob = document.querySelectorAll(".dash-card-mobile");
    var cards = document.querySelectorAll(".dash-card");
    for (let i = 0; i < cards.length; i++) {
        cards_mob[i].style.boxShadow = '-5px 10px 10px 0 #bababa';
        cards[i].style.boxShadow = '-5px 10px 10px 0 #bababa';
    }
    var elements = document.getElementsByClassName('dash-teams'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "#dedede";
		elements[i].style.color = "black";
		elements[i].style.boxShadow = '-5px 10px 10px 0 #bababa';
	}
    back.style.backgroundColor = 'white';
    head.style.backgroundImage = 'linear-gradient(50deg, #65799b 0%, #5e2563 74%)';
    head1.style.backgroundImage = 'linear-gradient(50deg, #65799b 0%, #5e2563 74%)';

}

function show_dbf() {
    var dbf = document.getElementById('dash-body-dbf');
    var micro = document.getElementById('dash-body-micro');
    var aiaa = document.getElementById('dash-body-aiaa');
    dbf.style.display = "block";
    micro.style.display = "none";
    aiaa.style.display = "none";
    if (document.getElementById('meet').classList.contains('active')) {
        show_meeting_dash();
    } else if (document.getElementById('event').classList.contains('active')) {
        show_event_dash();
    }
}

function show_micro() {
    var dbf = document.getElementById('dash-body-dbf');
    var micro = document.getElementById('dash-body-micro');
    var aiaa = document.getElementById('dash-body-aiaa');
    dbf.style.display = "none";
    micro.style.display = "block";
    aiaa.style.display = "none";
    if (document.getElementById('meet').classList.contains('active')) {
        show_meeting_dash();
    } else if (document.getElementById('event').classList.contains('active')) {
        show_event_dash();
    }
}

function show_aiaa() {
    var dbf = document.getElementById('dash-body-dbf');
    var micro = document.getElementById('dash-body-micro');
    var aiaa = document.getElementById('dash-body-aiaa');
    dbf.style.display = "none";
    micro.style.display = "none";
    aiaa.style.display = "block";
    if (document.getElementById('meet').classList.contains('active')) {
        show_meeting_dash();
    } else if (document.getElementById('event').classList.contains('active')) {
        show_event_dash();
    }
}

function show_meeting_dash() {
    var dbf = document.getElementById('dash-body-dbf').style.display;
    var micro = document.getElementById('dash-body-micro').style.display;
    var aiaa = document.getElementById('dash-body-aiaa').style.display;
    if (dbf === 'block') {
        var meet = document.getElementById('dbf-meetings');
        var event = document.getElementById('dbf-events');
        meet.style.display = "block";
        event.style.display = "none";
    } else if (micro === 'block') {
        var meet1 = document.getElementById('micro-meetings');
        var event1 = document.getElementById('micro-events');
        meet1.style.display = "block";
        event1.style.display = "none";
    } else if (aiaa === 'block') {
        var meet1 = document.getElementById('aiaa-meetings');
        var event1 = document.getElementById('aiaa-events');
        meet1.style.display = "block";
        event1.style.display = "none";
    }
}

function show_event_dash() {
    var dbf = document.getElementById('dash-body-dbf').style.display;
    var micro = document.getElementById('dash-body-micro').style.display;
    var aiaa = document.getElementById('dash-body-aiaa').style.display;
    if (dbf === 'block') {
        var meet = document.getElementById('dbf-meetings');
        var event = document.getElementById('dbf-events');
        meet.style.display = "none";
        event.style.display = "block";
    } else if (micro === 'block') {
        var meet1 = document.getElementById('micro-meetings');
        var event1 = document.getElementById('micro-events');
        meet1.style.display = "none";
        event1.style.display = "block";
    } else if (aiaa === 'block') {
        var meet1 = document.getElementById('aiaa-meetings');
        var event1 = document.getElementById('aiaa-events');
        meet1.style.display = "none";
        event1.style.display = "block";
    }
}

function show_meeting() {
    var meet = document.getElementById('meetings-desk');
    var event = document.getElementById('events-desk');
    meet.style.display = "flex";
    event.style.display = "none";
}

function show_event() {
    var meet = document.getElementById('meetings-desk');
    var event = document.getElementById('events-desk');
    meet.style.display = "none";
    event.style.display = "flex";
}

var submitButton = document.getElementById("submit_form");
var form = document.getElementById("email_form");
if (form) {
    form.addEventListener("submit", function (e) {
        setTimeout(function () {
            submitButton.value = "Sending...";
            submitButton.disabled = true;
        }, 1);
    });
}
