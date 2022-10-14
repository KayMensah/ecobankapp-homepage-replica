import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import kkprofile from "./assets/img/kkprofile.jpg";
import ghanaflag from "./assets/img/ghanaflag.jpg";
import {
  FontAwesome,
  Ionicons,
  AntDesign,
  SimpleLineIcons,
  Feather,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {} from "react-native-web";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={"dark-content"}
        // style={{ backgroundColor: "#2774AE" }}
      />
      <View
        style={{
          // backgroundColor: "red",
          flex: 10,
          backgroundColor: "#2774AE",
          flexDirection: "row",
        }}
      >
        <Image
          source={kkprofile}
          style={{
            height: 50,
            width: 50,
            resizeMode: "contain",
            flexDirection: "row",
            marginHorizontal: 10,
            borderRadius: 50,
          }}
        />
        <Image
          source={ghanaflag}
          style={{
            height: 20,
            width: 20,
            resizeMode: "contain",
            marginLeft: 250,
          }}
        />
        <FontAwesome
          name="sort-down"
          size={24}
          color="black"
          style={{
            marginHorizontal: 32,
            flexDirection: "row",
            marginBottom: 9,
          }}
        />
      </View>
      <View style={{ backgroundColor: "#2774AE", flex: 10 }}>
        <Text style={{ color: "lightgrey", fontSize: 18 }}>Welcome back,</Text>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 28 }}>
          Chiemeka Korkor
        </Text>
        <View
          style={{
            borderBottomColor: "lightgrey",
            borderBottomWidth: 1,
            marginVertical: 20,
          }}
        ></View>
      </View>
      <View
        style={{
          backgroundColor: "#2774AE",
          flex: 18,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Text style={{ color: "white", marginTop: 15, fontWeight: "bold" }}>
          MY ACCOUNTS
        </Text>
        <Text style={{ color: "white", marginTop: 15, fontWeight: "bold" }}>
          VIEW ALL
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "lightgreen",
          flex: 17,
          width: "90%",
          marginLeft: 20,
          marginRight: 15,
          marginTop: -80,
        }}
      >
        <Text
          style={{
            color: "white",
            marginTop: 15,
            fontWeight: "bold",
            marginBottom: 5,
          }}
        >
          CRYPTO ASSETS
          <Feather name="settings" size={24} color="white" />
        </Text>
        <Text style={{ color: "white", fontSize: 15 }}>00122764647484</Text>
      </View>
      <View style={{ flex: 45 }}>
        <View style={{ backgroundColor: "white", flex: 0.5 }}>
          <Text style={{ marginLeft: 30, marginTop: 5 }}>
            QUICK TRANSACTION
            <FontAwesome name="sort-down" size={24} color="black" />
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              borderBottomColor: "lightgrey",
              borderBottomWidth: 1.5,
              marginVertical: 10,
              borderTopWidth: 1.5,
              borderTopColor: "lightgrey",
              borderEndWidth: 1,
              borderLeftColor: "lightgrey",
              borderLeftWidth: 1.5,
              borderRightColor: "lightgrey",
              paddingHorizontal: 10,
              paddingVertical: 2,
            }}
          >
            <Feather name="dollar-sign" size={24} color="black" />
            <Text>AIRTIME BUY</Text>
          </View>
          <View
            style={{
              borderBottomColor: "lightgrey",
              borderBottomWidth: 1.5,
              marginVertical: 10,
              borderTopWidth: 1.5,
              borderTopColor: "lightgrey",
              borderEndWidth: 1,
              borderLeftColor: "lightgrey",
              borderLeftWidth: 1.5,
              borderRightColor: "lightgrey",
              paddingHorizontal: 20,
              paddingVertical: 2,
            }}
          >
            <MaterialIcons name="compare-arrows" size={24} color="black" />
            <Text>TRANSFER $</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              borderBottomColor: "lightgrey",
              borderBottomWidth: 1.5,
              marginVertical: 10,
              borderTopWidth: 1.5,
              borderTopColor: "lightgrey",
              borderEndWidth: 1,
              borderLeftColor: "lightgrey",
              borderLeftWidth: 1.5,
              borderRightColor: "lightgrey",
              paddingHorizontal: 30,
              paddingVertical: 2,
            }}
          >
            <FontAwesome5 name="file-invoice-dollar" size={24} color="black" />
            <Text>BILL PAY</Text>
          </View>
          <View
            style={{
              borderBottomColor: "lightgrey",
              borderBottomWidth: 1.5,
              marginVertical: 10,
              borderTopWidth: 1.5,
              borderTopColor: "lightgrey",
              borderEndWidth: 1,
              borderLeftColor: "lightgrey",
              borderLeftWidth: 1.5,
              borderRightColor: "lightgrey",
              paddingHorizontal: 10,
              paddingVertical: 2,
            }}
          >
            <MaterialCommunityIcons name="run-fast" size={24} color="black" />
            <Text>CASH XPRESS</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              borderBottomColor: "lightgrey",
              borderBottomWidth: 1.5,
              marginVertical: 10,
              borderTopWidth: 1.5,
              borderTopColor: "lightgrey",
              borderEndWidth: 1,
              borderLeftColor: "lightgrey",
              borderLeftWidth: 1.5,
              borderRightColor: "lightgrey",
              paddingHorizontal: 10,
              paddingVertical: 2,
            }}
          >
            <MaterialIcons name="send-to-mobile" size={24} color="black" />
            <Text>EKOBBANK PAY</Text>
          </View>
          <View
            style={{
              borderBottomColor: "lightgrey",
              borderBottomWidth: 1.5,
              marginVertical: 10,
              borderTopWidth: 1.5,
              borderTopColor: "lightgrey",
              borderEndWidth: 1,
              borderLeftColor: "lightgrey",
              borderLeftWidth: 1.5,
              borderRightColor: "lightgrey",
              paddingHorizontal: 10,
              paddingVertical: 2,
            }}
          >
            <MaterialCommunityIcons name="call-split" size={24} color="black" />
            <Text>SPLICE PAYMENT</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "lightgrey",
          borderBottomWidth: 1,
          marginVertical: 10,
        }}
      ></View>
      {/* <View style={{ backgroundColor: "pink", flex: 5 }}>
        
      </View> */}
      <View style={styles.bottomNav}>
        <View
          style={{
            marginVertical: 10,
            paddingHorizontal: 10,
            paddingVertical: 2,
          }}
        >
          <Ionicons name="md-home-outline" size={24} color="black" style={{}} />
          <Text>HOME</Text>
        </View>

        <View
          style={{
            marginVertical: 10,
            paddingHorizontal: 10,
            paddingVertical: 2,
          }}
        >
          <SimpleLineIcons name="credit-card" size={24} color="black" />
          <Text>CARDS</Text>
        </View>
        <View
          style={{
            marginVertical: 10,
            paddingHorizontal: 10,
            paddingVertical: 2,
          }}
        >
          <View
            style={{
              marginVertical: 10,
              paddingHorizontal: 10,
              paddingVertical: 2,
            }}
          >
            <View>
              <Ionicons name="chatbubbles-outline" size={24} color="black" />
              <Text>HELP</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginVertical: 10,
            paddingHorizontal: 10,
            paddingVertical: 2,
          }}
        >
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Text>NOTIFICATION</Text>
        </View>
        <View
          style={{
            marginVertical: 10,
            paddingHorizontal: 10,
            paddingVertical: 2,
          }}
        >
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
          <Text>MORE</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,

    // backgroundColor: "#2774AE",
  },
  bottomNav: {
    flex: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    // position: "absolute",
    // bottom: 0,
    // height: 70,
  },
});
export default App;
