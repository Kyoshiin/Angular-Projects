let emp: [number, string, number] = [1, "kannan",45000];
console.log(emp[0]);     // returns 1
console.log(emp[1]);    // returns "kannan"
emp.push(2, "kumar",65000);
console.log(emp);
emp.pop();      // remove 65000 only.
console.log(emp);  