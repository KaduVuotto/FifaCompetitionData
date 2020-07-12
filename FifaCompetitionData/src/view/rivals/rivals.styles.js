import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewRivals: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white'
    },
    viewContent: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: '#f5faff',
        paddingTop:26
    },
    viewCard: {
        flex: 0,
        padding: 16,
        marginBottom: 26,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width: '80%',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textGameStats: {
        color: '#0160dc',
        fontSize: 18
    },
    viewTeams: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginTop: 16
    },
    textYourTeam: {
        color: '#0160dc',
        paddingLeft: 16
    },
    textOpposingTeam: {
        color: '#0160dc',
        paddingRight: 16
    },
    viewGoals: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginTop: 10
    },
    textBlue: {
        color: '#6aa1ea'
    },
    viewInputStatsGame: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
});

export default styles;