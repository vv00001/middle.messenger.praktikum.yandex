import { queryStringify } from "../sourseCode/queryStringify"
const METHODS = {
   GET: 'GET',
   PUT:'PUT',
   POST:'POST',
   DELETE:'DELETE'
};

type Options={
   data?:any
   headers?: Record<string, string>
   method:METHODS
   timeout?:number
}

class HTTPTransport {
   get = (url:string, options:Options = {}) => {         
      
      return this.request(`${url}${queryStringify(options.data)}`, {...options, method: METHODS.GET}, options.timeout);
   };
   put = (url:string, options:Options = {}) => {
          
         return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
   };
   post = (url:string, options:Options = {}) => {
          
         return this.request(url, {...options, method: METHODS.POST}, options.timeout);
   };
   delete = (url:string, options:Options = {}) => {
          
         return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
   };

   request = (url:string, options:Options, timeout = 5000) => {
       let {headers={},
      method,data}=options;
      
      return new Promise(function(resolve,reject){
         if(!method){
         reject("met")
         return;
         }
         let xhr=new XMLHttpRequest();         
         xhr.open(method,url);
         
         Object.keys(headers).forEach(key=>{
            
         xhr.setRequestHeader(key,headers[key]);
         })
         
         xhr.onload=function(){
         resolve(xhr);
         }
         xhr.onabort=reject;
         xhr.onerroe=reject;
         xhr.timeout=timeout;
         
         xhr.ontimeout=reject;
         
         console.log(data);
         if(method===METHODS.GET || !data){
         xhr.send();
         }else{
         xhr.send(data)
         }
         
      })
   };
}
