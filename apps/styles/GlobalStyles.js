import { StyleSheet } from 'react-native';


//colors
// #fd8383, #ce405f, #691d43, #e9ebed
//unicode list view technique{`\u2022 ${route.params.note}`}
export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fd8383',
      alignItems: 'center',
      justifyContent: 'center'
    },

    boxContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fd8383',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 20
    },
    detailsContainer: {
      flex: 1,
      backgroundColor: '#fd8383',
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingVertical: 20
    },
    box:{
      backgroundColor: '#e9ebed',
      flexBasis: '45%',
      minHeight: 150,
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5
    },
    detailsBox:{
      backgroundColor: '#e9ebed',
      minHeight: "50%",
      marginVertical: 10,
      borderRadius: 5,
      padding: 15
    },
    contentTitle:{
      fontFamily: 'italic',
      fontSize: 16,
      color: '#fd8383',
      textAlign: 'center',
      marginBottom: 5
    },
    contentDetails:{
      fontFamily: 'regular',
      fontSize: 16,
      color: '#333'
    },
    contentNotes:{
      fontFamily: 'bold',
      fontSize: 14,
      color: '#333'
    }
  });