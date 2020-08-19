/*
*
*
*       Complete the handler logic below
*       
*       
*/

let inputRegex = /[a-z]+|[^a-z]+/gi

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    
    result = input.match(inputRegex)[0]
    
    let numberRegex = /\d/
    if(numberRegex.test(result) === false){
      result = 1
    }
    
    if(result.toString().includes('/')){
      let values = result.toString().split('/')
      if(values.length != 2){
        return 'invalid number'
      }
      values[0] = parseFloat(values[0])
      values[1] = parseFloat(values[1])
      result = parseFloat((values[0]/values[1]).toFixed(5))
    }
    
    if(isNaN(result)){
      return 'invalid number'
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    
    result = input.match(inputRegex)[1]
    
    if(!result){
      result = input.match(inputRegex)[0]
    }
    
    let validUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    
    if(!validUnits.includes(result)){
      return 'invalid unit'
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    switch(initUnit){
      case 'gal':
      case 'GAL':
        result = 'l'
        break;
      case 'L':
      case 'l':
        result = 'gal'
        break;
      case 'lbs':
      case 'LBS':
        result = 'kg'
        break;
      case 'kg':
      case 'KG':
        result = 'lbs'
        break;
      case 'mi':
      case 'MI':
        result = 'km'
        break;
      case 'km':
      case 'KM':
        result = 'mi'
        break;
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch(unit){
      case 'gal':
      case 'GAL':
        result = 'gallon(s)'
        break;
      case 'L':
      case 'l':
        result = 'liter(s)'
        break;
      case 'lbs':
      case 'LBS':
        result = 'pound(s)'
        break;
      case 'kg':
      case 'KG':
        result = 'kilogram(s)'
        break;
      case 'mi':
      case 'MI':
        result = 'mile(s)'
        break;
      case 'km':
      case 'KM':
        result = 'kilometer(s)'
        break;
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch(initUnit){
      case 'gal':
      case 'GAL':
        result = (initNum * galToL).toFixed(5)
        break;
      case 'L':
      case 'l':
        result = (initNum / galToL).toFixed(5)
        break;
      case 'lbs':
      case 'LBS':
        result = (initNum * lbsToKg).toFixed(5)
        break;
      case 'kg':
      case 'KG':
        result = (initNum / lbsToKg).toFixed(5)
        break;
      case 'mi':
      case 'MI':
        result = (initNum * miToKm).toFixed(5)
        break;
      case 'km':
      case 'KM':
        result = (initNum / miToKm).toFixed(5)
        break;
    }
    
    return parseFloat(result);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit)
    
    return result;
  };
  
}

module.exports = ConvertHandler;
