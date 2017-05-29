function PDFgen() {
	navigator.notification.alert('Creation PDF');
	pdf.htmlToPDF({
	        data: "<html> <h1>  Hello World  </h1> </html>",
	    documentSize: "A4",
	    landscape: "portrait",
	    type: "share" //use share to open the open-with-menu.
	}, this.success, this.failure);
}
