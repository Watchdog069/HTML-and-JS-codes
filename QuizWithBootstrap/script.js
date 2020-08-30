// Default export is a4 paper, portrait, using millimeters for units
	const doc = new jsPDF();
	document.getElementById("showans").onclick=function(){
		doc.setFontSize(20);
		var str="Dear "+reportName+" ,you scored "+score.toString()+" marks.";
		doc.text("Report with Correct Answers", 70, 10);
		doc.text(str, 10, 30);
		doc.text("CORRECT ANSWERS", 70, 50);
		doc.text("1. 0.805mV", 10, 70);
		doc.text("2. Servo Motor", 10, 80);
		doc.text("3. 4,1", 10, 90);
		doc.text("4. ADXL335", 10, 100);
		doc.text("5. Universal asynchronous receiver-transmitter", 10, 110);
		doc.text("6. DHT11", 10, 120);
		doc.text("7. To protect against inductive spikings", 10, 130);
		doc.text("8. Flash Memory", 10, 140);
		doc.text("9. MCT12E", 10, 150);
		doc.text("10. i80386", 10, 160);
		doc.text("THANK YOU!", 70, 180);
		doc.save("Report.pdf");
	}