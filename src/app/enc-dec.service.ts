import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class EncDecService {

  private secretKey = 'abcdef';
  constructor() {

   }

   encryptPassword(password: string): string {
    return CryptoJS.AES.encrypt(password, this.secretKey).toString();
  }

  decryptPassword(encryptedPassword: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  hashPassword(password: string): string {
    return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
  }
  
}
