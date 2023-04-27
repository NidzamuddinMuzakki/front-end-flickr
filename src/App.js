
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Pagination from './components/pagination'
import CustomImageList from './components/image-list'
import { Input } from '@mui/material';
import {useSelector,useDispatch} from 'react-redux';
import { ChangeLoading, ChangePage, RowPerPage } from './redux/action';
function App() {
  const dispatch = useDispatch();
  const [itemData, setItemData] = useState([])
  const [search, setSearch] = useState('')
  const loading = useSelector(state=> state.Loading)
 const page = useSelector(state=>state?.Page)
  const perpage  = useSelector(state=>state.RowPerPage)
  const [total, setTotal] = useState(0)
  const [timeout] = useState(10000)

  const handleChangePage = (
    event,
    newPage,
  ) => {
    if(!loading){
      
      dispatch(ChangePage(newPage));
    }
  };

  const handleChangeRowsPerPage = (event) => {
    if(!loading){
      dispatch(RowPerPage(parseInt(event.target.value, 10)));
      dispatch(ChangePage(0));

    }
  };
  const handleSearch = (e)=>{
    
    setSearch(e.target.value)
  }
  useEffect(()=>{
    dispatch(ChangePage(0))
  },[search, dispatch])
  useEffect(()=>{
    let unmounted = false;
    let source = axios.CancelToken.source();
    dispatch(ChangeLoading(true))
    setItemData([])
    let url =''
    if(search){
      url = `https://nidzam-backend-flickr.onrender.com/photos?page=${page+1}&per_page=${perpage}&search=${search}`
    }else{
      url = `https://nidzam-backend-flickr.onrender.com/photos?page=${page+1}&per_page=${perpage}`
    }
    axios.get(url,{
      cancelToken: source.token,
      timeout: timeout
  }).then((res)=>{  
    if(!unmounted){
      if(res.data && res.data.photos && res.data.photos && res.data.photos.photo){
          setItemData(res.data.photos.photo)
        }
      
        setTotal(res.data.photos.total)
        dispatch(ChangeLoading(false))
    }
      
    }).catch(e=>{
      if (!unmounted) {
       
        dispatch(ChangeLoading(false));
        if (axios.isCancel(e)) {
            console.log(`request cancelled:${e.message}`);
        } else {
            console.log("another error happened:" + e.message);
        }
    }
    }).finally(()=>{
      
    })
    return function () {
      unmounted = true;
      dispatch(ChangeLoading(false))
      source.cancel("Cancelling in cleanup");
  };
  },[search, page, perpage, timeout, dispatch])
  return (
     <div className="App">
       <div style={{position:'sticky', top:0, zIndex:100, display:'flex', justifyContent:'space-between'}}>
            <div style={{marginLeft:'20px'}}>

              <Input style={{background:"white"}} placeholder='search...' value={search} onChange={handleSearch}></Input>
            </div>
            <Pagination page={page} perpage={perpage} handleChangePage={handleChangePage} total={total} handleChangeRowsPerPage={handleChangeRowsPerPage} />

        </div>
      <CustomImageList itemData={itemData} search={search} handleSearch={handleSearch} loading={loading}></CustomImageList>
      
    </div>
  );
}

export default App;
