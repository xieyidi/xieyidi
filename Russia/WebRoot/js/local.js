var Local=function(){
	var game;
	var doms={
			bdiv:document.getElementsByClassName('game')[0],
			sdiv:document.getElementsByClassName('next')[0]
	};
	var pre,now=0;
	var cat=function(){
		document.onkeyup=function(e){
			var sam=false;			
			pre=now;
			now=e.keyCode;
			if(pre!=now)
				{sam=true;}
			
			switch(e.keyCode){
			case 37:game.left(sam,now);
			break;
			case 38:game.up(sam,now);
			break;
			case 39:game.right(sam,now);
			break;
			case 40:game.down(sam,now);
			break;
			case 32:game.bot(sam,now);
			break;
			default:break;
			}
		}
		}//cat
	var timer=null;
	var Inte=1000;
	var Inter=function(){
		console.log(22);
		var str=prompt("please choose level 1 or 2 or 3","password");
		console.log(str);
		switch(str){
		case '1':Inte=700;
		break;
		case '2':Inte=500;
		break;
		case '3':Inte=300;
		break;
		default:
			confirm('system choose 1000 speed for you');
	    break;
		}
	};
	var tim=0;
	var times=document.getElementsByClassName('times')[0];
	var dist=document.getElementsByClassName('dist')[0];
	var start=function(){
		
		console.log('start');
		Inter();
		game=new Game();
		game.init(doms);
		cat();
		dist.onclick=function(){
			game.AddLines(1);
			dist.blur();//转移焦点 以免空格触发点击事件
		}
		timer=setInterval(ck,Inte);//idown后面不加括号
		function ck(){
			if(!game.over()){
				AddTime();
		if (game.idown())
			{
			game.cha();
			}
			}else{stop();}
		}//ck
	}

	var stop=function(){
		clearInterval(timer);
		document.onkeyup=null;
	}
	function AddTime(){
		tim+=Inte;
		times.innerHTML=(tim/1000).toFixed(2);
	}
	//output
	this.start=start;
}
