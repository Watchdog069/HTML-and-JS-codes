 "use strict";
 $(window).on('load',function(){
        $('#user').modal('show');
    });

document.getElementById("userinfo").onclick=function(){
	if(document.getElementById("Name").value=="" || document.getElementById("email").value=="")
		alert("Please fill out details to continue");
	else{
 		document.getElementById("info").innerHTML="Welcome <b>"+document.getElementById("Name").value+"</b> , please choose various items of your need, then press cart for checkout.";
		let v= document.getElementById("userinfo");
		v.setAttribute("data-dismiss", "modal");
	}
 }

var products=8,item=0,total=0,str="",count=0,flag=0;
var arr=new Array (products);
var itemlist=new Array ("Banana","Potato","Rice Bran Oil","Lux","Tea","AA-Battery","Rice","Dermi Cool");
var itemPrice=new Array(5,30,120,30,50,15,45,100);
for(var i=0;i<arr.length;i++)
	arr[i]=0;

document.getElementById("total").innerHTML=0;

function add(){
	item++;
	document.getElementById("cart").innerHTML=item;
	document.getElementById("cart1").innerHTML=item;
}

//https://www.geeksforgeeks.org/how-to-get-the-id-of-the-clicked-button-using-javascript-jquery/
function addItem(clicked){
	if(arr[parseInt(clicked)]==0){
		arr[parseInt(clicked)]=1;
		add();
		addBlock(itemlist[parseInt(clicked)],itemPrice[parseInt(clicked)]);
	}
	else
		alert("Product already added");
}

document.getElementById("reset").onclick=function(){
	item=0;
	count=0;
	document.getElementById("cart").innerHTML="";
	document.getElementById("cart1").innerHTML="";
	document.getElementById("total").innerHTML=0;
	str="";
	total=0;
	flag=0;
	document.getElementById("generate").disabled=true;
	document.getElementById("print").disabled=true;
	document.getElementById("showitems").disabled=false;
	document.getElementById("file").innerHTML=str;
	for(var i=0;i<arr.length;i++)
		arr[i]=0;
}


document.getElementById("cross").onclick=function(){
	item=0;
	count=0;
	document.getElementById("cart").innerHTML="";
	document.getElementById("cart1").innerHTML="";
	document.getElementById("total").innerHTML=0;
	str="";
	total=0;
	flag=0;
	document.getElementById("generate").disabled=true;
	document.getElementById("print").disabled=true;
	document.getElementById("showitems").disabled=false;
	document.getElementById("file").innerHTML=str;
	for(var i=0;i<arr.length;i++)
		arr[i]=0;
}

function addBlock(itemName,itemPrice){
	str+="<table  style='width:100%;'  class='table'>";
	str+="<tr>";
	str+="<td scope='col'><b id='name"+count.toString()+"'>"+itemName+"</b></td>";
	str+="<td scope='col'><b id='price"+count.toString()+"'>"+itemPrice+"</b></td>";
	str+="<div class='col-xs-2'>";
	str+="<td scope='col'><input class='form-control' type='number' id='num"+count.toString()+"'></td>";
	str+="</div>";
	str+="<td scope='col'><b id='net"+count.toString()+"'></b></td>";
	str+="</tr>";
	str+="</table>";
	count++;
}

document.getElementById("showitems").onclick=function(){
	if(item!=0){
		document.getElementById("file").innerHTML=str;
		document.getElementById("showitems").disabled=true;
		document.getElementById("generate").disabled=false;
		document.getElementById("print").disabled=true;
		alert("Enter Quantities of each then press 'Generate', then Press 'Print' to generate PDF");
	}
	else
		alert("No items added to cart, exit window and choose items");

}


document.getElementById("generate").onclick=function(){
	if (flag==0){
		for(var i=0;i<count;i++){
			document.getElementById("net"+i.toString()).innerHTML = Math.abs(document.getElementById("num"+i.toString()).value) * parseInt(document.getElementById("price"+i.toString()).innerHTML);
			total+=parseInt(document.getElementById("net"+i.toString()).innerHTML);
		}
		document.getElementById("total").innerHTML=total;
		flag=1;
		document.getElementById("print").disabled=false;
		document.getElementById("pay").innerHTML="<button id='payment' class='btn btn-primary'><i class='fa fa-money'></i> Make Payment</button>";
	}
	else
		alert("Bill already generated, if you want to reset, exit this window");	
}	



window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
var myVar;

function myFunc() {
  myVar = setTimeout(showPage, 2000);
  document.getElementById("show").innerHTML="Loading!!!";
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  var obj = document.getElementById("show");
  obj.remove();
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


/*	//https://www.abeautifulsite.net/adding-and-removing-elements-on-the-fly-using-javascript
function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML=html;
    p.appendChild(newElement);
}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}
*/