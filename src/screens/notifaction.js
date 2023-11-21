import * as React from "react";
import {Image, StyleSheet, Text, View, Pressable} from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import {useNavigation,} from "@react-navigation/native";

const Notification = () => {
  	const navigation = useNavigation();
    		
    		return (
      			<View style={styles.notification}>

        				<Pressable style={styles.outlineinterfacecaretLeft} onPress={() => navigation.goBack()}>
          					<Image style={styles.icon1} resizeMode="cover" source="Outline/Interface/Caret left.png" />
        				</Pressable>

        				<Text style={styles.mesNotifications}>Mes notifications</Text>
        				<View style={[styles.notification1, styles.notificationLayout]}>
          					<View style={[styles.notificationChild, styles.homeIndicator2Position]} />
          					<Text style={styles.nouveauPassager}>Véhicule chargé</Text>
          					<Text style={[styles.leslieKraVient2, styles.text4Typo]}>{`Claire, toutes vos activité`}</Text>
          					<Image style={[styles.outlineinterfacecaretRightIcon, styles.iconLayout]} resizeMode="cover" source="Outline/Interface/Caret right.png" />
          					<Text style={[styles.text4, styles.text4Typo]}>23/07   17:46</Text>
        				</View>
        				<View style={[styles.notification2, styles.notificationLayout]}>
          					<View style={[styles.notificationChild, styles.homeIndicator2Position]} />
          					<Text style={styles.nouveauPassager1}>Nouveau passager</Text>
          					<Text style={[styles.leslieKraVient2, styles.text4Typo]}>Leslie Kra vient de vous faire une demande d'amis</Text>
          					<Image style={[styles.notificationInner, styles.iconLayout]} resizeMode="cover" source="Ellipse 26.png" />
          					<Image style={[styles.outlineinterfacecaretRightIcon, styles.iconLayout]} resizeMode="cover" source="Outline/Interface/Caret right.png" />
          					<Text style={[styles.text4, styles.text4Typo]}>23/07   13:30</Text>
        				</View>
        				<Image style={[styles.icon2, styles.iconLayout]} resizeMode="cover" source="Icon.png" />

      			</View>);
    		};
    		
    		const styles = StyleSheet.create({
      			homePosition: {
        				left: "50%",
        				position: "absolute"
      			},
      			timeLayout: {
        				height: 21,
        				width: 54,
        				left: "50%",
        				position: "absolute"
      			},
      			notificationLayout: {
        				height: 109,
        				width: 311,
        				left: 32,
        				position: "absolute"
      			},
      			homeIndicator2Position: {
        				left: "0%",
        				bottom: "0%",
        				right: "0%",
        				top: "0%",
        				height: "100%",
        				position: "absolute",
        				width: "100%"
      			},
      			text4Typo: {
        				fontFamily: "Montserrat-Medium",
        				fontWeight: "500",
        				fontSize: 12,
        				textAlign: "left",
        				left: "27.01%",
        				position: "absolute"
      			},
      			iconLayout: {
        				maxHeight: "100%",
        				maxWidth: "100%",
        				position: "absolute",
        				overflow: "hidden"
      			},
      			rightSideIcon: {
        				marginLeft: 102.17,
        				top: 17,
        				width: 67,
        				height: 11
      			},
      			text3: {
        				top: 1,
        				fontSize: 15,
        				letterSpacing: 0,
        				lineHeight: 20,
        				fontFamily: "SF Pro Text",
        				height: 20,
        				textAlign: "center",
        				fontWeight: "600",
        				color: "#000",
        				width: 54,
        				left: 0,
        				position: "absolute"
      			},
      			time: {
        				marginLeft: -27,
        				borderRadius: 24,
        				top: 0,
        				width: 54
      			},
      			leftSide: {
        				marginLeft: -163.5,
        				top: 12
      			},
      			statusBarOnWhite1: {
        				height: 44,
        				width: 375,
        				left: 0,
        				top: 0,
        				position: "absolute",
        				overflow: "hidden"
      			},
      			icon1: {
        				height: "100%",
        				width: "100%"
      			},
      			outlineinterfacecaretLeft: {
        				left: 19,
        				top: 76,
        				width: 43,
        				height: 43,
        				position: "absolute"
      			},
      			homeIndicator3: {
        				marginLeft: -66.5,
        				bottom: 8,
        				borderRadius: 100,
        				backgroundColor: "#000",
        				width: 134,
        				height: 5
      			},
      			homeIndicator1: {
        				marginLeft: -187.5,
        				bottom: 0,
        				height: 34,
        				width: 375
      			},
      			mesNotifications: {
        				marginLeft: -110.5,
        				top: 83,
        				fontSize: 25,
        				color: "#1f555f",
        				fontFamily: "Montserrat-SemiBold",
        				textAlign: "center",
        				fontWeight: "600",
        				left: "50%",
        				position: "absolute"
      			},
      			notificationChild: {
        				borderRadius: 20,
        				backgroundColor: "#f3f3f3"
      			},
      			nouveauPassager: {
        				textAlign: "left",
        				fontSize: 16,
        				left: "27.01%",
        				top: "12.84%",
        				fontFamily: "Montserrat-SemiBold",
        				color: "#000",
        				fontWeight: "600",
        				position: "absolute"
      			},
      			leslieKraVient2: {
        				width: "61.41%",
        				top: "38.53%",
        				color: "#000",
        				fontWeight: "500",
        				fontSize: 12
      			},
      			outlineinterfacecaretRightIcon: {
        				height: "22.02%",
        				width: "7.72%",
        				top: "46.79%",
        				right: "5.14%",
        				bottom: "31.19%",
        				left: "87.14%"
      			},
      			text4: {
        				width: "25.72%",
        				top: "68.81%",
        				color: "#aeaeae"
      			},
      			notification1: {
        				top: 145
      			},
      			nouveauPassager1: {
        				fontSize: 16,
        				left: "27.01%",
        				top: "12.84%",
        				fontFamily: "Montserrat-SemiBold",
        				textAlign: "center",
        				color: "#000",
        				fontWeight: "600",
        				position: "absolute"
      			},
      			notificationInner: {
        				height: "49.54%",
        				width: "17.36%",
        				top: "25.69%",
        				right: "77.49%",
        				bottom: "24.77%",
        				left: "5.14%"
      			},
      			notification2: {
        				top: 270
      			},
      			icon2: {
        				height: "4.31%",
        				width: "9.74%",
        				top: "22.78%",
        				right: "75.06%",
        				bottom: "72.91%",
        				left: "15.2%"
      			},
      			instanceChild: {
        				height: "140%",
        				width: "140%",
        				top: "-20%",
        				right: "-20%",
        				bottom: "-20%",
        				left: "-20%"
      			},
      			support11Icon1: {
        				height: "49.09%",
        				width: "49.09%",
        				top: "25.45%",
        				right: "25.45%",
        				bottom: "25.45%",
        				left: "25.45%"
      			},
      			ellipseParent: {
        				top: 667,
        				left: 293,
        				width: 50,
        				height: 50,
        				position: "absolute"
      			},
      			notification: {
        				backgroundColor: "#fff",
        				flex: 1,
        				height: 812,
        				overflow: "hidden",
        				width: "100%"
      			}
    		});
    		
export default Notification;
    		