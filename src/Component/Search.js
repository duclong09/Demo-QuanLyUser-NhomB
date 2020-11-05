import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {

  constructor(props) {
    super(props);
    //Tạo 1 biến trung gian
    this.state ={
      tempValue: '',
      userObj:{}
    }
    
  }

  isChange = (event) =>{
    console.log(event.target.value)
    this.setState({
      tempValue: event.target.value
    })
    this.props.GiveDatas(this.state.tempValue)
  }

  //Lấy dữ liệu gửi lên App
  getEditUser = (info) =>{
    this.setState({
      userObj: info
    });
    this.props.getEditUserApp(info)
  }

  isShowEditUser = () =>
  {
    if(this.props.EditUser === true)
    {
      return <EditUser
      getEditUser = {(info)=>this.getEditUser(info)}
      userEditObject ={this.props.userEditObject}
      changeEditUserStatus={this.props.changeEditUserStatus()}/>
    }
  }
render    () {
        return (
            <div>
            <div className="col-12">
            <div className="row">
              {this.isShowEditUser()}
            </div>
          </div>
          <div className="col-12">
              <div className="form-group">
                <div className="btn-group">
                  <input type="text" className="form-control" onChange={(event)=>this.isChange(event)} placeholder="Nhập thông tim cần tìm..." />
                  <button type="button" className="btn btn-success" onClick={(dulieu)=>this.props.GiveDatas(this.state.tempValue)}>Submit</button>
                </div>
              </div>
            </div>
            <div className="col-12">
              <hr />
            </div>
          </div>
    
        );
    }
}

export default Search;