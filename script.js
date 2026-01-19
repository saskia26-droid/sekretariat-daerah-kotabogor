document.addEventListener("DOMContentLoaded", function() {

    // --- BAGIAN 1: DATA KARYAWAN (MANUAL) ---
    const dataASN = [
        { nama: "Marrisa, S.STP, M.M", jabatan: "Kepala Bagian Protokol dan Komunikasi Pimpinan", status: "ASN" },
        { nama: "Ryan Maulana Yusuf, S.STP., M.M", jabatan: "Kepala Sub Bagian Protokol", status: "ASN" },
        { nama: "Agyusari Pratiwi, S.STP., M.Si", jabatan: "Pranata Hubungan Masyarakat - Ahli Muda", status: "ASN" },
        { nama: "Safira Hilyati, S.I.Kom", jabatan: "Pranata Hubungan Masyarakat - Ahli Pertama", status: "ASN" },
        { nama: "Dicky Kusuma Wardhana,S.Sos", jabatan: "Penelaah Teknis Kebijakan", status: "ASN" },
        { nama: "Tintin Kartini, S Sos", jabatan: "Penelaah Teknis Kebijakan", status: "ASN" },
        { nama: "Febby Veryani, S.Sos", jabatan: "Penelaah Teknis Kebijakan", status: "ASN" },
        { nama: "Ida Maryani, S.Kom", jabatan: "Penelaah Teknis Kebijakan", status: "ASN" },
        { nama: "Prisela Dwi Ariesta, S.STP", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "Irawati, S.Sos", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "Deden Yusup Danial, S.Sos", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "Fitri Ramadhani, S.E", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "Ahmad Sopian, S.H", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "Hanny Febrina, S.STP", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "Naomi Tirahani, S.Tr. IP", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "Muhamad Iqbal Saefulloh, S.Tr.IP", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "Ceceh", jabatan: "Pengadministrasi Perkantoran", status: "ASN" },
        { nama: "Rahmat Basuki", jabatan: "Operator Layanan Operasional", status: "ASN" },
        { nama: "Didin Jaenudin", jabatan: "Pengadministrasi Perkantoran", status: "ASN" },
        { nama: "H. Asep Chaerudin", jabatan: "Operator Layanan Operasional", status: "ASN" },
        { nama: "Revaldi Wahyu Aji Nugraha, S.STP, M.H", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "Irwan Hermawan", jabatan: "Operator Layanan Operasional", status: "ASN" },
        { nama: "Irwansyah, S.Ip", jabatan: "Penata Layanan Operasional", status: "ASN" },
        { nama: "Farashinta Ramadanti, S.I.K", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "Nadya Rachmawati Ahyar, S.Tr.IP", jabatan: "Penelaah Teknis Kebijakan", status: "ASN" },
        { nama: "Zakka Ghufran EM EM, S.Tr.Tra", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "Rivaldi Pradana, S.Tr.I.P", jabatan: "Penelaah Teknis Kebijakan", status: "ASN" },
        { nama: "Adna Hanifia, S.Tr.Tra", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "Adelia Meilani Dewi, A.Md.Tra", jabatan: "Pengelola Keprotokolan", status: "ASN" },
        { nama: "Achmad Ramdhani, S.Tr.IP", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "Iqbal Insanil Aufa Syaripudin, S.Tr.IP", jabatan: "Penata Keprotokolan", status: "ASN" }
    ];

    const dataNonASN = [
        { nama: "Abellia Munty", jabatan: "Tenaga Pendukung Administrasi S1", status: "Non-ASN" },
        { nama: "Cahya Nugraha", jabatan: "Tenaga Pendukung Administrasi S1", status: "Non-ASN" },
        { nama: "Muhammad Farhan, S.Ikom", jabatan: "Tenaga Pendukung Pelayanan KHUSUS KDH/WKDH Bag Prokompim", status: "Non-ASN" },
        { nama: "Arvan Maulana Wandani", jabatan: "Tenaga Pendukung Pelayanan KHUSUS KDH/WKDH Bag Prokompim", status: "Non-ASN" },
        { nama: "Syarifah Aliya, S.Pdi", jabatan: "Tenaga Pendukung Pelayanan KHUSUS KDH/WKDH Bag Prokompim", status: "Non-ASN" },
        { nama: "Elsa Sanjaya ", jabatan: "Tenaga Pendukung Pelayanan KHUSUS KDH/WKDH Bag Prokompim", status: "Non-ASN" },
        { nama: "Slamet Widayadi, SS", jabatan: "Tenaga Pendukung Pelayanan KHUSUS KDH/WKDH Bag Prokompim", status: "Non-ASN" },
        { nama: "Safira Fitriastuti Hidayat, S. Ak", jabatan: "Tenaga Pendukung Pelayanan KHUSUS KDH/WKDH Bag Prokompim", status: "Non-ASN" },
        { nama: "Andika Try Wiratama", jabatan: "Tenaga Pendukung Pelayanan KHUSUS KDH/WKDH Bag Prokompim", status: "Non-ASN" },
        { nama: "Siti Nurinayah Febrian", jabatan: "Tenaga Pendukung Pelayanan KHUSUS KDH/WKDH Bag Prokompim", status: "Non-ASN" },
        { nama: "Gestra Julio Rahandika", jabatan: "Tenaga Pendukung Pelayanan KHUSUS KDH/WKDH Bag Prokompim", status: "Non-ASN" },
        { nama: "Ryan Maulana Saputra", jabatan: "Tenaga Pendukung Pelayanan KHUSUS KDH/WKDH Bag Prokompim", status: "Non-ASN" },
        { nama: "Mutiawati", jabatan: "Tenaga Pendukung Pelayanan KHUSUS KDH/WKDH Bag Prokompim", status: "Non-ASN" },
        { nama: "Siti Nuraida Parlina", jabatan: "Tenaga Pendukung Teknologi dan Informasi S1 Bag Prokompim", status: "Non-ASN" },
        { nama: "Yeni Oktina, S.Sn", jabatan: "Tenaga Pendukung Keprotokolan", status: "Non-ASN" },
        { nama: "Maulidana Putra Rais", jabatan: "Tenaga Pendukung Pelayanan KHUSUS KDH/WKDH Bag Prokompim", status: "Non-ASN" },
        { nama: "Jantri, S.M", jabatan: "Tenaga Pendukung Pelayanan KDH Bag Umum", status: "Non-ASN" },
        { nama: "Aditya Aji Saputra", jabatan: "Tenaga Pendukung Pelayanan KHUSUS KDH/WKDH Bag Prokompim", status: "Non-ASN" },
        { nama: "Rayhan", jabatan: "Tenaga Pendukung Pelayanan KHUSUS KDH/WKDH Bag Prokompim", status: "Non-ASN" },
        { nama: "Muhamad Abiyu Tamir", jabatan: "Tenaga Pendukung Pelayanan KHUSUS KDH/WKDH Bag Prokompim", status: "Non-ASN" },
        { nama: "Nadya Aqilla Rachmaputri", jabatan: "Tenaga Pendukung Pelayanan KHUSUS KDH/WKDH Bag Prokompim", status: "Non-ASN" },
        { nama: "Alvin Sopian", jabatan: "Tenaga Pendukung Pelayanan KHUSUS KDH/WKDH Bag Prokompim", status: "Non-ASN" },
        { nama: "Erik Setiawan", jabatan: "Tenaga Pendukung Pelayanan KHUSUS KDH/WKDH Bag Prokompim", status: "Non-ASN" },
        { nama: "Lingga Arvian Nugroho", jabatan: "Tenaga Pendukung Pelayanan KDH Bag Umum", status: "Non-ASN" }
    ];

    const tableBody = document.getElementById('karyawan-table-body');
    const filterButtons = document.querySelectorAll('.btn[data-filter]');
    const tableTitle = document.getElementById('table-title');

    function populateTable(data) {
        if (!tableBody) return;
        tableBody.innerHTML = ''; 
        data.forEach((karyawan, index) => {
            const row = `
                <tr>
                    <td class="text-center">${index + 1}</td>
                    <td>${karyawan.nama}</td>
                    <td>${karyawan.jabatan}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                filterButtons.forEach(btn => btn.classList.remove('active', 'btn-custom'));
                filterButtons.forEach(btn => btn.classList.add('btn-outline-custom'));
                e.target.classList.remove('btn-outline-custom');
                e.target.classList.add('active', 'btn-custom');

                const filter = e.target.dataset.filter;
                if (filter === 'asn') {
                    populateTable(dataASN);
                    if(tableTitle) tableTitle.textContent = "Daftar Pegawai ASN";
                } else {
                    populateTable(dataNonASN);
                    if(tableTitle) tableTitle.textContent = "Daftar Pegawai Non-ASN";
                }
            });
        });
        populateTable(dataASN);
    }

    // --- BAGIAN 2: BERITA OTOMATIS (GOOGLE SHEETS) ---
    const linkBeritaCSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRR1SoshWLAXMQ1wWVgsYQVr4Df8uj9CD1eXXF10gBOQaaKb2lplMqSTZTcVrbmK2nwc3SDTnQz_SpT/pub?output=csv';
    const containerBerita = document.getElementById('container-berita-otomatis');

    if (containerBerita) {
        fetch(linkBeritaCSV)
            .then(res => res.text())
            .then(csvText => {
                const baris = csvText.split('\n').slice(1);
                let htmlBerita = '';

                baris.forEach(row => {
                    const k = row.split(','); 
                    if (k.length < 3) return;

                    const tanggal = k[0]?.trim();
                    const judul = k[1]?.trim();
                    const ringkasan = k[2]?.trim(); // Ini variabel yang benar
                    const linkGambar = k[3]?.trim() || 'https://via.placeholder.com/400x250';
                    const linkTujuan = k[4]?.trim() || '#';

                    htmlBerita += `
                        <div class="col-md-6 mb-4">
                            <div class="card card-custom h-100">
                                <img src="${linkGambar}" class="card-img-top card-img-custom" alt="${judul}" style="height: 200px; object-fit: cover;">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">${judul}</h5>
                                    <p class="text-muted small">Dipublikasi: ${tanggal}</p>
                                    <p class="card-text">${ringkasan}</p> <div class="text-end mt-auto">
                                        <a href="${linkTujuan}" class="btn btn-outline-custom">Baca Selengkapnya</a>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                });
                containerBerita.innerHTML = htmlBerita;
            })
            .catch(err => {
                containerBerita.innerHTML = '<p class="text-center text-danger">Gagal memuat berita terbaru.</p>';
                console.error("Error fetching news:", err);
            });
    }
});
