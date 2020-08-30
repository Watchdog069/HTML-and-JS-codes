// Default export is a4 paper, portrait, using millimeters for units
	const doc = new jsPDF();
	document.getElementById("print").onclick=function(){
		doc.setFontSize(30);
		doc.text("BILL",70,10);
		doc.setFontSize(15);
		doc.text("Item",10,20);
		doc.text("Quantity",70,20);
		doc.text("Price",90,20);
		doc.text("Net",110,20);
		doc.line(10,30,180, 30, 'S');
		var x=40;
		for(var i=0;i<count;i++){
			doc.text(document.getElementById("name"+i.toString()).innerHTML,10,x);
			doc.text(Math.abs(document.getElementById("num"+i.toString()).value).toString(),70,x);
			doc.text(document.getElementById("price"+i.toString()).innerHTML,90,x);
			doc.text( (Math.abs(document.getElementById("num"+i.toString()).value * parseInt(document.getElementById("price"+i.toString()).innerHTML) )).toString(),110,x);
			x+=20;
		}
		doc.line(10,x-10,180, x-10, 'S');
		doc.text("TOTAL:"+total.toString(),50,x)
		doc.text("THANK YOU FOR SHOPPING!",100, x+30);
		doc.save("Bill.pdf");
	} 