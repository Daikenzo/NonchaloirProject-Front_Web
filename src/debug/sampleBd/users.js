export const users = [
    {
      id:1,
      name:"invité",
      role:"user"
    },
    {
      id:2,
      name:"Daikenzo",
      role: "admin",
      email:"daikenzo@nchalance.test",
      birthday: '',
      phone:'0242954112'
    },
    {
      id:3,
      name:"Henri",
      role: "user",
      email:"henribrunet@test.com",
      birthday:'2003-12-01'
    },
    {
      id:4,
      name:"James",
      role: "user",
      email:"jamesrocket@pika.com",
      birthday:'1992-05-12',
      phone:'02123450'
    }

  ];
 export const userIsloggin = (user) => {
    user.islogin = user.name !== ("invité" || null)? true: false;
    return user.islogin;
  }
  
  export const GetUserInfo = (id = 0) => {
    const userInfo = users.find((user) => {
      return (user.id == id);
    })
    return userInfo;
  }
  export const UserDefault = 2;


  // module.exports = (users, user(users[2]));