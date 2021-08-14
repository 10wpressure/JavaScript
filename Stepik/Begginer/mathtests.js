function testMath(a, b, c) {
    return 1/2 * a * b * Math.sin(c * Math.PI / 180);
}

function testMath2(a, b, c, d) {
    return Math.floor((Math.max(a, b, c, d)/Math.min(a,b,c,d)))
}

console.log(testMath2(1, 4, 8, 8))

let a =[4,5,6,7,8,9,333]
a.forEach(a => ()=>{
  
})
