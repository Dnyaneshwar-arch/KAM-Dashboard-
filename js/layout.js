
// ===== LOAD COMPONENTS =====
async function loadComponent(id, file) {
    const response = await fetch(file);
    const data = await response.text();
    document.getElementById(id).innerHTML = data;
}

// Load Sidebar + Topbar
document.addEventListener("DOMContentLoaded", function(){
    loadComponent("sidebar-container", "components/sidebar.html");
    loadComponent("topbar-container", "components/topbar.html");

    // Login Check
    const loggedUser = localStorage.getItem("loggedInUser");
    if(!loggedUser){
        window.location.href = "login.html";
    }
    setTimeout(() => {
        const usernameDisplay = document.getElementById("usernameDisplay");
        if(usernameDisplay){
            usernameDisplay.innerText = loggedUser;
        }
    }, 500);
});

// ===== LOGOUT =====
function logout(){
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

// ===== SIDEBAR TOGGLE =====
function toggleEmployees(){
    const menu = document.getElementById("employeeMenu");
    const arrow = document.getElementById("empArrow");

    if(menu.style.display === "none"){
        menu.style.display = "block";
        arrow.innerHTML = "▼";
    } else {
        menu.style.display = "none";
        arrow.innerHTML = "►";
    }
}

function toggleManager(){
    const menu = document.getElementById("managerMenu");
    const arrow = document.getElementById("mgrArrow");

    if(menu.style.display === "none"){
        menu.style.display = "block";
        arrow.innerHTML = "▼";
    } else {
        menu.style.display = "none";
        arrow.innerHTML = "►";
    }
}
