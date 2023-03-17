import axios from 'axios';
import { headers } from './provider';

export function getHeroes() {
    return axios.get('api/Heroes', {headers: headers});
}

export function addHero(name, categoryId, active) {
    return axios.post('api/Heroes',{Name: name, CategoryId: categoryId, Active: active}, {headers: headers})
}

export function editHero(id, name, categoryId, active) {
    return axios.put('api/Heroes/' + id, {Id: id, Name: name, CategoryId: categoryId, Active: active}, {headers: headers})
}

export function deleteHero(id) {
    return axios.delete('api/Heroes/' + id, {headers: headers})
}