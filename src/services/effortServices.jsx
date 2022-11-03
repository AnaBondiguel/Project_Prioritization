// import projectAPI from "../config/api";

// export async function getEfforts() {
//   const response = await projectAPI.get('/api/efforts');
//   return response.data;
// }


export async function getEfforts(){
    const efforts = [
        {id:1, name:"Small"},
        {id:2, name:"Medium"},
        {id:3, name:"Large"},
        {id:4, name:"Xlarge"},
    ]

    return efforts;
}