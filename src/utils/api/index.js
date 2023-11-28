import { authAxiousInstance1, axiosInstence } from "./api"


const endpoints = {
    SIGN_IN: "auth/signin",
    SIGN_UP: "/auth/signup",
    NEW_GET_CURRENT_USER: 'auth/currentCustomer',
    TRIGGER_OTP: "/auth/jtuserotp/trigger",
    TEMPLE_LIST: 'jtprofile/list',

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

export const userSignUp = async data => {
    try {
        let result = await authAxiousInstance1.post(
            `${endpoints.SIGN_UP}`,
            data,
        );
        return result;
    } catch (error) {
        console.log('error in login', error);
        return error;
    }
};

export const generateOTP = async data => {
    try {
        let result = await authAxiousInstance1.post(`${endpoints.TRIGGER_OTP}`, data);
        return result;
    } catch (error) {
        console.log('error in login', error);
        return error;
    }
}

export const AdminTemples = async () => {
    try {
        let result = await axiosInstence.get(`${endpoints.TEMPLE_LIST}`);
        return result;
    } catch (err) {
        console.log("Error", err);
        return err;
    }
}