import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 60,
        marginTop: 5,
        marginHorizontal: 10,
        padding: 8,
        backgroundColor: "#24A9E1",
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 4,
    },
    containerArtista: {
        height: '100%',
        justifyContent: "space-between",
    },
    album: {
        color: "#e4e4e4",
        fontWeight: "bold",
        fontSize: 18,
    },
    artista: {
        color: "#e4e4e4",
    },
    duracao: {
        color: "#e4e4e4",
        fontSize: 12
    }
})