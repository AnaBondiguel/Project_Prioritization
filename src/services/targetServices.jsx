// import projectAPI from "../config/api";

// export async function getTargets() {
//   const response = await projectAPI.get('/api/targets');
//   return response.data;
// }

export async function getTargets(){
    const targets = [
        {id:1, name:"Free"},
        {id:2, name:"Pro"},
        {id:3, name:"Teams"},
        {id:4, name:"Education"},
        {id:5, name:"All"},
        {id:6, name:"Others"},
    ]

    return targets;
}