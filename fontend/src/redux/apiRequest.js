import axios from "axios";
import { loginFailed, loginStart, loginSuccess, logOutFailed, logOutStart, logOutSuccess, registerFailed, registerStart, registerSuccess } from "./authSlice";


export const loginUser = async(user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("/v1/auth/login", user);
        dispatch(loginSuccess(res.data));
        navigate("/");
    } catch (error) {
        dispatch(loginFailed());
    }
};

export const registerUser = async (user, dispatch, navigate) =>{
    dispatch(registerStart());
    try {
        await axios.post("/v1/auth/register", user);
        dispatch(registerSuccess());
        navigate("/login");
    } catch (error) {
        dispatch(registerFailed());
    }
};

export const logOut = async (dispatch,id, navigate, accessToken, axiosJWT)=>{
    dispatch(logOutStart());
        try {
            await axiosJWT.post("/v1/auth/logout",id, {
                headers: {token: `Bearer ${accessToken}`},
            });
            dispatch(logOutSuccess);
            navigate("/login");
        } catch (error) {
            dispatch(logOutFailed);
        }
}