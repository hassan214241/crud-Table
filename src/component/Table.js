import React, { useState } from 'react';
import MaterialTable from 'material-table'

const empList = [
  { id: 1, name: "Hassan", email: 'hassan@gmail.com', phone: 923046721523, city: "Gojra" },
  { id: 2, name: "Umar", email: 'umar@gmail.com', phone: 923045866023, city: "Lahore" },
  { id: 3, name: "Sajjad", email: 'sajjad342@gmail.com', phone: 923446625523, city: "Faisalabad" },
  { id: 4, name: "Shahbaz", email: 'shahbaz@gmail.com', phone: 923157855546, city: "Gojra" },
  { id: 5, name: "Nabeel", email: 'nabeel123@gmail.com', phone: 923455507035, city: "Faisalabad" },
]

function Table() {

  const [data, setData] = useState(empList)
  const columns = [
    { title: "ID", field: "id", editable: false },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: 'phone', },
    { title: "City", field: "city", }
  ]


  return (
    <div >
   
      <h2 align="center">Assignment</h2>
      <h4 align='center'>Material Table with CRUD operation</h4>
      <MaterialTable
        title="Students Data"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...data]
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
            const index=oldRow.tableData.id;
            const updatedRows=[...data]
            updatedRows[index]=updatedRow
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          })

        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first"
        }}
      />
    </div>
  );
}

export default Table;
