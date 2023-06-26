import React, { useState, useContext } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { loginUser } from "../../../Context/actions/Auth.actions";
import AuthGlobal from "../../../Context/store/AuthGlobal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../shared/MainStyle";
import Input from "../../shared/Input";
import Error from "../../shared/Error";

const SignIn = () => {
  const navigation = useNavigation();
  const context = useContext(AuthGlobal);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const user = {
      email,
      password,
    };

    if (email === "" || password === "") {
      setError("Please fill in your credentials");
    } else {
      loginUser(user, context.dispatch)
        .then((response) => {
          //console.log("working on it ", response);
          // Assuming the response contains user details, extract them here
          const userDetails = response.data;
          AsyncStorage.setItem("userString", JSON.stringify(userDetails));
          // Pass the user details as route parameters to the Home screen
          navigation.navigate("MainScreen");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFFF" }}>
      <View style={{ alignSelf: "center", marginTop: 35 }}>
        <Text style={{ fontSize: 40, marginTop: 10, color: "#2ED1C0", margin: 8, alignSelf: "center" }}>
          Gasafe
        </Text>
        <Text style={{ fontSize: 35, marginTop: 8, color: "#2ED1C0", fontWeight: "bold" }}>
          Welcome Back
        </Text>
        {/* <Image /> */}
      </View>
      <View style={styles.signvw}>
        <View>
          <Text style={styles.headertxt}>SignIn</Text>
        </View>
        <KeyboardAwareScrollView style={{ marginTop: 60 }}>
          <View>
            <Input
              placeholder="Email Address"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <Input
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
            />
          </View>

          {/* <View style={styles.btnm}> */}
            {/* {error ? <Error message={error} /> : null} */}
            <TouchableOpacity style={styles.btnm} onPress={() => handleSubmit()}>
              <Text style={styles.textsm}>SignIn</Text>
            </TouchableOpacity>
            {/* </View> */}
          {/* </View> */}
          <View style={{ flexDirection: "row", alignSelf: "center", margin: 30 }}>
            <Text style={{ color: "white", fontSize: 18 }}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#D12E3F" }}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;



// import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
// import React, { useState, useContext, useEffect } from "react";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { useNavigation } from "@react-navigation/native";
// import AuthGlobal from "../../../Context/store/AuthGlobal";
// import { loginUser } from "../../../Context/actions/Auth.actions";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import styles from '../../shared/MainStyle';
// import Input from '../../shared/Input';
// import Error from '../../shared/Error';

// const SignIn = () => {
//     const navigation = useNavigation();
//     const context = useContext(AuthGlobal);
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
//     const [error, setError] = useState("");
  
//     const handleSubmit = () => {
//       const user = {
//         email,
//         password,
//       };
  
//       if (email === "" || password === "") {
//         setError("Please fill in your credentials");
//       } else {
//         loginUser(user, context.dispatch)
//           .then((response) => {
//            console.log("working on it ",response);
//             // Assuming the response contains user details, extract them here
//             const userDetails = response.data;
//             AsyncStorage.setItem("userString", JSON.stringify(userDetails));
//             // Pass the user details as route parameters to the Home screen
//             navigation.navigate("MainScreen");
//           })
//           .catch((error) => {
//             setError(error.message);
//           });
//       }
//     };
  
//   return (
//     <SafeAreaView style={{backgroundColor:"#FFFFFF"}}>
//         <View style={{ alignSelf: "center",marginTop:35}}>
//             <Text style={{fontSize:40,marginTop:10,color:"#2ED1C0",margin:8,alignSelf:'center'}}>Gasafe</Text>
//             <Text style={{fontSize:35,marginTop:8,color:"#2ED1C0 ",fontWeight:"bold"}}>Welcome Back</Text>
//           {/* <Image /> */}
//         </View>
//         <View style={styles.signvw}>
//             <View>
//               <Text style={styles.headertxt}>SignIn</Text>
//             </View>
//                 <KeyboardAwareScrollView  style={{marginTop:60}}>
//                 <View>
//                     <Input
//                     placeholder="Email Address"
//                     onChangeText={(text) => setEmail(text)}
//                     value={email}
//                     />
//                     <Input
//                     placeholder="Password"
//                     onChangeText={(text) => setPassword(text)}
//                     value={password}
//                     secureTextEntry={true}
//                     />
//                 </View>

//                 <View style={styles.btnm}>      
//                   {/* {error ? <Error message={error} /> : null} */}
//                     <TouchableOpacity  onPress={() => handleSubmit()}
//                     //style={styles.mdbtn}
//                     >
//                     <Text style={styles.textsm}>SignIn</Text>
//                     </TouchableOpacity>
//                 {/* </View> */}

//                 </View>
//                 <View
//                     style={{ flexDirection: "row", alignSelf: "center", margin: 30 }}
//                 >
//                     <Text style={{color:'white',fontSize:18}}>Don't have an account?</Text>

//                     <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
//                     <Text style={{ fontSize: 20, fontWeight: "bold",color: "#D12E3F" }}>SignUp</Text>
//                     </TouchableOpacity>
//                 </View>
//                 </KeyboardAwareScrollView>
//         </View>
//     </SafeAreaView>
//   )
// }

// export default SignIn