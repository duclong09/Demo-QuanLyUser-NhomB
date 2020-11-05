import React, { Component } from 'react';

class TableDataRow extends Component {
    //Xóa
    deleteButtonClick = (idUser) =>{
        this.props.deleteButtonClick(idUser);
        
    }

    permission = () =>{
        if(this.props.permission === 1)
        {
            return "Admin";
        }
        else if (this.props.permission === 2)
        {
            return "Modrator"
        }
        else if (this.props.permission === 3)
        {
            return "Normal"
        }
    }
    
    editClick = () =>
    {
        this.props.editClick();
        this.props.changeEditUserStatus();
    }
    render() {
        return (   
            <tr>
              <td >{this.props.stt+1}</td>
              <td>{this.props.name}</td>
              <td>{this.props.phone}</td>
              <td>{this.permission()}</td>
              <td><button onClick={()=>this.editClick()} type="button" className="btn btn-success">SỬA</button></td>
              <td><button type="button" className="btn btn-danger" onClick={(idUser)=>this.deleteButtonClick(this.props.id)}>XOÁ</button></td>
            </tr>
        );
    }
}

export default TableDataRow;