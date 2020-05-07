import axios from 'axios';


export const API = 'http://127.0.0.1:8000/api/';


class Api {

    getHeaders(add_auth_header) {
        const headers = {};
        const token = localStorage.getItem('access');
        if (add_auth_header && token != null)
            headers['Authorization'] = `Bearer  ${token}`;
        return headers;
    }

    async method(type, url, data, add_auth_header) {

        let option = {method: type, url};

        if (data) {
            option = {method: type, url, data};
        }

        let baseURL = API;
        let headers = this.getHeaders(add_auth_header);


        return new Promise((resolve, reject) => {
            let result = axios.create({
                baseURL,
                timeout: 50000,
            }).request({
                ...option,
                headers,
                xsrfHeaderName: "X-CSRFToken",
                xsrfCookieName: "csrftoken"
            });

            return result
                .then(resp => resolve(resp))
                .catch(err => {
                    if (err.response && err.response.status === 401 && !err.config._retry && !err.config.url.includes("token/refresh/")) {
                        let originalRequest = err.config;
                        originalRequest._retry = true;
                        return this.post(`token/refresh/`, {refresh: localStorage.getItem('refresh')})
                            .then(response => {
                                if (response.status === 201 || response.status === 200) {
                                    localStorage.setItem('access', response.data.access);
                                    originalRequest.headers['Authorization'] = `Bearer  ${response.data.access}`
                                    return axios(originalRequest)
                                        .then(resp => resolve(resp))
                                        .catch(err => reject(err));
                                }
                            })
                            .catch((err) => {
                                console.log(err);
                                reject(err)
                            });
                    } else if (err.response && err.response.status === 401 && err.config.url.includes("token/refresh/")) {
                        localStorage.removeItem("access");
                        localStorage.removeItem("refresh");
                        window.location.reload();
                    } else {
                        reject(err);
                    }
                });
        });

    }

    post(url, data, add_auth_header) {
        return this.method('post', url, data, add_auth_header);
    }

    get(url, add_auth_header) {
        return this.method('get', url, null, add_auth_header);
    }

    put(url, data, add_auth_header) {
        return this.method('put', url, data, add_auth_header);
    }

    patch(url, data, add_auth_header) {
        return this.method('patch', url, data, add_auth_header);
    }

    delete(url, add_auth_header) {
        return this.method('delete', url, null, add_auth_header);
    }
}


export const getApi = (dashboardApi) => new Api(dashboardApi);

