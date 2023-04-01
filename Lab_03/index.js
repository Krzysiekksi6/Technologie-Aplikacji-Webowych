let service = require('./service');

const result = service.filterArray([1,2,3,4,5])

result.forEach((item) => {
    console.log(item);
});


