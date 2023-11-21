import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<Image
				source={require("../../assets/images/congratulation.png")}
				style={{ marginTop: 90, width: 300, height:200  }}
			/>
			<Text
				style={{
					fontSize: 42,
					fontWeight: "bold",
					color: "#3c444c",
					marginTop: 34,
					marginBottom: 40,
				}}
			>
				Bienfait pour la santé
			</Text>
			<Text style={{
					fontSize: 25,
					fontFamily:"Montserat-semiBold",
					color: "green",
				}} >* Nutrument pour le coeur </Text>
			<Text style={{
					fontSize: 25,
					fontFamily:"Montserat-semiBold",
					color: "green",
				}}>* Réduction de l'axieté</Text>
			<Text style={{
					fontSize: 25,
					fontFamily:"Montserat-semiBold",
					color: "green",
				}}>* Confiance en soi</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("RecipeList")}
				style={{
					marginTop: 30,
					backgroundColor: "#e0cc72",
					borderRadius: 18,
					paddingVertical: 18,
					width: "80%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Super !
				</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => navigation.navigate("Notification")}
				style={{
					marginTop: 30,
					backgroundColor: "#8fba9b",
					borderRadius: 18,
					paddingVertical: 18,
					width: "80%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Voir mes notifaction
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
