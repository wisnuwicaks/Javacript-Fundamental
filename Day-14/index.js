const mumble = (string) =>{
    hurufDepan = []
    
    olahKata = string.toLowerCase().split('')
    olahKata.forEach(element => {
        hurufDepan.push(element.toUpperCase())
    });

    for(a=0;a<hurufDepan.length;a++) {
        if (a == 0) {continue}
            for(i=0;i<a;i++){
                hurufDepan[a] += olahKata[a].toLowerCase() 
            }
    }
    return hurufDepan.join('-')
}

console.log(mumble("Hello"))

////asdasdasd