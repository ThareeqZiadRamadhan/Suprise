// Dapatkan elemen tombol
const tapButton = document.getElementById('tapButton');

// Tambahkan event listener untuk mendeteksi klik pada tombol
tapButton.addEventListener('click', function() {
    
    // Alihkan pengguna ke halaman baru
    window.location.href = 'suprise.html';
    
    // Catatan: Anda tidak lagi membutuhkan elemen 'hiddenMessage' 
    // di index.html karena pengguna akan langsung dialihkan.
});
      document.addEventListener('DOMContentLoaded', (event) => {
        const audio = document.getElementById('surpriseAudio');
        
        // 1. Coba Putar Musik Secara Otomatis
        const playAttempt = audio.play();

        if (playAttempt !== undefined) {
            playAttempt.catch(error => {
                // 2. JIKA GAGAL (saat di-reload), tampilkan notifikasi yang mengundang klik
                console.log("Autoplay diblokir saat reload. Meminta interaksi user.");

                // Buat elemen pemberitahuan
                const notification = document.createElement('div');
                notification.innerHTML = '🎵 Klik di mana saja untuk melanjutkan musik!';
                notification.style.cssText = `
                    position: fixed;
                    top: 10%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: #d17887;
                    color: white;
                    padding: 15px 30px;
                    border-radius: 10px;
                    cursor: pointer;
                    z-index: 1000;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                    font-weight: bold;
                `;
                
                document.body.appendChild(notification);
                
                // 3. Tambahkan Event Listener pada notifikasi
                notification.addEventListener('click', () => {
                    audio.play();
                    notification.remove(); // Hapus notifikasi setelah diklik
                });
                
                // Jika user mengklik di mana saja pada body (bukan hanya notifikasi)
                document.body.addEventListener('click', function handler() {
                    audio.play();
                    notification.remove();
                    document.body.removeEventListener('click', handler); // Hapus listener setelah dijalankan
                });

            });
        }
    });