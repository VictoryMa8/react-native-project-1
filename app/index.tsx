import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello World!</Text>
      <Text>This is a basic React Native project to test an AWS API Gateway and Lambda function.</Text>
    </View>
  );
}
