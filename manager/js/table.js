
//设置查询按钮
var btnselect = document.getElementById("selectinfo");
var select = document.getElementById("select");
btnselect.onclick=function(){
	if(add.style.display == "block"){
		alert("请先关闭增加窗口");
	}else{
		select.style.display="block";
		show();
	}
	
}
//设置表格奇偶行不同颜色
var tab=document.getElementById("cj");
function strShow(){
	var len=tab.rows.length;
	for(var i=0;i<len;i++){
		if(i%2){
			tab.rows[i].style.backgroundColor="#ffd9a2";
		}else{
			tab.rows[i].style.backgroundColor="#ffecd0";
		}
	}
}
strShow();
//删除指定行
function del(span){
	var i=span.parentNode.parentNode.rowIndex;
	var cj=document.getElementById('cj')
	cj.deleteRow(i);
	strShow();
}

//获取节点
var btqd=document.getElementById("qd");
var add=document.getElementById("add");
var btnadd=document.getElementById("addinfo");
//设置确定的点击事件
btqd.onclick=function(){
	insRow();
	add.style.display="none";
}
//设置添加的点击事件
btnadd.onclick=function(){
	if(select.style.display == "block"){
		alert("请先关闭查询窗口");
	}else{
		add.style.display="block";
		show();
	}
}
//设置添加页面的❌的点击事件
var aclose=document.getElementById("close1");
aclose.onclick=function(){
	add.style.display="none";
}
var sclose=document.getElementById("close2")
sclose.onclick=function(){
	select.style.display="none";
}
//查询行
var selectbtn=document.getElementById("selectbtn");
var selectForm=document.getElementById("selectform");
//获取每一行第一列的数据
var arr=[];
for(var i=1;i<tab.rows.length;i++){
		var ck=tab.rows[i].cells[1].innerHTML;
		arr.push(ck);
}
selectbtn.onclick=function(){
	strShow();
	var selectdata=selectform.selectId.value;
	for(var i=0;i<arr.length;i++){
		if(selectdata == arr[i] ){
			tab.rows[i+1].style.backgroundColor="#fc4e32";
			select.style.display="none";
			break;
		}
		else if(i==arr.length-1){
			alert("对不起，暂无此用户！，请添加！");
		}
	}
}
//添加行
var addForm=document.getElementsByName("addform");
function insRow(){
	var objtbody=tab.tBodies[0];
	//获取表格行数
	var rownum=objtbody.rows.length;
	//获取表格最后一行第一列的值
	var myElement=tab.getElementsByTagName("tr")[rownum].getElementsByTagName("td")[0];
	//将编号转为数字
	var x=Number(myElement.innerHTML);
	
	rs=tab.insertRow(tab.rows.length);
	var c0=rs.insertCell(0);
	var c1=rs.insertCell(1);
	var c2=rs.insertCell(2);
	var c3=rs.insertCell(3);
	c0.innerHTML=x+1;
	c1.innerHTML=addform.acc.value;
	c2.innerHTML=addform.pwd.value;
	c3.innerHTML='<span onclick="del(this)">删除</span>';
	strShow();
}
//居中显示
function show(){
	var w=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
	var h=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
	var top=(h-300)/2;
	var left=(h+500)/2;
	add.style.top=top+'px';
	add.style.left=left+'px';
	select.style.top=top+'px';
	select.style.left=left+'px';
}
window.onresize=function(){
	show();
};
