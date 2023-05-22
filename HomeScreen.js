import { Button } from "react-native";

export default function HomeScreen  ({navigation})  {
    return (
      <Button
        title="Go to localisation page"
        onPress={() =>
          navigation.navigate('Notification')
        }
      />
    );
  };


