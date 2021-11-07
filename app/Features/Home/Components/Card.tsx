import React from 'react';
import { 
  TouchableOpacity,
  View, 
  Text,
  Image,
} from 'react-native';
import { getStyles } from './Card.style'

interface Props {
  title: string
  subtitle: string
  image: string
  onPress: () => void
}

const Card: React.FC<Props> = ({ title, subtitle, image, onPress }) => {
  const styles = getStyles()

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Card;
