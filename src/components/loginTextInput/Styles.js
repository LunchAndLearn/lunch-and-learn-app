import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create(
    {
    inputWrap: {
        flexDirection: "row",
        marginVertical: 10,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#CCC"
      },
      input: {
        flex: 1,
        paddingHorizontal: 10,
      },
      iconWrap: {
        paddingHorizontal: 7,
        alignItems: "center",
        justifyContent: "center"
      }
    }
)