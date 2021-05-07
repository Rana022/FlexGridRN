import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';
import { flexImage } from '../contents/FlexImages';

export default function App({route}) {

  switch(route.params.title){
    //Introduction
    case "Introduction":
      return(
        <ScrollView>
      <View style={globalStyles.detailsContainer}>
      <View style={globalStyles.detailsBox}>
      <Text style={globalStyles.contentTitle}>{route.params.title}</Text>
        <Text style={globalStyles.contentDetails}>{route.params.details}</Text>
        <Image resizeMode="contain" style={{width: '100%', marginVertical: -90}} source={flexImage.img.axisDisplay} />
        <Text style={globalStyles.contentDetails}>{route.params.axis}</Text>
        <Text style={{marginTop: 10}}>
          <Text style={{fontFamily: 'italic', fontSize: 14, color: '#691d43'}}>Note: </Text>
          <Text style={globalStyles.contentNotes}>{route.params.note}</Text>
        </Text>
      </View>
      </View>
      </ScrollView>
      );
      break;
     //Flex Properties
      case "Flex Properties":
      return(
      <View style={globalStyles.detailsContainer}>
      <View style={globalStyles.detailsBox}>
      <Text style={globalStyles.contentTitle}>{route.params.title}</Text>
        <Text style={globalStyles.contentDetails}>{route.params.details}</Text>
        <Text style={{fontFamily: 'italic', fontSize: 14, marginVertical: 8, color: '#691d43'}}>Parent Properties</Text>
        {route.params.parentProperties.map((item) => {
             return(
             <View key={item} >
               <Text style={{fontFamily: 'italic', fontSize: 14}}>{`\u2022 ${item}`}</Text>
             </View>
             )
          })}

        <Text style={{fontFamily: 'italic', fontSize: 14, marginVertical: 8, color: '#691d43'}}>Child Properties</Text>
        {route.params.childProperties.map((item) => {
             return(
             <View key={item} >
               <Text style={{fontFamily: 'italic', fontSize: 14}}>{`\u2022 ${item}`}</Text>
             </View>
             )
          })}


      </View>
      </View>
      );
      break;

      //Display & Flex-Direction
    case "Display & Flex-Direction":
      return(
      <ScrollView>
      <View style={globalStyles.detailsContainer}>
      <View style={globalStyles.detailsBox}>
        <Text style={globalStyles.contentTitle}>{route.params.title}</Text>
        <Text style={globalStyles.contentDetails}>{route.params.displayDetails}</Text>
        <Image resizeMode="contain" style={{width: '100%'}} source={flexImage.img.flex} />
        <Text style={globalStyles.contentDetails}>{route.params.flexDetails}</Text>
        <Image resizeMode="contain" style={{width: '100%'}} source={flexImage.img.flexDirection} />
        {route.params.flexPropertis.map((item) => {
             return(
             <View key={item} style={{marginVertical: 4}}>
               <Text style={{fontFamily: 'italic', fontSize: 14}}>{`\u2022 ${item}`}</Text>
             </View>
             )
          })}
        <Image resizeMode="contain" style={{width: '100%', marginVertical: -50}} source={flexImage.img.display} />
      </View>
      </View>
      </ScrollView>
      );
      break;

      //flex-wrap & flex-flow
    case "flex-wrap & flex-flow":
      return(
      <ScrollView>
      <View style={globalStyles.detailsContainer}>
      <View style={globalStyles.detailsBox}>
        <Text style={globalStyles.contentTitle}>{route.params.title}</Text>
        <Image resizeMode="contain" style={{width: '100%', marginVertical: -50}} source={flexImage.img.wrapDisplay} />
        <Text style={globalStyles.contentDetails}>{route.params.details}</Text>
        <Image resizeMode="contain" style={{width: '100%'}} source={flexImage.img.wrapCode} />
        {route.params.properties.map((item) => {
             return(
             <View key={item} style={{marginVertical: 4}}>
               <Text style={{fontFamily: 'italic', fontSize: 14}}>{`\u2022 ${item}`}</Text>
             </View>
             )
          })}
        <Text style={[{marginVertical: 10}, globalStyles.contentDetails]}>{route.params.flowDetails}</Text>
        <Image resizeMode="contain" style={{width: '100%'}} source={flexImage.img.flowCode} />
      </View>
      </View>
      </ScrollView>
      );
      break;

      //justify-content
    case "justify-content":
      return(
      <ScrollView>
      <View style={globalStyles.detailsContainer}>
      <View style={globalStyles.detailsBox}>
        <Text style={globalStyles.contentTitle}>{route.params.title}</Text>
        <Text style={globalStyles.contentDetails}>{route.params.details}</Text>
        <Text style={{marginTop: 10}}>
          <Text style={{fontFamily: 'italic', fontSize: 14, color: '#691d43'}}>Note: </Text>
          <Text style={globalStyles.contentNotes}>{route.params.note}</Text>
        </Text>
        <Image resizeMode="center" style={{width: '100%', marginVertical: -150}} source={flexImage.img.jcDisplay} />
        {route.params.properties.map((item) => {
             return(
             <View key={item} style={{marginVertical: 4}}>
               <Text style={{fontFamily: 'italic', fontSize: 14,}}>{`\u2022 ${item}`}</Text>
             </View>
             )
          })}
        <Image resizeMode="contain" style={{width: '100%'}} source={flexImage.img.jcCode} />
      </View>
      </View>
      </ScrollView>
      );
      break;

      //align-items
    case "align-items":
      return(
      <ScrollView>
      <View style={globalStyles.detailsContainer}>
      <View style={globalStyles.detailsBox}>
        <Text style={globalStyles.contentTitle}>{route.params.title}</Text>
        <Text style={globalStyles.contentDetails}>{route.params.details}</Text>
        <Image resizeMode="center" style={{width: '100%', marginVertical: -120}} source={flexImage.img.aiDisplay} />
        <Image resizeMode="center" style={{width: '100%', marginTop: -120}} source={flexImage.img.aibDisplay} />
        {route.params.properties.map((item) => {
             return(
             <View key={item} style={{marginVertical: 4}}>
               <Text style={{fontFamily: 'italic', fontSize: 14,}}>{`\u2022 ${item}`}</Text>
             </View>
             )
          })}
        <Image resizeMode="contain" style={{width: '100%'}} source={flexImage.img.aiCode} />
      </View>
      </View>
      </ScrollView>
      );
      break;

      //align-content
    case "align-content":
      return(
      <ScrollView>
      <View style={globalStyles.detailsContainer}>
      <View style={globalStyles.detailsBox}>
        <Text style={globalStyles.contentTitle}>{route.params.title}</Text>
        <Text style={globalStyles.contentDetails}>{route.params.details}</Text>
        <Text style={{marginTop: 10}}>
          <Text style={{fontFamily: 'italic', fontSize: 14, color: '#691d43'}}>Note: </Text>
          <Text style={globalStyles.contentNotes}>{route.params.note}</Text>
        </Text>
        <Image resizeMode="center" style={{width: '100%', marginVertical: -140}} source={flexImage.img.acDisplay} />
        <Image resizeMode="center" style={{width: '100%', marginBottom: -90, marginTop: -160}} source={flexImage.img.acDisplay2} />
        {route.params.properties.map((item) => {
             return(
             <View key={item} style={{marginVertical: 4}}>
               <Text style={{fontFamily: 'italic', fontSize: 14,}}>{`\u2022 ${item}`}</Text>
             </View>
             )
          })}
        <Image resizeMode="contain" style={{width: '100%'}} source={flexImage.img.acCode} />
      </View>
      </View>
      </ScrollView>
      );
      break;

      //order
    case "order":
      return(
      <ScrollView>
      <View style={globalStyles.detailsContainer}>
      <View style={globalStyles.detailsBox}>
        <Text style={globalStyles.contentTitle}>{route.params.title}</Text>
        <Image resizeMode="center" style={{width: '100%', marginVertical: -80}} source={flexImage.img.orderDisplay} />
        <Text style={globalStyles.contentDetails}>{route.params.details}</Text>
        <Image resizeMode="center" style={{width: '100%'}} source={flexImage.img.orderCode} />
      </View>
      </View>
      </ScrollView>
      );
      break;

      //flex-grow & flex-shrink
    case "flex-grow & flex-shrink":
      return(
      <ScrollView>
      <View style={globalStyles.detailsContainer}>
      <View style={globalStyles.detailsBox}>
        <Text style={globalStyles.contentTitle}>{route.params.title}</Text>
        <Image resizeMode="center" style={{width: '100%', marginVertical: -50}} source={flexImage.img.fgDisplay} />
        <Text style={globalStyles.contentDetails}>{route.params.growDetails}</Text>
        <Image resizeMode="contain" style={{width: '100%'}} source={flexImage.img.fgCode} />
        <Text style={globalStyles.contentDetails}>{route.params.shrinkDetails}</Text>
        <Image resizeMode="contain" style={{width: '100%'}} source={flexImage.img.fsCode} />
        <Text style={{marginTop: 10}}>
          <Text style={{fontFamily: 'italic', fontSize: 14, color: '#691d43'}}>Note: </Text>
          <Text style={globalStyles.contentNotes}>{route.params.note}</Text>
        </Text>

      </View>
      </View>
      </ScrollView>
      );
      break;

      //flex-basis
    case "flex-basis":
      return(
      <ScrollView>
      <View style={globalStyles.detailsContainer}>
      <View style={globalStyles.detailsBox}>
        <Text style={globalStyles.contentTitle}>{route.params.title}</Text>
        <Text style={globalStyles.contentDetails}>{route.params.details}</Text>
        <Image resizeMode="contain" style={{width: '100%'}} source={flexImage.img.fbCode} />
        <Text style={globalStyles.contentDetails}>{route.params.detailsTwo}</Text>
      </View>
      </View>
      </ScrollView>
      );
      break;

      //flex
    case "flex":
      return(
      <ScrollView>
      <View style={globalStyles.detailsContainer}>
      <View style={globalStyles.detailsBox}>
        <Text style={globalStyles.contentTitle}>{route.params.title}</Text>
        <Text style={globalStyles.contentDetails}>{route.params.details}</Text>
        <Image resizeMode="contain" style={{width: '100%', marginTop: 50}} source={flexImage.img.fCode} />
        <Text style={{marginTop: 50}}>
          <Text style={{fontFamily: 'italic', fontSize: 14, color: '#691d43'}}>Note: </Text>
          <Text style={globalStyles.contentNotes}>{route.params.note}</Text>
        </Text>
      </View>
      </View>
      </ScrollView>
      );
      break;

      //align-self
    case "align-self":
      return(
      <ScrollView>
      <View style={globalStyles.detailsContainer}>
      <View style={globalStyles.detailsBox}>
        <Text style={globalStyles.contentTitle}>{route.params.title}</Text>
        <Image resizeMode="center" style={{width: '100%', marginVertical: -50}} source={flexImage.img.asDisplay} />
        <Text style={globalStyles.contentDetails}>{route.params.details}</Text>
        <Image resizeMode="contain" style={{width: '100%'}} source={flexImage.img.asCode} />
        <Text style={{marginTop: 10}}>
          <Text style={{fontFamily: 'italic', fontSize: 14, color: '#691d43'}}>Note: </Text>
          <Text style={globalStyles.contentNotes}>{route.params.note}</Text>
        </Text>
      </View>
      </View>
      </ScrollView>
      );
      break;


      // default return
      default:
        return (
          <ScrollView>
          <View style={globalStyles.detailsContainer}>
            <View style={globalStyles.detailsBox}>
            <Text>Nothing to Show</Text>
            </View>
          </View>
          </ScrollView>
        );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
