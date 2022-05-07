var nomor = 1;
var caption = document.getElementById('caption');
var text = ['', 'Footer Growthbar', 'Todo App Design in Pinterest', 'Todo App Design in Medium', 
'Todo App Design in Collect UI', 'Todo JS'];

function change(angka){
	nomor = angka;
	var lokasi = 'assets/img/gambar-' + angka + '.png';
	document.getElementById('gambar').src = lokasi;
	caption.innerHTML = text[angka];
	return false;
}

function prev(){
	nomor = nomor - 1;

	if(nomor < 1){
		nomor = 5;
	}

	var lokasi = 'assets/img/gambar-' + nomor + '.png';
	document.getElementById('gambar').src = lokasi;
	caption.innerHTML = text[nomor];
	return false;
}

function next(){
	nomor = nomor + 1;

	if(nomor > 5){
		nomor = 1;
	}

	var lokasi = 'assets/img/gambar-' + nomor + '.png';
	document.getElementById('gambar').src = lokasi;
	caption.innerHTML = text[nomor];
	return false;
}