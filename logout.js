<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCxjTmRPiF4OrRAsneB_SUi1SpGOgkwrYg",
    authDomain: "genzet-home.firebaseapp.com",
    projectId: "genzet-home",
    storageBucket: "genzet-home.appspot.com",
    messagingSenderId: "586231239859",
    appId: "1:586231239859:web:9fc3a69f2f2ef0bf8c8cc6"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Redirect ke login jika belum login
  onAuthStateChanged(auth, (user) => {
    if (!user) window.location.href = "login.html";
  });

  // Fungsi logout global
  window.logout = () => {
    import("https://cdn.jsdelivr.net/npm/sweetalert2@11").then(({ default: Swal }) => {
      Swal.fire({
        title: 'Keluar dari akun?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya, Logout',
        cancelButtonText: 'Batal'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await signOut(auth);
            Swal.fire({
              icon: 'success',
              title: 'Logout berhasil',
              showConfirmButton: false,
              timer: 1500
            }).then(() => window.location.href = "login.html");
          } catch (error) {
            Swal.fire('Gagal Logout', error.message, 'error');
          }
        }
      });
    });
  };
</script>
