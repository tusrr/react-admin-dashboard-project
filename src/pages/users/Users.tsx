import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable"
import { userRows } from "../../data";
import "./users.scss"
import { GridColDef} from "@mui/x-data-grid"
import{ useState} from 'react';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 100,
    renderCell:(params)=>{
      return <img src={params.row.img || "/noavatar.png"} alt=""/>
    }
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name', 
    width: 150,
    editable: true,  
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'email',
    width: 190,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'Created at',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'verified',
    headerName: 'Verified',
    type: 'boolean',
    width: 100,
    editable: true,
  },
  //hello tushar
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];


const Users = () => {

  const [open,setOpen]=useState(false);

  return (
    <div className="users"> 
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New User</button>
        
      </div>
      <DataTable slug ="users" columns = {columns} rows={userRows}/>
      {open && <Add slug ="user" columns = {columns} setOpen={setOpen}/>}
    </div>

   )
}

export default Users