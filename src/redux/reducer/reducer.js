let initialState = {
    contactList:[],
    keyword: ""
};

function reducer(state=initialState, action) {

    // 객체 destructuring 문법!  action. 이 반복적으로 사용되니까...
    const {type,payload} = action //type,payload는 action으로부터 뽑아내겠다.
    switch(type){
        case "ADD_CONTACT":
            return{
                ...state, 
                contactList:[
                    ...state.contactList,
                    {
                        name: payload.name, 
                        phoneNumber: payload.phoneNumber
                    },
                ],
            };

        case "SEARCH_BY_USERNAME":
            return { ...state, keyword: payload.keyword };

        default:
            return {...state};
    }
}

export default reducer;