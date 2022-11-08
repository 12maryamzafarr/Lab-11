function sum(x,y){
    let  z = 10;
    let s1=0;
    let s2=0;
    let s3=0;
        
        for(let a=1; a<=x; a++){
            if((a*x)<z){
            s1=s1+a*x;
            }
        }

        for(let b=1; b<=y; b++){
            if((b*y)<z){
            s2=s2+b*y;
            }
        }
        s3=s1+s2;
        return(s3)
     
}

module.exports.sum = sum;