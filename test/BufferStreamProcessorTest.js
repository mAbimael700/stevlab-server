const {
  BufferStreamProcessor,
} = require("../src/domain/BufferStreamManagment/BufferStreamProcessor");

const bs = new BufferStreamProcessor({ checksumRegex: "\\x1C" });

const chunk1 = `
Mensaje 1


Mensaje 2`;
const chunk2 = `

Mensaje 3`;
const chunk3 = `



Mensaje 4
`;

const chunks = [chunk1, chunk2, chunk3];
const results = [];
chunks.forEach((m) => {
  const data = bs.process(m);
  if (data) {
    results.push(...data);
  }
});
console.log(results);
