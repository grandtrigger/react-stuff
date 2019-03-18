import React from 'react';


class GoogleAuth extends React.Component {
    state = { isSignedIn: null };
    
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '459955163415-jt043voqkj6u8gm66stecrraaq876au1.apps.googleusercontent.com',
                apiKey: 'uI5jwU3ftAg6FFFZ8HrgqLcM',
                scope: 'email'
            })
            .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange();
                    this.auth.isSignedIn.listen(this.onAuthChange);
                }
            );
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    }

    onSignIn = () => {
        this.auth.signIn();
    }
    
    onSignOut = () => {
        this.auth.signOut();
    }
    
    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOut}>
                    <i className="google icon"></i>
                    Sign out
                </button>
            );
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignIn}>
                    <i className="google icon"></i>
                    Sign In with Google
                </button>
            );
        }
    }
    
    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}


export default GoogleAuth;