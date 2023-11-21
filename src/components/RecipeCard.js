import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { colors, recipeList } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = () => {
  const navigation = useNavigation();

  const renderPentagonCard = (item, index, totalItems) => {
    const angle = ((index - 0.25) / totalItems) * (2 * Math.PI); // Angle en radians
    const radius = 150; // Rayon du cercle circonscrit au pentagone
    const circleCenter = { x: 190, y: 260 }; // Ajustez les coordonnées du centre du cercle
    const cardSize = 100; // Ajustez la taille des cartes

    // Calcul des positions x et y pour positionner l'élément en pentagone
    const x = circleCenter.x + Math.cos(angle) * radius - cardSize / 2;
    const y = circleCenter.y + Math.sin(angle) * radius - cardSize / 2;

    return (
      <Pressable
        key={index.toString()}
        onPress={() => navigation.navigate("RecipeDetail", { item: item })}
        style={[
          styles.cardContainer,
          {
            left: x,
            top: y,
          },
        ]}
      >
        <View style={styles.imageContainer}>
          <Image source={item.icon} style={styles.cardImage} />
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      {recipeList.map((item, index) =>
        renderPentagonCard(item, index, recipeList.length)
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
	right:14.5
  },
  cardContainer: {
    backgroundColor: colors.COLOR_LIGHT,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    borderRadius: 50, // Pour rendre la carte circulaire
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 100, // Ajustez la largeur selon vos besoins
    height: 100, // Ajustez la hauteur selon vos besoins
    overflow: "hidden",
  },
  imageContainer: {
    width: 90, // Ajustez la largeur selon vos besoins
    height: 90, // Ajustez la hauteur selon vos besoins
    borderRadius: 45, // Pour rendre l'image circulaire
    overflow: "hidden",
  },
  cardImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "cover",
  },
});

export default RecipeCard;
