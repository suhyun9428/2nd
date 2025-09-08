import dummyData from "./dummyData/dummyData";

export function createResource(isErrorCase = true) {
  let status = "pending";
  let result;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isErrorCase) {
        reject(new Error("첫 5초 동안 데이터 못가져오지롱"));
      } else {
        resolve(dummyData);
      }
    }, 5000);
  });

  promise
    .then((res) => {
      status = "success";
      result = res;
    })
    .catch((err) => {
      status = "error";
      result = err;
    });

  return {
    read() {
      if (status === "pending") throw promise; // Suspense가 캐치
      if (status === "error") throw result; // ErrorBoundary가 캐치
      return result;
    },
  };
}
