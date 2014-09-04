(function(){
	var n,random;
	var star=Base.getclass("star")[0];
	var go=Base.getclass("go")[0];
	var result=Base.getid("result");
	var input=Base.getclass("input");
	var check=Base.getclass("check")[0];
	var inform=Base.getname("span")[0];
	var arrayhtml=[];

	var gameApp={
		init:function(){
			Base.addEvent(star,"click",this.judging);
			this.Keyup();
			Base.addEvent(go,"click",this.matchdata);
		},
		Keyup:function(){
			for(var i=0;i<4;i++){
				Base.addEvent(input[i],"keyup",this.legal);
			}
		},
		unlock:function(){
			Base.css(Base.getclass("lock")[0],"zIndex","-1");
		},
		judging:function(){
			n=0;
			random=[];
			result.innerHTML="";
			star.innerHTML="重新开始";
			gameApp.unlock();
		 	if(check.checked==true){
		 		gameApp.createonlyrandom();
		 	}else{
		 		gameApp.createrandom();
		 	}
		 },
		createrandom:function(){
			for(var i=0;i<4;i++){
				random.push(Math.floor(Math.random()*10));			
			}
/*alert(random);*/
		},
		createonlyrandom:function(){
			var index=0;
			while(index<4){
				var R = Math.floor(Math.random()*10).toString();
				if (random.indexOf(R)==-1) {
					index++;
					random.push(R);
				}
			}
/*alert(random);*/
		},
		matchdata:function(){
			if(inform.style.display=="block"){return;}
			var random_flag=Array(4);
			random_flag.join(false);
			var Input_flag=Array(4);
			Input_flag.join(false);
			var countA=0,countB=0;
			var number='';
			for(var i=0;i<input.length;i++){
				if(input[i].value==random[i]){
					random_flag[i]=true;
					Input_flag[i]=true;
					countA++;
				}
				number+=input[i].value;
				input[i].value='';
			}
			number=Base.trim(number);
			for(var i=0;i<random.length;i++){
				if(random_flag[i]==true){continue;}
				for(var j=0;j<number.length;j++){
					if(Input_flag[j]==true){continue;}
					else if(number[j]==random[i]){
						random_flag[i]=true;
						Input_flag[j]=true;
						countB++;
						break;
					}
				}
			}
			gameApp.outresult(number,countA,countB);
		},
		empty:function(){
			for(var i=0;i<4;i++){
				if(input[i].value==""){
					var x=Base.distance(input[i]).x+"px";
					Base.css(inform,"left",x);
					Base.show(inform);
					return true;
				}
			}
			return false;
		},
		outresult:function(num,A,B){
			var html=
			'       <font>第'+(++n)+'次结果</font>'+
			'		<font>'+num+'</font>'+
			'		<font>'+A+'A'+B+'B' +'</font>';
			arrayhtml.push(html);
			result.innerHTML=arrayhtml.reverse().join("");
			gameApp.Congratulations(A);
		},
		Congratulations:function(A){
			if(A==4){
				alert("你成功了！！！！");
				location.reload();
			}
		},
		legal:function(element){
			var pattern=/\d/g;
			if(pattern.test(this.value)){
				Base.hide(inform);
			}else if(inform.style.display=="block"){return;}
			else{
				var x=Base.distance(this).x+"px";
				Base.css(inform,"left",x);
				Base.show(inform);
			}
		},
	}
	gameApp.init();
})()