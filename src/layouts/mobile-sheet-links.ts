import { type UrlObject } from 'url';

interface Link {
    label: string;
    href: UrlObject | string;
}

interface Menu {
    label: string;
    links: Link[];
}

const menus: Menu[] = [
    {
        label: 'Umum',
        links: [
            {
                label: 'Beranda',
                href: '/',
            },
            {
                label: 'Berita Terkini',
                href: '/latest-news',
            },
        ],
    },
    {
        label: 'Perizinan',
        links: [
            {
                label: 'Daftar Izin Proses',
                href: '/permits/lists',
            },
            {
                label: 'Daftar Jenis Izin',
                href: '/permits/types',
            },
            {
                label: 'Jumlah Pemohon Izin',
                href: '/permits/applicants',
            },
            {
                label: 'Standar Pelayanan Perizinan',
                href: '/permits/service-standards',
            },
        ],
    },
    {
        label: 'Inovasi',
        links: [
            {
                label: 'SIAP BOSS',
                href: '/innovations/siap-boss',
            },
            {
                label: 'Rajin',
                href: '/innovations/rajin',
            },
            {
                label: 'Paksi',
                href: '/innovations/paksi',
            },
            {
                label: 'Jabat Erat',
                href: '/innovations/jabat-erat',
            },
        ],
    },
    {
        label: 'Pengaduan',
        links: [
            {
                label: 'Daftar Pengaduan',
                href: '/complaints/lists',
            },
            {
                label: 'Kategori Pengaduan & Dasar Hukum',
                href: '/complaints/categories',
            },
            {
                label: 'Buat Pengaduan Baru',
                href: '/dashboard',
            },
            {
                label: 'Pengaduan Saya',
                href: '/dashboard',
            },
        ],
    },
    {
        label: 'Tentang DPMPTSP',
        links: [
            {
                label: 'Profil DPMPTSP',
                href: '/about/profile',
            },
            {
                label: 'Tugas Pokok & Fungsi',
                href: '/about/duties',
            },
            {
                label: 'Penghargaan',
                href: '/about/awards',
            },
        ],
    },
];

export { menus, type Link, type Menu };
