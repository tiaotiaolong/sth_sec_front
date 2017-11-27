//action types
const ADD_RISKVERSION_DATA='ADD_RISKVERSION_DATA';

//reducer 

let RiskReducer=function(state,action){
    if (action.type === 'ADD_RISKVERSION_DATA') 
        return { datas: action.datas }
    return {datas:false}
}

export {RiskReducer}


//action creators
export const addRiskverisonData = (datas)=>{
    return {type:ADD_RISKVERSION_DATA,datas}
};