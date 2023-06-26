import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import baseURL from "../../assets/common/baseUrl";

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const loginUser = (user, dispatch) => {
  return fetch(`${baseURL}users/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      //console.log("Vincent",data);
      //console.log("Vincent",userId);
      if (data) {
        const token = data.token;
        AsyncStorage.setItem("jwt", token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded, user));
        //const userId = decoded.sub; // Extract the user ID from the decoded token
        return Promise.resolve({ data}); // Resolve the promise with the data and user ID
      } else {
        logoutUser(dispatch);
        return Promise.reject(new Error("Failed to login")); // Reject the promise with an error
      }
    })
    .catch((err) => {
      Toast.show({
        topOffset: 60,
        type: "error",
        text1: "Please provide correct credentials",
        text2: "",
      });
      logoutUser(dispatch);
      return Promise.reject(err); // Reject the promise with an error
    });
};


export const getUserProfile = (id) => {
  return fetch(`${baseURL}users/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
     // console.log("working", data);
      return data; // Resolve the promise with the data
    })
    .catch((err) => {
      console.log("error", err);
      return Promise.reject(err); // Reject the promise with an error
    });
};

export const logoutUser = (dispatch) => {
  AsyncStorage.removeItem("jwt");
  dispatch(setCurrentUser({}));
};

export const setCurrentUser = (decoded, user) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
    userProfile: user,
  };
};





// import jwt_decode from "jwt-decode";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import Toast from "react-native-toast-message";
// import baseURL from "../../assets/common/baseUrl";

// export const SET_CURRENT_USER = "SET_CURRENT_USER";

// export const loginUser = (user, dispatch) => {
//   fetch(`${baseURL}users/login`, {
//     method: "POST",
//     body: JSON.stringify(user),
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       if (data) {
//         const token = data.token;
//         AsyncStorage.setItem("jwt", token);
//         const decoded = jwt_decode(token);
//         dispatch(setCurrentUser(decoded, user));
//       } else {
//         logoutUser(dispatch);
//       }
//     })
//     .catch((err) => {
//       Toast.show({
//         topOffset: 60,
//         type: "error",
//         text1: "Please provide correct credentials",
//         text2: "",
//       });
//       logoutUser(dispatch);
//     });
// };

// export const getUserProfile = (id) => {
//   fetch(`${baseURL}users/${id}`, {
//     method: "GET",
//     body: JSON.stringify(user),
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => console.log("working",data));
// };

// export const logoutUser = (dispatch) => {
//   AsyncStorage.removeItem("jwt");
//   dispatch(setCurrentUser({}));
// };

// export const setCurrentUser = (decoded, user) => {
//   return {
//     type: SET_CURRENT_USER,
//     payload: decoded,
//     userProfile: user,
//   };
// };
