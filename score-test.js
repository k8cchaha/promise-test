function correctTest(name) {
  return new Promise((resolve, reject) => {
    console.log("批改作業中...");
    setTimeout(() => {
      const score = Math.round(Math.random() * 100);
      console.log("Score:", score);
      if (score >= 60) {
        resolve({ name, score });
      } else {
        reject({
          name,
          msg: "不及格",
        });
      }
    });
  });
}

correctTest("小明")
  .then((data) => {
    console.log(`${data.name}得${data.score}分`);
  })
  .catch((err) => {
    console.log(`${err.name}${err.msg}`);
  });
