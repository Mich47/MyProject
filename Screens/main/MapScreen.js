import { View, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const defaultRegion = {
  latitude: 49.13164,
  longitude: 31.04277,
  latitudeDelta: 7.0,
  longitudeDelta: 7.0,
};

export const MapScreen = ({ route }) => {
  const {
    latitude,
    longitude,
    latitudeDelta = 0.09,
    longitudeDelta = 0.04,
  } = route.params?.coords ?? defaultRegion;

  const { title = "" } = route.params;

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={defaultRegion}
        region={{
          latitude,
          longitude,
          latitudeDelta,
          longitudeDelta,
        }}
      >
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
          title={title}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
