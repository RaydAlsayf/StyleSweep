import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class FileUploadService {

  constructor() { }

  // // This function will upload the file to the server
  // uploadFile(file: File) {
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   // You can add more data to the request if you want
  //   // formData.append('data', JSON.stringify(data));
  //   return this.http.post('http://localhost:3000/upload', formData);
  // }
}
