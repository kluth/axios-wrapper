export interface RequestProps {
    method: 'get' | 'post' | 'put' | 'delete';
    url: string;
    data?: any;
    params?: any;
    headers?: any;
    timeout?: number;
}
