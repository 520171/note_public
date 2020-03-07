const arr: any[] = [1, 3, 6, '9', ]
for (let a of arr){
    console.log(a)
}

let tuple: [number, string, number, ] = [1, '0', 1]
tuple = [1, '1', 3]
console.log(tuple)

enum Eabc {
    a = '123',
    b = 233,
    c = 'sfd'
}
const e: Eabc = Eabc.c
console.log(e)

