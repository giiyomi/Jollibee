let burger = document.querySelector('.burger');
let rightPanel = document.querySelector('.right-responsive-panel');


burger.addEventListener("click", function(){
    if(rightPanel.style.display === "flex"){
    hideSidebar();
    } else {
    showSidebar();  
    }
});


function showSidebar(){
    rightPanel.style.display = "flex";
}
function hideSidebar(){
    rightPanel.style.display = 'none';
}


var preferredWidth = window.matchMedia("(max-width: 800px)"); // need to na nasa taas kasi hindi gagana yung function sa baba.

preferredWidth.addEventListener("change", function(preferredWidth) {
    if (preferredWidth.matches) {
        burger.style.display = 'flex';
    } else {
        hideSidebar();
        burger.style.display = 'none';
    }
});




document.addEventListener("click", function(pindot) {
    if (!pindot.target.closest('.burger') && !pindot.target.closest('.right-responsive-panel')) {
        hideSidebar();
    }
});

