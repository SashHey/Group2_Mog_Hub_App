import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, SafeAreaView, ScrollView, Image, Text, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import styles from '../components/Styles';

function MainScreen(){

    const [petName, setPetName] = useState('');

    return(
        <View>
            <SafeAreaView>
                <ScrollView>
                    <Image style={styles.logo}
                    source={require('../_images/cat-logo.png')}/>

                    <Text style={styles.mainTxt}>Mog Hub</Text>
                    <Text style={styles.slogan}>P u r r r f e c t  C o m p a n i o n s</Text>
                
                    <View style={styles.inputFlex}>
                        <Text style={styles.enterTxt}>Your Pet's Name:</Text>
                        <TextInput style={styles.userInputTxt}
                            placeholder='Mog' 
                            value={petName}
                            onChangeText={newText => setPetName(newText)}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default MainScreen;