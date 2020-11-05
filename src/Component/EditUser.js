import React, { Component } from 'react';

class EditUser extends Component {
constructor(props) {
  super(props);
  this.state ={
    id: this.props.userEditObject.id,
    name: this.props.userEditObject.name,
    phone: this.props.userEditObject.phone,
    permission: this.props.userEditObject.permission
  }
}

  isChange = (event) =>
  {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    })
  }

  //Lưu thông tin
  saveButton = () =>
  {
    var info = {};
    info.id = this.state.id;
    info.name = this.state.name;
    info.phone = this.state.phone;
    info.permission = this.state.permission;

    this.props.getEditUser(info);
    this.props.changeEditUserStatus();
  }

    render() {
      // console.log(this.state);
      
        return (
          <div className="card border-success mb-3 " style={{maxWidth: '18rem'}}>
        <div className="card-header">Sửa Thông Tin Người Dùng</div>
        <div className="card-body text-success">
          <form className="form-inline">
            <div className="form-group">
              <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.name} type="text" name="name" placeholder="Tên user" aria-describedby="helpId" />
            </div>
          </form> <br />
          <form className="form-inline">
            <div className="form-group">
              <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.phone} type="text" name="phone" placeholder="SDT" aria-describedby="helpId" />
            </div>
          </form> <br />
          <div className="input-group">
            <select onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.permission} className="custom-select" name="permission" id="inputGroupSelect01">
              <option value>Quyền...</option>
              <option value={1}>Admin</option>
              <option value={2}>Modrator</option>
              <option value={3}>Nomarl</option>
            </select>
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={()=>this.saveButton()}>Lưu</button>
      </div>
          
        );
    }
}

export default EditUser;