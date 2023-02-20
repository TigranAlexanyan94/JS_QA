const ObjectsArray = require("./ObjectsArray");
const AnagramWors = require("./AnagramWors");
const StructuredClone = require("./StructuredClone");

describe("sum", () => {
  it("sum of salary", () => {
    expect(ObjectsArray.getInvestmentMoney(ObjectsArray.PeopleInfo)).toBe(9000);
  });

  it("Info", () => {
    expect(ObjectsArray.getInvestmentInfo(ObjectsArray.PeopleInfo)).toContain(
      "Arman investment 1000$"
    );
  });

  it("Max Investors", () => {
    expect(
      ObjectsArray.getThreeMaxInvestors(ObjectsArray.PeopleInfo)
    ).toContain("Avetiq");
  });
});


describe("Group", () => {
  it("Check contain", () => {
    expect(AnagramWors.groupAnagramWords(AnagramWors.WordArray)).not.toContain([
      [],
    ]);
  });
});


describe("Structured clone ", () => {
  it("Check property", () => {
    expect(StructuredClone.structuredClone(StructuredClone.user)).toHaveProperty('first_name');
    expect(StructuredClone.structuredClone(StructuredClone.user)).toHaveProperty('last_name');
    expect(StructuredClone.structuredClone(StructuredClone.user)).toHaveProperty('knowledge');
    expect(StructuredClone.structuredClone(StructuredClone.user)).toHaveProperty('knowledge.programming');
    expect(StructuredClone.structuredClone(StructuredClone.user)).toHaveProperty('knowledge.mathematics');
  });
});
