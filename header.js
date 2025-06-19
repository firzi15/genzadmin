export async function loadNavbar(targetId = 'navbar-container') {
  const response = await fetch('header.html');
  const html = await response.text();
  document.getElementById(targetId).innerHTML = html;
}

export function setupLogout(auth) {
  import('https://cdn.jsdelivr.net/npm/sweetalert2@11').then(({ default: Swal }) => {
    window.logout = () => {
      Swal.fire({
        title: 'Keluar dari akun?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya, Logout',
        cancelButtonText: 'Batal'
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { signOut } = await import("https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js");
          await signOut(auth);
          Swal.fire({ icon: 'success', title: 'Logout berhasil', timer: 1200, showConfirmButton: false })
            .then(() => window.location.href = 'login.html');
        }
      });
    };
  });
}
