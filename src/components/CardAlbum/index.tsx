import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const CardAlbum = () => {
    return <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container}
    >
        <View
            style={styles.containerArtista}
        >
            <Text
                style={styles.album}
            >
                Título do Album
            </Text>
            <Text
                style={styles.artista}
            >
                Nome do artista
            </Text>
        </View>
        <Text
            style={styles.duracao}
        >
            1h 20 min
        </Text>
    </TouchableOpacity>
}

