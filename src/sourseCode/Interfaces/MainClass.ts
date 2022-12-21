import {HTTPTransport} from "../../mypracticum/HTTPTransport"

export default abstract class MainClass {
  protected https: HTTPTransport; yandex:string;

  protected constructor( point : string) {
   this.https = new HTTPTransport();
      this.yandex='https://ya-praktikum.tech/api/v2'+point;
      this._headers = { 'Content-Type': 'application/json' };    
   }
  
   post(url: string, data: unknown) {
      return this.https.post(`${this.yandex}/${url}`, { headers: this._headers, data });
   }

   get(url: string) {
      return this.https.get(`${this.yandex}/${url}`, { headers: this._headers });
   }

   put(url: string, data: unknown, headers?: unknown) {
      return this.https.put(`${this.yandex}/${url}`, {
         headers: headers ? headers : this._headers,
         data,
      });
   }

   delete(url: string, data: unknown) {
      return this.https.delete(`${this.yandex}/${url}`, { headers: this._headers, data });
   }
}
