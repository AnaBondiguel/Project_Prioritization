// import projectAPI from "../config/api";

// export async function getTargets() {
//   const response = await projectAPI.get('/api/targets');
//   return response.data;
// }

 export async function getTargets(){
    const targets = [
        {name:"Free"},
        {name:"Pro"},
        {name:"Teams"},
        {name:"Education"},
        {name:"All"},
        {name:"Others"},
    ]

    return targets;
 }


// export async function getImpacts() {
//   const response = await projectAPI.get('/api/impacts');
//   return response.data;
// }
export async function getImpacts(){
    const impacts = [
        {name:"Small"},
        {name:"Medium"},
        {name:"Large"},
        {name:"Xlarge"},
    ]

    return impacts;
}

// export async function getConfidences() {
//   const response = await projectAPI.get('/api/confidences');
//   return response.data;
// }

export async function getConfidences(){
    const confidences = [
        {name:"Small"},
        {name:"Medium"},
        {name:"Large"},
        {name:"Xlarge"},
    ]

    return confidences;
}

// export async function getEfforts() {
//   const response = await projectAPI.get('/api/efforts');
//   return response.data;
// }

export async function getEfforts(){
    const efforts = [
        {name:"Small"},
        {name:"Medium"},
        {name:"Large"},
        {name:"Xlarge"},
    ]

    return efforts;
}