exports.handler = async (event) => {
    if(event.httpMethod === 'GET'){
        return getItem(event);
        
    }
 };
 
 const getItem = event => {
    let item = {
       description: 'Parametros',
       clicks: '60',
       time: '50000'
    };
    return {
       statusCode: 200,
       body: JSON.stringify(item)
    };
 };