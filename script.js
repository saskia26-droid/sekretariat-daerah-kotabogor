document.addEventListener("DOMContentLoaded", function() {

    const dataASN = [
        { nama: "AGYUSARI PRATIWI, S.STP", jabatan: "Pranata Hubungan Masyarakat Ahli Muda", status: "ASN" },
        { nama: "RYAN MAULANA YUSUF, S.TP", jabatan: "Kasubag Protokol", status: "ASN" },
        { nama: "DICKY KUSUMA WARDHANA, S.Sos", jabatan: "Penelaah Teknis Kebijakan", status: "ASN" },
        { nama: "HANNY FEBRINA, S.STP", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "MUHAMMAD IQBAL SAEFULLOH, S.Tr.IP", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "FITRI RAMADANI, SE", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "TINTIN KARTINI, S Sos", jabatan: "Penelaah Tekhnis Kebijakan", status: "ASN" },
        { nama: "PRISELA DWI ARIESTA, S Sos", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "DEDEN YUSUP DANIAL, S.Sos", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "IRAWATI, S.Sos", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "FEBBY VERYANI, S.Sos", jabatan: "Penelaah Tekhnis Kebijakan", status: "ASN" },
        { nama: "IDA MARYANI, S.Kom", jabatan: "Penelaah Tekhnis Kebijakan", status: "ASN" },
        { nama: "SAFIRA HILYATI, S.I. Kom", jabatan: "Pranata Hubungan Masyarakat Ahli Pertama", status: "ASN" },
        { nama: "NAOMI TIRAHANI, S.TR. IP", jabatan: "Penata Keprotokalan", status: "ASN" },
        { nama: "AHMAD SOPIAN, S.H.", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "CECEH", jabatan: "Pengadministrasi Perkantoran", status: "ASN" },
        { nama: "RAHMAT BASUKI", jabatan: "Operator Layanan Operasional", status: "ASN" },
        { nama: "DIDIN JAENUDIN", jabatan: "Pengadministrasi Perkantoran", status: "ASN" },
        { nama: "REVALDI WAHYU AJI NUGRAHA S.STP,MH.", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "H.ASEP CHAERUDIN", jabatan: "Operator Layanan Operasional", status: "ASN" },
        { nama: "IRWAN HERMAWAN", jabatan: "Operator Layanan Operasional", status: "ASN" },
        { nama: "IRWANSYAH,S.IP", jabatan: "Operator Layanan Operasional", status: "ASN" },
        { nama: "FARASHINTA RAMADANTI", jabatan: "Penata Keprotokolan", status: "ASN" },
        { nama: "RIVALDI PRADANA,S.Tr.I.P", jabatan: "Penelaah Teknis Kebijakan", status: "ASN" },
        { nama: "ADNA HANIFIA, S.Tr.Tra", jabatan: "Analis Angkutan Darat", status: "ASN" },
        { nama: "ADELIA MEILANI DEWI, A.Md.Tra", jabatan: "Petugas Transportasi Darat", status: "ASN" },
        { nama: "IQBAL INSANIL AUFA SYARIFUDIN, S. Tr.IP", jabatan: "Analis Perancanaan, Pelaporan, dan evaluasi", status: "ASN" },
        { nama: "NADYA RACHMAWATI AHYAR, S.Tr.IP", jabatan: "Penelaah Teknis Kebijakan", status: "ASN" },
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
        { nama: "Lingga Arvian Nugroho", jabatan: "Tenaga Pendukung Pelayanan KDH Bag Umum", status: "Non-ASN" },
               

        
    ];

    const tableBody = document.getElementById('karyawan-table-body');
    const filterButtons = document.querySelectorAll('.btn[data-filter]');
    const tableTitle = document.getElementById('table-title');

    function populateTable(data) {
        if (!tableBody) return;

        tableBody.innerHTML = ''; // Kosongkan tabel
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

    function handleFilterClick(e) {
        filterButtons.forEach(btn => btn.classList.remove('active', 'btn-custom'));
        filterButtons.forEach(btn => btn.classList.add('btn-outline-custom'));
        
        e.target.classList.remove('btn-outline-custom');
        e.target.classList.add('active', 'btn-custom');

        const filter = e.target.dataset.filter;
        if (filter === 'asn') {
            populateTable(dataASN);
            tableTitle.textContent = "Daftar Pegawai ASN";
        } else if (filter === 'non-asn') {
            populateTable(dataNonASN);
            tableTitle.textContent = "Daftar Pegawai Non-ASN";
        }
    }

    // Tambahkan event listener ke setiap tombol filter
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });

    // Tampilkan data ASN secara default saat halaman dimuat
    populateTable(dataASN);


});
