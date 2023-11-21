import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<Image
				source={require("../../assets/images/test.png")}
				style={{ marginTop: 30, width: 400, height:400  }}
			/>

			<Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
				5Sens
			</Text>

			<Text
				style={{
					fontSize: 42,
					fontWeight: "bold",
					color: "#3c444c",
					marginTop: 34,
					marginBottom: 40,
				}}
			>
				Revenir dans le présent
			</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("RecipeList")}
				style={{
					backgroundColor: "#e0cc72",
					borderRadius: 18,
					paddingVertical: 18,
					width: "80%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Conexion
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.navigate("SignUp")}
				style={{
					marginTop:10,
					backgroundColor: "#8fba9b",
					borderRadius: 18,
					paddingVertical: 18,
					width: "80%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					S'inscrire
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
