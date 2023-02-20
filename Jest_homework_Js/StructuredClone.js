const user  = {
    first_name:"Arman",
    last_name:"Hayrapetyan",
    knowledge:{
        programming:{python:"Django"},
        mathematics:{LinearAlgebra:"Graphs"}
    }
}
  
function structuredClone(user) {
    const clone = {};
    for (const key in user) {
        if (Object.hasOwnProperty.call(user, key)) {
            clone[key] = user[key];
            if (typeof user[key] === "object" && !Array.isArray(user[key]) && user[key] !== null){
                clone[key] = structuredClone(user[key]);
            }
        }
    }
        return clone;
}
  
  const clone = structuredClone(user);
  const clone1 = structuredClone(user)
  clone1.knowledge.mathematics.LinearAlgebra = "Sets"
  clone1.knowledge.programming = "c++";
  console.log(clone);
  console.log(clone1);

module.exports = {
    structuredClone,
    user
}
