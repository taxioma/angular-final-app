import {InMemoryDbService} from 'angular-in-memory-web-api';

export class LocalDataService implements InMemoryDbService {
  createDb() {
    const settings = [
      {fieldName: 'Flora', fieldValue: 'Rose', fieldType: 'string'},
      {fieldName: 'Age', fieldValue: '2', fieldType: 'number'},
      {fieldName: 'Today date', fieldValue: `${new Date()}`, fieldType: 'Date'},
    ];
    const servers = [
      {fieldDate: `${new Date()}`, fieldHost:  '192.168.32.30', fieldEvent: 'Active', fieldComent: 'Its OK', fieldResult: 'true'},
      {fieldDate: `${new Date()}`, fieldHost:  '192.168.30.47', fieldEvent: 'Bug', fieldComent: 'Smth wrong', fieldResult: 'false'},
    ];
    return {settings, servers};

  }




}
