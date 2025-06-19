import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { app } from './firebase-init.js';

const auth = getAuth(app);

export async function logout() {
  const { default: Swal } = await import('https://cdn.jsdelivr.net/npm/sweetalert2@11');
  Swal.fire({
    title: "Keluar dari akun?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya, Logout",
    cancelButtonText: "Batal"
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await signOut(auth);
        Swal.fire("Logout berhasil", "", "success").then(() => {
          window.location.href = "login.html";
        });
      } catch (error) {
        Swal.fire("Gagal Logout", error.message, "error");
      }
    }
  });
}
