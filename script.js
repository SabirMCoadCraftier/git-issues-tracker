/* --- Login Logic --- */

function login() {
    // fields gulo dhorchi
    var userField = document.getElementById("username");
    var passField = document.getElementById("password");

    if (!userField || !passField) {
        return; 
    }

    var username = userField.value;
    var password = passField.value;

    // input check - admin/admin123
    if (username == "admin" && password == "admin123") {
        // thik thakle dashboard e niye jabe
        window.location.href = "dashboard.html";
    } else {
        // bhul hole alert
        alert("Invalid credentials! Please use admin / admin123");
        
        // password field khali kore deya
        passField.value = "";
    }
}

// Enter button support
window.onkeydown = function(e) {
    if (e.keyCode == 13) {
        login();
    }
};