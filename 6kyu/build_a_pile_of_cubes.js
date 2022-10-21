function findNb (m) {
    let tot = 0;
    let n = 0;

    while (tot < m) {
        n += 1
        tot += n**3 
    }

    return tot === m ? n : 0
};

