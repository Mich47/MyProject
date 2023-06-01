import { ScrollView } from "react-native";

import { CreatePostForm } from "../../components/CreatePostForm";

export const CreatePostsScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <CreatePostForm navigation={navigation} />
    </ScrollView>
  );
};
