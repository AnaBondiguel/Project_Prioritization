// import projectAPI from "../config/api";

// export async function getConfidences() {
//   const response = await projectAPI.get('/api/confidences');
//   return response.data;
// }



export async function getConfidences(){
    const confidences = [
        {id:1, name:"Small"},
        {id:2, name:"Medium"},
        {id:3, name:"Large"},
        {id:4, name:"Xlarge"},
    ]

    return confidences;
}