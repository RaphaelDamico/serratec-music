import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Albuns, AlbunsProps } from "../../screens/Albuns";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../routes/routes";

interface CardAlbumProps {
    navigate: NativeStackNavigationProp<StackParamList, "Album", undefined>,
    item: AlbunsProps
}

export const CardAlbum = ({ item, navigate }: CardAlbumProps) => {
    return <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container}
        onPress={() => navigate.navigate("Musicas", { indexAlbum: item.id })}
    >
        <View
            style={styles.containerArtista}
        >
            <Text
                style={styles.album}
            >
                {item.titulo}
            </Text>
            <Text
                style={styles.artista}
            >
                {item.nomeArtista}
            </Text>
        </View>
        <Text
            style={styles.duracao}
        >
            {item.minutos / 60 > 1 && Math.floor(item.minutos / 60) + "h "} {item.minutos % 60 + "min"}
        </Text>
    </TouchableOpacity>
}

