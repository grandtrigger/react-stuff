import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '459955163415-jt043voqkj6u8gm66stecrraaq876au1.apps.googleusercontent.com',
                apiKey: 'uI5jwU3ftAg6FFFZ8HrgqLcM',
                scope: 'email'
            })
            .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                }
            );
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            const userId = this.auth.currentUser.get().getId();
            this.props.signIn(userId);
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }
    
    onSignOutClick = () => {
        this.auth.signOut();
    }
    
    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon"></i>
                    Sign out
                </button>
            );
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
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


const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);