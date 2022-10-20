import axios from 'axios';
import { AxiosWrapperProps } from '../properties/AxiosWrapperProps';
import Logger from './logger'



/**
 * Creates an Axios instance with the given AxiosWrapperProps.           
 * @param {AxiosWrapperProps} props - The AxiosWrapperProps object.           
 * @returns An Axios instance.           
 */
export const api = (props: AxiosWrapperProps) => {
    const logger = new Logger({
        output: 'console'
    });

    /**
     * Creates an axios instance with the given baseURL, headers, and timeout.           
     * @param {string} baseURL - The base URL of the API.           
     * @param {object} headers - The headers to use for the API call.           
     * @param {number} timeout - The timeout for the API call.           
     * @returns {AxiosInstance} - The axios instance.           
     */
    const result = axios.create(props);

    /**
     * Intercepts all requests and adds the correct method to the request.           
     * @param {AxiosRequestConfig} config - the request config object           
     * @returns {AxiosRequestConfig} - the modified request config object           
     */
    result.interceptors.request.use(
        (config) => {
            switch (config.method) {
                case 'get':
                    break;
                case 'post':
                    break;
                case 'put':
                    break;
                case 'delete':
                    break;
                default:
                    break;
            }
            return config;
        }
    );
    /**
     * Intercepts the response and checks the status code.           
     * @param {Response} response - the response object           
     * @returns {Response} - the response object           
     */
    result.interceptors.response.use(
        (response) => {
            switch (response.status) {
                case 200: // OK
                    break;
                case 201: // CREATED
                    break;
                case 202: // ACCEPTED
                    break;
                case 204: // NO CONTENT
                    break;
                case 400: // BAD REQUEST
                    break;
                case 401: // UNAUTHORIZED
                    break;
                case 403: // FORBIDDEN
                    break;
                case 404: // NOT FOUND
                    break;
                case 500: // INTERNAL SERVER ERROR
                    break;
                default:
                    break;
            }
            return response;
        }
    );
    return result;
}