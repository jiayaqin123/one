window.onload=function(){
// banner  START
	var bannerImgs=document.getElementsByClassName("bannerImg");
	var bannerBtns=document.getElementsByClassName("bannerBtnItem");
	var banner=document.getElementsByClassName("banner")[0];
	var bannerColor=["#D00F06","#FE8A03","#2EA4E5","#2AAFAC","#EFD5D8","#A6010F","#E78C00","#5E9E09"];
	//alert(imgs.length)
	var now=0;//初始下标
	function move(){//自动轮播函数
	   now++;
	   if(now>=8){
	   	now=0;
	   }
	   for(var i=0;i<bannerImgs.length;i++){
	   	  bannerImgs[i].style.opacity=0; 
	   	  bannerBtns[i].style.background="#ccc";
	   }
	   bannerImgs[now].style.opacity=1; 
	   bannerBtns[now].style.background="#ff3c3c"; 
	   banner.style.background=bannerColor[now];     
	}
	var t=setInterval(move,2000);//时间函数---相当于一个循环使轮播进行
	var banner2=document.getElementsByClassName("banner2")[0];
	banner2.onmouseover=function(){    //鼠标移上去、移走的变化
		clearInterval(t);//清除时间函数
	}
	var flag=true;
	banner2.onmouseout=function(){
		if(flag){
			t=setInterval(move,2000);
		}
	}
	var bannerRightBtn=document.getElementsByClassName("rightBtn")[0];
	bannerRightBtn.onclick=function(){//单击左右按钮的变化
         move();
	}
	var bannerLeftBtn=document.getElementsByClassName("leftBtn")[0];
	bannerLeftBtn.onclick=function(){//左边按钮
        now--;
	    if(now<0){
	   	   now=7;
	    }
	    for(var i=0;i<bannerImgs.length;i++){
	   	   bannerImgs[i].style.opacity=0; 
	   	   bannerBtns[i].style.background="#ccc";
	    }
	    bannerImgs[now].style.opacity=1; 
	    bannerBtns[now].style.background="#ff3c3c";
	    banner.style.background=bannerColor[now];      
	}
	for (var i = 0; i < bannerBtns.length; i++) {
		(function(i){//这里利用的是函数的自调用，以使i跟着变化，否则始终是5
	        bannerBtns[i].onmouseover=function(){//下面的小按钮，移上去变背景颜色
                
				for (var j = 0; j < bannerBtns.length; j++) {
					bannerBtns[j].style.background="#ccc";
					bannerImgs[j].style.opacity=0;
				};
				bannerBtns[i].style.background="#ff3c3c";
				bannerImgs[i].style.opacity=1;
				banner.style.background=bannerColor[i]; 
			}    

		})(i);			
	};
	/*有两个问题：
	1、图片的title不跟着变
	2、鼠标移动上去按钮后，图片是变了，但是下一个图片不是紧跟着刚刚那个图片*/
// banner  END




/*// mainJkhg    START
    var mainJkhgBD2Imgs=document.getElementsByClassName("mainJkhgBD2Img");
	var mainJkhgBD2Btns=document.getElementsByClassName("mainJkhgBD2BtnItem");
	var mainJkhgBD2=document.getElementsByClassName("mainJkhgBD2")[0];
	//alert(imgs.length)
	var mainJkhgBD2now=0;//初始下标
	function mainJkhgmove(){//自动轮播函数
	   mainJkhgBD2now++;
	   if(mainJkhgBD2now>=3){
	   	mainJkhgBD2now=0;
	   }
	   for(var i=0;i<mainJkhgBD2Imgs.length;i++){
	   	  mainJkhgBD2Imgs[i].style.opacity=0; 
	   	  mainJkhgBD2Btns[i].style.background="#ddd";
	   }
	   mainJkhgBD2Imgs[mainJkhgBD2now].style.opacity=1; 
	   mainJkhgBD2Btns[mainJkhgBD2now].style.background="#ff3c3c"; 

	}



	var mainJkhgBD2t=setInterval(mainJkhgmove,2000);//时间函数---相当于一个循环使轮播进行
	var mainJkhgBD2=document.getElementsByClassName("mainJkhgBD2")[0];
	mainJkhgBD2.onmouseover=function(){    //鼠标移上去、移走的变化
		clearInterval(mainJkhgBD2t);//清除时间函数
	}
	mainJkhgBD2.onmouseout=function(){
			mainJkhgBD2t=setInterval(mainJkhgmove,2000);
	}
	for (var i = 0; i < mainJkhgBD2Btns.length; i++) {
		(function(i){//这里利用的是函数的自调用，以使i跟着变化，否则始终是5
	        mainJkhgBD2Btns[i].onmouseover=function(){//下面的小按钮，移上去变背景颜色
                
				for (var j = 0; j < mainJkhgBD2Btns.length; j++) {
					mainJkhgBD2Btns[j].style.background="#ddd";
					mainJkhgBD2Imgs[j].style.opacity=0;
				};
				mainJkhgBD2Btns[i].style.background="#ff3c3c";
				mainJkhgBD2Imgs[i].style.opacity=1;
			}    

		})(i);			
	};

// mainJkhg    END*/
// mainJkhg    START*/


// mainJkhg    END*/
function JKHG(JKHGwheel){ 
    var JKHGimgBox=getClass("imgBox",JKHGwheel)[0];
	//console.log(imgBox)
	var JKHGimg=getClass("img",JKHGimgBox)[0];
	//console.log(img)
	var JKHGas=JKHGimg.getElementsByTagName("a");
	//console.log(as);
	var JKHGaw=getStyle(JKHGas[0],"width")
	//console.log(aw)
	JKHGimg.style.width=JKHGaw*JKHGas.length+"px";
	//console.log(as.length)
	//console.log(img.style.width)
	var JKHGbtnBox=getClass("btnBox",JKHGwheel)[0];
	//console.log(btnBox);
	var JKHGbtns=JKHGbtnBox.getElementsByTagName("li");
	//console.log(btns.length)
	//console.log(btns)
	var JKHGindex=0;
	var animateT=1100;
	var setIntervalT=1200;

	var JKHGt=setInterval(JKHGmove,setIntervalT);
	var  JKHGflag=true;
	function JKHGmove(){
		if(!JKHGflag){
           return;
		}
		JKHGflag=false;
		JKHGindex++;
		if(JKHGindex>=JKHGas.length){
			JKHGindex=0;
		}
		if(JKHGindex<=-1){
			JKHGindex=JKHGas.length-1;
		}
		animate(JKHGimg,{marginLeft:-JKHGindex*JKHGaw},animateT,function(){JKHGflag=true});
		for (var i = 0; i < JKHGbtns.length; i++) {
			//btns[i].className="";
			var JKHGinner=$(".inner",JKHGbtns[i])[0];
			JKHGinner.style.width="0px";
		};
		//btns[index].className="hot";
		var JKHGinner=$(".inner",JKHGbtns[JKHGindex])[0];
		var JKHGbtnW=getStyle(JKHGbtns[0],"width");
		animate(JKHGinner,{width:JKHGbtnW},animateT)
	}
	
	//console.log(wheel)
	JKHGwheel.onmouseover=function(){
		clearInterval(JKHGt);
	}
	JKHGwheel.onmouseout=function(){
        JKHGt=setInterval(JKHGmove,setIntervalT);
	}
	for (var i = 0; i < JKHGbtns.length; i++) {
		JKHGbtns[i].index=i;
		JKHGbtns[i].onmouseover=function(){
			for (var j = 0; j < JKHGbtns.length; j++) {
				var JKHGinner=$(".inner",JKHGbtns[j])[0];
			     JKHGinner.style.width="0px";
			};
			//JKHGbtns[this.index].className="hot";
			JKHGindex=this.index;
			animate(JKHGimg,{marginLeft:-JKHGindex*JKHGaw},animateT);
		}
	};


}	
 var JKHGwheel=getClass("JKHGwheel");
 for (var i = 0; i < JKHGwheel.length; i++) {
 	JKHG(JKHGwheel[i]);
 };


// mainHssx    START
   
// mainHssx    END


// mainHssx    START
   

// mainHssx    END





// mainSpyl    START
    
// mainSpyl    END




// mainGhcw    START
   
// mainGhcw    END




// mainMywj    START
  

// mainMywj    END



// mainJjg    START
   

// mainJjg    END




// mainLxbh    START
   




	

    var SlidImgs=document.getElementsByClassName("SlidImg");
	var SlidBtns=document.getElementsByClassName("SlidBtnItem");
	var Slid=document.getElementsByClassName("Slid")[0];
	//alert(imgs.length)
	var Slidnow=0;//初始下标
	function Slidmove(){//自动轮播函数
	   Slidnow++;
	   if(Slidnow>=4){
	   	Slidnow=0;
	   }
	   for(var i=0;i<SlidImgs.length;i++){
	   	  SlidImgs[i].style.opacity=0; 
	   }
	   SlidImgs[Slidnow].style.opacity=1; 

	}
	var Slidt=setInterval(Slidmove,2000);//时间函数---相当于一个循环使轮播进行
	

	var Slid=document.getElementsByClassName("Slid")[0];
	Slid.onmouseover=function(){    //鼠标移上去、移走的变化
		clearInterval(Slidt);//清除时间函数
	}
	Slid.onmouseout=function(){
			Slidt=setInterval(Slidmove,2000);
	}
	


	var SlidRightbtn=document.getElementsByClassName("SlidRightbtn")[0];
	SlidRightbtn.onclick=function(){//单击左右按钮的变化
         Slidmove();
	}
	var SlidLeftbtn=document.getElementsByClassName("SlidLeftbtn")[0];
	SlidLeftbtn.onclick=function(){//左边按钮
        Slidnow--;
	    if(Slidnow<0){
	   	   Slidnow=3;
	    }
	    for(var i=0;i<SlidImgs.length;i++){
	   	   SlidImgs[i].style.opacity=0; 
	    }
	    SlidImgs[Slidnow].style.opacity=1; 
	}

// mainLxbh    END




// mainSjjd    START
    
// mainSjjd    END


// mainSg    START
    var mainSgBdImgs=document.getElementsByClassName("mainSgBdImg");
	var mainSgBdBtnItems=document.getElementsByClassName("mainSgBdBtnItem");
	var mainSgBd=document.getElementsByClassName("mainSgBd")[0];
	
	var mainSgBdNow=0;//初始下标
	function mainSgmove(){//自动轮播函数
	   mainSgBdNow++;
	   if(mainSgBdNow>=3){
	   	mainSgBdNow=0;
	   }
	   for(var i=0;i<mainSgBdImgs.length;i++){
	   	 mainSgBdImgs[i].style.opacity=0; 
	   	 mainSgBdBtnItems[i].style.color="#666";
	   }
	   mainSgBdImgs[mainSgBdNow].style.opacity=1; 
	   mainSgBdBtnItems[mainSgBdNow].style.color="#cea145"; 

	}


	var mainSgBdt=setInterval(mainSgmove,2000);//时间函数---相当于一个循环使轮播进行
	

	var mainSgBd=document.getElementsByClassName("mainSgBd")[0];
	mainSgBd.onmouseover=function(){    //鼠标移上去、移走的变化
		clearInterval(mainSgBdt);//清除时间函数
	}
	mainSgBd.onmouseout=function(){
			mainSgBdt=setInterval(mainSgmove,2000);
	}



	for (var i = 0; i < mainSgBdBtnItems.length; i++) {
		(function(i){//这里利用的是函数的自调用，以使i跟着变化，否则始终是5
	        mainSgBdBtnItems[i].onmouseover=function(){//下面的小按钮，移上去变背景颜色
                
				for (var j = 0; j < mainSgBdBtnItems.length; j++) {
					mainSgBdBtnItems[j].style.color="#666";
					mainSgBdImgs[j].style.opacity=0;
				};
				mainSgBdBtnItems[i].style.color="#cea145";
				mainSgBdImgs[i].style.opacity=1;
			}    

		})(i);			
	};

/*
    var mainSgBdImgItems=document.getElementsByClassName("mainSgBdImgItem");
    var shandong=document.getElementsByClassName("shandong");
    console.log(mainSgBdImgItems.length);
	for (var k = 0; k < mainSgBdImgItems.length; k++) {
		(function(k){//这里利用的是函数的自调用，以使i跟着变化，否则始终是5
	        mainSgBdImgItems[k].onmouseover=function(){//下面的小按钮，移上去变背景颜色            
				for (var j = 0; j < shandong.length; j++) {
					shandong[j].style.opacity=0;
				};
				shandong[k].style.opacity=1;
				console.log(k);
			}    

		})(k);			
	};*/

// mainSg    END

//fix   START
//var floor=$(".floor");
//console.log(floor);



    var FLOORfix=$(".fix")[0];
	//console.log(back);
	var FLOORtop=$(".top",FLOORfix)[0];
	//console.log(top);
	/*window.onscroll=function(){
		console.log(document.body.scrollTop);
		console.log(document.documentElement.scrollTop);
	}*/
	var FLOORdoc=document.documentElement.scrollTop?document.documentElement:document.body;
	//console.log(doc);
	FLOORtop.onclick=function(){
		animate(FLOORdoc,{scrollTop:0});
	}
	var FLOORfloorItems=$(".floor");
	var FLOORbtns=$("li",FLOORfix);
	//console.log(FLOORbtns);
	//console.log(floorItems)
	//console.log(floorItems.length);
     //console.log(floorItems.offsetTop)
    var FLOORarr=[];
    for (var i = 0; i < FLOORfloorItems.length; i++) {
    	FLOORarr.push(FLOORfloorItems[i].offsetTop);
    };
    //console.log(FLOORarr);
	window.onscroll=function(){
		if(FLOORdoc.scrollTop<=1000){
			FLOORfix.style.display="none";
		}else{
			FLOORfix.style.display="block";
		}


		for (var i = 0; i < FLOORarr.length; i++) {
			if((FLOORdoc.scrollTop+90)>=FLOORarr[i]){
				for (var j = 0; j < FLOORbtns.length; j++) {
					FLOORbtns[j].style.background="orange";
				};
               FLOORbtns[i].style.background="red";
			}
		};
	}
	for (var i = 0; i < FLOORbtns.length; i++) {
		FLOORbtns[i].index=i;
		FLOORbtns[i].onclick=function(){
			animate(FLOORdoc,{scrollTop:FLOORarr[this.index]});
		}
	};




















//fix   END





}