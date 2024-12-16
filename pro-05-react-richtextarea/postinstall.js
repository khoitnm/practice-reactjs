/**
 * Note that the original content of this file from tinyMCE didn't work, so I had to change it a bit:
 * https://www.tiny.cloud/docs/tinymce/latest/react-pm-host/
 */
import fse from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the top directory
const topDir = __dirname;

// Empty the target directory and copy files
fse.emptyDirSync(path.join(topDir, 'public', 'tinymce'));
fse.copySync(path.join(topDir, 'node_modules', 'tinymce'), path.join(topDir, 'public', 'tinymce'), { overwrite: true });