import { StyleSheet, View, Text, SafeAreaView, ScrollView, Pressable } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
import { useNavigation } from "@react-navigation/native";




const RecipeListScreen = () => {

	return (
		<SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
			{/* render header */}
			<Header headerText={"5Sens"} userIcon="bell-o" />
			


			{/* Categories filter */}

			<View style={{ marginTop: 22 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Bonjour Claire 🔥</Text>
				{/* Categories list */}
				<Text style={{marginTop:10}}>
					Travaillez vos sens aujourd'hui....
				</Text>
			</View>

			{/* Recipe List Filter */}

			<View style={{ marginTop: 22, flex: 1 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Défis</Text>
				{/* Recipes list */}

				<RecipeCard />
			</View>
		</SafeAreaView>
	);
};

export default RecipeListScreen;

const styles = StyleSheet.create({});
