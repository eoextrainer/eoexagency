import { cpSync, copyFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = path.join(projectRoot, 'dist');
const rootBuildAssets = path.join(projectRoot, 'res', 'build');

mkdirSync(rootBuildAssets, { recursive: true });
copyFileSync(path.join(distRoot, 'index.html'), path.join(projectRoot, 'index.html'));
copyFileSync(path.join(distRoot, 'landing.html'), path.join(projectRoot, 'landing.html'));
cpSync(path.join(distRoot, 'res', 'build'), rootBuildAssets, { recursive: true });