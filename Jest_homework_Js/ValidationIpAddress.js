let ipNumbers = "25525511135";
let LenIpNumbers = ipNumbers.length;

function ValidateIpAddress( s, i, j, level, temp, res){
	if (i == (j + 1) && level == 5){
		res.push(temp.substring(1,));
	}
	for (let k = i; k < i + 3 && k <= j; k++) {
		let ad = s.substring(i, k + 1);
		if ((s[i] == '0' && ad.length > 1) || parseInt(ad) > 255)
			return;
            ValidateIpAddress(s, k + 1, j, level + 1, temp + '.' + ad, res);
	}
}

let resArr = [];
ValidateIpAddress(ipNumbers, 0, LenIpNumbers - 1, 1, "", resArr);
console.log(resArr)