var list=[5,0,22,1,18,6]
for(i=1;i<list.length;i++){
    var temp=list[i]
    for(j=i-1;j>=0;j--){
    if(temp<list[j]){
        list[j+1]=list[j]
        console.log(list)
    }
    else{
        break
    }

}
list[j+1]=temp
console.log(list)
}

