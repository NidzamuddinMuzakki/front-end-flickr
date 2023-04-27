function Page(state = 0, action){
    switch(action.type){
        case "ChangePage":
            let statepage = state
            if(action.payload){
                statepage = action.payload.data;
            }
            
            return statepage
           
       default:
           return state  
        }
}

function RowPerPage(state = 10, action){
    switch(action.type){
        case "RowPerPage":
            let stateperpage = state
            if(action.payload){
                stateperpage = action.payload.data;
            }
            return stateperpage
           
       default:
           return state  
        }
}
function Loading(state = false, action){
    switch(action.type){
        case "Loading":
            let stateloading = state
            if(action.payload){
                stateloading = action.payload.data;
            }
            return stateloading
           
       default:
           return state  
        }
}
export {Page, RowPerPage, Loading}  