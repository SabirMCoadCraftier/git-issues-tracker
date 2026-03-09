/* global storage (simple) */
var my_db = [];
var target_url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

// main loader
async function loadMainData() {

    var loader_div = document.getElementById("loader");
    if (loader_div) {
        loader_div.style.display = "block";
    }

    try {

        // get issues
        var r = await fetch(target_url);
        var res_body = await r.json();
        var d = res_body.data;

        // separate open / closed manually
        var o = [];
        var c = [];

        var i = 0;
        while (i < d.length) {

            if (d[i].status == "open") {
                o.push(d[i]);
            } else {
                c.push(d[i]);
            }

            i++;
        }

        // mixing data a bit
        var mix = [];

        // add 30 open
        for (var a = 0; a < 30; a++) {
            mix.push(o[a % o.length]);
        }

        // add 20 closed
        for (var b = 0; b < 20; b++) {
            mix.push(c[b % c.length]);
        }

        // random sort
        my_db = mix.sort(function () {
            return 0.5 - Math.random();
        });

        // draw UI
        draw_ui(my_db);
        show_total(my_db);

    } catch (err) {

        alert("Data load error!");
        console.log("error while loading issues:", err);

    }

    if (loader_div) {
        loader_div.style.display = "none";
    }
}
// render cards
function draw_ui(lst) {

    var board = document.getElementById("issuesContainer");
    if (!board) 
        return;

    // clear board first
    board.innerHTML = "";

    for (var j = 0; j < lst.length; j++) {
        var obj = lst[j];
        var card = document.createElement("div");
        card.className = "card " + obj.status;

        // choose image depending status
        var img = obj.status == "open"
            ? "assets/Open-Status.png"
            : "assets/Closed- Status .png";

        var p_lvl = obj.priority.toUpperCase();

        // priority color
        var p_cls = "low";

        if (p_lvl == "HIGH") {
            p_cls = "high";
        } else if (p_lvl == "MEDIUM") {
            p_cls = "medium";
        }

        // some random tags
        var tags = [
            { l: "BUG", s: "bug" },
            { l: "HELP WANTED", s: "help" },
            { l: "ENHANCEMENT", s: "enhancement" }
        ];

        tags.sort(function () {
            return Math.random() - 0.5;
        });

        var count = Math.floor(Math.random() * 3) + 1;
        var t_html = "";
        for (var n = 0; n < count; n++) {
            t_html +=
                '<span class="tag-badge ' +
                tags[n].s +
                '">' +
                tags[n].l +
                "</span>";
        }

        // old style html build
        var inner = "";
        inner += '<div class="card-padding">';
        inner += '<div class="card-top">';
        inner += '<img src="' + img + '" class="status-indicator">';
        inner += '<span class="priority-badge ' + p_cls + '">' + p_lvl + "</span>";
        inner += "</div>";
        inner += "<h3>Fix Navigation Menu On Mobile Devices</h3>";
        inner += "<p class=\"desc\">The navigation menu doesn't collapse properly on mobile devices...</p>";
        inner += '<div class="tag-container">' + t_html + "</div>";
        inner += "</div>";
        inner += '<div class="card-footer"><span>#1 by john_doe</span><span>1/15/2024</span></div>';
        card.innerHTML = inner;

        // click handler
        (function (it, t) {

            card.onclick = function () {
                if (window.openModal) {
                    window.openModal(it, t);
                }
            };
        })(obj, t_html);
        board.appendChild(card);
    }
}

// search
async function searchIssue() {
    var val = document.getElementById("searchInput").value;
    if (val == "") {
        draw_ui(my_db);
        return;
    }
    try {
        var res = await fetch(target_url + "/search?q=" + val);
        var out = await res.json();
        draw_ui(out.data);
    } catch (e) {
        console.warn("search failed...");
    }
}

// header count
function show_total(arr) {
    var el = document.getElementById("totalCount");
    if (el) {
        el.innerText = arr.length + " Issues";
    }
}

// filter by status
function loadStatus(type, b) {
    var filtered = [];
    for (var k = 0; k < my_db.length; k++) {
        if (my_db[k].status == type) {
            filtered.push(my_db[k]);
        }
    }
    draw_ui(filtered);
    show_total(filtered);

    // button active
    var btns = document.getElementsByClassName("tab-btn");
    for (var v = 0; v < btns.length; v++) {
        btns[v].classList.remove("active");
    }
    if (b) b.classList.add("active");
}
