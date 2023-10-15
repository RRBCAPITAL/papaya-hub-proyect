import axios from "axios";

export const updateUser = async (id, data) => {

    console.log(id + " " + data);
  
      const response = await axios.put(`/api/user/${id}`, data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  
      console.log(response);
  }