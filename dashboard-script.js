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