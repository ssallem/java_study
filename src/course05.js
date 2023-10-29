// const { construct } = require("ramda")

// function f1(a,b) {
//     console.log(a,b)
// }

// const f2 = function (a, b) {
//     console.log(a, b)
// }

// const obj = {
//     p: 1, 
//     fnt: function (a, b) {
//         console.log(a, b)
//     }
// }

// const f3 = (a, b) => {
//     console.log(a, b)
// }

// f1(1, 2)
// f2(3, 4)
// f3(5, 6)

// console.log(typeof f1, typeof f2, typeof f3)

// obj.fnt(10,20)

// console.clear()

// // java의 this 

// const obj2 = {
//     p: 10,
//     fnt1: function() {
//         console.log(this, this.p)
//     },
//     fnt2: function() {
//         setTimeout(function () {
//             console.log(this, this.p)
//         }, 1000)
//     },
//     fnt3: function() {
//         setTimeout(() => {
//             console.log(this, this.p)
//         }, 2000)
//     },
// }
// console.clear()
// obj2.fnt1()
// obj2.fnt2()
// obj2.fnt3()

// console.clear()

// // 화살표 함수 만드는 법
// function hoisting() {
//     return '실무코딩'
// }

// const hoisting_ = () => {
//     return '실무코딩2'
// }

// console.log(hoisting(), hoisting_())

// function test(value) {
//     console.log(value)
// }

// // 1. argument가 1개일 경우 괄호 생략 가능
// const test_ = value => {
//     console.log(value)
// }

// // 2. 함수가 값을 리턴할 때, 그리고 실행문이 하나일 때, 중괄호와 return문 생략 가능
// const test__ = value => console.log(value)

// // 3. argument 1개일 경우 value 삭제 가능
// const test2__ = console.log

// test('김성주')
// test_('김성주2')
// test__('김성주2')
// test2__('ssallem')

// // 구조분해 할 경우 괄호 생략 불가능
// const arg = {p: 1}

// const printArg = a => console.log(a.p)
// const printArg_ = ({p}) => console.log(p)

// printArg(arg)
// printArg_(arg)

// // 객체를 리턴할 경우
// const retObj = () => {p:1}
// const retObj2 = () => ({p:2})

// console.log(retObj())
// console.log(retObj2())

// console.clear()

class ClassA {
    constructor() {
        this.p = 3
        this.aa = '13d3'
    }

    print = () => console.log(this.p, this.aa)    
}

function ClassB() {
    this.p = 3,
    this.print = () => console.log(this.p)
}

class ClassC extends ClassA {
    constructor(flag) {
        super()
        this.p2 = !flag ? 12 : 200
    }
    print2 = () => console.log(this.p2)
}

const a = new ClassA()
const b = {
    p: 3,
    print: function() {
        console.log(this.p)
    }
}

const c = new ClassB()
const d = new ClassC(false)
a.print()
b.print()
c.print()
d.print2()

console.log(ClassA, ClassB)
console.log(typeof a, typeof b)

console.clear()

class Logger {
    constructor() {
        this.name = 'logger'     
        this.print = this.print.bind(this)   
    }

    print(msg) {
        // console.log(this.name + ':' + msg)
        console.log(this)
    }

    print2 = msg => console.log(this.name + ':' + msg)
    
}

const logger = new Logger()

logger.print('메세지')

console.clear()
const {print, print2} = logger
print('print1 aaa')
print2('aaa')

console.clear()

const ex1 = function() {
    console.log(arguments)
}

// 1. 화살표 함수는 argument 키워드 사용 불가
// const ex1_ = () => console.log(arguments)

ex1(1, 2 , '문자열')
// ex1_(3, 4 , '문자열2')

// 2. generator는 funtion* 선언때문에 화살표 함수로 만들수 없다.

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

console.log(gen().next())
console.log(gen().next())
console.log(gen().next())

// 3.프로타입 선언 할 때 화살표 함수 됩니다.

Object.prototype.sayHi = () => console.log('hi')
const obj = {}
obj.sayHi()