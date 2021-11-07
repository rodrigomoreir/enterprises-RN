import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import images from '../Themes/Images';
import { getStyles } from './Header.style'

interface Props {
  title: string
  goBack?: () => void
  goProfile: () => void
  image?: Object
}

const Header: React.FC<Props> = ({ title, goBack, image=images.profileUser, goProfile }) => {
  const styles = getStyles()

  return (    
    <View style={styles.container}>
      <View style={{width: 40}}>
        {goBack && (
          <TouchableOpacity style={styles.imageContainer} onPress={goBack}>
            <Image source={images.chevronLeft} style={styles.image}/>
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.profileContainer} onPress={goProfile}>
        <Image source={image} style={styles.imageProfileUser}/>
      </TouchableOpacity>

    </View>
  )
}

export default Header;
