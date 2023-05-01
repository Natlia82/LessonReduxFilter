import { func } from 'prop-types';
import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE_FIELD, CANCEL_SERVICE_FIELD, UPDATE_SERVICE } from './actionTypes';

export function addService(name, price) {
    return { type: ADD_SERVICE, payload: { name, price } };
}
export function removeService(id) {
    return { type: REMOVE_SERVICE, payload: { id } };
}

export function changeServiceField(name, value) {
    return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}

export function removeEdit(id, nazv, price) {
    return { type: EDIT_SERVICE_FIELD, payload: { id, nazv, price } };
}

export function changeServiceCansel() {
    return { type: CANCEL_SERVICE_FIELD, payload: {} };
}

export function updateService(kod, nameNew, priceNew) {
    return { type: UPDATE_SERVICE, payload: { kod, nameNew, priceNew } }
}