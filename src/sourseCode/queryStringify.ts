export function queryStringify(data:{}) {
   if (!data) {
      return '';
    }
   console.log(data);
   let keys=Object.keys(data);
   return keys.reduce((result, key, index) => {
   return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
   }, '?');
}
