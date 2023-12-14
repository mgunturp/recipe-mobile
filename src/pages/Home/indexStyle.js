import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: 'white',
    height: 'auto',
    paddingBottom: 80,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderColor: 'gray',
    borderRadius: 15,
    padding: 9,
    marginHorizontal: 20,
    backgroundColor: '#EFEFEF',
    borderWidth: 0,
    paddingHorizontal: 20,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
  },
  wrapper_tagline: {
    padding: 25,
  },
  tagline: {
    fontSize: 20,
    color: '#3F3A3A',
    fontWeight: '500',
  },

  desc: {
    marginTop: 5,
    color: '#666666',
    fontWeight: '900',
  },
  cardRecipes: {
    width: 260,
    height: 158,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    left:15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  recipeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    width: 300,
    bottom: 20,
    left: 10,
    paddingHorizontal: 10,
  },

  wrappernewrecipe: {
    padding: 25,
  },
  new_recipe: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  new: {
    fontSize: 20,
    color: '#3F3A3A',
  },

  more: {
    color: '#6D61F2',
    fontSize: 14,
  },

  wrapperpopular: {
    // marginHorizontal: 25,
    marginTop: 20,
  },
  taglinepopular: {
    fontSize: 20,
    color:'black',
    left:25,
    marginBottom:15 
    
  },
  wrapper_icon: {
    marginTop: 20,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-between',
  },

  icon_recipe: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  wrapper_popular: {
    marginHorizontal: 25,
    marginTop: 20,
   
  },
  tagline_popular: {
    fontSize: 20,
    marginBottom:20,
    color:'black'
  },

  cardRecipes2: {
    width: 260,
    height: 158,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    left:15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  recipeImage2: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title2: {
    position: 'absolute',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    width: 300,
    bottom: 0,
    height:50,
    left: 0,
    paddingHorizontal: 10,
    backgroundColor:'white'
  },
  subtitle:{
    position: 'absolute',
    color:'black',
    bottom:10,
    left:10,
    fontWeight: 'bold',
    // left:0,
    // backgroundColor:'red'
  }
});

export default styles;
