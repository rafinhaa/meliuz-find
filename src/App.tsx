import React from "react";
import { View, 
  Text, 
  StyleSheet, 
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Find from "./Components/Find";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./Assets/Image/background.jpg")}
        style={styles.image}
      >
        <Find />
        <View style={styles.buttonsArea} > 
          <View style={styles.rows}>
            <TouchableOpacity
              style={styles.buttonContainer}
            >
              <Text style={styles.textButton}>Abrir</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
            >
              <Text style={styles.textButton}>Fechar</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    margin: 10,
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsArea: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  textButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
  },
  rows: {
    flex:1,
    justifyContent: "center",
    flexDirection: "row",
    maxHeight: 70,
  },
});

export default App;