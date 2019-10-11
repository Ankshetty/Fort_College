
document.getElementById("quickBtn").addEventListener("click", function() {

    let quickDiv=document.getElementById('quicklinks');
    let searchDiv=document.getElementById('search-form');
    document.getElementById('quicklinks').style.display == "block" ? (quickDiv.style.display = "none") && (searchDiv.style.display = "none" ) :
    (quickDiv.style.display = "block")&&(searchDiv.style.display = "none" ); 

    // if(document.getElementById('quicklinks').style.display == "none" )
    // {
    //   quickDiv.style.display = "block" ;
    //   searchDiv.style.display = "none" ;
    // }
    // else if(document.getElementById('quicklinks').style.display == "block")
    // {
    //     quickDiv.style.display = "none" ;
    //   searchDiv.style.display = "none" ;
    // } 
});

document.getElementById("searchDiv").addEventListener("click", function() {

    let quickDiv=document.getElementById('quicklinks');
    let searchDiv=document.getElementById('search-form');
    document.getElementById('search-form').style.display == "block" ? (quickDiv.style.display = "none") && (searchDiv.style.display = "none" ) :
    (quickDiv.style.display = "none")&&(searchDiv.style.display = "block" ); 
});

document.getElementById("formCloseButton").addEventListener("click", function() {

    let quickDiv=document.getElementById('quicklinks');
    let searchDiv=document.getElementById('search-form');
    document.getElementById('search-form').style.display == "block" ? (quickDiv.style.display = "none") && (searchDiv.style.display = "none" ) :
    (quickDiv.style.display = "none")&&(searchDiv.style.display = "block" ); 

});

window.addEventListener("scroll",function(){
    let header=document.getElementById("sticky-header");
    // let headerOffset=header.offsetTop;
    document.getElementById('search-form').style.display="none";
    document.getElementById('quicklinks').style.display="none";
    let headerOffset=header.scrollTop;
    if(window.pageYOffset>headerOffset)
    {
        header.classList.add("header__navbar-sticky");
    }
    else
    {
        header.classList.remove("header__navbar-sticky");
    }
    
});

document.getElementById("toggleNav").addEventListener("click", function() {

    let toggleDiv=document.getElementById('toggleIcon');
    let navDiv=document.getElementById('headerMainNav');
    let preheaderCopy=document.getElementById('preheaderCopy');
    preheaderCopy
    toggleDiv.classList.toggle("open");
    if(toggleDiv.classList.contains("open"))
    {
        document.getElementById('headerMainNav').style.display="block";
        document.getElementById('preheaderCopy').style.display="block";

    }
    else
    {
        document.getElementById('headerMainNav').style.display="none";
        document.getElementById('preheaderCopy').style.display="none";

    }


});