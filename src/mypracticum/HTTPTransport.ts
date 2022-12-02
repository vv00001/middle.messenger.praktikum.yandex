import { queryStringify } from "../sourseCode/queryStringify"
export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type RequestData = Record<string, string | number>;

type Options={
   data?:any
   method?:METHODS
   headers?: Record<string, string>
   timeout?: number;
   withCredentials?: boolean;
}

export class HTTPTransport {  

  public get = (url: string, options = {}) =>
     this.request(url, { ...options, method: METHODS.GET });
 
     public put = (url: string, options = {}) =>
     this.request(url, { ...options, method: METHODS.PUT });
 
   public post = (url: string, options = {}) =>
     this.request(url, { ...options, method: METHODS.POST });
 
   public delete = (url: string, options = {}) =>
     this.request(url, { ...options, method: METHODS.DELETE });
 

  private request = (url: string, options: RequestOptions) => {
   const {
      withCredentials = true,
      method = METHODS.GET,
      data,
      timeout = 5000,
      headers = {},
   } = options;


    const ques = method === METHODS.GET ? queryStringify(data as RequestData) : '';
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, `${url}${ques}`);

      if (withCredentials) {
        xhr.withCredentials = true;
      }

      Object.entries(headers).forEach(([key, value]) => xhr.setRequestHeader(key, value));

      xhr.onload = () => (xhr.status >= 300 ? reject(xhr) : resolve(xhr));

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (data?.constructor.name === 'FormData') {
            xhr.send(data);
         } else {
            method === METHODS.GET || !data ? xhr.send() : xhr.send(JSON.stringify(data));
         }
      });
   };
}
