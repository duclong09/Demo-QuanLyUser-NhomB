import React, { Component } from 'react';

class AddUser extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      trangthai: true,
      id:"",
      name:"",
      permission:"",
      phone:""
    }
  }

  // Thêm start
  isChange = (event) =>
  {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });

    //Đóng gói 
    var item ={};
    item.id = this.state.id;
    item.name = this.state.name;
    item.permission = this.state.permission;
    item.phone = this.state.phone;
    // console.log(item);
    
  }

  hienThiFrom = () => {
    if(this.state.trangthai === true)
    {
      return <button type="button" className="btn btn-outline-danger" onClick={()=>this.thaydoiTrangThai()}>Đóng lại</button>
    }
    else
    {
      return <button type="button" className="btn btn-outline-success" onClick={()=>this.thaydoiTrangThai()}>Thêm mới</button>
    }
  }

 thaydoiTrangThai = () => 
 {
   this.setState({
     trangthai: !this.state.trangthai
   })
 }

 trangThaiFrom = () =>
 {
  if(this.state.trangthai === true)
  {
    return (
      <div className="card border-success mb-3" style={{maxWidth: '18rem'}}>
            <div className="card-header">Thêm mới vào hệ thống</div>
            <div className="card-body text-success">
              <form className="form-inline">
                <div className="form-group">
                  <input type="text" name="name" onChange={(event) => this.isChange(event)} placeholder="Tên user" aria-describedby="helpId" />
                </div>
              </form> <br />
              <form className="form-inline">
                <div className="form-group">
                  <input type="text" name="phone" onChange={(event) => this.isChange(event)} placeholder="SDT" aria-describedby="helpId" />
                </div>
              </form> <br />
              <div className="input-group">
                <select className="custom-select" name="permission" onChange={(event) => this.isChange(event)} id="inputGroupSelect01">
                  <option value>Quyền...</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Modrator</option>
                  <option value={3}>Nomarl</option>
                </select>
              </div>
            </div>
            <button onClick={(name,phone,permission)=>this.props.add(this.state.name, this.state.phone, this.state.permission)} type="button" className="btn btn-primary">Thêm mới</button>
          </div>
    )
  }
 }
  
    render() {
      // console.log(this.state);
      
        return (
            <div className="col-3">
        <div className="card text-left" style={{top: '48px'}}>

          {
            this.hienThiFrom()
          }   

          {
            this.trangThaiFrom()
          }

        </div>
      </div>

        );
    }
}

export default AddUser;