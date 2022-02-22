const trimp=()=>{
    let strHarcdcord= 'functionUp';
    return strHarcdcord.trim();
}
const lowerCase=()=>{
    let strHarcdcord='naVeeN'
    return strHarcdcord.toLowerCase();
}
const upperCase=()=>{
    let strHarcdcord='nAvEeN'
    return strHarcdcord.toLocaleUpperCase();
}
module.exports={
    trimp:trimp,
    lowerCase:lowerCase,
    upperCase:upperCase
}