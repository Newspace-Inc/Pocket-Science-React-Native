import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class LoadingScreen extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="260f1359-4baf-448d-80d9-33e60a8b9924" style={styles.loadingScreen}>
        <View data-layer="5d9113fb-29a5-4f24-81f5-c40a7e8eb615" style={styles.loadingScreen_tabBar}>
            <View data-layer="03e5c0b7-8f90-4d06-b3b9-75581026f605" style={styles.loadingScreen_tabBar_background081cb570}>
                <ReactImage data-layer="d6b6b4f6-7b2f-4541-8575-0a81ee03acfb" source={require('./assets/background.png')} style={styles.loadingScreen_tabBar_background081cb570_background} />
            </View>
            <View data-layer="658833c6-f208-4573-8b6d-0eabb5b9ae79" style={styles.loadingScreen_tabBar_tab4}>
                <View data-layer="8348dcfa-65e2-4526-a65f-bbda9b6bf9d6" style={styles.loadingScreen_tabBar_tab4_frameabf86d61}></View>
                <View data-layer="4e8d1410-64c0-4678-83ec-271994a94dae" style={styles.loadingScreen_tabBar_tab4_groupcb3b0b5e}>
                    <View data-layer="2f3d346a-a0c4-486f-9360-faf443c16a06" style={styles.loadingScreen_tabBar_tab4_groupcb3b0b5e_glyph676ac008}>
                        <View data-layer="55b579d0-d7be-407e-998c-8687c2d17fc9" style={styles.loadingScreen_tabBar_tab4_groupcb3b0b5e_glyph676ac008_frame99f62210}></View>
                        <View style={styles.loadingScreen_tabBar_tab4_groupcb3b0b5e_glyph676ac008_symbol2b36bfcc}><Text data-layer="c4dc1f12-ef7a-4815-9727-f0949df39b52" style={{"marginTop":-5,"color":"rgba(153, 153, 153, 1)","fontSize":22,"fontWeight":"400","fontStyle":"normal","fontFamily":"SF Pro Text","textAlign":"center","lineHeight":24.200000000000003}}>􀁁</Text></View>
                    </View>
                    <Text data-layer="295feb77-ad09-4da4-8602-d956b2891aa3" style={styles.loadingScreen_tabBar_tab4_groupcb3b0b5e_settings}>Settings</Text>
                </View>
            </View>
            <View data-layer="0565ddf3-bdc1-47c1-af61-eb3b625505bf" style={styles.loadingScreen_tabBar_tab3}>
                <View data-layer="547f096e-dd06-40b6-bec9-8a7d62c59f6a" style={styles.loadingScreen_tabBar_tab3_frameb05be0a0}></View>
                <View data-layer="4e59d232-357b-4101-953d-43bd10675990" style={styles.loadingScreen_tabBar_tab3_group60071c3a}>
                    <View data-layer="65b8dc89-698a-4489-976e-eddf5d56c599" style={styles.loadingScreen_tabBar_tab3_group60071c3a_glyph9bdd577d}>
                        <View data-layer="d553992a-6c4d-4853-9258-2cce97cb5d18" style={styles.loadingScreen_tabBar_tab3_group60071c3a_glyph9bdd577d_frame75ecf9b8}></View>
                        <View style={styles.loadingScreen_tabBar_tab3_group60071c3a_glyph9bdd577d_symbol7caf402d}><Text data-layer="33aadf77-2cf1-4b09-81c1-59b5df7de742" style={{"marginTop":-5,"color":"rgba(153, 153, 153, 1)","fontSize":22,"fontWeight":"400","fontStyle":"normal","fontFamily":"SF Pro Text","textAlign":"center","lineHeight":24.200000000000003}}>􀀿</Text></View>
                    </View>
                    <Text data-layer="fecefee4-e5cb-41d1-ad3b-25c668208af6" style={styles.loadingScreen_tabBar_tab3_group60071c3a_favorites}>Favorites</Text>
                </View>
            </View>
            <View data-layer="751ffe66-c1ab-418b-bf48-577f4bfddd22" style={styles.loadingScreen_tabBar_tab2}>
                <View data-layer="ba9b303b-cc88-4cf8-b1ff-6302f60e7eba" style={styles.loadingScreen_tabBar_tab2_frameaeb79524}></View>
                <View data-layer="ded906b7-a02c-417b-a6af-d73c9c26d522" style={styles.loadingScreen_tabBar_tab2_groupcf952565}>
                    <View data-layer="5dab84bc-c607-4cfa-9406-ce94d4706b19" style={styles.loadingScreen_tabBar_tab2_groupcf952565_glyph8ca5c447}>
                        <View data-layer="ca448a33-2945-42e8-b5f5-9cf0823f105d" style={styles.loadingScreen_tabBar_tab2_groupcf952565_glyph8ca5c447_framebf1be3e5}></View>
                        <View style={styles.loadingScreen_tabBar_tab2_groupcf952565_glyph8ca5c447_symbolc1d6cec6}><Text data-layer="8610b8cf-d438-4387-9534-143d2d351dba" style={{"marginTop":-5,"color":"rgba(153, 153, 153, 1)","fontSize":22,"fontWeight":"400","fontStyle":"normal","fontFamily":"SF Pro Text","textAlign":"center","lineHeight":24.200000000000003}}>􀀽</Text></View>
                    </View>
                    <Text data-layer="3eac3784-2e1e-45ef-930c-9c5217e6b546" style={styles.loadingScreen_tabBar_tab2_groupcf952565_awards}>Awards
</Text>
                </View>
            </View>
            <View data-layer="096b3940-0600-4d97-bba8-3b16faf0813c" style={styles.loadingScreen_tabBar_tab1}>
                <View data-layer="b8cd7968-05ec-4790-99e6-525b0dba68bd" style={styles.loadingScreen_tabBar_tab1_frameba816d48}></View>
                <View data-layer="b6dbda75-4660-480b-b39b-01199802923a" style={styles.loadingScreen_tabBar_tab1_group}>
                    <View data-layer="b9813065-118b-4fb7-a8a0-006ef94a975e" style={styles.loadingScreen_tabBar_tab1_group_glyph}>
                        <View data-layer="e67b98a1-8f9c-4433-bfbf-79ce3b272cbd" style={styles.loadingScreen_tabBar_tab1_group_glyph_frame73587bd1}></View>
                        <View style={styles.loadingScreen_tabBar_tab1_group_glyph_symbol}><Text data-layer="03b7cef6-9e4a-4761-b9ea-f06420ba2a4e" style={{"marginTop":-5,"color":"rgba(0, 122, 255, 1)","fontSize":22,"fontWeight":"400","fontStyle":"normal","fontFamily":"SF Pro Text","textAlign":"center","lineHeight":24.200000000000003}}>􀀻</Text></View>
                    </View>
                    <Text data-layer="caff7754-0adc-4e27-8c34-8a6756637095" style={styles.loadingScreen_tabBar_tab1_group_home}>Home</Text>
                </View>
            </View>
        </View>
        <View data-layer="0443ce7e-7706-4a5e-8c64-ebd3875c7b73" style={styles.loadingScreen_homeIndicator2c978675}>
            <View data-layer="732c0d3f-6617-4e61-b7a6-6cb556fc9df6" style={styles.loadingScreen_homeIndicator2c978675_frame9907e3f0}></View>
            <View data-layer="b23af2fe-b055-4724-b2fc-f3a2831c168b" style={styles.loadingScreen_homeIndicator2c978675_homeIndicator}></View>
        </View>
        <View data-layer="ad775306-f08e-4a7c-977d-310339621b61" style={styles.loadingScreen_rectangle5}></View>
        <View data-layer="28a2f9ef-7bf5-4199-bbce-d592bceaeb6a" style={styles.loadingScreen_statusBar558c0f1a}>
            <View data-layer="d9be2e39-14b2-4591-853f-5a47dcf03ed8" style={styles.loadingScreen_statusBar558c0f1a_frame}></View>
            <View data-layer="d96303d5-b6dd-4fd2-9f48-72739ae7f70a" style={styles.loadingScreen_statusBar558c0f1a_statusBar}>
                <View data-layer="1acaeddd-05a8-4139-9c65-5f1ade6dce6d" style={styles.loadingScreen_statusBar558c0f1a_statusBar_battery}>
                    <View data-layer="6309be4b-59f1-4a67-8bc8-a9d8b931b727" style={styles.loadingScreen_statusBar558c0f1a_statusBar_battery_border}></View>
                    <Svg data-layer="eedea852-113e-4f63-b33e-8c7fc00e0bc6" style={styles.loadingScreen_statusBar558c0f1a_statusBar_battery_cap} preserveAspectRatio="none" viewBox="-0.75 -0.75 2.828033447265625 5.5" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 0 0 L 0 4 C 0.8047311305999756 3.661223411560059 1.328037977218628 2.873133182525635 1.328037977218628 2 C 1.328037977218628 1.126866698265076 0.8047311305999756 0.3387765288352966 0 0"  /></Svg>
                    <View data-layer="9436eaa6-e7f9-4618-8c27-5787759fd4f0" style={styles.loadingScreen_statusBar558c0f1a_statusBar_battery_capacity}></View>
                </View>
                <Svg data-layer="0659882e-3bf9-46bf-ab62-4a67cd594df5" style={styles.loadingScreen_statusBar558c0f1a_statusBar_wifi} preserveAspectRatio="none" viewBox="-0.75 -0.75 16.833343505859375 12.499755859375" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 7.667118072509766 10.99980068206787 C 7.583868026733398 10.99980068206787 7.502848148345947 10.96601009368896 7.444818019866943 10.90710067749023 L 5.438717842102051 8.884799957275391 C 5.37655782699585 8.824450492858887 5.342437744140625 8.740139961242676 5.345118045806885 8.653500556945801 C 5.346918106079102 8.567130088806152 5.384637832641602 8.48445987701416 5.448617935180664 8.426700592041016 C 6.068027973175049 7.903049945831299 6.855897903442383 7.61467981338501 7.667118072509766 7.61467981338501 C 8.478347778320312 7.61467981338501 9.266218185424805 7.903059959411621 9.885618209838867 8.426700592041016 C 9.949607849121094 8.48445987701416 9.98731803894043 8.567120552062988 9.989117622375488 8.653500556945801 C 9.990918159484863 8.740429878234863 9.956467628479004 8.824740409851074 9.894618034362793 8.884799957275391 L 7.889418125152588 10.90710067749023 C 7.831387996673584 10.96601009368896 7.750368118286133 10.99980068206787 7.667118072509766 10.99980068206787 Z M 11.18971824645996 7.451099872589111 C 11.10976791381836 7.451099872589111 11.03336811065674 7.420739650726318 10.97461795806885 7.365599632263184 C 10.06604766845703 6.544379711151123 8.891417503356934 6.092099666595459 7.667118072509766 6.092099666595459 C 6.443657875061035 6.092999935150146 5.269988059997559 6.545269966125488 4.36231803894043 7.365599632263184 C 4.303567886352539 7.420729637145996 4.227168083190918 7.451099872589111 4.147217750549316 7.451099872589111 C 4.064228057861328 7.451099872589111 3.986237764358521 7.418819904327393 3.927617788314819 7.360199928283691 L 2.768417596817017 6.189300060272217 C 2.706577777862549 6.127449989318848 2.673017740249634 6.045629978179932 2.673917770385742 5.958899974822998 C 2.674807786941528 5.871150016784668 2.709967613220215 5.789649963378906 2.772917747497559 5.729399681091309 C 4.106788158416748 4.489140033721924 5.845237731933594 3.806100130081177 7.668017864227295 3.806100130081177 C 9.490477561950684 3.806100130081177 11.229248046875 4.489140033721924 12.56401824951172 5.729399681091309 C 12.62696838378906 5.790549755096436 12.66212749481201 5.872049808502197 12.66301822662354 5.958899974822998 C 12.66391754150391 6.045629978179932 12.63035774230957 6.127449989318848 12.56851768493652 6.189300060272217 L 11.40931797027588 7.360199928283691 C 11.35068798065186 7.418819904327393 11.27270793914795 7.451099872589111 11.18971824645996 7.451099872589111 Z M 13.85911750793457 4.758299827575684 C 13.77818775177002 4.758299827575684 13.70179748535156 4.726979732513428 13.64401817321777 4.67009973526001 C 12.02446746826172 3.131530046463013 9.901827812194824 2.284200191497803 7.667118072509766 2.284200191497803 C 5.431828022003174 2.284200191497803 3.308867692947388 3.131530046463013 1.68931782245636 4.670109748840332 C 1.631547808647156 4.726969718933105 1.555147767066956 4.758299827575684 1.474217772483826 4.758299827575684 C 1.390907764434814 4.758299827575684 1.312917828559875 4.725699901580811 1.254617810249329 4.666500091552734 L 0.09361779689788818 3.496500015258789 C 0.03235779702663422 3.434340000152588 -0.0008822033414617181 3.352830171585083 1.779667218215764e-05 3.267000198364258 C 0.0009177966858260334 3.180460214614868 0.03511779755353928 3.099590063095093 0.09631779789924622 3.039300203323364 C 2.143527746200562 1.079370021820068 4.832218170166016 0 7.667118072509766 0 C 10.50233840942383 0 13.19070816040039 1.079380035400391 15.23701763153076 3.039300203323364 C 15.2982177734375 3.099590063095093 15.33241748809814 3.180460214614868 15.33331775665283 3.267000198364258 C 15.33421802520752 3.352830171585083 15.30097770690918 3.434340000152588 15.23971748352051 3.496500015258789 L 14.0787181854248 4.666500091552734 C 14.02041816711426 4.725699901580811 13.94242763519287 4.758299827575684 13.85911750793457 4.758299827575684 Z"  /></Svg>
                <Svg data-layer="f921246d-ff1b-47cd-a250-bb2c594c000b" style={styles.loadingScreen_statusBar558c0f1a_statusBar_cellularConnection} preserveAspectRatio="none" viewBox="-0.75 -0.7499999293327448 18.500091552734375 12.166748046875" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 16.00020027160645 10.6668004989624 L 15.00029945373535 10.6668004989624 C 14.44894981384277 10.6668004989624 14.00039958953857 10.2182502746582 14.00039958953857 9.666900634765625 L 14.00039958953857 0.9999000430107117 C 14.00039958953857 0.4485500752925873 14.44894981384277 7.066725515869621e-08 15.00029945373535 7.066725515869621e-08 L 16.00020027160645 7.066725515869621e-08 C 16.55154991149902 7.066725515869621e-08 17.00010108947754 0.4485500752925873 17.00010108947754 0.9999000430107117 L 17.00010108947754 9.666900634765625 C 17.00010108947754 10.2182502746582 16.55154991149902 10.6668004989624 16.00020027160645 10.6668004989624 Z M 11.33369922637939 10.6668004989624 L 10.33290004730225 10.6668004989624 C 9.781549453735352 10.6668004989624 9.332999229431152 10.2182502746582 9.332999229431152 9.666900634765625 L 9.332999229431152 3.333600044250488 C 9.332999229431152 2.782249927520752 9.781549453735352 2.333699941635132 10.33290004730225 2.333699941635132 L 11.33369922637939 2.333699941635132 C 11.88504981994629 2.333699941635132 12.33360004425049 2.782249927520752 12.33360004425049 3.333600044250488 L 12.33360004425049 9.666900634765625 C 12.33360004425049 10.2182502746582 11.88504981994629 10.6668004989624 11.33369922637939 10.6668004989624 Z M 6.666300296783447 10.6668004989624 L 5.666399955749512 10.6668004989624 C 5.115049839019775 10.6668004989624 4.666500091552734 10.2182502746582 4.666500091552734 9.666900634765625 L 4.666500091552734 5.66640043258667 C 4.666500091552734 5.115050315856934 5.115049839019775 4.666500091552734 5.666399955749512 4.666500091552734 L 6.666300296783447 4.666500091552734 C 7.218140125274658 4.666500091552734 7.667099952697754 5.115050315856934 7.667099952697754 5.66640043258667 L 7.667099952697754 9.666900634765625 C 7.667099952697754 10.2182502746582 7.218140125274658 10.6668004989624 6.666300296783447 10.6668004989624 Z M 1.999799966812134 10.6668004989624 L 0.9998999834060669 10.6668004989624 C 0.4485500156879425 10.6668004989624 0 10.2182502746582 0 9.666900634765625 L 0 7.667100429534912 C 0 7.115260124206543 0.4485500156879425 6.666300296783447 0.9998999834060669 6.666300296783447 L 1.999799966812134 6.666300296783447 C 2.55115008354187 6.666300296783447 2.99970006942749 7.115260124206543 2.99970006942749 7.667100429534912 L 2.99970006942749 9.666900634765625 C 2.99970006942749 10.2182502746582 2.55115008354187 10.6668004989624 1.999799966812134 10.6668004989624 Z"  /></Svg>
                <View data-layer="e93ca1b5-dea4-4cb1-a2d0-77f127bd021b" style={styles.loadingScreen_statusBar558c0f1a_statusBar_timeStyle}>
                    <Text data-layer="f8e33008-3008-4550-9ef4-d459c8ea413e" style={styles.loadingScreen_statusBar558c0f1a_statusBar_timeStyle_time}>9:41</Text>
                </View>
            </View>
        </View>
        <Text data-layer="6aa55a22-39e2-44a6-a2e8-14ba48df3cc3" style={styles.loadingScreen_x5238Points}>5238 Points</Text>
    </ScrollView>
    );
  }
}

LoadingScreen.propTypes = {

}

LoadingScreen.defaultProps = {

}


const styles = StyleSheet.create({
  "loadingScreen": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 375,
    "height": 812,
    "left": 0,
    "top": 0
  },
  "loadingScreen_tabBar": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 375,
    "height": 83,
    "left": 0,
    "top": 729
  },
  "loadingScreen_tabBar_background081cb570": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 375,
    "height": 83,
    "left": 0,
    "top": 0
  },
  "loadingScreen_tabBar_background081cb570_background": {
    "opacity": 0.9985939860343933,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 375,
    "height": 83,
    "left": 0,
    "top": 0
  },
  "loadingScreen_tabBar_tab4": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 95,
    "height": 49,
    "left": 280,
    "top": 0
  },
  "loadingScreen_tabBar_tab4_frameabf86d61": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 95,
    "height": 49,
    "left": 0,
    "top": 0
  },
  "loadingScreen_tabBar_tab4_groupcb3b0b5e": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 48,
    "height": 44,
    "left": 23,
    "top": 3
  },
  "loadingScreen_tabBar_tab4_groupcb3b0b5e_glyph676ac008": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 48,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "loadingScreen_tabBar_tab4_groupcb3b0b5e_glyph676ac008_frame99f62210": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 48,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "loadingScreen_tabBar_tab4_groupcb3b0b5e_glyph676ac008_symbol2b36bfcc": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(153, 153, 153, 1)",
    "fontSize": 22,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "SF Pro Text",
    "textAlign": "center",
    "lineHeight": 24.200000000000003,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 26,
    "height": 26,
    "left": 11,
    "top": 10
  },
  "loadingScreen_tabBar_tab4_groupcb3b0b5e_settings": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(153, 153, 153, 1)",
    "fontSize": 10,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "SF Pro Text",
    "textAlign": "center",
    "lineHeight": 12,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 48,
    "height": 14,
    "left": 0,
    "top": 32
  },
  "loadingScreen_tabBar_tab3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 92,
    "height": 49,
    "left": 188,
    "top": 0
  },
  "loadingScreen_tabBar_tab3_frameb05be0a0": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 92,
    "height": 49,
    "left": 0,
    "top": 0
  },
  "loadingScreen_tabBar_tab3_group60071c3a": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 48,
    "height": 44,
    "left": 22,
    "top": 3
  },
  "loadingScreen_tabBar_tab3_group60071c3a_glyph9bdd577d": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 48,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "loadingScreen_tabBar_tab3_group60071c3a_glyph9bdd577d_frame75ecf9b8": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 48,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "loadingScreen_tabBar_tab3_group60071c3a_glyph9bdd577d_symbol7caf402d": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(153, 153, 153, 1)",
    "fontSize": 22,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "SF Pro Text",
    "textAlign": "center",
    "lineHeight": 24.200000000000003,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 26,
    "height": 26,
    "left": 11,
    "top": 10
  },
  "loadingScreen_tabBar_tab3_group60071c3a_favorites": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(153, 153, 153, 1)",
    "fontSize": 10,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "SF Pro Text",
    "textAlign": "center",
    "lineHeight": 12,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 48,
    "height": 14,
    "left": 0,
    "top": 32
  },
  "loadingScreen_tabBar_tab2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 85,
    "height": 49,
    "left": 95,
    "top": 0
  },
  "loadingScreen_tabBar_tab2_frameaeb79524": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 85,
    "height": 49,
    "left": 0,
    "top": 0
  },
  "loadingScreen_tabBar_tab2_groupcf952565": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 48,
    "height": 44,
    "left": 18,
    "top": 3
  },
  "loadingScreen_tabBar_tab2_groupcf952565_glyph8ca5c447": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 48,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "loadingScreen_tabBar_tab2_groupcf952565_glyph8ca5c447_framebf1be3e5": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 48,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "loadingScreen_tabBar_tab2_groupcf952565_glyph8ca5c447_symbolc1d6cec6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(153, 153, 153, 1)",
    "fontSize": 22,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "SF Pro Text",
    "textAlign": "center",
    "lineHeight": 24.200000000000003,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 26,
    "height": 26,
    "left": 11,
    "top": 10
  },
  "loadingScreen_tabBar_tab2_groupcf952565_awards": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(153, 153, 153, 1)",
    "fontSize": 10,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "SF Pro Text",
    "textAlign": "center",
    "lineHeight": 12,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 48,
    "height": 14,
    "left": 0,
    "top": 32
  },
  "loadingScreen_tabBar_tab1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 95,
    "height": 49,
    "left": 0,
    "top": 0
  },
  "loadingScreen_tabBar_tab1_frameba816d48": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 95,
    "height": 49,
    "left": 0,
    "top": 0
  },
  "loadingScreen_tabBar_tab1_group": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 48,
    "height": 44,
    "left": 24,
    "top": 3
  },
  "loadingScreen_tabBar_tab1_group_glyph": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 48,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "loadingScreen_tabBar_tab1_group_glyph_frame73587bd1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 48,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "loadingScreen_tabBar_tab1_group_glyph_symbol": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 122, 255, 1)",
    "fontSize": 22,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "SF Pro Text",
    "textAlign": "center",
    "lineHeight": 24.200000000000003,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 26,
    "height": 26,
    "left": 11,
    "top": 10
  },
  "loadingScreen_tabBar_tab1_group_home": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 122, 255, 1)",
    "fontSize": 10,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "SF Pro Text",
    "textAlign": "center",
    "lineHeight": 12,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 48,
    "height": 14,
    "left": 0,
    "top": 32
  },
  "loadingScreen_homeIndicator2c978675": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 375,
    "height": 34,
    "left": 0,
    "top": 778
  },
  "loadingScreen_homeIndicator2c978675_frame9907e3f0": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 375,
    "height": 34,
    "left": 0,
    "top": 0
  },
  "loadingScreen_homeIndicator2c978675_homeIndicator": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(0, 0, 0, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 100,
    "borderTopRightRadius": 100,
    "borderBottomLeftRadius": 100,
    "borderBottomRightRadius": 100,
    "width": 134,
    "height": 5,
    "left": 121,
    "top": 21
  },
  "loadingScreen_rectangle5": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(230, 230, 230, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 375,
    "height": 57,
    "left": 0,
    "top": 0
  },
  "loadingScreen_statusBar558c0f1a": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 375,
    "height": 44,
    "left": 0,
    "top": 0
  },
  "loadingScreen_statusBar558c0f1a_frame": {
    "opacity": 0.0010436499724164605,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 375,
    "height": 44,
    "left": 0,
    "top": 0
  },
  "loadingScreen_statusBar558c0f1a_statusBar": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 340,
    "height": 18,
    "left": 21,
    "top": 13
  },
  "loadingScreen_statusBar558c0f1a_statusBar_battery": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 24.33,
    "height": 11.33,
    "left": 315.67,
    "top": 3.33
  },
  "loadingScreen_statusBar558c0f1a_statusBar_battery_border": {
    "opacity": 0.3499999940395355,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 1)",
    "borderTopLeftRadius": 2.67,
    "borderTopRightRadius": 2.67,
    "borderBottomLeftRadius": 2.67,
    "borderBottomRightRadius": 2.67,
    "width": 22,
    "height": 11.33,
    "left": 0,
    "top": 0
  },
  "loadingScreen_statusBar558c0f1a_statusBar_battery_cap": {
    "opacity": 0.4000000059604645,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 3.33,
    "height": 6,
    "left": 22,
    "top": 2.67
  },
  "loadingScreen_statusBar558c0f1a_statusBar_battery_capacity": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(0, 0, 0, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 1.33,
    "borderTopRightRadius": 1.33,
    "borderBottomLeftRadius": 1.33,
    "borderBottomRightRadius": 1.33,
    "width": 17,
    "height": 6.33,
    "left": 1.5,
    "top": 1.5
  },
  "loadingScreen_statusBar558c0f1a_statusBar_wifi": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 17.33,
    "height": 13,
    "left": 294.34,
    "top": 2.33
  },
  "loadingScreen_statusBar558c0f1a_statusBar_cellularConnection": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 19,
    "height": 12.67,
    "left": 272.34,
    "top": 2.67
  },
  "loadingScreen_statusBar558c0f1a_statusBar_timeStyle": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 54,
    "height": 18,
    "left": 0,
    "top": 0
  },
  "loadingScreen_statusBar558c0f1a_statusBar_timeStyle_time": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "SF Pro Text",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 54,
    "height": 18,
    "left": 0,
    "top": 0
  },
  "loadingScreen_displayShape": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 374,
    "height": 811,
    "left": -0.5,
    "top": -0.5
  },
  "loadingScreen_x5238Points": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 18,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Helvetica Neue",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 99,
    "height": 22,
    "left": 256,
    "top": 65
  }
});