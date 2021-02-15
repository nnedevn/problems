function areSimilar(a, b) {
    if (a.length === 0 || b.length === 0) return false;
    if (a.length !== b.length) return false;
    if (arraysAreSame(a,b)) return true;
    
    let aPos = [];
    let bPos = []

    for (let i = 0; i < a.length; i++){
        if (a[i] !== b[i]){
            aPos.push(a[i]);
            bPos.push(b[i]);    
        }
    }

    if (aPos.length === 2 && arraysAreSame(aPos, bPos.reverse())){
        return true;
    }
    
    return false;
}

function arraysAreSame(arr1, arr2){
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]){
            return false
        }
    }
    return true;
}


let a = [1 ,2, 3, 4],
    b = [2, 1, 4, 3]

console.log(areSimilar(a, b))