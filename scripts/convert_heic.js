
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import heicConvert from 'heic-convert';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images');
// escape backslashes for glob if on windows, or just use forward slashes
const pattern = path.join(imagesDir, '*.heic').replace(/\\/g, '/');

console.log(`Searching for HEIC files in: ${pattern}`);

(async () => {
    try {
        const files = await glob(pattern);
        console.log(`Found ${files.length} HEIC files to convert.`);

        for (const file of files) {
            console.log(`Converting ${path.basename(file)}...`);
            const inputBuffer = await fs.readFile(file);
            const outputBuffer = await heicConvert({
                buffer: inputBuffer,
                format: 'JPEG',
                quality: 0.8
            });

            const outputFilename = file.replace(/\.heic$/i, '.jpg');
            await fs.writeFile(outputFilename, outputBuffer);
            console.log(`Converted ${path.basename(file)} to ${path.basename(outputFilename)}`);
        }
    } catch (err) {
        console.error('Error:', err);
    }
})();
