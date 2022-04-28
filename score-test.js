function correctTest(name, ignoreReject) {
  return new Promise((resolve, reject) => {
    console.log("批改作業中...");
    setTimeout(() => {
      const score = Math.round(Math.random() * 100);
      if (score >= 60) {
        resolve({ name, score });
      } else {
        if (ignoreReject) {
          resolve({ name, score });
        } else {
          reject(`${name}不及格`);
        }
      }
    }, Math.random() * 1000);
  });
}

function checkAward(data) {
  return new Promise((resolve, reject) => {
    console.log("檢查獎品中...");
    setTimeout(() => {
      if (data.score >= 90) {
        resolve(`${data.name}${data.score}分, 得到一台筆電`);
      } else if (data.score > 80) {
        resolve(`${data.name}${data.score}分, 得到一顆蘋果`);
      } else {
        reject(`${data.name}${data.score}分`);
      }
    }, 1000);
  });
}

correctTest("小明")
  .then((data) => {
    return checkAward(data);
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.all([
  correctTest("小王", true),
  correctTest("小林", true),
  correctTest("小朱", true),
]).then((data) => {
  console.log(data);
});
