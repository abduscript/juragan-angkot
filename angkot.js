let penumpang = [];
let tambahPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length === 0) {
        penumpang.push(namaPenumpang);
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] === undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if (penumpang[i] === namaPenumpang) {
                alert(namaPenumpang + ' sudah ada di dalam mobil');
                return penumpang;
            } else if (i === penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
    return penumpang;
}

let hapusPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length === 0) {
        alert('Mobilnya masih kosong');
        return penumpang;
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] === namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } else if (i === penumpang.length - 1) {
                alert(namaPenumpang + ' tidak ada di dalam mobil');
                return penumpang;
            }
        }
    }
    return penumpang;
}

// Update tampilan penumpang di HTML
function updatePenumpangList() {
    const listElement = document.getElementById('penumpangList');
    listElement.innerHTML = ''; // Clear current list
    for (let i = 0; i < penumpang.length; i++) {
        if (penumpang[i] !== undefined) {
            const listItem = document.createElement('li');
            listItem.textContent = penumpang[i];
            listElement.appendChild(listItem);
        }
    }
}

// Fungsi untuk menambah penumpang
function tambah() {
    const namaPenumpang = document.getElementById('penumpangName').value;
    if (namaPenumpang) {
        tambahPenumpang(namaPenumpang, penumpang);
        updatePenumpangList();
        document.getElementById('penumpangName').value = ''; // Clear input field
        document.getElementById('currentJumlahPenumpang').innerHTML = penumpang.length;
    } else {
        alert('Nama penumpang tidak boleh kosong');
    }
}

// Fungsi untuk menghapus penumpang
function hapus() {
    const namaPenumpang = document.getElementById('penumpangName').value;
    if (namaPenumpang) {
        hapusPenumpang(namaPenumpang, penumpang);
        updatePenumpangList();
        document.getElementById('currentJumlahPenumpang').innerHTML = penumpang.length - 1;
        document.getElementById('penumpangName').value = ''; // Clear input field
    } else {
        alert('Nama penumpang tidak boleh kosong');
    }
}