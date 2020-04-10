import { HOST_URL, SUCCESS } from '../utils/NetworkConstants';
const RequestMethod = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    PUT: 'PUT'
}

const getHeaders = () => {
    return {
        'Content-Type': 'application/json'
    }
};

const get = (url, headers) => {
    return callApi(RequestMethod.GET, url, headers);
}

const post = (url, data, header) => {
    return callApi(RequestMethod.POST, url, header, data);
}

const callApi = (requestMethod, url, headers = getHeaders(), data) => {
    let requestInit = {
        headers: headers,
        method: requestMethod
    };

    return fetch(`${HOST_URL}${url}`, requestInit)
        .then(response => {
            console.log('response->', response);
            if (response.status === SUCCESS) {
                return new Promise((resolve, reject) => {

                    return response.json()
                        .then(result => {
                            resolve(result);
                        })
                        .catch(error => {
                            console.log('json parsing error-->', error);
                            reject("Invalid response");
                        })

                })
                    .then(result => {
                        return result;
                    })
                    .catch(error => {
                        throw error;
                    })
            } else {
                // handle different error status here
                console.log('error-->')
                throw new Error("Network Error. Try again later");
            }
        })
        .catch(error => {
            console.log('error-->', error);
            throw new Error("Something went wrong");
        })

};

export default {
    get, post
}
