export const LANGUAGES = ["en", "id"];
export const DEFAULT_LANGUAGE = "en";
export const STORAGE_KEY = "sahal-portfolio-lang";

export const dictionary = {
  en: {
    "lang.switch": "Switch language",

    "nav.projects": "Projects",
    "nav.blogs": "Blogs",
    "nav.source": "Source",
    "nav.menu": "Open main menu",

    "home.hero": "Hello, I’m a full-stack app developer based in Indonesia!",
    "home.tagline": "Love to build Digital Things",
    "home.role.developer": "Developer",
    "home.role.3d": "3D Generalist",
    "home.role.ui": "UI Designer",

    "home.about.title": "About",
    "home.about.body":
      "Sahal is a full-stack developer who builds digital products from end to end. He pairs a sharp eye for detail with a structured approach to problem-solving, turning ideas into interfaces that feel effortless and backend systems that stay reliable as they grow. From front-end craft to back-end architecture, his focus stays the same: clean, maintainable solutions that deliver real value to the people who use them.",

    "home.bio.title": "Bio",
    "home.bio.born": "Born in Jakarta, Indonesia",
    "home.bio.degree":
      "Completed a Bachelor’s degree in Computer Science at Gunadarma University.",
    "home.bio.work": "Started working as a Full-Stack Developer.",

    "home.hobby.title": "Hobby",
    "home.hobby.before": "UI/UX design, drawing, ",
    "home.hobby.link": "3D environment design",
    "home.hobby.after": ", listening to music, and reading books.",

    "home.socials.title": "My Socials",

    "home.recent.title": "My Recent Project",
    "home.recent.cta": "View project →",

    "home.contact.title": "Get in Touch",
    "home.contact.body":
      "I’d love to hear from you! Whether you have a question, a project idea, or just want to connect, drop me a message, and I’ll get back to you soon.",

    "projects.title": "Projects",
    "projects.intro":
      "Explore my latest projects, where creativity meets functionality. Each project reflects my dedication to quality and my passion for bringing ideas to life.",

    "blog.title": "My Blogs",
    "blog.intro":
      "This page is dedicated to my personal blog, where I discuss various topics related to programming, UI/UX design, and my learning experiences during university. Explore detailed posts, tutorials, and reflections on the methods and techniques I use in my work and studies.",
    "blog.medium": "Sahal’s Programming Blog on Medium",
    "blog.university": "Sahal’s University Journey Blog",
    "blog.instagram": "Sahal’s Instagram Coding Blog",
    "blog.uiux": "Sahal’s UI and UX Blog Reviews",

    "form.name": "Your Name",
    "form.email": "Your Email",
    "form.subject": "Subject",
    "form.message": "Your Message",
    "form.send": "Send Message",

    "share.copy": "Share Link",
    "share.copied": "Link Copied",

    "footer.rights": "© 2026 Muhammad Sahal Nurdin. All Rights Reserved",
  },

  id: {
    "lang.switch": "Ganti bahasa",

    "nav.projects": "Proyek",
    "nav.blogs": "Blog",
    "nav.source": "Kode Sumber",
    "nav.menu": "Buka menu utama",

    "home.hero": "Halo, saya full-stack app developer yang berbasis di Indonesia!",
    "home.tagline": "Senang membangun hal-hal digital",
    "home.role.developer": "Developer",
    "home.role.3d": "3D Generalist",
    "home.role.ui": "Desainer UI",

    "home.about.title": "Tentang",
    "home.about.body":
      "Sahal adalah full-stack developer yang membangun produk digital dari hulu ke hilir. Ia memadukan ketelitian pada detail dengan cara pemecahan masalah yang terstruktur, mengubah ide menjadi antarmuka yang terasa ringan digunakan dan sistem backend yang tetap andal seiring bertambahnya beban. Dari sisi tampilan hingga arsitektur backend, fokusnya tetap sama: solusi yang rapi, mudah dirawat, dan benar-benar bermanfaat bagi penggunanya.",

    "home.bio.title": "Biodata",
    "home.bio.born": "Lahir di Jakarta, Indonesia",
    "home.bio.degree":
      "Menyelesaikan pendidikan S1 Ilmu Komputer di Universitas Gunadarma.",
    "home.bio.work": "Mulai bekerja sebagai Full-Stack Developer.",

    "home.hobby.title": "Hobi",
    "home.hobby.before": "Desain UI/UX, menggambar, ",
    "home.hobby.link": "desain environment 3D",
    "home.hobby.after": ", mendengarkan musik, dan membaca buku.",

    "home.socials.title": "Media Sosial",

    "home.recent.title": "Proyek Terbaru",
    "home.recent.cta": "Lihat proyek →",

    "home.contact.title": "Hubungi Saya",
    "home.contact.body":
      "Saya senang mendengar kabar dari Anda! Baik ada pertanyaan, ide proyek, atau sekadar ingin berkenalan, kirimkan pesan dan saya akan segera membalasnya.",

    "projects.title": "Proyek",
    "projects.intro":
      "Jelajahi proyek-proyek terbaru saya, tempat kreativitas bertemu fungsi. Setiap proyek mencerminkan komitmen saya pada kualitas dan kesenangan saya mewujudkan ide menjadi nyata.",

    "blog.title": "Blog Saya",
    "blog.intro":
      "Halaman ini didedikasikan untuk blog pribadi saya, tempat saya membahas berbagai topik seputar pemrograman, desain UI/UX, dan pengalaman belajar selama kuliah. Temukan tulisan mendalam, tutorial, dan refleksi tentang metode serta teknik yang saya pakai dalam pekerjaan dan studi.",
    "blog.medium": "Blog Pemrograman Sahal di Medium",
    "blog.university": "Blog Perjalanan Kuliah Sahal",
    "blog.instagram": "Blog Coding Sahal di Instagram",
    "blog.uiux": "Ulasan UI dan UX dari Sahal",

    "form.name": "Nama Anda",
    "form.email": "Email Anda",
    "form.subject": "Subjek",
    "form.message": "Pesan Anda",
    "form.send": "Kirim Pesan",

    "share.copy": "Salin Tautan",
    "share.copied": "Tautan Disalin",

    "footer.rights":
      "© 2026 Muhammad Sahal Nurdin. Seluruh Hak Cipta Dilindungi",
  },
};

// Falls back to English so a missing Indonesian key shows real copy instead of
// a raw key name.
export function translate(lang, key) {
  return dictionary[lang]?.[key] ?? dictionary[DEFAULT_LANGUAGE][key] ?? key;
}
