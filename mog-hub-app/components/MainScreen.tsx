import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, SafeAreaView, ScrollView, Image, Text, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import styles from '../components/Styles';

function MainScreen(){

    const [petName, setPetName] = useState('');
    const [selectedValue, setSelectedValue] = useState('0');

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

                    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18}}>
                            Select your Pet:
                        </Text>

                        <View style={styles.radioContainer}>
                            <View style={styles.radioGroup}>

                                {/* radio button for cat -----------------------------------*/}
                                <View style={styles.radioBtn}>
                                    <RadioButton.Android
                                        value="1"
                                        status={selectedValue == "1" ? 'checked' : 'unchecked'}
                                        onPress={() => setSelectedValue('1')}
                                        color="orange"
                                    />
                                    <Text style={styles.radioLabel}>Cat</Text>
                                </View>
                                {/* ------------------------------------------------------- */}

                                {/* radio button for dog -----------------------------------*/}
                                <View style={styles.radioBtn}>
                                    <RadioButton.Android
                                        value="2"
                                        status={selectedValue == "2" ? 'checked' : 'unchecked'}
                                        onPress={() => setSelectedValue('2')}
                                        color="orange"
                                    />
                                    <Text style={styles.radioLabel}>Dog</Text>
                                </View>
                                {/* ------------------------------------------------------- */}

                                {/* radio button for other ---------------------------------*/}
                                <View style={styles.radioBtn}>
                                    <RadioButton.Android
                                        value="3"
                                        status={selectedValue == "3" ? 'checked' : 'unchecked'}
                                        onPress={() => setSelectedValue('3')}
                                        color="orange"
                                    />
                                    <Text style={styles.radioLabel}>Other</Text>
                                </View>
                                {/* ------------------------------------------------------- */}
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default MainScreen;