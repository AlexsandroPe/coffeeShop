import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Button from '../../components/Button';
function Details({route}) {
    const {title, description, price, category, url} = route.params;
    const [selectedSize, setSelectedSize] = useState('M');
  
    return (
      <ScrollView style={styles.container}>
        <Image
          source={url}
          style={styles.image}
        />
  
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subText}>Ice/Hot</Text>
  
        <View style={styles.ratingContainer}>
          <Text style={styles.star}>⭐</Text>
          <Text style={styles.rating}>4.8 <Text style={{color: "#A2A2A2", fontSize: 12, fontFamily: "Sora_400Regular"}}>(230)</Text></Text>
        </View>
  
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          {description}
        </Text>
  
      
        <View style={styles.sizeContainer}>
            <Text style={styles.sectionTitle}>Size</Text>

            <View style={{flexDirection: "row", gap: 16}}> 
                    {['S', 'M', 'L'].map(size => (
                        <TouchableOpacity
                            key={size}
                            style={[
                                styles.sizeButton,
                                selectedSize === size && styles.selectedSizeButton,
                            ]}
                            onPress={() => setSelectedSize(size)}
                        >
                            <Text
                                style={[
                                    styles.sizeText,
                                    selectedSize === size && styles.selectedSizeText,
                                ]}
                            >
                            {size}
                        </Text>
                        </TouchableOpacity>
                    ))}
            </View>
        
        </View>
  
        <View style={styles.footer}>
            <View style={{ alignItems: "center", gap: 4}}>
                <Text style={{color: "#909090"}}>Price</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <Button title={"Buy Now"} width={217}/>
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#fff',
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 12,
      marginBottom: 20,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    subText: {
      fontSize: 14,
      color: '#888',
      marginTop: 2,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
    },
    star: {
      fontSize: 18,
      marginRight: 4,
    },
    rating: {
        fontFamily: "Sora_600SemiBold",
      fontSize: 16,
      color: '#000000ff',
    },
    sectionTitle: {
      fontFamily: "Sora_600SemiBold",
      marginTop: 20,
      fontSize: 16,
    },
    description: {
        fontFamily: "Sora_300Light",
      marginTop: 6,
      fontSize: 14,
      lineHeight: 20,
      color: '#666',
    },
    sizeContainer: {
      gap: 16,
      paddingVertical: 10,
    },
    sizeButton: {
        width: 96, 
        height: 41,
        gap: 10,
        paddingHorizontal: 24, 
        paddingVertical: 24,
        justifyContent: "center",
      borderWidth: 1,
      borderRadius: 12,
      borderColor: '#ccc',
    },
    selectedSizeButton: {
      borderColor: '#a05f2c',
      backgroundColor: '#fbeee0',
    },
    sizeText: {
      height: 21,
      fontSize: 14,
      textAlign: "center",
      fontFamily: "Sora_400Regular",
      color: '#333',
    },
    selectedSizeText: {
      color: '#a05f2c',
      fontWeight: 'bold',
    },
    footer: {
      marginTop: 30,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    price: {
      fontSize: 18,

      fontFamily: "Sora_600SemiBold",
      color: '#C67C4E',
    },
 
    buyText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  });
  
  export default Details;