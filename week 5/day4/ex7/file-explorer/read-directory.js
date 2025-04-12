const fs = require('fs');

fs.readdir('.', (err, files) => {
  if (err) {
    return console.error('Error reading directory:', err);
  }

  console.log(' Files in the directory:');
  files.forEach(file => console.log('📄', file));
});
