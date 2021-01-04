window.onload=function() {
    /*顶部导航条*/
    var selectNavUl = document.getElementById("selectNavUl");
    var aLi = selectNavUl.getElementsByClassName("aLi");
    var navMenu = document.getElementsByClassName("navMenu");
    for (var i = 0; i < navMenu.length; i++) {
        pullDown(aLi, navMenu, i);
    }

    /*左侧列表导航条*/
    var topleftUl = document.getElementById("topleftUl");
    var liColor = topleftUl.getElementsByClassName("liColor");
    var topMenu = document.getElementsByClassName("topMenu");
    for (var i = 0; i < topMenu.length; i++) {
        pullDown(liColor, topMenu, i);
    }
    /*手机、家电、视频突出效果*/
    var phoneTop = document.getElementById("phoneTop");
    var aA1 = phoneTop.getElementsByTagName("a");
    outstand(aA1);
    var houseTop = document.getElementById("houseTop");
    var aA2 = houseTop.getElementsByTagName("a");
    outstand(aA2);
    var videoPlay = document.getElementById("videoPlay");
    var aA3 = videoPlay.getElementsByTagName("a");
    outstand(aA3);
    var bottomRight = document.getElementById("bottomRight");
    var aA4 = bottomRight.getElementsByTagName("a");
    outstand(aA4);
    /*顶部购物车图片变换*/
    var navRight = document.getElementById("navRight");
    var navRightImg = document.getElementById("navRightImg");
    picChange(navRight, navRightImg, "shoppingcart");
    /*右侧导航条图片变换*/
    var data = document.getElementById("data");
    var aDataA = data.getElementsByTagName("a");
    var aDataImg = data.getElementsByTagName("img");
    var arrData = ["applications", "user", "Aftersale", "headset", "shoppingcart", "totop"];
    for (var i = 0; i < aDataA.length; i++) {
        picChange(aDataA[i], aDataImg[i], arrData[i]);
    }
    /*底部图片变换*/
    var contact = document.getElementById("contact");
    var aConA = contact.getElementsByTagName("a");
    var aConImg = contact.getElementsByTagName("img");
    var arrCon = ["chat", "micro-blog", "wechat"];
    for (var i = 0; i < aConA.length; i++) {
        picChange(aConA[i], aConImg[i], arrCon[i]);
    }
    /*底部*/
    var list = document.getElementById("list");
    var aListA = list.getElementsByTagName("a");
    var aListImg = list.getElementsByTagName("img");
    var arrList = ["Aftersale", "sevenDay", "15Day", "gift", "position"];
    for (var i = 0; i < aListA.length; i++) {
        picChange(aListA[i], aListImg[i], arrList[i]);
    }
    /*查看全部图片变换*/
    var lookPhone = document.getElementById("lookPhone");
    var lookPhoneImg = document.getElementById("lookPhoneImg");
    picChange(lookPhone,lookPhoneImg,"circleLeft");
    var lookVideo = document.getElementById("lookVideo");
    var lookVideoImg = document.getElementById("lookVideoImg");
    picChange(lookVideo,lookVideoImg,"circleLeft");

    video();
    app();
    app1();
    totop();
    lunbo();
   /* wufeng();*/
    date("2021-1-6 14:00:00");
    houseChange();
    safe();
};

/*导航条下拉效果*/
function pullDown(obj1,obj2,num) {
        obj1[num].onmouseover = function () {
            obj2[num].style.display = "block";
        }
        obj1[num].onmouseout = function () {
            obj2[num].style.display = "none";
        }
}
/*div块的突出效果*/
function outstand(obj){
        for(var i=0;i<obj.length;i++){
            obj[i].onmouseover=function () {
                this.style.boxShadow="#a9a9a975 0px 8px 7px 0px";
                this.style.transition= "all 0.2s linear";
            }
            obj[i].onmouseout=function () {
                this.style.boxShadow="none";
            }
        }
}
/*图片变化效果*/
function picChange(obj1,obj2,img) {
    obj1.onmouseover = function () {
        obj2.src = "img/icon/" + img + "0.png";
    }
    obj1.onmouseout = function () {
        obj2.src = "img/icon/" + img + ".png";
    }
}
/*视频中播放按钮效果*/
function video() {
    var aVideo=document.getElementsByClassName("videoA");
    var aPlayImg=document.getElementsByClassName("playImg");
    for(var i=0;i<aVideo.length;i++) {(
        function () {
            var temp=i;
            var playSpan = aVideo[i].getElementsByTagName("span")[0];
            var playSpanImg = aVideo[i].getElementsByTagName("img")[1];
            aPlayImg[i].onmouseover=function () {
                playSpan.style.borderColor="#ff6700";
                playSpan.style.backgroundColor="#ff6700";
            }
            aPlayImg[i].onmouseout=function () {
                playSpan.style.borderColor="#ffffff";
                playSpan.style.backgroundColor="rgba(0,0,0,.6)";
            }
        }
    )();
    }
}
/*导航栏下载app*/
function app() {
    var download=document.getElementById("download");
    var downloadapp=document.getElementById("downloadapp");
    var triangle=document.getElementById("triangle");
    var app=document.getElementById("app");
    download.onmouseover=function () {
        downloadapp.style.display="block";
    }
    download.onmouseout=function () {
        downloadapp.style.display="none";
    }
}
/*右侧导航栏下载app*/
function app1() {
    var download1=document.getElementById("download1");
    var downloadapp1=document.getElementById("downloadapp1");
    var data = document.getElementById("data");
    var aListImg = data.getElementsByTagName("img");
    download1.onmouseover=function () {
        aListImg[0].src = "img/icon/applications0.png";
        downloadapp1.style.display="block";
    }
    download1.onmouseout=function () {
        aListImg[0].src = "img/icon/applications.png";
        downloadapp1.style.display="none";
    }
}
/*回到顶部效果*/
function totop() {
    var toTop = document.getElementById("totop");
    var screenh = document.documentElement.clientHeight || document.body.clientHeight;
    var timer = null;
    window.onscroll = function() {
        var scrollTop= document.documentElement.scrollTop||document.body.scrollTop;
        toTop.style.display = scrollTop >= screenh?"block":"none";
    };
    toTop.onclick = function () {
        timer = setInterval(function() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var ispeed =-scrollTop / 5;
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop + ispeed;
            if (scrollTop == 0) {
                clearInterval(timer);
            }
        }, 30);
    }
}
/*轮播图*/
function lunbo() {
    var timer=null;
    var lb = document.getElementById("lunbo");
    var num=1;
    clearInterval(timer);
    timer=setInterval(function(){
        num++;
        if(num == 6){
            num = 1;
        }
        lb.src="img/Carousel/c"+num+".jpg";
        var alunbo = document.getElementById("lunboList").getElementsByTagName("a");
        for (var i=0;i<alunbo.length;i++){
            alunbo[i].style.background="rgba(0,0,0,0.4)";
        }
        alunbo[num-1].style.background="rgba(166,166,166,0.38)";

    },5000);

    var left = document.getElementById("left");
    var right = document.getElementById("right");
    left.onclick=function() {
        num--;
        if (num == 0) {
            num = 1;
        }
        lb.src = "img/Carousel/c" + num + ".jpg";
        var alunbo = document.getElementById("lunboList").getElementsByTagName("a");
        for (var i = 0; i < alunbo.length; i++) {
            alunbo[i].style.background = "rgba(0,0,0,0.4)";
        }
        alunbo[num - 1].style.background = "rgba(166,166,166,0.38)";

    }
    right.onclick=function(){
        num++;
        if(num == 6){
            num = 5;
        }
        lb.src="img/Carousel/c"+num+".jpg";
        var alunbo = document.getElementById("lunboList").getElementsByTagName("a");
        for (var i=0;i<alunbo.length;i++){
            alunbo[i].style.background="rgba(0,0,0,0.4)";
        }
        alunbo[num-1].style.background="rgba(166,166,166,0.38)";
    }

    var alunbo = document.getElementById("lunboList").getElementsByTagName("a");
    for(var i = 0 ; i < alunbo.length ; i++) {
        // 给每个li元素赋值，每循环一次，i+1;
        alunbo[i].index = i;
        alunbo[i].onclick = function () {
            // li的索引是从0开始的，所以要+1
            var num = this.index + 1;
            lb.src="img/Carousel/c"+num+".jpg";
            for (var i=0;i<alunbo.length;i++){
                alunbo[i].style.background="rgba(0,0,0,0.4)";
            }
            alunbo[num-1].style.background="rgba(166,166,166,0.38)";
        }
    }
}
/*无缝滚动*/
var timer=null;
function wufeng() {
    var seamless = document.getElementById("seamless");
    var ul = seamless.getElementsByTagName("ul")[0];
    var lis = ul.getElementsByTagName("li");
    clearInterval(timer);
    timer=setInterval(function move (){


    },5000);


}
/*倒计时*/
function date(value) {
    setInterval(function() {
        var nowTime = new Date();//获取当前时间
        var endTime = new Date(value);
        var seconds = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
        var h = parseInt(seconds / 3600);//小时
        var m = parseInt(seconds / 60 % 60);//分钟
        var s = parseInt(seconds % 60);//秒
       var clear=document.getElementById("clear");
       var aSpan=clear.getElementsByTagName("span");
       if(h>=0&&h<=9){
           h="0"+h;
       }
        if(m>=0&&m<=9){
            m="0"+m;
        }
        if(s>=0&&s<=9){
            s="0"+s;
        }
       aSpan[0].innerHTML=h;
       aSpan[2].innerHTML=m;
       aSpan[4].innerHTML=s;
    }, 1000);
}
/*家电切换*/
function houseChange() {
    var houseArrow=document.getElementById("houseArrow");
    var aA=houseArrow.getElementsByTagName("a");
    var houseRight=document.getElementById("houseRight");
    var aUl=houseRight.getElementsByTagName("ul");
    aA[0].onmouseover=function(){
        this.style.color="#ff6700";
        this.style.borderBottom="3px solid #ff6700";
        aA[1].style.color="#000000";
        aA[1].style.borderBottom="none";
        aUl[0].style.display="block";
        aUl[1].style.display="none";
    }
    aA[1].onmouseover=function(){
        this.style.color="#ff6700";
        this.style.borderBottom="3px solid #ff6700";
        aA[0].style.color="#000000";
        aA[0].style.borderBottom="none";
        aUl[0].style.display="none";
        aUl[1].style.display="block";
    }
}
/*底部网站安全图片切换*/
function safe(){
    var index=0;
    setInterval(function(){
        var img=["service","serviced"];
        var lastA=document.getElementById("lastA");
        var aImg=lastA.getElementsByTagName("img")[0];
        aImg.src="img/icon/"+img[index]+".png";
        index++;
        if(index>1){
           index=0;
        }

    },3000);
}
