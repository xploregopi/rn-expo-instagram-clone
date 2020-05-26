// package imports
import React from 'react';
import { StatusBar } from 'react-native';
// local imports
import Routes from './routes';

export default function App() {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <Routes />
        </>
    );
}
