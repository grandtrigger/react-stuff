import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';


class App extends React.Component {
    state = { language: 'english', color: 'primary' }

    onLanguageChange = language => {
        this.setState({ language });
    }

    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector></LanguageSelector>

                    <ColorContext.Provider value={this.state.color}>
                        <UserCreate></UserCreate>
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
}


export default App;