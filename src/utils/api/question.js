import axios from "axios";

const env = process.env

let cancelToken;

export const getAllQuestion = () => {
    if (cancelToken) cancelToken.cancel();
    cancelToken = axios.CancelToken.source()

    return new Promise((resolve, reject) => {
        axios.get(env.REACT_APP_BASE_URL + '/v1/pub/smart-survey/627e7a588f66290032fc0b06', {
            auth: {
                username: env.REACT_APP_USERNAME,
                password: env.REACT_APP_PASSWORD
            },
            cancelToken: cancelToken.token
        })
            .then(result => {
                resolve(result.data.data)
            }).catch(error => {
                reject(error || "Network error.");
            })
    })
}