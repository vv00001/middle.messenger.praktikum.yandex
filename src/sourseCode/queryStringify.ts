export function queryStringify(data:{}) {
   console.log(data);
   let keys=Object.keys(data);
   return keys.reduce((result, key, index) => {
   return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
   }, '?');
}