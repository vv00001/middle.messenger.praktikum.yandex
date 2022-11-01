const METHODS = {
   GET: 'GET',
   PUT:'PUT',
   POST:'POST',
   DELETE:'DELETE'

};

function queryStringify(data) {
   console.log(data);
   let keys=Object.keys(data);

   return keys.reduce((result, key, index) => {
   return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
   }, '?');
}

type myOptions={
   moreOptions?:any
}

class HTTPTransport {
   get = (url:string, options:myOptions = {}) => {
          
      return this.request(url, {...options, method: METHODS.GET}, options.timeout);
   };
   put = (url:string, options:myOptions = {}) => {
          
         return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
   };
   post = (url:string, options:myOptions = {}) => {
          
         return this.request(url, {...options, method: METHODS.POST}, options.timeout);
   };
   delete = (url:string, options:myOptions = {}) => {
          
         return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
   };

   request = (url:string, options:myOptions, timeout = 5000) => {
       let {headers={},
      method,data}=options;
      
      return new Promise(function(resolve,reject){
         if(!method){
         reject("met")
         return;
         }
         let xhr=new XMLHttpRequest();
         
         
         let newUrl=url;
         if(method==METHODS.GET && !!data){
         newUrl=`${url}${queryStringify(data)}`
         }
         console.log(newUrl)
         xhr.open(method,newUrl);
         
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
         if(method==METHODS.GET || !data){
         xhr.send();
         }else{
         xhr.send(data)
         }
         
      })
   };s
}