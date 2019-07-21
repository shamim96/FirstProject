import React, { Component } from 'react'
import { 
    View, 
    StyleSheet, 
    ImageBackground, 
    Dimensions, 
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native"
import { connect } from 'react-redux'
import StartMainTabs from "../MainTabs/startMainTab"
import DeFaultInput from '../../components/UI/DefaultInput/defaultInput'
import TextHeading from '../../components/UI/TextHeading/TextHeading'
import MainText from "../../components/UI/MainText/MainText"
import backgroundImage from '../../assets/background.jpg'
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground'
import validate from '../../utility/validation'
import { tryAuth } from '../../store/actions/index'


class AuthScreen extends Component {

    state = {
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
        authMode: "login",
        controls: {
            email: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
                },
                touched: false
            },
            password: {
                value: "",
                valid: false,
                validationRules: {
                    minLength: 6
                },
                touched: false
            },
            confirmPassword: {
                value: "",
                valid: false,
                validationRules: {
                    equalTo: "password"
                },
                touched: false
            }
        }
    }



    constructor(props) {
        super(props)
        Dimensions.addEventListener("change", this.updateStyles);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.updateStyles);
    }

    updateStyles = (dims) => {
        this.setState({
            viewMode: dims.window.height > 500 ? "portrait" : "landscape"
        });
    }
    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                authMode: prevState.authMode === "login" ? "signup" : "login"
            }
        })
    }
    LoginHandler = () => {
        const authData = {
            email: this.state.controls.email.value,
            password: this.state.controls.password.value

        }
        this.props.onLogin(authData)
        StartMainTabs();
    }
    updateInputState = (key, value) => {
        let connectedValue = {};
        if (this.state.controls[key].validationRules.equalTo) {
            const equaControl = this.state.controls[key].validationRules.equalTo;
            connectedValue = {
                ...connectedValue,
                equalTo: this.state.controls[equaControl].value
            }
        }
        if (key === "password") {
            connectedValue = {
                ...connectedValue,
                equalTo: value
            }
        }

        this.setState(prevState => {

            return {
                ...prevState,
                controls: {
                    ...prevState.controls,
                    confirmPassword: {
                        ...prevState.controls.confirmPassword,
                        valid:
                            key === "password" ?
                                validate(prevState.controls.confirmPassword.value,
                                    prevState.controls.confirmPassword.validationRules,
                                    connectedValue)
                                : prevState.controls.confirmPassword.valid
                    },
                    [key]: {
                        ...prevState.controls[key],
                        value: value,
                        valid: validate(
                            value,
                            prevState.controls[key].validationRules,
                            connectedValue
                        ),
                        touched: true
                    }

                }

            }
        })
    }
    render() {
        let headingText = null;
        let confirmPasswordControl = null;
        if (this.state.authMode === "signup") {
            confirmPasswordControl =  (
                <View style={this.state.viewMode === "landscape" ? styles.landscapePasswordWrapper : styles.portraitPasswordWrapper}>
                    <DeFaultInput
                        valid={this.state.controls.confirmPassword.valid}
                        touched={this.state.controls.confirmPassword.touched}
                        style={styles.input}
                        placeholder="Confirm password"
                        value={this.state.controls.confirmPassword.value}
                        onChangeText={(val) => this.updateInputState("confirmPassword", val)}
                        secureTextEntry
                    />
                </View>
            )
        }
        if (this.state.viewMode === "portrait") {
            headingText = (
                <MainText>
                    <TextHeading>Please login first</TextHeading>
                </MainText>
            )
        }
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <KeyboardAvoidingView style={styles.container} behavior = "padding">
                    {headingText}
                    <ButtonWithBackground
                        onPress={this.switchAuthModeHandler}
                        color="white" bgColor="green"
                    >Switch to {this.state.authMode === "login" ? "signup" : "login"}</ButtonWithBackground>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inputContainer}>
                        <DeFaultInput
                            valid={this.state.controls.email.valid}
                            touched={this.state.controls.email.touched}
                            style={styles.input}
                            placeholder="Input your email"
                            value={this.state.controls.email.value}
                            onChangeText={(val) => this.updateInputState("email", val)}
                            autoCapitalize = "none"
                            autoCorrect = {false}
                            keyboardType = "email-address"
                        />
                        <View style={this.state.viewMode === "landscape" && this.state.authMode === "signup" ? styles.landscapePasswordContainer : styles.portraitPasswordContainer}>

                            <View style={this.state.viewMode === "landscape" && this.state.authMode === "signup" ? styles.landscapePasswordWrapper : styles.portraitPasswordWrapper}>
                                <DeFaultInput
                                    valid={this.state.controls.password.valid}
                                    touched={this.state.controls.password.touched}
                                    style={styles.input}
                                    placeholder="Input password"
                                    value={this.state.controls.password.value}
                                    onChangeText={(val) => this.updateInputState("password", val)}
                                    secureTextEntry
                                />
                            </View>
                            {confirmPasswordControl}
                        </View>

                    </View>
                    </TouchableWithoutFeedback>
                    <ButtonWithBackground
                        disabled=
                        {!this.state.controls.email.valid || !this.state.controls.password.valid || !this.state.controls.confirmPassword.valid && this.state.authMode === "signup"}
                        color="white" bgColor="green" onPress={this.LoginHandler}>Submit</ButtonWithBackground>
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        width: "80%"
    },

    input: {
        backgroundColor: "#bbb",
        borderColor: "blue"
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    },
    landscapePasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    portraitPasswordContainer: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    landscapePasswordWrapper: {
        width: "47%"
    },
    portraitPasswordWrapper: {
        width: "100%"
    }

});

const mapDispatchToProps = dispatch => {
    return {
        onLogin: authData => dispatch(tryAuth(authData))
    }
}

export default connect(null, mapDispatchToProps)(AuthScreen)