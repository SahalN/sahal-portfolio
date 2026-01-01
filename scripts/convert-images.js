const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images/projects';
const outputDir = './public/images/projects';

// Gambar PNG dan SVG yang perlu dikonversi
const imagesToConvert = [
  'cerita-desain.png',
  'Healme.png',
  'takoyaki-babon.png',
  'sahal-blogger.png',
  'instagram-blog.png',
  'kliniku-landing-page.png',
  'sahal-medium.png',
  'sahaln.png',
  'sahal-uiux.png',
  '7minworkout.svg',
  'bmkg.svg',
  'bookshelf-api.svg',
  'kidsdrawingapp.svg',
  'music-website.svg',
  'm-w.svg',
  'myclasscrud.svg',
  'myquizapp.svg',
  'tincat.svg'
];

async function convertToWebP() {
  for (const image of imagesToConvert) {
    const inputPath = path.join(inputDir, image);
    const outputPath = path.join(outputDir, image.replace('.png', '.webp').replace('.svg', '.webp'));

    try {
      if (!fs.existsSync(inputPath)) {
        continue;
      }
      const originalSize = fs.statSync(inputPath).size;
      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);
      const newSize = fs.statSync(outputPath).size;
      const reduction = ((1 - newSize / originalSize) * 100).toFixed(2);
      console.log(`${image}`);
      console.log(`Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`WebP: ${(newSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`Pengurangan: ${reduction}%\n`);
    } catch (error) {
      console.error(`Error konversi ${image}:`, error.message);
    }
  }
}

convertToWebP();
