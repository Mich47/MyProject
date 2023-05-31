import { ScrollView } from "react-native";

import { CreatePostForm } from "../../components/CreatePostForm";

export const CreatePostsScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <CreatePostForm />
    </ScrollView>
  );
};
