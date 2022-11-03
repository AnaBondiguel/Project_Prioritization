// import projectAPI from "../config/api";

// export async function getImpacts() {
//   const response = await projectAPI.get('/api/impacts');
//   return response.data;
// }
export async function getImpacts(){
    const impacts = [
        {id:1, name:"Small"},
        {id:2, name:"Medium"},
        {id:3, name:"Large"},
        {id:4, name:"Xlarge"},
    ]

    return impacts;
}