import { AxiosWrapperProps } from '../properties/AxiosWrapperProps';
/**
 * Creates an Axios instance with the given AxiosWrapperProps.
 * @param {AxiosWrapperProps} props - The AxiosWrapperProps object.
 * @returns An Axios instance.
 */
export declare const api: (props: AxiosWrapperProps) => import("axios").AxiosInstance;
