const moment = require("moment");

console.log('실무코딩', moment().format())

var a  = 10
const b = 20
let c = 30

console.clear()
console.log({a,b,c})

// not primitive type의 const 적용
// 객체 또는 배열 const val = {a:1, b:"문자열"}
console.clear()
const obj = {p1 : 10, p2: 20, p3: '문자열'}

console.log(obj)

obj.p1 = 2000
console.log(obj)


// Primitive 원시 자료형 : 객체가 아니면서 메서드도 가지지 않는 데이터
// String, Number, bigInt, boolean, undefined, symbol, null


const obj2 = {p1 : 10, p2: 20, p3: '문자열'}

let isSame = obj == obj2
console.log(isSame)

console.log(JSON.stringify(obj))
console.clear()

console.log(vc, vf, hoisting())
var vc
let vf
// 호이스팅에 대해 이해
function hoisting() {
    return '호이스팅'
}