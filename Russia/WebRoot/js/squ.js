 var Square0=function(){
	 this.data=[[0,2,0,0],
	            [0,2,0,0],
	            [0,2,0,0],
	            [0,2,0,0]
	            ];
	 this.origin={
			 x:0,
	         y:0
	 };
	 this.dir=0;
    
	 this.rotate=[[[0,0,0,0],
		           [2,2,2,2],
		           [0,0,0,0],
		           [0,0,0,0]
		          ],
		          [[0,2,0,0],
			       [0,2,0,0],
			       [0,2,0,0],
			       [0,2,0,0]
			      ],
			      [[0,0,0,0],
				   [2,2,2,2],
				   [0,0,0,0],
				   [0,0,0,0]
				  ],
				  [[0,2,0,0],
				   [0,2,0,0],
				   [0,2,0,0],
				   [0,2,0,0]
				 ]];
 }//S0
 Square0.prototype.rot=function(){//旋转方向
	 var row=this.data.length;
	 var col=this.data[0].length;
	 this.dir+=1;
	 if(this.dir==4){this.dir=0;}
	 for(var i=0;i<row;i++)
		 {
		 for(var j=0;j<col;j++)
			 {
			 this.data[i][j]=this.rotate[this.dir][i][j];
			 }
		 }//for
 }//旋转方向
 Square0.prototype.canrot=function(){//旋转之后仍然在游戏界面
	 var row=this.data.length;
	 var col=this.data[0].length;
	 var mats=[];
	 
	 this.dir+=1;
	 if(this.dir==4){this.dir=0;}
	 for(var i=0;i<row;i++)
	 {
		 var mat=[];
	 for(var j=0;j<col;j++)
		 {
		 mat.push(this.rotate[this.dir][i][j]);
		 }//for inner
	 mats.push(mat);
	 }//for outer
		for(var i=0;i<this.data.length;i++)
		{
		for(var j=0;j<this.data[0].length;j++)
			{
			if((this.origin.y+j)<0||(this.origin.y+j+1)>10){ this.dir-=1;return false;}
			}
		}//for
		this.dir-=1;
		return true;
 }//旋转之后仍然在游戏界面
 var Square1=function(){
	 Square0.call(this);
	 this.data=[[0,2,2,0],
	            [0,2,2,0],
	            [0,0,0,0],
	            [0,0,0,0]
	            ];
	 this.origin={
			 x:0,
	         y:0
	 };
	 this.dir=0;
	 //this.rot=Square0.rot;
	 this.rotate=[[[0,2,2,0],
		           [0,2,2,0],
		           [0,0,0,0],
		           [0,0,0,0]
		          ],
		          [[0,2,2,0],
			       [0,2,2,0],
			       [0,0,0,0],
			       [0,0,0,0]
			      ],
			      [[0,2,2,0],
				   [0,2,2,0],
				   [0,0,0,0],
				   [0,0,0,0]
				  ],
				  [[0,2,2,0],
				   [0,2,2,0],
				   [0,0,0,0],
				   [0,0,0,0]
				 ]];
     
 }
 Square1.prototype=Square0.prototype;
 var Square2=function(){
	 Square0.call(this);
	 this.data=[[2,2,0,0],
	            [0,2,2,0],
	            [0,0,0,0],
	            [0,0,0,0]
	            ];
	 this.origin={
			 x:0,
	         y:0
	 };
	 this.dir=0;
	 //this.rot=Square0.rot;
	 this.rotate=[[[2,2,0,0],
		           [0,2,2,0],
		           [0,0,0,0],
		           [0,0,0,0]
		          ],
		          [[0,0,2,0],
			       [0,2,2,0],
			       [0,2,0,0],
			       [0,0,0,0]
			      ],
			      [[2,2,0,0],
		           [0,2,2,0],
		           [0,0,0,0],
		           [0,0,0,0]
		          ],
		          [[0,0,2,0],
			       [0,2,2,0],
			       [0,2,0,0],
			       [0,0,0,0]
				 ]];
    
 }
 Square2.prototype=Square0.prototype;
 var Square3=function(){
	 Square0.call(this);
	 this.data=[[0,2,2,0],
	            [0,2,0,0],
	            [0,2,0,0],
	            [0,0,0,0]
	            ];
	 this.origin={
			 x:0,
	         y:0
	 };
	 this.dir=0;
	 //this.rot=Square0.rot;
	 this.rotate=[[[0,2,2,0],
		           [0,2,0,0],
		           [0,2,0,0],
		           [0,0,0,0]
		          ],
		          [[0,0,0,0],
			       [2,2,2,0],
			       [0,0,2,0],
			       [0,0,0,0]
			      ],
			      [[0,2,0,0],
		           [0,2,0,0],
		           [2,2,0,0],
		           [0,0,0,0]
		          ],
		          [[2,0,0,0],
			       [2,2,2,0],
			       [0,0,0,0],
			       [0,0,0,0]
				 ]];
    
 }
 Square3.prototype=Square0.prototype;
 var Square4=function(){
	 Square0.call(this);
	 this.data=[[2,2,0,0],
	            [0,2,0,0],
	            [0,2,0,0],
	            [0,0,0,0]
	            ];
	 this.origin={
			 x:0,
	         y:0
	 };
	 this.dir=0;
	 //this.rot=Square0.rot;
	 this.rotate=[[[2,2,0,0],
		           [0,2,0,0],
		           [0,2,0,0],
		           [0,0,0,0]
		          ],
		          [[0,0,2,0],
			       [2,2,2,0],
			       [0,0,0,0],
			       [0,0,0,0]
			      ],
			      [[0,2,0,0],
		           [0,2,0,0],
		           [0,2,2,0],
		           [0,0,0,0]
		          ],
		          [[0,0,0,0],
			       [2,2,2,0],
			       [2,0,0,0],
			       [0,0,0,0]
				 ]];
    
 }
 Square4.prototype=Square0.prototype;
 var Square5=function(){
	 Square0.call(this);
	 this.data=[[0,2,2,0],
	            [2,2,0,0],
	            [0,0,0,0],
	            [0,0,0,0]
	            ];
	 this.origin={
			 x:0,
	         y:0
	 };
	 this.dir=0;
	 //this.rot=Square0.rot;
	 this.rotate=[[[0,2,2,0],
		           [2,2,0,0],
		           [0,0,0,0],
		           [0,0,0,0]
		          ],
		          [[0,2,0,0],
			       [0,2,2,0],
			       [0,0,2,0],
			       [0,0,0,0]
			      ],
			      [[0,2,2,0],
		           [2,2,0,0],
		           [0,0,0,0],
		           [0,0,0,0]
		          ],
		          [[0,2,0,0],
			       [0,2,2,0],
			       [0,0,2,0],
			       [0,0,0,0]
				 ]];
    
 }
 Square5.prototype=Square0.prototype;
 var Square6=function(){
	 Square0.call(this);
	 this.data=[[2,2,2,0],
	            [0,2,0,0],
	            [0,0,0,0],
	            [0,0,0,0]
	            ];
	 this.origin={
			 x:0,
	         y:0
	 };
	 this.dir=0;
	 //this.rot=Square0.rot;
	 this.rotate=[
		          [[0,2,0,0],
			       [2,2,2,0],
			       [0,0,0,0],
			       [0,0,0,0]
			      ],
			      [[0,2,0,0],
		           [2,2,0,0],
		           [0,2,0,0],
		           [0,0,0,0]
		          ],
		          [[0,0,0,0],
			       [2,2,2,0],
			       [0,2,0,0],
			       [0,0,0,0]
				 ],
				  [[0,2,0,0],
		           [0,2,2,0],
		           [0,2,0,0],
		           [0,0,0,0]
		          ]];
     
 }
 Square6.prototype=Square0.prototype;
 var Factory=function(){
	 var sq;
	 this.make=function(ind)
	 {		 
		 switch(ind)
		 {
		 case(0):sq=new Square0();
		 break;
		 case(1):sq=new Square1();
		 break;
		 case(2):sq=new Square2();
		 break;
		 case(3):sq=new Square3();
		 break;
		 case(4):sq=new Square4();
		 break;
		 case(5):sq=new Square5();
		 break;
		 case(6):sq=new Square6();
		 break;
		 default:break;
		 }

		 return sq;
	 }
	 //sq.rot=Square0.rot;
	 var dir;

 }