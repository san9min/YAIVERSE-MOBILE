import { useEffect,useState } from "react";
import { View, StyleSheet, Text, ScrollView,Image } from "react-native";
import axios from "axios";
import { API_URL } from "../config/constant";


export default function LoadingScreen(props) {
    const imageUri = props.route.params.imageUri
    const style = props.route.params.style
    const [resultImage,setresultImage] = useState(null);

    useEffect(()=>{
      const formData = new FormData();
      formData.append("id",style)
      formData.append("file", 
         {
          uri : imageUri,
          type : 'image/',
          name : "originalImage.png"
         }
    );
      axios
        .post(
          `${API_URL}/file/`,
          formData
          ,{
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((result) => {
          setresultImage(result.data)
        })
        .catch((err) => {
          console.error(err);
        });
    }
    ,[])
  return (
    <View>
    {resultImage &&  <View><Image
          source= {{uri : `${API_URL}/file/${resultImage}/` }}
          style={{
            width: "100%",
            height: 400,
            resizeMode: "contain",
          }}
        /></View>}
    {!resultImage &&  <View style ={{backgroundColor :"black"}}><Text style = {{color :"white"}}>Loading...</Text></View>}
  </View>)
}

const styles = StyleSheet.create({

});
