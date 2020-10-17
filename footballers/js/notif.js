// Periksa fitur Notification API
if ("Notification" in window) {
    requestPermission();
} else {
    console.error("Browser tidak mendukung notifikasi.");
}

// function showNotifikasiSederhana() {
//     const title = 'Notifikasi Sederhana';
//     const options = {
//         'body': 'Ini adalah konten notifikasi. \nBisa menggunakan baris baru.',
//     }
//     if (Notification.permission === 'granted') {
//         navigator.serviceWorker.ready.then(function (registration) {
//             registration.showNotification(title, options);
//         });
//     } else {
//         console.error('FItur notifikasi tidak diijinkan.');
//     }
// }
// function showNotifikasiRequireInteraction() {
//     const title = 'Notifikasi yang meminta interaksi pengguna';
//     const options = {
//         requireInteraction: true,
//     };
//     if (Notification.permission === 'granted') {
//         navigator.serviceWorker.ready.then(function (registration) {
//             registration.showNotification(title, options);
//         });
//     } else {
//         console.error('Fitur notifikasi tidak diijinkan.');
//     }
// }
// function showNotifikasiIkon() {
//     const title = 'Notifikasi Sederhana';
//     const options = {
//         'body': 'Ini adalah konten notifikasi dengan gambar ikon.',
//         'icon': '/img/logo.png'
//     };
//     if (Notification.permission === 'granted') {
//         navigator.serviceWorker.ready.then(function (registration) {
//             registration.showNotification(title, options);
//         });
//     } else {
//         console.error('Fitur notifikasi tidak diijinkan.');
//     }
// }
// function showNotifikasiBadge() {
//     const title = 'Notifikasi dengan Badge';
//     const options = {
//         'body': 'Ini adalah konten notifikasi dengan gambar badge.',
//         'badge': '/img/logo.png'
//     };
//     if (Notification.permission === 'granted') {
//         navigator.serviceWorker.ready.then(function (registration) {
//             registration.showNotification(title, options);
//         });
//     } else {
//         console.error('Fitur notifikasi tidak diijinkan.');
//     }
// }
// function showNotifikasiActions() {
//     const title = 'Notifikasi dengan Actions';
//     const options = {
//         'body': 'Ini adalah konten notifikasi dengan pilihan actions.',
//         'actions': [
//             {
//                 'action': 'yes-action',
//                 'title': 'Ya',
//             },
//             {
//                 'action': 'no-action',
//                 'title': 'Tidak',
//             }
//         ]
//     };
//     if (Notification.permission === 'granted') {
//         navigator.serviceWorker.ready.then(function (registration) {
//             registration.showNotification(title, options);
//         });
//     } else {
//         console.error('Fitur notifikasi tidak diijinkan.');
//     }
// }
// self.addEventListener('notificationclick', function (event) {
//     // event.notification.close();
//     if (!event.action) {
//         // Penguna menyentuh area notifikasi diluar action
//         console.log('Notification Click.');
//         return;
//     }
//     switch (event.action) {
//         case 'yes-action':
//             console.log('Pengguna memilih action yes.');
//             // buka tab baru
//             clients.openWindow('https://google.com');
//             break;
//         case 'no-action':
//             console.log('Pengguna memilih action no');
//             break;
//         default:
//             console.log(`Action yang dipilih tidak dikenal: '${event.action}'`);
//             break;
//     }
// });