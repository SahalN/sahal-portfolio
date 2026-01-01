const fs = require('fs');
const path = require('path');

const contentDir = './content/projects';

async function updateMarkdownFiles() {
  console.log('🔄 Mengupdate path gambar di file markdown...\n');

  try {
    const files = fs.readdirSync(contentDir);
    const mdFiles = files.filter(file => file.endsWith('.md'));

    for (const file of mdFiles) {
      const filePath = path.join(contentDir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Replace .png dengan .webp
      content = content.replace(/\.png/g, '.webp');

      // Replace .svg dengan .webp
      content = content.replace(/\.svg/g, '.webp');

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Updated: ${file}`);
      } else {
        console.log(`⏭️  Skipped: ${file} (no changes needed)`);
      }
    }

    console.log('\n✨ Selesai! Semua file markdown telah diupdate.');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

updateMarkdownFiles();
