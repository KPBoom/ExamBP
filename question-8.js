// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
let newUser = [];
const getUser = () => {
    return fetch("https://jsonplaceholder.typicode.com/users");
}
const handleResponse = (response) => {
    return  response.json();
  };
  
  const onSuccess = (data) => {
      for(let i=0; i<data.length;i++){
        newUser.push(data[i].name);
      }  console.log(newUser);
  };

  getUser()
  .then(handleResponse)
  .then(onSuccess);
