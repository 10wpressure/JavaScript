function testRegExp(s, sub_s) {
    var myPattern = new RegExp(sub_s,"g");
    s = s.match(myPattern);
    return s.join()
}

console.log(testRegExp('Andsirdaarrevarariarewbutovearrmararan', 'ar'))
