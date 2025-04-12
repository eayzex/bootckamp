const fs = require('fs');

fs.readFile('source.txt', 'utf8', (err, data) => {
  if (err) {
    return console.error('Error reading source.txt:', err);
  }

  fs.writeFile('destination.txt', data, (err) => {
    if (err) {
      return console.error('Error writing to destination.txt:', err);
    }
    console.log('✅ File copied successfully!');
  });
});
