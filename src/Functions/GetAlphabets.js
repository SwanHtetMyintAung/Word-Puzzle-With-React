function GetAlphabets(){
    let AlphabetAry = [];
    let  asciiCount = 97;
    for(asciiCount = 97; asciiCount<= 122 ; asciiCount++){
        AlphabetAry.push(String.fromCharCode(asciiCount));
    }
    return AlphabetAry;
}
export default GetAlphabets;