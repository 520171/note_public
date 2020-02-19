function* abc() {
  let i = 1
  while(true){
    console.log(yield i++)
  }
}
num = abc()
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next(8))
