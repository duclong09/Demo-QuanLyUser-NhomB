import React, { Component } from 'react';
import './App.scss';
import Header from './Component/Header';
import Search from './Component/Search';
import TableData from './Component/TableData';
import AddUser from './Component/AddUser';

import dulieu from './Component/Data.json';
import { v1 as uuidv1 } from 'uuid';
uuidv1();
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hienthiFrom: true,
      data: dulieu,
      SearchText:'',
      EditUser: false,
      userEditObject:{} // State để load thông tin vào form
    }
  }
  //Xóa
  deleteUser = (idUser) =>
  {
    // console.log(idUser);
    //Duyệt tất cả dữ liệu có trong state
    var tempData = this.state.data;
    tempData = tempData.filter(item => item.id !== idUser)
    console.log(tempData);
    this.setState({
      data: tempData
    })
    
    
  }
  //Gửi thông tin lên App
  getEditUserApp = (info) =>{
    console.log("thông tin đã được sửa thành " + info.name);
    this.state.data.forEach((value,key) =>{
      if(value.id === info.id)
      {
        value.name =info.name;
        value.phone =info.phone;
        value.permission =info.permission;
      }
    })
  }

  //An hiện sửa
  changeEditUserStatus = () =>
  {
    this.setState({
      EditUser: !this.state.EditUser //Truyền vào search
    })
  }
  // ẨN Hiện Them

  GiveData = (dulieu) =>
  {
    //Lưu giá trị nhận được vào state
    this.setState({
      SearchText:dulieu
    })

    // console.log("Dữ liệu tìm là " + this.state.SearchText)
  }
  
  // Lấy dữ liệu
  GetNewUserData = (name,phone,permission) =>{
    console.log("Đã kết nối");

    var item ={};
    item.id = uuidv1();
    item.name = name;
    item.permission = permission;
    item.phone = phone;
    // Truyền dữ liệu vào bảng
    var items = this.state.data;
    items.push(item)
    
    this.setState({
      data:items
    });

    console.log(this.state.data);
    
  }

  //Kết nối App vào tableData(Sửa dữ liệu)
  editUser = (user) =>
  {
    // console.log("đã kết nối");
    // console.log(user);
    //Load thông tin vào form
    this.setState({
      userEditObject:user
    })
  }

  render() {
    //Truyền dữ liệu vào bằng localStorage
    localStorage.setItem('UserData', JSON.stringify(dulieu));

    //Tìm kiếm start
    var ketqua = [];
    this.state.data.forEach((item)=>
    {
      if(item.name.indexOf(this.state.SearchText) !== -1)
      {
        ketqua.push(item);
      }
    })
    // console.log(ketqua);
    
    //Tìm kiếm End
    //Sửa Start
    return (
      <div>
        <Header/>
      <div className="searchFrom">
        <div className="container">
          <div className="row">
            <Search
            getEditUserApp ={(info)=> this.getEditUserApp(info)}
            GiveDatas={(dulieu)=>this.GiveData(dulieu)}
            EditUser = {this.state.EditUser}
            changeEditUserStatus = {()=> this.changeEditUserStatus}
            userEditObject={this.state.userEditObject}
            />
            <TableData
            deleteUser = {(idUser) => this.deleteUser(idUser)}
            edit={(user)=>this.editUser(user)}
            dataUser={ketqua}
            changeEditUserStatus = {()=> this.changeEditUserStatus()}/>
            <AddUser add={(name,phone,permission)=>this.GetNewUserData(name,phone,permission)} hienthiFrom={this.state.hienthiFrom}/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
