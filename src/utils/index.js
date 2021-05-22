export const askLocationPermission = (
  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }
) =>
  new Promise((resolve, reject) => {
    navigator.permissions
      .query({ name: "geolocation" })
      .then(function (result) {
        switch (result.state) {
          case "granted":
            //NOTE: If granted then you can directly call your function here
            return navigator.geolocation.getCurrentPosition(resolve);
          case "denied":
            //NOTE: If denied then you have to show instructions to enable location
            return reject(result);
          case "prompt":
            return navigator.geolocation.getCurrentPosition(
              resolve,
              reject,
              options
            );
          default:
            const msg =
              "Something unexpected happened when getting location permission from user";
            alert(msg);
            console.log(msg, result);
        }

        result.onchange = function () {
          console.log(result.state, "state on change");
        };
      });
  });
