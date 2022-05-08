var nomor = 1;
var caption = document.getElementById('caption');
var text = ['', 'Footer Growthbar', 'Todo App Design in Pinterest', 'Todo App Design in Medium', 
'Todo App Design in Collect UI', 'Todo JS'];

function change(angka){
	nomor = angka;
	ganti_gambar(angka);
}

function prev(){
	nomor--;
	if(nomor < 1) nomor = 5;
	ganti_gambar(nomor);
}

function next(){
	nomor++;
	if(nomor > 5) nomor = 1;
	ganti_gambar(nomor);
}

function ganti_gambar(angka){
	var lokasi = 'assets/img/gambar-' + angka + '.png';
	document.getElementById('gambar').src = lokasi;
	caption.innerHTML = text[nomor];
	return false;
}