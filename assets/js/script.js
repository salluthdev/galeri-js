function change(angka){
	var lokasi = 'assets/img/gambar-' + angka + '.png';
	document.getElementById('gambar').src = lokasi;
	return false;
}