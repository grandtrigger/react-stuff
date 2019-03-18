import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';



class Button extends React.Component {
    setButtonText(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    setButtonColor(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.setButtonText(language)}
                </LanguageContext.Consumer>
            </button>
        );
    }


    render() {
        return (
            <ColorContext.Consumer>
                {value => this.setButtonColor(value)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;