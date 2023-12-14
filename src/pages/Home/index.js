import {ScrollView, Text, View, TextInput, Image, FlatList} from 'react-native';
import {searchIcon} from '../../assets';
import styles from './indexStyle';
import React from 'react';

const Home = () => {
  const data = [
    {
      id: 1,
      title: 'Sandwich',
      image: require('../../assets/images/makanan1.png'),
    },
    {
      id: 2,
      title: 'Blueberry Pie',
      image: require('../../assets/images/makanan2.png'),
    },
    {
      id: 3,
      title: 'Burger',
      image: require('../../assets/images/makanan3.png'),
    },
    {
      id: 4,
      title: 'Blueberry',
      image: require('../../assets/images/card4.png'),
    },
  ];
  const data2 = [
    {
      id: 1,
      title: 'Blueberry',
      subtitle: 'Bread with blueberry',
      image: require('../../assets/images/card4.png'),
    },
    {
      id: 2,
      title: 'Burger',
      subtitle: 'Burger bun with red onion beef patty',
      image: require('../../assets/images/makanan3.png'),
    },
    {
      id: 3,
      title: 'Blueberry Pie',
      subtitle: 'Bread with banana and blueberry',
      image: require('../../assets/images/makanan2.png'),
    },
    {
      id: 4,
      title: 'Sandwich',
      subtitle: 'Bread with egg and avocados',
      image: require('../../assets/images/makanan1.png'),
    },
  ];
  const popularRecipe = ({item}) => (
    <View style={styles.cardRecipes}>
      <Image source={item.image} style={styles.recipeImage} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
  const popularRecipe2 = ({item}) => (
    <View style={styles.cardRecipes2}>
      <Image source={item.image} style={styles.recipeImage2} />
      <Text style={styles.title2}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Image source={searchIcon} style={styles.icon} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Search Pasta, Bread, etc"
          />
        </View>
        <View style={styles.wrapper_tagline}>
          <Text style={styles.tagline}>Popular Recipes</Text>
          <Text style={styles.desc}>Populer check</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={recipe => recipe.id.toString()}
          renderItem={popularRecipe}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.wrappernewrecipe}>
          <View style={styles.new_recipe}>
            <Text style={styles.new}>New Recipes</Text>
            <Text style={styles.more}>More info</Text>
          </View>
          <View style={styles.wrapper_icon}>
            <View style={styles.icon_recipe}>
              <Image source={require('../../assets/images/Soup.png')} />
              <Text>Soup</Text>
            </View>
            <View style={styles.icon_recipe}>
              <Image source={require('../../assets/images/Chicken.png')} />
              <Text>Chicken</Text>
            </View>
            <View style={styles.icon_recipe}>
              <Image source={require('../../assets/images/Seafood.png')} />
              <Text>Seafood</Text>
            </View>
            <View style={styles.icon_recipe}>
              <Image source={require('../../assets/images/Dessert.png')} />
              <Text>Dessert</Text>
            </View>
          </View>
        </View>
        <View style={styles.wrapperpopular}>
          <View>
            <Text style={styles.taglinepopular}>Popular For you</Text>
          </View>
          <FlatList
            data={data2}
            keyExtractor={recipe => recipe.id.toString()}
            renderItem={popularRecipe2}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
