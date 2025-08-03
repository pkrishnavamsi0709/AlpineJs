const sum = require("./sum");


test("This will add 2 numbers 1 + 2 and result is 3",() => {
    expect(sum(1,2)).toBe(3);
})

test("sample example for object equals", () => {
    expect({}).toEqual({})
})

test("for truthy and falsy for 0 , null,'',undefined ",() =>{
    const n = null;
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
    expect(n).toBeNull();
    expect(n).not.toBeUndefined();
})

test("for numbers",() =>{
    const sum = 4+5;
    expect(sum).toBeGreaterThan(8);
    expect(sum).toBeLessThan(10);
    expect(sum).toBeGreaterThanOrEqual(9);
    expect(sum).toBeLessThanOrEqual(9);   
})

test("for close numbers",()=>{
    const sum = 3;
    expect(sum).toBeCloseTo(2.9999999999);
})


test("Arrays",()=>{
    const arr = ["milk","tea","coffee","badham"];
    expect(arr).toContain("tea");
})