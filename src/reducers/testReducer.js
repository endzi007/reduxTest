let testReducer = (state = {}, action) => {
    switch (action.type) {
        case "TEST_ACTION":
            state = {...state, ime:"suad"}
            break;

        default:
            break;
    }
        return state;

}

export default testReducer;