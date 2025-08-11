import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93' }}
        style={styles.image}
      />

      <Text style={styles.title}>Caffe Mocha</Text>
      <Text style={styles.subText}>Ice/Hot</Text>

      <View style={styles.ratingContainer}>
        <Text style={styles.star}>⭐</Text>
        <Text style={styles.rating}>4.8 (230)</Text>
      </View>

      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>
        A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and
        85 ml of fresh milk...
      </Text>

      <Text style={styles.sectionTitle}>Size</Text>
      <View style={styles.sizeContainer}>
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

      <View style={styles.footer}>
        <Text style={styles.price}>$ 4.53</Text>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>Buy Now</Text>
        </TouchableOpacity>
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
    fontSize: 14,
    color: '#555',
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    marginTop: 6,
    fontSize: 14,
    color: '#666',
  },
  sizeContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginRight: 10,
  },
  selectedSizeButton: {
    borderColor: '#a05f2c',
    backgroundColor: '#fbeee0',
  },
  sizeText: {
    fontSize: 16,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#a05f2c',
  },
  buyButton: {
    backgroundColor: '#a05f2c',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
