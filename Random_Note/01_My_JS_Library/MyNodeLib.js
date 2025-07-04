const Random_Number = (Min = 1, Max = 10) => Math.floor(Math.random() * (Max - Min + 1)) + Min

const Random_Color = () => {
  const arr = ['Red', 'Blue', 'Black', 'White', 'Purple', 'Yallow', 'Green', 'Gray']
  const rand = Math.floor(Math.random() * arr.length)
  return arr[rand]
}

const Random_Person = () => {
  const arr = ['BatMan', 'SpiderMan', 'IronMan', 'SuperMan', 'SuperGirl', 'Orion', 'Steel', 'GreenArrow']
  const rand = Math.floor(Math.random() * arr.length)
  return arr[rand]
}

module.exports = {Random_Number, Random_Color, Random_Person}
