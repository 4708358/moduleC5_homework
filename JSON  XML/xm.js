
const parser = new DOMParser();
const xmlString = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const studentNode = xmlDOM.querySelectorAll("student");
const result = [];
studentNode.forEach((item) => {
  const nameNode = item.querySelector("name");
  const firstnameNode = nameNode.querySelector("first");
  const secondnameNode = nameNode.querySelector("second");
  const ageNode = item.querySelector("age");
  const profNode = item.querySelector("prof");
  const langAttr = nameNode.getAttribute('lang');
  result.push({ name: `${firstnameNode.textContent} ${secondnameNode.textContent}`, age: Number(ageNode.textContent), prof: profNode.textContent, lang: langAttr });
});

console.log('result', result);