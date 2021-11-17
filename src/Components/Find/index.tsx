import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Svg, { Path } from "react-native-svg";

const Find: React.FC = () => {
    return (
        <View>
            <Text 
                style={styles.text}
            >
                
            </Text>
            <Svg viewBox="0 0 416 416" width={100} height={100}>
                <Path
                    fill="none"
                    stroke={100}
                    strokeMiterlimit="10"
                    strokeWidth="32"
                    d="M173.09 16a157.09 157.09 0 10157.09 157.09h0A157.1 157.1 0 00173.09 16z"
                />
                <Path
                    fill="none"
                    stroke={100}
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                    d="M290.29 290.29L400 400"
                />
            </Svg>
        </View>
    );
}

export default Find;

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: '#fff',
    },
});
