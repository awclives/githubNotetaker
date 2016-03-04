import React, {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';

import Profile from './Profile'


var styles = StyleSheet.create({
    container: {
        marginTop: 65,
        flex: 1
    },
    image: {
        height: 350,
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        alignSelf: 'center'
    }
});

function makeBackground(btn) {
    var obj = {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        flex: 1
    }

    if (btn === 0) {
        obj.backgroundColor = '#48BBEC';
    } else if (btn === 1) {
        obj.backgroundColor = '#E77AAE';
    } else {
        obj.backgroundColor = '#758BF4';
    }

    return obj;
}

class Dashboard extends React.Component {
    goToProfile() {
        this.props.navigator.push({
            component: Profile,
            title: 'Profile Page',
            passProps: {userInfo: this.props.userInfo}
        })
    }

    goToRepos() {
        console.log(arguments.callee.name)

    }

    goToNotes() {
        console.log(arguments.callee.name)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
                <TouchableHighlight
                    style={makeBackground(0)}
                    onPress={this.goToProfile.bind(this)}
                    underlayColor='#88D4F5'>
                    <Text style={styles.buttonText}>
                        View Profile
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={makeBackground(1)}
                    onPress={this.goToRepos.bind(this)}
                    underlayColor='#88D4F5'>
                    <Text style={styles.buttonText}>
                        View Repos
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={makeBackground(2)}
                    onPress={this.goToNotes.bind(this)}
                    underlayColor='#88D4F5'>
                    <Text style={styles.buttonText}>
                        View Notes
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }

}
;

module.exports = Dashboard;