/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
  /**
   * Получает информацию о счёте
   * */
  static get(id = '', callback){ 
    const data = {
      url: this.URL + '/' + id,
      method: 'GET',
    }   
    createRequest(data, callback)
  }

  static URL = '/account';
}
