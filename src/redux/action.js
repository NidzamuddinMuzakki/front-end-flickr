function ChangePage(data){
   
    return {
        type: "ChangePage",
        payload: {
            data
        }
    }
      
}

function RowPerPage(data){
   
    return {
        type: "RowPerPage",
        payload: {
            data
        }
    }
      
}

function ChangeLoading(data){
   
    return {
        type: "Loading",
        payload: {
            data
        }
    }
      
}
export {ChangePage, RowPerPage, ChangeLoading}