import React from 'react';
import { Feather, Fontisto, MaterialIcons, Octicons } from '@expo/vector-icons';

import {
    ActionBar,
    ActionButton,
    ActionAvatar,
} from './styles';

export default function NavigationPane({ navigation, active }) {
    return (
        <ActionBar>
            <ActionButton onPress={() => navigation.navigate('Feed')}>
                <Fontisto name="home" size={24} color={active === 'feed' ? "#000" : "#444"} />
            </ActionButton>
            <ActionButton>
                <MaterialIcons name="search" size={24} color="#444" />
            </ActionButton>
            <ActionButton>
                <Octicons name="diff-added" size={24} color="#444" />
            </ActionButton>
            <ActionButton>
                <Feather name="heart" size={24} color={active === 'notifications' ? "#000" : "#444"} />
            </ActionButton>
            <ActionButton onPress={() => navigation.navigate('Profile')}>
                <ActionAvatar bordered={active === 'profile'} source={{ uri: 'https://raw.githubusercontent.com/EduardoJM/rn-expo-instagram-clone/data/avatars/edu.js.o.jpg' }} />
            </ActionButton>
        </ActionBar>
    )
}
