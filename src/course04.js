function checkData(age, grade, gender) {
    if (age === 14) {
        if (grade === 6) {
            if (gender === 'F') {
                console.log('14세 6학년 여학생')
            } else {
                console.log('여성 아님')
            }
        } else {
            console.log('6학년이 아님')
        }
    } else {
        console.log('14세가 아님')
    }
}


checkData(14, 6, 'F')
checkData(14, 5, 'M')

console.clear()

// 1. == (auto casting) , === (type check) 이해

const v1 = 1
const v2 = '1'

console.log(v1 == v2)
console.log(v1 === v2)
console.log(typeof v1, typeof v2)

function checkBoolean(val) {
    console.log({val}, !val ? false : true);
}

checkBoolean(true);

console.clear()

function printP(obj) {
    if (!obj) {
        console.log('manual undefined')
    } else {
        console.log(obj.p)
    }
}

function printP2(obj) {
    console.log(obj?.p)    
}

const obj = {p: 10}
printP(obj)
printP()
printP2()

function test(code) {
    console.log(code)
}

function runByCode (code) {
    const obj = {
        'CD': function() {
            test('CD')
        },
        'DVD': function() {
            test('DVD')
        }
    }
    return code in obj ? obj[code]() : test('잘못된 코드')
}

runByCode('CD')