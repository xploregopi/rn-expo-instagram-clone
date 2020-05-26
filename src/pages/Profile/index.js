import React, { useState } from 'react';
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'; 
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import NavigationPane from '~/components/NavigationPane';
import ProfileGallery from '~/components/ProfileGallery';
import {
    HeaderButtonArea,
    HeaderButton,
    HeaderTitleContainer,
    HeaderTitleText,
    HeaderIconContainer,
} from '~/styles/header';
import {
    Container,
    ProfileTop,
    ProfileAvatar,
    ProfileNumberContainer,
    ProfileNumber,
    ProfileNumberDescription,
    ProfileName,
    ProfileBiography,
    ProfileBiographyText,
    EditProfileButton,
    EditProfileButtonText,
} from './styles';

export default function Direct({ navigation }) {
    navigation.setOptions({
        headerLeft: false,
        headerTitle: () => (
            <HeaderTitleContainer>
                <HeaderTitleText>edu.js.o</HeaderTitleText>
                <HeaderIconContainer>
                    <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
                </HeaderIconContainer>
            </HeaderTitleContainer>
        ),
        headerRight: () => (
            <HeaderButtonArea>
                <HeaderButton>
                    <SimpleLineIcons name="menu" size={24} color="black" />
                </HeaderButton>
            </HeaderButtonArea>
        ),
    });

    const [showTop, setShowTop] = useState(true);

    function setDisplayTop(value) {
        setShowTop(value);
    }

    return (
        <Container>
            {showTop && (
                <>
                    <ProfileTop>
                        <ProfileAvatar
                            source={{ uri: 'https://raw.githubusercontent.com/EduardoJM/rn-expo-instagram-clone/data/avatars/edu.js.o.jpg' }}
                        />
                        <ProfileNumberContainer>
                            <ProfileNumber>42</ProfileNumber>
                            <ProfileNumberDescription>Publicações</ProfileNumberDescription>
                        </ProfileNumberContainer>
                        <ProfileNumberContainer>
                            <ProfileNumber>454</ProfileNumber>
                            <ProfileNumberDescription>Seguidores</ProfileNumberDescription>
                        </ProfileNumberContainer>
                        <ProfileNumberContainer>
                            <ProfileNumber>437</ProfileNumber>
                            <ProfileNumberDescription>Seguindo</ProfileNumberDescription>
                        </ProfileNumberContainer>
                    </ProfileTop>
                    <ProfileName>Eduardo Oliveira</ProfileName>
                    <ProfileBiography>
                        <ProfileBiographyText>Recriando a interface do instagram. Treinando meus conhecimentos...</ProfileBiographyText>
                    </ProfileBiography>
                    <EditProfileButton>
                        <EditProfileButtonText>Editar Perfil</EditProfileButtonText>
                    </EditProfileButton>
                </>
            )}

            <ProfileGallery setDisplayTop={setDisplayTop} />

            <NavigationPane active="profile" navigation={navigation}></NavigationPane>
        </Container>
    );
}
