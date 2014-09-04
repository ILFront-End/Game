window.Base={ 

	getid:function(str){
		return document.getElementById(str);
	},

	getname:function(str){
		return document.getElementsByTagName(str);
	},

	getclass:function(str){
		var all=document.getElementsByTagName("*");
		var elements=[];
		for(var i=0;i<all.length;i++)
		{
			var childclass=all[i].className.split(' ');
			for(var j=0;j<childclass.length;j++)
			{
				if(childclass[j]==str){
					elements.push(all[i]);
					break;
				}
			}
		}
		return elements;
	},

	addEvent:function(element,type,fn){
		if(element.addEventListener){
			element.addEventListener(type,fn,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,fn);
		}else{
			element["on"+type]=fn;
		}
	},

	trim:function(str){
		 return str.replace(/(^\s*)|(\s*$)/g,"");
	},

	css:function(element,attr,value){
		element.style[attr]=value;
	},

	
	hide:function(element){
			element.style.display="none";
	},

	show:function(element){
		element.style.display="block";
	},

	distance:function(element){
	 	    var x = element.offsetLeft;
		    var y = element.offsetTop;
		    return {'x': x, 'y': y};
	 }
}
