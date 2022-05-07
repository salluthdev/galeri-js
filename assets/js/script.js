var nomor = 1;

function change(angka){
	nomor = angka;
	var lokasi = 'assets/img/gambar-' + angka + '.png';
	document.getElementById('gambar').src = lokasi;
	return false;
}

function prev(){
	nomor = nomor - 1;

	if(nomor < 1){
		nomor = 5;
	}

	var lokasi = 'assets/img/gambar-' + nomor + '.png';
	document.getElementById('gambar').src = lokasi;
	return false;
}

function next(){
	nomor = nomor + 1;

	if(nomor > 5){
		nomor = 1;
	}

	var lokasi = 'assets/img/gambar-' + nomor + '.png';
	document.getElementById('gambar').src = lokasi;
	return false;
}