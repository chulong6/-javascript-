window.onload = function() {
	var submits = document.getElementById("submit");
	var count = 0;
	var sum = 0;
	//增加
	submits.onclick = function() {
		var user = document.getElementById("user").value;
		var score = Number(document.getElementById("score").value);
		add(user,score);
		sum += score;
		count = sum;
		document.getElementById('all').innerHTML=sum;
	}
	document.getElementById('reset').onclick=function(){
		resets();
	};
	function add(user,score){
		var tr =document.createElement("tr");
		var td1 =document.createElement("td");
		var td2 =document.createElement("td");
		var td3 =document.createElement("td");
		
		td1.innerHTML=user;
		td2.innerHTML=score;
		var input2=document.createElement("input");
		input2.setAttribute('type','button');
		input2.setAttribute('value','删除');
		input2.setAttribute('onclick','del(this)');
		td3.appendChild(input2);
		
		var input1=document.createElement("input");
		input1.setAttribute('type','button');
		input1.setAttribute('name','update');
		input1.setAttribute('value','修改');
		input1.setAttribute('onclick','modify(this)');
		td3.appendChild(input1);
		
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		var table=document.getElementById('listTable');
		table.appendChild(tr);
		resets();
	}
	//删除
	del=function(obj){
		var tr = obj.parentNode.parentNode;
		var td = tr.getElementsByTagName('td');
		rowIndex=obj.parentNode.parentNode.rowIndex;
		var score=td[1].innerHTML;
		count -= score;
		document.getElementById('all').innerText=count;
		count = count;
		var parentTr=obj.parentNode.parentNode;
		var parentTable = parentTr.parentNode;
		parentTable.removeChild(parentTr);
		
	}
	var	rowIndex;
	modify=function(obj){
		//重置
		resets();
		//获取
		var user = document.getElementById('user');
		var score = document.getElementById('score');
		
		var tr = obj.parentNode.parentNode;
		var td = tr.getElementsByTagName('td');
		rowIndex=obj.parentNode.parentNode.rowIndex;
		//赋值
		user.value=td[0].innerHTML;
		score.value=td[1].innerHTML;
		var addButton=document.getElementById('submit');
		try{
			if(addButton.getAttribute("value")=="提交"){
				addButton.setAttribute('value','更新');
				addButton.setAttribute('id','update');
				addButton.setAttribute('onclick','update()');
			}
			count -= score.value;
			alert(count);
			document.getElementById('all').innerText=count;
		}catch(e){
		}
	}
	
	update=function(){
		var table=document.getElementById('listTable');
		var user = document.getElementById('user').value;
		var score = Number(document.getElementById('score').value);
		count += score;
		document.getElementById('all').innerText=count;
		
		table.rows[rowIndex].cells[0].innerHTML=user;
		table.rows[rowIndex].cells[1].innerHTML=score;
		
		var updateButton=document.getElementById('update');
		updateButton.setAttribute('value','提交');
		updateButton.setAttribute('type','button');
		updateButton.setAttribute('id','submit');
		resets();
	}
	
	//重置
function resets(){
	var inputs=document.getElementsByTagName("input");
	for(var i=0;i<inputs.length;i++){
		if(inputs[i].type=='text'){
			inputs[i].value="";
		}
	}	
}
	
}
