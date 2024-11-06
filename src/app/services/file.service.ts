import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';

interface FileType {
  name: string;
  content: Blob | string;
}

@Injectable({
  providedIn: 'root',
})
export class FileService {
  downloadFile(zipName: string, file: FileType) {
    const zip = new JSZip();

    zip.file(file.name, file.content, {});

    // Generate ZIP file and trigger download
    zip
      .generateAsync({ type: 'blob' })
      .then((blob) => {
        saveAs(blob, zipName);
      })
      .catch((error) => {
        console.error('Error generating ZIP', error);
      });
  }

  private downloadFilesAsZip(zipName: string, files: FileType[]): void {
    const zip = new JSZip();

    // Add files to the ZIP
    files.forEach((file) => {
      zip.file(file.name, file.content, {});
    });

    // Generate ZIP file and trigger download
    zip
      .generateAsync({ type: 'blob' })
      .then((blob) => {
        saveAs(blob, zipName);
      })
      .catch((error) => {
        console.error('Error generating ZIP', error);
      });
  }
}
