import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create(
    {
    inputUserWrap: {
        flexDirection: "row",
        marginVertical: 10,
        height: 40,
        borderBottomWidth: 2,
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