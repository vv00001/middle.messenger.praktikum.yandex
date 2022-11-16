import { queryStringify } from "../sourseCode/queryStringify"
export enum METHODS {
   GET: 'GET',
   PUT:'PUT',
   POST:'POST',
   DELETE:'DELETE'
};

type Options={
   data?:any
   method:METHODS
}

export class HTTPTransport {
   static yandex="https://ya-praktikum.tech/api/v2"
   point:string

   constructor(point:string){
      this.point =`${HTTPTransport.yandex}${point}`
   }

   public get<Response>(path = '/'): Promise<Response> {
      return this.request<Response>(this.point + path);
   }
  
   public post<Response = void>(path: string, data?: unknown): Promise<Response> {
      return this.request<Response>(this.point + path, {
         method: METHODS.POST,
         data
      })
   }
  
    public put<Response = void>(path: string, data: unknown): Promise<Response> {
      return this.request<Response>(this.point + path, {
        method: METHODS.PUT,
        data
      })
   }  
  
    public delete<Response>(path: string, data?: unknown): Promise<Response> {
      return this.request<Response>(this.point + path, {
        method: METHODS.DELETE,
        data
      });
   }
  
   private request<Response>(url: string, options: Options = {method: METHODS.Get}): Promise<Response> {
      const {method, data} = options;
      console.log(url)
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
  
        xhr.onreadystatechange = e => {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status < 400) {
              resolve(xhr.response);
            } else {
              reject(xhr.response);
            }
         }
      };
  
        xhr.onabort = () => reject;
        xhr.onerror = () => reject;
        xhr.ontimeout = () => reject;
  
        xhr.withCredentials = true;
        xhr.responseType = 'json';
  
        console.log(data)
        if (method === METHODS.GET || !data) {
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.send();
         }else{
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));
         }
      });
   }
}
