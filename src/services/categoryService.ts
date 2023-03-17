import axios from 'axios';
import { headers } from './provider';

export function getCategories() {
    return axios.get('api/Category', {headers: headers});
}

export function addCategory(name) {
    return axios.post('api/Category',{Name: name}, {headers: headers})
}

export function editCategory(id, name) {
    return axios.put('api/Category/' + id, {Id: id, Name: name}, {headers: headers})
}

export function deleteCategory(id) {
    return axios.delete('api/Category/' + id, {headers: headers})
}