var Game=function(){
	
	var board=[[0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0],
	           [0,0,0,0,0,0,0,0,0,0]];

	var sdi=[];//二维div数组
	var bdi=[];
	var che=true;
	var fin=false;
	var score=0;
	var initB=function(cont,bdata,bdi){	
		for(var i=0;i<bdata.length;i++)
			{
			var bdivs=[];
			for(var j=0;j<bdata[0].length;j++)
				{
				var di=document.createElement('div');
                di.className='none';
				di.style.top=i*20+'px';
				di.style.left=j*20+'px';
				cont.appendChild(di);
				bdivs.push(di);				
				}//inner for
			bdi.push(bdivs);
			}//out for
	}//initB
	var refb=function(bdata,bdi){	
			for(var i=0;i<bdata.length;i++)
				{
				var bdivs=[];
				for(var j=0;j<bdata[0].length;j++)
					{
					var di=bdi[i][j];
					switch(bdata[i][j]){
					case 0:di.className='none';
					break;
					case 1:di.className='sit';
					break;
					case 2:di.className='cur';
					break;
					default:
					break;}
					}//inner for
				}//out for		
	}
	
	var clrdata=function(matb,mats,sam,now)
	{
		var mat=[];//在路径转向的时候把非零坐标点push进来
		var com=[];//每次进来都把非零点坐标push进来，最后清除
		for(var i=0;i<mats.data.length;i++)
		{for(var j=0;j<mats.data[0].length;j++)
			{if(mats.data[i][j]!=0){
			com.push([i+mats.origin.x,j+mats.origin.y]);}
			}}
		for(var i=0;i<mats.data.length;i++)
		{for(var j=0;j<mats.data[0].length;j++)
			{if(mats.data[i][j]!=0){//not 0
			if(((i+mats.origin.x+1)==matb.length&&now==40)||((j+mats.origin.y+1)==matb[0].length&&now==39)||((i+mats.origin.x)==0&&now==38)||((j+mats.origin.y)==0&&now==37) ||(matb[i+mats.origin.x+1][j+mats.origin.y]==1&&now==40)||(matb[i+mats.origin.x][j+mats.origin.y+1]==1&&now==39)||(matb[i+mats.origin.x][j+mats.origin.y-1]==1&&now==37))
				{ 				
				che=false;
				for(var i=0;i<mats.data.length;i++)
				{for(var j=0;j<mats.data[0].length;j++)
					{if(mats.data[i][j]!=0){
					mat.push([i+mats.origin.x,j+mats.origin.y]);}
					}}				
				}}//not 0
			}
		}
		if(!che&&sam&&!fin)//如果没到终点 变换方向就能解锁 如果到了终点 就不能解锁
		{che=true;
		for(var k=0;k<mat.length;k++){
			matb[mat[k][0]][mat[k][1]]=0;}
		}
		if(che){
			for(var k=0;k<com.length;k++){
				matb[com[k][0]][com[k][1]]=0;}
		}
    }//clrdata
	var iclrdata=function(matb,mats)
	{
		var com=[];//每次进来都把非零点坐标push进来，最后清除
		for(var i=0;i<mats.data.length;i++)
		{for(var j=0;j<mats.data[0].length;j++)
			{if(mats.data[i][j]!=0){
			com.push([i+mats.origin.x,j+mats.origin.y]);}
			}}
		for(var i=0;i<mats.data.length;i++)
		{for(var j=0;j<mats.data[0].length;j++)
			{if(mats.data[i][j]!=0){//not 0
			if(((i+mats.origin.x+1)==matb.length)||(matb[i+mats.origin.x+1][j+mats.origin.y]==1))
				{ 				
				che=false;	
				fin=true;
				}}//not 0
			}
		}
		if(che){
			for(var k=0;k<com.length;k++){
				matb[com[k][0]][com[k][1]]=0;}
		}
    }//iclrdata
	var setdata=function(matb,mats)
	{
		if(che){
		for(var i=0;i<mats.data.length;i++)
			{
			for(var j=0;j<mats.data[0].length;j++)
				{
				if(mats.data[i][j]){
				matb[i+mats.origin.x][j+mats.origin.y]=mats.data[i][j];
				if((mats.origin.x+i+1)==matb.length&&matb[i+mats.origin.x][j+mats.origin.y]==2)
					{fin=true;
					che=false;}
				}
				}
			}//for
		}//che
		if(fin)
			{
			for(var i=0;i<mats.data.length;i++)
			{
			for(var j=0;j<mats.data[0].length;j++)
				{
				if(mats.data[i][j]){
				if(matb[i+mats.origin.x][j+mats.origin.y]==2)					
					matb[i+mats.origin.x][j+mats.origin.y]=1;					
				}
			  }//for2
			}//for1
			//---del---------------------
				var row=[];			
				for(var i=0;i<matb.length;i++)
				{var k=0;
				for(var j=0;j<matb[0].length;j++)
					{
					if(matb[i][j]==1)
						{
						k++;
						}
					}//for1
				if(k==matb[i].length)
					{
					row.push(i);//console.log(i+'is ni');
					}
				}//for2
				for(var t=row.length-1;t>-1;t--)
					{
					for(var t1=matb.length-1;t1>0;t1--)
					{
						if(t1==row[t]){
							score+=10;
						for(var tk=t1;tk>0;tk--)
						{
					for(var t2=0;t2<matb[0].length;t2++)
						{matb[tk][t2]=matb[tk-1][t2];}//for1						
						}//console.log((tk)+'is killed by'+(tk-1));
						for(var m=row.length-1;m>-1;m--)
						{row[m]+=1;
						if(row[m]==t1){score+=20;}
						}
						}//t1 is in
					}//for inner
					AddScore();
					}// for outer
			//---del---------------------
			}//if fin
		}//setdata	
	function AddScore(){
		var sc=document.getElementsByClassName('scores')[0];
		sc.innerHTML=score;
	}
	//------------给对方增加干扰 参数为行数-------------------
	var AddLines=function(l){
		for(var i=0;i<board.length-l;i++){		
			for(var c=0;c<board[0].length;c++){
				board[i][c]=board[i+1][c];//此处不要整行赋值
			}
		}
		for(var j=board.length-l;j<board.length;j++){		
			for(var k=0;k<board[0].length;k++){
				board[j][k]=Math.ceil(Math.random()*2)-1;
			}		
		}
		if(cur.origin.x>l){
			cur.origin.x-=l;
			}else{
			cur.origin.x=0;
			}
		setdata(board,cur);
		refb(board,bdi);
	}
	//------------给对方增加干扰 参数为行数-------------------
	var over=function(){
		//----game over------
		for(var j=0;j<board[0].length;j++)
			{
			if(board[4][j]==1)					
				{che=false;
				confirm('game over');
				return true;
			}
		  }//for
		return false;
		//----game over------
	}
	var cur,next;
	var up=function(sam,now){	
		clrdata(board,cur,sam,now);
		if(che){
		cur.origin.x-=1;}
		setdata(board,cur);
		refb(board,bdi);
	}
	var down=function(sam,now){
		clrdata(board,cur,sam,now);
		if(che){
		cur.origin.x+=1;}
		setdata(board,cur);
		refb(board,bdi);
	}
	var idown=function(){
		iclrdata(board,cur);
		if(che){
		cur.origin.x+=1;}
		setdata(board,cur);
		refb(board,bdi);
		return fin;
	}	
	var left=function(sam,now){
		clrdata(board,cur,sam,now);
		if(che){
		cur.origin.y-=1;}
		setdata(board,cur);
		refb(board,bdi);
	}
	var right=function(sam,now){
		clrdata(board,cur,sam,now);
		if(che){
		cur.origin.y+=1;}
		setdata(board,cur);
		refb(board,bdi);
	}
	var bot=function(sam,now){
		if(cur.canrot()){
		clrdata(board,cur,sam,now);	
		cur.rot();
		setdata(board,cur);
		refb(board,bdi);
		}//can rotate
	}
	var cha=function(){
		var nu3=Math.ceil(Math.random()*7)-1;
		var fact=new Factory();
		cur=next;
		next=fact.make(nu3);
		cur.origin.x=4;
		cur.origin.y=4;
		fin=false;
		che=true;
		setdata(board,cur);
		refb(board,bdi);
		refb(next.data,sdi);
	}
    var init=function(doms){
		var nu1=Math.ceil(Math.random()*7)-1;
		var nu2=Math.ceil(Math.random()*7)-1;
		var fact=new Factory();
		cur=fact.make(nu1);
		next=fact.make(nu2);
		initB(doms.bdiv,board,bdi);
		initB(doms.sdiv,next.data,sdi);
		cur.origin.x=4;
		cur.origin.y=4;
		setdata(board,cur);
		refb(board,bdi);
		refb(next.data,sdi);		
	}
	//output
	this.init=init;
	this.up=up;
	this.down=down;
	this.idown=idown;
	this.right=right;
	this.left=left;
	this.bot=bot;
	this.che=che;
	this.cha=cha;
	this.fin=fin;
	this.over=over;
	this.AddLines=AddLines;

}