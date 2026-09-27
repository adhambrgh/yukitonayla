export const siteConfig = {
  pin: "1234",
  music: {
    src: "/assets/music/song.mp3",
    autoplayAfterUnlock: true,
    volume: 0.4,
  },

  recipientName: "Sayang",
  senderName: "Aku",
  date: "Hari Ini",

  welcome: {
    title: "Ingat ga hari ini hari apa? 👀",
    subtitle: "Sentuh layar untuk melanjutkan...",
    bearPosition: "center",
  },

  pin: {
    title: "Masukkan PIN 🔐",
    subtitle: "PIN rahasia untuk membuka kejutan...",
    placeholder: "4 digit",
    buttonText: "Buka",
    errorMessage: "PIN-nya salah nih 👀 coba lagi",
    successMessage: "Benar! Membuka kejutan... ✨",
  },

  message: {
    title: "Untuk Kamu... 💙",
    content: `[TULIS UCAPAN UTAMA DI SINI]

Hari ini aku mau bilang banyak hal yang selama ini mungkin belum aku sampaikan dengan benar.

Kamu itu spesial, bukan cuma hari ini, tapi setiap harinya. Terima kasih sudah jadi bagian dari hidup aku, sudah nerima aku dengan semua kekurangan, dan sudah jadi alasan aku tersenyum setiap hari.

Semoga hari ini dan selamanya Kamu bahagia. Aku akan selalu di sini, menemani, mendukung, dan mencintai Kamu dengan sepenuh hati.`,
    fallingHearts: true,
    bearPosition: "bottom-right",
  },

  photos: {
    title: "Kenangan Kita 📸",
    subtitle: "Momen-momen indah yang tak terlupakan",
    items: [
      { src: "/assets/photos/photo-1.jpg", alt: "Foto kenangan 1", caption: "Momen pertama kita" },
      { src: "/assets/photos/photo-2.jpg", alt: "Foto kenangan 2", caption: "Tertawa bersama" },
      { src: "/assets/photos/photo-3.jpg", alt: "Foto kenangan 3", caption: "Hari spesial" },
      { src: "/assets/photos/photo-4.jpg", alt: "Foto kenangan 4", caption: "Saat-saat biasa yang berarti" },
      { src: "/assets/photos/photo-5.jpg", alt: "Foto kenangan 5", caption: "Selalu di sisi kamu" },
      { src: "/assets/photos/photo-6.jpg", alt: "Foto kenangan 6", caption: "Forever favorit" },
    ],
    layout: "masonry",
    stickers: true,
  },

  words: {
    title: "Kata-Kata, Harapan & Doa 🤲",
    sections: [
      {
        label: "Kata-Kata",
        icon: "speech",
        content: `[TULIS KATA-KATA DI SINI]

Setiap hari bersamamu adalah anugerah. Terima kasih sudah mengajarkan aku arti cinta yang sejati, arti sabar, dan arti berbagi. Kamu membuat duniaku jadi lebih berwarna.`,
      },
      {
        label: "Harapan",
        icon: "star",
        content: `[TULIS HARAPAN DI SINI]

Semoga kita selalu diberi kesehatan, kebahagiaan, dan kelancaran dalam segala urusan. Semoga cinta kita tumbuh lebih dalam seiring waktu, dan kita bisa melewati segala cobaan bersama-sama, tangan dalam tangan.`,
      },
      {
        label: "Doa",
        icon: "heart",
        content: `[TULIS DOA DI SINI]

Ya Allah, lindungilah dia selalu. Berikanlah dia kebahagiaan dunia dan akhirat. Jauhkan dia dari segala keburukan, sakit, dan kesusahan. Jadikan aku orang yang bisa jadi tempat pulang dan pelindung baginya. Aamiin.`,
      },
    ],
    bearPosition: "bottom-left",
  },

  videos: {
    title: "Video Moments 🎬",
    subtitle: "Gerakan & suara kenangan kita",
    items: [
      { src: "/assets/videos/video-1.mp4", poster: "/assets/videos/poster-1.jpg", alt: "Video kenangan 1", caption: "Video lucu kita" },
      { src: "/assets/videos/video-2.mp4", poster: "/assets/videos/poster-2.jpg", alt: "Video kenangan 2", caption: "Momen manis" },
    ],
    stickers: true,
  },

  closing: {
    title: "Terima Kasih Sudah Membuka Kejutan Ini 💙",
    message: `[TULIS KATA PENUTUP DI SINI]

Ini baru awal dari banyak kejutan lain yang akan datang. Aku sayang kamu, bukan cuma hari ini, tapi setiap hari selamanya.

Tetap bahagia, tetap jadi dirimu yang lucu, manis, dan penuh cinta. Aku akan selalu di sini untukmu.`,

    finalMessage: `[TULIS PESAN TERAKHIR DI SINI]

Love you to the moon and back 🌙💙`,
    signature: "Made with love 💙",
    branding: "DhamTech",
    bearPosition: "center",
  },

  ui: {
    scrollIndicator: true,
    nextButtonText: "Lanjut ▸",
    prevButtonText: "◂ Kembali",
    loadingText: "Memuat...",
    reducedMotion: false,
  },

  colors: {
    primary: "#006994",
    secondary: "#0096C7",
    accent: "#48CAE4",
    light: "#CAF0F8",
    white: "#FFFFFF",
    bearBrown: "#8B5E3C",
    bearLight: "#D4A574",
    lovePink: "#FF6B9D",
    loveRed: "#E84D70",
  },
};