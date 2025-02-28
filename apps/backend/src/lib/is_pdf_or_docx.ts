import fs from "fs";
export function isPdfOrDocx(filePath: string) {
    const buffer = Buffer.alloc(4);
    const fd = fs.openSync(filePath, 'r');

    fs.readSync(fd, buffer, 0, 4, 0);
    fs.closeSync(fd);

    if (buffer.toString() === '%PDF') {
        return 'pdf';
    }

    if (buffer[0] === 0x50 && buffer[1] === 0x4B && buffer[2] === 0x03 && buffer[3] === 0x04) {
        return 'docx';
    }

    return 'other';
}