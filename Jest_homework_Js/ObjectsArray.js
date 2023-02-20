let PeopleInfo = [{"name": "Arman", "age": 20, "job":  "Programmer", "investments": 1000},
                     {"name": "Avetiq", "age": 23, "job":  "Lawyer:", "investments": 2000},
                     {"name": "Minas", "age": 23, "job":  "Lecturer", "investments": 1500},
                     {"name": "Meri", "age": 21, "job":  "President Npua ", "investments": 1300},
                     {"name": "Mushegh", "age": 18, "job":  "Chess player", "investments": 5500},
                     {"name": "Heghine", "age": 18, "job":  "Designer", "investments": 3500}]


function getInvestmentMoney(PeopleInfo){
    let sumMoney = 0;
    for ( let objInfo of PeopleInfo){
        if( objInfo["age"] <= 18){
            sumMoney +=objInfo["investments"];
        };
    };
    return sumMoney
}

function getInvestmentInfo(PeopleInfo){
    resArr = [];
    for ( let objInfo of PeopleInfo){
        resArr.push(`${objInfo["name"]} investment ${objInfo["investments"]}$`)
    };
    return resArr;
}

function getThreeMaxInvestors(PeopleInfo){
    let map = new Map();
    for ( let objInfo of PeopleInfo){
        map.set(objInfo["investments"],objInfo["name"])
    };
    console.log(map)
    InvestArr = [...map.keys()].sort();
    ln = InvestArr.length;
    resArr = [];
    for ( let i = ln-3; i<=ln-1; ++i ){
        resArr.push(map.get(InvestArr[i]))
    }; 
    return resArr;
}


module.exports = {
    getInvestmentMoney,
    getInvestmentInfo,
    getThreeMaxInvestors,
    PeopleInfo
}

