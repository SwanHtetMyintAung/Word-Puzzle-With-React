function ReplaceWith_(count , LetterAry ){
    let Text='';
    let i=0;
    for(i=0 ; i < count ; i++){
        if(!LetterAry[i]){
            Text +='_'
        }else{
            Text +=LetterAry[i]
        }
    }

    return Text;
}
export default ReplaceWith_;