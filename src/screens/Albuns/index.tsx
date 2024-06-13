import React from "react";
import { View, FlatList } from "react-native";
import { CardAlbum } from "../../components/CardAlbum";

export default function App() {
    return <View>
        <FlatList
            data={[1, 2, 3]}
            renderItem={() => {
                return <CardAlbum />
            }}
        />
    </View>
}

