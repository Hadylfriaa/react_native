import { Text, StyleSheet, View } from "react-native";

export default function Notification  ({navigation})  {
   
  return (
    <View style={styles.container}>

      <Text>  localisation du poubelle:   </Text>
      <Text>  l'etat du poubelle:   </Text>


      
      </View>
    );

  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });