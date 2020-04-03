import React from "react";
import { Alert, ColorPropType } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "255c6505f7cd60548704c864dbaaf0e6";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp, temp_min, temp_max },
        weather
      }
    } = await axios.get(
      // `http://api.openweathermap.org/data/2.5/weather?lat=37&lon=127&APPID=${API_KEY}&units=metric`
      // `http://api.openweathermap.org/data/2.5/weather?lat=35&lon=129&APPID=${API_KEY}&units=metric`
      `http://api.openweathermap.org/data/2.5/weather?lat=${Math.floor(
        latitude
      )}&lon=${Math.floor(longitude)}&APPID=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      temp,
      condition: weather[0].main,
      temp_max,
      temp_min
    });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync(); //latitude=35 longitude=129
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  render() {
    const { isLoading, temp, condition, temp_max, temp_min } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather
        temp={Math.round(temp)}
        condition={condition}
        tempmax={temp_max}
        tempmin={temp_min}
      />
    );
  }
  componentDidMount() {
    this.getLocation();
  }
}
