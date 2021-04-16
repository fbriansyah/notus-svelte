
export const agnParsing = (result) => {
  while(result.indexOf(',,') >= 0){
    result		=	result.replace(/,,/g, ",null,");	
  }			
  result			=	result.replace(/,]/g,",null]");
  result			=	result.replace(/\[,/g,"[null,");
  try {
    result  	=	JSON.parse(result);
    return result;
  } catch(err) {
    return null; 
  }
}

export const encode = (data) => JSON.stringify(data);
export const decode = (str) => JSON.parse(str);