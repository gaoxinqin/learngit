window.onload=function(){
    var navMenu = document.getElementsByClassName("navMenu");
    for(var i=0;i<navMenu.length;i++){
        pullDown(i);
    }

    var topMenu = document.getElementsByClassName("topMenu");
    for(var j=0;j<topMenu.length;j++){
        pull(j);
    }


};

/*导航条下拉效果*/
function pullDown(num) {
    var selectNavUl = document.getElementById("selectNavUl");
    var aLi = selectNavUl.getElementsByClassName("aLi");
    var navMenu = document.getElementsByClassName("navMenu");
    aLi[num].onmouseover = function () {
        navMenu[num].style.display = "block";
    }
    aLi[num].onmouseout = function () {
        navMenu[num].style.display = "none";
    }
}
/*左侧导航条右显示效果*/
function pull(num) {
    var topleftUl = document.getElementById("topleftUl");
    var liColor = topleftUl.getElementsByClassName("liColor");
    var topMenu = document.getElementsByClassName("topMenu");
    liColor[num].onmouseover = function () {
        topMenu[num].style.display = "block";
    }
    liColor[num].onmouseout = function () {
        topMenu[num].style.display = "none";
    }
}
/*div块的突出效果*/
function outstand(){


}