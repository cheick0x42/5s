import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ headerText, userIcon }) => {
	const Navigation = useNavigation()
	return (
		<View style={{ flexDirection: "row" }}>
			{/* flex:1, titre sur le coté */} 
			<Text style={{ justifyContent:"center", marginLeft: "auto", marginRight : "auto", color: "#f96163", fontSize: 40, fontWeight: "bold" }}>
				{headerText}
			</Text>
				<FontAwesome name={userIcon} size={24} color="#f96163" />
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({});