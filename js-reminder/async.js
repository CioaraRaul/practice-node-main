const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    });
  });
  return promise;
};

setTimeout(() => {
  console.log("Timeout 1");
  fetchData()
    .then((data) => {
      console.log(data);
      return fetchData();
    })
    .then((data) => {
      console.log(data);
    });
}, 2000);

console.log("Hello");
