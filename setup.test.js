let array = [];

beforeAll(()=>{
   array =  ["red","blue","orange"];
})

afterAll(()=>{
  array =  ["red","blue","orange"];
})

// beforeEach(()=>{
//     array = ["red","blue","orange"];
// })

// if you want to run these functinos for some test cases then keep them in describe not on top of the code other wise it will execute for all tests 

// if you want to run only one test then use test.only()
afterEach(()=>{
    array = ["red","blue","orange"];
})


describe("for setup",()=>{
    test("this is to add at last",()=>{
        array.push("green");
        expect(array[array.length - 1]).toBe("green");
    })

    test("this is to test firt",()=>{
        array.unshift("violet");
        expect(array[0]).toBe("violet");
    })

    test("this is to check length",()=>{
        expect(array.length).toBe(3);
    })
})