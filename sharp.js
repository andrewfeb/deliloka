const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach(image => {
  // mengubah ukuran gambar dengan lebar 768px, dengan prefix -small.jpg
  sharp(`${target}/${image}`)
    .resize(768)
    .jpeg({ quality: 50 })
    .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
      .slice(0, -1)
      .join('.')}-sm.jpg`));

  // mengubah ukuran gambar dengan lebar 900px, dengan prefix -large.jpg
  sharp(`${target}/${image}`)
    .resize(900)
    .jpeg({ quality: 50 })
    .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
      .slice(0, -1)
      .join('.')}-md.jpg`));

  // mengubah ukuran gambar dengan lebar 1200px, dengan prefix -xl.jpg
  sharp(`${target}/${image}`)
    .resize(1200)
    .jpeg({ quality: 50 })
    .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
      .slice(0, -1)
      .join('.')}-lg.jpg`));
});
