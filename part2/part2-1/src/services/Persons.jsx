import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const response = axios.get(`${baseUrl}`)
    return response.then(response => response.data)
}

const create = (newPerson) => {
    const response = axios.post(`${baseUrl}`, newPerson)
    return response.then(response => response.data)
}

const deletePerson = (personID) => {
    const response = axios.delete(`${baseUrl}/${personID}`)
    return response.then(response => response.data)
}

const updatePerson = (id, person) => {
    const personUrl = `${baseUrl}/${id}`
    return axios.put(personUrl, person).then(updateResponse => updateResponse.data)    
}

export default {getAll, create, deletePerson, updatePerson}
