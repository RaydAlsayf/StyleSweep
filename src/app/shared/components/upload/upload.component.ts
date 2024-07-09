import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  selectedFile: File | null = null;
  uploadResponse: any = null;

  constructor(private http: HttpClient) {}

  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http.post('http://localhost:3000/api/upload', formData, {
        reportProgress: true,
        observe: 'events'
      }).subscribe((event) => {
        if (event.type === HttpEventType.Response) {
          this.uploadResponse = event.body;
        }
      });
    }
  }
}
