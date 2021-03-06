import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    containerBody: {
        width: width,
        height: height,
    },
    image: {
        width: width,
        height: 300,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    titleText: {
        padding: 30,
        fontSize: 20,
        fontWeight: 'bold'
    },
    card: {
        width: 250,
        height: 250,
        backgroundColor: "#fff",
        borderRadius: 20,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    imageCarousel: {
        width: 250,
        height: 100,
    },
    bodyCard: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 20,
        marginBottom: 100
    },
    text: {
        marginLeft: 20,
        fontSize: 15,
        marginTop: 5
    },
    titleCard: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5
    },
    rating: {
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 20,
        marginTop: 5
    }
})

export default styles;