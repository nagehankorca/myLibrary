import actionTypes from "../action/actionTypes";

const initialState = {
    start: false,
    success: false,
    categories: [],
    fail: false,
    errorMassege: "",
}
const categoriesReducer = (state = initialState, action) => {
    if (action.type === "FETCH_CATEGORIES_START") {
        return {
            ...state,
            start: true,
        };
    }
    if (action.type === "FETCH_CATEGORIES_SUCCESS") {
        return {
            ...state,
            start: false,
            success: true,
            categories: action.payload,
        };
    }
    if (action.type === "FETCH_CATEGORIES_FAIL") {
        return {
            ...state,
            start: false,
            fail: true,
            errorMassege: action.payload,

        };
    }

    return state;
};


export default categoriesReducer;