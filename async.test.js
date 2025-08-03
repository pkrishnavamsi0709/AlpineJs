const fetchData = require("./async");

test("this is test we are getting correct data from fetch",async ()=>{
    const data = await fetchData(1);
    expect(data.id).toBe(1);
})