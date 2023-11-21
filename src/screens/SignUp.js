import * as React from "react";
import {Text, TextInput, StyleSheet, View, Pressable, Image} from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import {useNavigation} from "@react-navigation/native";

const SignUp = () => {
  	const navigation = useNavigation();
	const [Num, setNum] = React.useState('')
	const [email,setEmail] = React.useState('')

	const numberClick = (text)=>{
		setNum(text)
	}
	const emailClick = (text)=>{
		setEmail(text)
	}
    		
    		return (
      			<View style={styles.number}>
        				<Text style={styles.entrezVosCoordonnes1}>Entrez vos coordonnées</Text>
        				<Pressable style={styles.envoyer} onPress={()=>{navigation.navigate("RecipeList")}}>
          					<Text style={styles.bouton1}>Envoyer</Text>
        				</Pressable>
        				<View style={[styles.numro, styles.mailPosition]}>
          					<View style={[styles.numroChild, styles.numroChildPosition]} />
          					<View style={styles.parent}>
            						<TextInput placeholder="+33" onChangeText={numberClick} value={Num}  style={[styles.text3, styles.text3Typo]}/>
            						<Image style={[styles.ivoryCoast1Icon1, styles.numroChildPosition]} resizeMode="cover" source={require("../../assets/images/fr.jpg")} />
          					</View>
        				</View>
        				<View style={[styles.mail, styles.mailPosition]}>
          					<View style={[styles.numroChild, styles.numroChildPosition]} />
          					<TextInput onChangeText={emailClick} value={email} placeholder="Ex: lucas@alonzzy.com" style={[styles.entrezVotreNom1, styles.text3Typo]}/>
        				</View>
        				<Pressable style={styles.outlineinterfacecaretLeft} onPress={() => navigation.goBack()}>
          					<Image style={styles.icon} resizeMode="cover" source={require("../../assets/images/left.png")} />
        				</Pressable>
      			</View>);
    		};
    		
    		const styles = StyleSheet.create({
      			homeIndicator1Layout: {
        				width: 375,
        				position: "absolute"
      			},
      			timeLayout: {
        				height: 21,
        				width: 54,
        				left: "50%",
        				position: "absolute"
      			},
      			mailPosition: {
        				height: 60,
        				width: 310,
        				left: "50%",
        				marginLeft: -154.5,
        				position: "absolute"
      			},
      			numroChildPosition: {
        				left: "0%",
        				bottom: "0%",
        				top: "0%",
        				height: "100%",
        				position: "absolute"
      			},
      			text3Typo: {
        				fontSize: 16,
        				textAlign: "left",
        				fontFamily: "Montserrat-SemiBold",
        				fontWeight: "600",
        				position: "absolute"
      			},
      			groupLayout: {
        				height: 6,
        				position: "absolute"
      			},
      			entrezVosCoordonnes1: {
        				top: 143,
        				fontSize: 25,
        				color: "#1f555f",
        				width: 302,
        				textAlign: "left",
        				fontFamily: "Montserrat-SemiBold",
        				fontWeight: "600",
        				marginLeft: -154.5,
        				left: "50%",
        				position: "absolute"
      			},
      			bouton1: {
        				fontSize: 18,
        				letterSpacing: -0.2,
        				display: "flex",
        				height: 40,
        				textAlign: "center",
        				color: "#3a3a3a",
        				justifyContent: "center",
        				alignItems: "center",
        				fontFamily: "Montserrat-SemiBold",
        				fontWeight: "600",
        				flex: 1
      			},
      			envoyer: {
        				marginLeft: -149.5,
        				top: 654,
        				width: 299,
        				flexDirection: "row",
        				paddingHorizontal: 20,
        				paddingVertical: 10,
        				justifyContent: "center",
        				alignItems: "center",
        				backgroundColor: "#8fba9b",
        				borderRadius: 15,
        				left: "50%",
        				position: "absolute"
      			},
      			rightSideIcon: {
        				marginLeft: 102.17,
        				top: 17,
        				width: 67,
        				height: 11,
        				left: "50%",
        				position: "absolute"
      			},
      			text2: {
        				top: 1,
        				fontSize: 15,
        				letterSpacing: 0,
        				lineHeight: 20,
        				fontFamily: "SF Pro Text",
        				color: "#000",
        				height: 20,
        				width: 54,
        				left: 0,
        				textAlign: "center",
        				fontWeight: "600",
        				position: "absolute"
      			},
      			time: {
        				marginLeft: -27,
        				borderRadius: 24,
        				top: 0,
        				height: 21
      			},
      			leftSide: {
        				marginLeft: -163.5,
        				top: 12
      			},
      			statusBarOnWhite1: {
        				height: 44,
        				left: 0,
        				top: 0,
        				overflow: "hidden"
      			},
      			numroChild: {
        				width: "100.32%",
        				right: "-0.32%",
        				backgroundColor: "#eaeaea",
        				borderRadius: 15,
        				bottom: "0%",
        				top: "0%"
      			},
      			text3: {
        				top: "8.33%",
        				left: "44.12%",
        				color: "#3a3a3a",
        				fontSize: 16
      			},
      			ivoryCoast1Icon1: {
        				width: "35.29%",
        				right: "64.71%",
        				maxWidth: "100%",
        				maxHeight: "100%",
        				overflow: "hidden"
      			},
      			parent: {
        				height: "40%",
        				width: "21.94%",
        				top: "30%",
        				right: "72.9%",
        				bottom: "30%",
        				left: "5.16%",
        				position: "absolute"
      			},
      			numro: {
        				top: 235
      			},
      			homeIndicator3: {
        				marginLeft: -66.5,
        				bottom: 8,
        				borderRadius: 100,
        				backgroundColor: "#000",
        				width: 134,
        				height: 5,
        				left: "50%",
        				position: "absolute"
      			},
      			homeIndicator2: {
        				right: "0%",
        				width: "100%"
      			},
      			homeIndicator1: {
        				marginLeft: -187.5,
        				bottom: 0,
        				height: 34,
        				left: "50%"
      			},
      			entrezVotreNom1: {
        				top: "33.33%",
        				color: "#aeaeae",
        				left: "5.16%"
      			},
      			mail: {
        				top: 311
      			},
      			icon: {
        				height: "100%",
        				width: "100%"
      			},
      			outlineinterfacecaretLeft: {
        				left: 17,
        				top: 76,
        				width: 43,
        				height: 43,
        				position: "absolute"
      			},
      			groupChild: {
        				backgroundColor: "#d9d9d9",
        				width: 310,
        				height: 6,
        				left: 0,
        				top: 0
      			},
      			groupItem: {
        				width: 150,
        				left: 0,
        				top: 0,
        				height: 6,
        				backgroundColor: "#f9b714"
      			},
      			rectangleParent: {
        				top: 60,
        				left: 33,
        				width: 310,
        				height: 6
      			},
      			number: {
        				backgroundColor: "#fff",
        				height: 812,
        				overflow: "hidden",
        				width: "100%",
        				flex: 1
      			}
    		});
    		
export default SignUp;
    		