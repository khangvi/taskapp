import colors from "../../theme/colors"

export const globalStyles = {
    input:{
        width: 350,
        height: 60,
        borderRadius: 22,
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderWidth: 1,
        marginBottom: 15,
        borderColor: colors.primary
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 65,
        backgroundColor: colors.primary,
        marginTop: 30
    },
    txtButton: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
}