// Fill this list with your real certificates. Shape:
//
//   {
//     name: "Belajar Membuat Aplikasi Back-End untuk Pemula",
//     issuer: "Dicoding",   // grouped by this value on /certifications
//     year: 2024,
//     url: "https://www.dicoding.com/certificates/XXXX",  // "" hides the link
//     featured: true,       // true = also shown on the home page (keep to ~4)
//   }
//
// Only `featured: true` entries reach the home page, so the strongest few can
// sit there while the full list lives on its own page.
export const certifications = [
  {
    name: "Bangkit Academy 2024",
    issuer: "Google, GoTo & Traveloka",
    year: 2024,
    url: "",
    featured: true,
  },
];

export function getFeaturedCertifications() {
  return certifications.filter((item) => item.featured);
}

// Groups by issuer, biggest group first, newest certificate first inside each.
export function getCertificationsByIssuer() {
  const groups = new Map();

  for (const item of certifications) {
    if (!groups.has(item.issuer)) groups.set(item.issuer, []);
    groups.get(item.issuer).push(item);
  }

  return [...groups.entries()]
    .map(([issuer, items]) => ({
      issuer,
      items: [...items].sort((a, b) => b.year - a.year),
    }))
    .sort((a, b) => b.items.length - a.items.length);
}
