import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
//Xóa
deleteButtonClick = (idUser) =>{
  // console.log(idUser);
  this.props.deleteUser(idUser)
}

  mappingData = () =>this.props.dataUser.map((value,key) =>(
    <TableDataRow
    deleteButtonClick = {(idUser)=>this.deleteButtonClick(idUser)}
    editClick={(user)=>this.props.edit(value)} 
    changeEditUserStatus = {()=> this.props.changeEditUserStatus()}
    id={value.id}
    stt={key}
    name={value.name}
    phone={value.phone}
    permission={value.permission}
    key={key}/>
  ))

    render() {
      // console.log(this.props.dataUser);
      
        return (
            <div className="col-9">
        <table className="table table-striped table-inverse table-responsive">
          <thead className="thead-inverse text-center">
            <tr>
              <th>STT</th>
              <th>TÊN</th>
              <th>Số Điện Thoại</th>
              <th>Quyền</th>
              <th>HÀNH ĐỘNG</th>
            </tr>
          </thead>
          <tbody>
            
            {this.mappingData()}

          </tbody>
        </table>
      </div>
        );
    }
}

export default TableData;