export const getMachine = (rupees) => {
    var x = rupees;
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
}

export const pmtvalue = async (ir, np, pv, fv, type) => {

    if (!fv) fv = 0;
    if (!type) type = 0;

    if (Number(ir) == 0) return -(Number(pv) + Number(fv)) / Number(np);

    let pvif = Math.pow(1 + Number(ir), Number(np));
    let pmt = - Number(ir) * (Number(pv) * Number(pvif) + Number(fv)) / (Number(pvif) - 1);

    if (type == 1) {
        pmt /= (1 + Number(ir));
    };

    return pmt.toFixed(2);
}
const conv_number =async (expr, decplaces) =>{
    var str = "" + Math.round(eval(expr) * Math.pow(10, decplaces));
    while (str.length <= decplaces) {
      str = "0" + str;
    }
    var decpoint = str.length - decplaces;
    return (str.substring(0, decpoint) + "." + str.substring(decpoint, str.length));
}

const trunc =async (x, posiciones = 0)=> {
    var s = x.toString()
    var l = s.length
    var decimalLength = s.indexOf('.') + 1
    if (decimalLength === 0) {
      return Number(x)
    }
    var numStr = s.substr(0, decimalLength + posiciones)
    return Number(numStr)
  }
export const presentValue =async (rate, nper, pmt, fv)=> {
    let  pv_value;
    if (rate == 0) {
     pv_value = -(fv + (pmt * nper));
    } else {
      let x = Math.pow(1 + rate, -nper);
     let  y = Math.pow(1 + rate, nper);
      pv_value = -(x * (fv * rate - pmt + y * pmt)) / rate;
    }
    pv_value =await conv_number(pv_value, 2);
    return (await trunc(pv_value * -1, 2));
  }

 export  const FV = async (PV, i, n)=> {
    var x = (1 + i / 100)
    var FV = PV * (Math.pow(x, n))
    return FV;
  }


 export  const RetirementPresentValue =async (rate, num, amount, remain, type)=> {
    let factor;
    let pv_value;
    let newrate = 1 + rate
    let powValue = Math.pow(newrate, -num)
    let oneminuspowval = 1 - powValue
    let divideoneminuspowval = oneminuspowval / rate
    let elsedivideoneminuspowval = (oneminuspowval * newrate) / rate
  
    if (type == 0) {
      factor = (rate == 0 ? num : divideoneminuspowval);
    } else {
      factor = (rate == 0 ? num : elsedivideoneminuspowval);
    }
  
    if (remain == 0) {
      pv_value = amount * factor
    } else {
      pv_value = amount * factor - remain * powValue
    }
    //return -amount * factor - remain * powValue
  
    pv_value =await conv_number(pv_value, 2);
  
    return ( await trunc(pv_value * -1, 2));
  }