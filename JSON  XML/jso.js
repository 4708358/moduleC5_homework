const jsonString =//`

`{
 "list": [
  {
   "name": "Peter",
   "age": "35",
   "prof": "manager"
  },
  {
   "name": "Bill",
   "age": "42",
   "prof": "doctor"
  }
 ]
}
`;

const dannie = JSON.parse(jsonString);
const spisok = dannie.list;
const result = [];
spisok.forEach((item) => {


  const name = item.name;
  const age = item.age;
  const prof = item.prof;
  //console.log('name ', name)
  result.push({name: name , age: Number(age), prof: prof});
});
console.log('result', result);