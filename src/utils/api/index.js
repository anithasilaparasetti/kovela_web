import { authAxiousInstance1 } from "./api"


const endpoints = {
    SIGN_IN: "auth/signin",
    NEW_GET_CURRENT_USER: 'auth/currentCustomer',
}

export const Login = async data => {
    try {
        let result = await authAxiousInstance1.post(
            `${endpoints.SIGN_IN}`,
            data
        );
        return result;
    } catch (error) {
        console.log('error in login', error);
        return error;
    }
}

export const getUserInfoNew = async () => {
    try {
        let result = await authAxiousInstance1.get(`${endpoints.NEW_GET_CURRENT_USER}`);
        return result;
    } catch (error) {
        return error;
    }
}