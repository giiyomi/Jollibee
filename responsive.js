let burger = document.querySelector('.burger');
let rightPanel = document.querySelector('.right-responsive-panel');


burger.addEventListener("click", function(){
    if(rightPanel.style.display === "flex"){ //need daw pagbaligtarin ang showSideBar() at hideSidebar()
    hideSidebar();
    } else {
    showSidebar();  
    }
});

// GANTO SYA NUNG UNA
// burger.addEventListener("click", function(){
//     if(rightPanel.style.display === "flex"){ //need daw pagbaligtarin ang showSideBar() at hideSidebar(), nagloloko daw kasi hindi daw nababasa ni js yung js minsan kaya kinokorek nya sa unang click.
//      showSidebar();
//     } else {
//      hideSidebar();
//     }
// })

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

