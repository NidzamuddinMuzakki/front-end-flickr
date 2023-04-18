import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

export default function Pagination({total,handleChangeRowsPerPage,handleChangePage, page, perpage}) {
  

  return (
    <div style={{background:"white"}}>
        
        <TablePagination
          component="div"
          count={total}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={perpage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </div>
  );
}