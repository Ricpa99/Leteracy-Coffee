# Leteracy Coffee ☕

Leteracy Coffee adalah sebuah aplikasi web yang dikembangkan menggunakan **React** dan **Vite**. Aplikasi ini menampilkan informasi seputar kopi dengan tampilan yang menarik, serta menggunakan **React Icons** untuk ikon-ikon dan **Framer Motion** untuk animasi komponen.

## 🚀 Teknologi yang Digunakan

- [React](https://react.dev/) - Library JavaScript untuk membangun UI.
- [Vite](https://vitejs.dev/) - Build tool untuk pengembangan yang lebih cepat.
- [React Icons](https://react-icons.github.io/react-icons/) - Library ikon berbasis React.
- [Framer Motion](https://www.framer.com/motion/) - Library untuk animasi dalam React.
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS untuk styling yang lebih mudah.

## 📌 Instalasi dan Menjalankan Proyek

1. Clone repository ini:
   ```sh
   git clone https://github.com/Ricpa99/Leteracy-Coffee.git
   ```

2. Masuk ke folder proyek:
   ```sh
   cd Leteracy-Coffee
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Jalankan proyek:
   ```sh
   npm run dev
   ```

Aplikasi akan berjalan di `http://localhost:5173/` secara default.

## 🎨 Penggunaan React Icons

Untuk menggunakan ikon dari **React Icons**, impor ikon yang diinginkan dari paket yang sesuai. Contoh:

```jsx
import { FaCoffee } from "react-icons/fa";

function CoffeeIcon() {
  return <FaCoffee className="text-3xl text-brown-600" />;
}
```

## 🏃‍♂️ Animasi dengan Framer Motion

Agar tampilan lebih interaktif, **Framer Motion** digunakan untuk membuat animasi pada komponen. Contoh penggunaan:

```jsx
import { motion } from "framer-motion";

function AnimatedButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-brown-600 text-white px-4 py-2 rounded-md"
    >
      Click Me
    </motion.button>
  );
}
```

## 📜 Struktur Folder

```
Leteracy-Coffee/
│── src/
│   │── components/  # Komponen reusable
│   │── pages/       # Halaman utama
│   │── assets/      # Gambar dan ikon
│   │── App.jsx      # File utama aplikasi
│   │── main.jsx     # Entry point aplikasi
│
│── public/          # File statis
│── package.json     # Konfigurasi dependencies
│── vite.config.js   # Konfigurasi Vite
│── README.md        # Dokumentasi proyek
```

## 🛠 Kontribusi

Jika ingin berkontribusi pada proyek ini:
1. Fork repository ini.
2. Buat branch baru: `git checkout -b feature-branch`.
3. Commit perubahan: `git commit -m "Menambahkan fitur X"`.
4. Push ke branch: `git push origin feature-branch`.
5. Buat Pull Request.

## 📃 Lisensi

Proyek ini menggunakan lisensi **MIT**. Silakan gunakan dan modifikasi sesuai kebutuhan. 🚀

---

Jika ada pertanyaan atau saran, silakan buka **Issue** di repository ini! 😊
