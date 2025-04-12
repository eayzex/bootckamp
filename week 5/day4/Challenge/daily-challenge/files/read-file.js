import fs from 'fs';
import path from 'path';

export function readFileContent() {
  const filePath = path.join(process.cwd(), 'files', 'file-data.txt');
  
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log('File content:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}
