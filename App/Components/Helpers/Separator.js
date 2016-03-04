import React, {
    View,
    StyleSheet,
} from 'react-native';


var styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: '#E4E4E4',
        flex: 1,
        marginLeft: 15
    },
});

function Separator(props){
    return (
        <View style={styles.separator}/>
    );
}

export default Separator;