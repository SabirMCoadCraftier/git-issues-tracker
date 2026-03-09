/* --- modal functions for issue details --- */

function openModal(item, tags) {
    // modal ta ke age dhori
    var myModal = document.getElementById("issueModal");
    if (myModal == null) return;

    // header title 
    var head = document.querySelector(".modal-header");
    if (head) {
        head.innerHTML = "<h2>Fix Navigation Menu On Mobile Devices</h2>";
    }

    // information are manually update
    document.getElementById("modalDesc").innerText = "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.";
    document.getElementById("modalTags").innerHTML = tags;
    document.getElementById("modalUser").innerText = "Fahim Ahmed";
    document.getElementById("modalAssignee").innerText = "Fahim Ahmed";
    document.getElementById("modalDate").innerText = "22/03/2026";

    // badge status check
    var badge = document.getElementById("modalStatusBadge");
    if (badge) {
        if (item.status == 'open') {
            badge.innerText = "Opened";
            badge.style.background = "#DCFCE7";
            badge.style.color = "#00A96E";
        } else {
            badge.innerText = "Closed";
            badge.style.background = "#E0E7FF";
            badge.style.color = "#4A00FF";
        }
    }

    // Priority color logic
    var pBox = document.getElementById("modalPriority");
    var pVal = item.priority.toUpperCase();
    pBox.innerText = pVal;
    
    // manual color setting
    if (pVal == 'HIGH') {
        pBox.style.color = "#EF4444";
    } else if (pVal == 'MEDIUM') {
        pBox.style.color = "#F59E0B";
    } else {
        pBox.style.color = "#64748B";
    }

    // sheshe modal ta open kori
    myModal.style.display = "flex";
}

// modal stop
function closeModal() {
    var modalDiv = document.getElementById("issueModal");
    if (modalDiv) {
        modalDiv.style.display = "none";
    }
}

// baire click korle jeno bondho hoy
window.onclick = function(e) {
    var targetModal = document.getElementById("issueModal");
    if (e.target == targetModal) {
        // call the close function
        closeModal();
    }
};