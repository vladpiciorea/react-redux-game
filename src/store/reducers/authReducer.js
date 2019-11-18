const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state, authError: 'Login failed'
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state, authError: null
            };
        case 'SIGNOUT_SUCCESS':
            console.log('sign out')
            return {
                ...state, authError: null
            };
        case 'SIGNUP_SUCCESS':
            console.log('SIGNUP out')
            return state;
        case 'SIGNUP_ERROR':
            console.log('SIGNUP out')
            return {
                ...state, authError: action.err.message
            };
        default:
            return state;
    }
};

export default authReducer;