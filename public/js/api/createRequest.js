/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;
    xhr.responseType = 'json';
    if (options.method === 'GET') {
        let dataSend = options.url;
        options.hasOwnProperty('data').hasOwnProperty('mail') ? dataSend = '?mail=' + options.data.mail : null;
        options.hasOwnProperty('data').hasOwnProperty('password') ? dataSend = '&password==' + options.data.password : null;
        xhr.open('GET', dataSend);
        xhr.send();
    }
    else {
        const formData = new FormData;
        formData.append( 'mail', options.data.mail );
        formData.append( 'password', options.data.password );        
        xhr.open( options.method, options.url );
        xhr.send( formData );
    }
    
    if (xhr.status != 200) {
        // передать ошибку
        options.hasOwnProperty('callback') ? options.callback(xhr.statusText, null) :null;
      } else {
        // передать результат
        options.hasOwnProperty('callback') ? options.callback(null, xhr.responseText) :null;
      }
};