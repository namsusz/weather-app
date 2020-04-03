import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons"; //아이콘
import { LinearGradient } from "expo-linear-gradient"; //그라데이션

const weatherOptions = {
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#e6dada", "#274046"],
    title: "It's Clouds",
    subtitle: "If it's a cloud, I don't feel good 😐"
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "It's Thunderstorm",
    subtitle: "If it's a thunder, I feel scary 😭"
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#4286f4", "#373b44"],
    title: "It's Drizzle",
    subtitle: "If it's a drizzle, I hate it because the air is damp 😢"
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#005c97", "#363795"],
    title: "It's Rain",
    subtitle: "If it's a rain, I must bring an umbrella ☔"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#b6fbff", "#83a4d4"],
    title: "It's Snow",
    subtitle: "If it's a snow, Let's make a snowman together ☃"
  },
  Atmosphere: {
    iconName: "weather-fog",
    gradient: ["#56ccf2", "#2f80ed"],
    title: "It's Atmosphere",
    subtitle: "If it's a atmosphere, I feel so so 😐"
  },
  Clear: {
    iconName: "weather-sunset",
    gradient: ["#FFFFFF", "#6dd5fa", "#2980b9"],
    title: "It's Clear",
    subtitle: "If it's a clear, Let's go picnic 🍱"
  }
};

export default function Weather({ temp, condition, tempmax, tempmin }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={{ ...styles.halfContainer }}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={100}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.subtemp}>High temp {tempmax}°</Text>
        <Text style={styles.subtemp}>Low temp {tempmin}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.tectcontainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.prototype = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 35,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontWeight: "300",
    fontSize: 45,
    marginBottom: 10
  },
  subtitle: {
    color: "white",
    fontWeight: "100",
    fontSize: 20
  },
  tectcontainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  },
  subtemp: {
    fontSize: 20,
    color: "white"
  }
});
