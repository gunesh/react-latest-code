import { axiosInstance } from '../../utility/NetworkManager';

export const loginUserService = (data: any): any => {
    const LOGIN_API_ENDPOINT = 'api/users';
    return axiosInstance.get(LOGIN_API_ENDPOINT).then((response) => {
        return response.data
    });
};

export const getUserDetailService = (data: any): any => {
    const LOGIN_API_ENDPOINT = 'api/users';
    return axiosInstance.get(LOGIN_API_ENDPOINT).then((response) => {
        return response.data
    });
};


