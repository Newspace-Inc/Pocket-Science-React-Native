import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Favourites extends Component {

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
    <ScrollView data-layer="c3ddeede-3feb-4925-889f-ebfe5c4c80df" style={styles.favourites}>
        <View data-layer="4603e290-6d73-4871-b475-075414a6b86f" style={styles.favourites_rectangle5}></View>
        <View data-layer="8eda8270-8888-45ab-86ca-36c5ce9f294b" style={styles.favourites_statusBar32672992}>
            <View data-layer="69646d06-a065-4a5c-b9f9-fdc324ae5523" style={styles.favourites_statusBar32672992_frameb341ba61}></View>
            <View data-layer="a35094a7-08ae-4886-a4c2-727ecbb52922" style={styles.favourites_statusBar32672992_statusBar}>
                <View data-layer="6c5dcd24-20cf-4c1f-8187-7c85763861c4" style={styles.favourites_statusBar32672992_statusBar_battery}>
                    <View data-layer="11ffa37d-2252-4fb2-a64c-b5ba131e5faf" style={styles.favourites_statusBar32672992_statusBar_battery_border}></View>
                    <Svg data-layer="ec0df21e-d2b6-4d9f-9528-898f0b758761" style={styles.favourites_statusBar32672992_statusBar_battery_cap} preserveAspectRatio="none" viewBox="-0.75 -0.75 2.828125 5.5" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 0 0 L 0 4 C 0.8047311305999756 3.661223411560059 1.328037977218628 2.873133182525635 1.328037977218628 2 C 1.328037977218628 1.126866698265076 0.8047311305999756 0.3387765288352966 0 0"  /></Svg>
                    <View data-layer="7fe018c2-b4d0-4eaa-947f-a6767b60d32f" style={styles.favourites_statusBar32672992_statusBar_battery_capacity}></View>
                </View>
                <Svg data-layer="0b3e2107-9ca9-4ad5-a5e8-a4eda92bfacf" style={styles.favourites_statusBar32672992_statusBar_wifi} preserveAspectRatio="none" viewBox="-0.75 -0.75 16.833251953125 12.499755859375" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 7.667118072509766 10.99980068206787 C 7.583868026733398 10.99980068206787 7.502848148345947 10.96601009368896 7.444818019866943 10.90710067749023 L 5.438717842102051 8.884799957275391 C 5.37655782699585 8.824450492858887 5.342437744140625 8.740139961242676 5.345118045806885 8.653500556945801 C 5.346918106079102 8.567130088806152 5.384637832641602 8.48445987701416 5.448617935180664 8.426700592041016 C 6.068027973175049 7.903049945831299 6.855897903442383 7.61467981338501 7.667118072509766 7.61467981338501 C 8.478347778320312 7.61467981338501 9.266218185424805 7.903059959411621 9.885618209838867 8.426700592041016 C 9.949607849121094 8.48445987701416 9.98731803894043 8.567120552062988 9.989117622375488 8.653500556945801 C 9.990918159484863 8.740429878234863 9.956467628479004 8.824740409851074 9.894618034362793 8.884799957275391 L 7.889418125152588 10.90710067749023 C 7.831387996673584 10.96601009368896 7.750368118286133 10.99980068206787 7.667118072509766 10.99980068206787 Z M 11.18971824645996 7.451099872589111 C 11.10976791381836 7.451099872589111 11.03336811065674 7.420739650726318 10.97461795806885 7.365599632263184 C 10.06604766845703 6.544379711151123 8.891417503356934 6.092099666595459 7.667118072509766 6.092099666595459 C 6.443657875061035 6.092999935150146 5.269988059997559 6.545269966125488 4.36231803894043 7.365599632263184 C 4.303567886352539 7.420729637145996 4.227168083190918 7.451099872589111 4.147217750549316 7.451099872589111 C 4.064228057861328 7.451099872589111 3.986237764358521 7.418819904327393 3.927617788314819 7.360199928283691 L 2.768417596817017 6.189300060272217 C 2.706577777862549 6.127449989318848 2.673017740249634 6.045629978179932 2.673917770385742 5.958899974822998 C 2.674807786941528 5.871150016784668 2.709967613220215 5.789649963378906 2.772917747497559 5.729399681091309 C 4.106788158416748 4.489140033721924 5.845237731933594 3.806100130081177 7.668017864227295 3.806100130081177 C 9.490477561950684 3.806100130081177 11.229248046875 4.489140033721924 12.56401824951172 5.729399681091309 C 12.62696838378906 5.790549755096436 12.66212749481201 5.872049808502197 12.66301822662354 5.958899974822998 C 12.66391754150391 6.045629978179932 12.63035774230957 6.127449989318848 12.56851768493652 6.189300060272217 L 11.40931797027588 7.360199928283691 C 11.35068798065186 7.418819904327393 11.27270793914795 7.451099872589111 11.18971824645996 7.451099872589111 Z M 13.85911750793457 4.758299827575684 C 13.77818775177002 4.758299827575684 13.70179748535156 4.726979732513428 13.64401817321777 4.67009973526001 C 12.02446746826172 3.131530046463013 9.901827812194824 2.284200191497803 7.667118072509766 2.284200191497803 C 5.431828022003174 2.284200191497803 3.308867692947388 3.131530046463013 1.68931782245636 4.670109748840332 C 1.631547808647156 4.726969718933105 1.555147767066956 4.758299827575684 1.474217772483826 4.758299827575684 C 1.390907764434814 4.758299827575684 1.312917828559875 4.725699901580811 1.254617810249329 4.666500091552734 L 0.09361779689788818 3.496500015258789 C 0.03235779702663422 3.434340000152588 -0.0008822033414617181 3.352830171585083 1.779667218215764e-05 3.267000198364258 C 0.0009177966858260334 3.180460214614868 0.03511779755353928 3.099590063095093 0.09631779789924622 3.039300203323364 C 2.143527746200562 1.079370021820068 4.832218170166016 0 7.667118072509766 0 C 10.50233840942383 0 13.19070816040039 1.079380035400391 15.23701763153076 3.039300203323364 C 15.2982177734375 3.099590063095093 15.33241748809814 3.180460214614868 15.33331775665283 3.267000198364258 C 15.33421802520752 3.352830171585083 15.30097770690918 3.434340000152588 15.23971748352051 3.496500015258789 L 14.0787181854248 4.666500091552734 C 14.02041816711426 4.725699901580811 13.94242763519287 4.758299827575684 13.85911750793457 4.758299827575684 Z"  /></Svg>
                <Svg data-layer="face23c9-6ae7-4078-a050-a8650572d626" style={styles.favourites_statusBar32672992_statusBar_cellularConnection} preserveAspectRatio="none" viewBox="-0.75 -0.7499999293327448 18.5 12.166748046875" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 16.00020027160645 10.6668004989624 L 15.00029945373535 10.6668004989624 C 14.44894981384277 10.6668004989624 14.00039958953857 10.2182502746582 14.00039958953857 9.666900634765625 L 14.00039958953857 0.9999000430107117 C 14.00039958953857 0.4485500752925873 14.44894981384277 7.066725515869621e-08 15.00029945373535 7.066725515869621e-08 L 16.00020027160645 7.066725515869621e-08 C 16.55154991149902 7.066725515869621e-08 17.00010108947754 0.4485500752925873 17.00010108947754 0.9999000430107117 L 17.00010108947754 9.666900634765625 C 17.00010108947754 10.2182502746582 16.55154991149902 10.6668004989624 16.00020027160645 10.6668004989624 Z M 11.33369922637939 10.6668004989624 L 10.33290004730225 10.6668004989624 C 9.781549453735352 10.6668004989624 9.332999229431152 10.2182502746582 9.332999229431152 9.666900634765625 L 9.332999229431152 3.333600044250488 C 9.332999229431152 2.782249927520752 9.781549453735352 2.333699941635132 10.33290004730225 2.333699941635132 L 11.33369922637939 2.333699941635132 C 11.88504981994629 2.333699941635132 12.33360004425049 2.782249927520752 12.33360004425049 3.333600044250488 L 12.33360004425049 9.666900634765625 C 12.33360004425049 10.2182502746582 11.88504981994629 10.6668004989624 11.33369922637939 10.6668004989624 Z M 6.666300296783447 10.6668004989624 L 5.666399955749512 10.6668004989624 C 5.115049839019775 10.6668004989624 4.666500091552734 10.2182502746582 4.666500091552734 9.666900634765625 L 4.666500091552734 5.66640043258667 C 4.666500091552734 5.115050315856934 5.115049839019775 4.666500091552734 5.666399955749512 4.666500091552734 L 6.666300296783447 4.666500091552734 C 7.218140125274658 4.666500091552734 7.667099952697754 5.115050315856934 7.667099952697754 5.66640043258667 L 7.667099952697754 9.666900634765625 C 7.667099952697754 10.2182502746582 7.218140125274658 10.6668004989624 6.666300296783447 10.6668004989624 Z M 1.999799966812134 10.6668004989624 L 0.9998999834060669 10.6668004989624 C 0.4485500156879425 10.6668004989624 0 10.2182502746582 0 9.666900634765625 L 0 7.667100429534912 C 0 7.115260124206543 0.4485500156879425 6.666300296783447 0.9998999834060669 6.666300296783447 L 1.999799966812134 6.666300296783447 C 2.55115008354187 6.666300296783447 2.99970006942749 7.115260124206543 2.99970006942749 7.667100429534912 L 2.99970006942749 9.666900634765625 C 2.99970006942749 10.2182502746582 2.55115008354187 10.6668004989624 1.999799966812134 10.6668004989624 Z"  /></Svg>
                <View data-layer="71789324-76f9-4f91-b105-97eaed090955" style={styles.favourites_statusBar32672992_statusBar_timeStyle}>
                    <Text data-layer="89b924e7-f5c3-4638-bae4-02d01141a49d" style={styles.favourites_statusBar32672992_statusBar_timeStyle_time}>9:41</Text>
                </View>
            </View>
        </View>
        <View data-layer="b26d8e37-e95e-4456-9af2-cf561267e5b0" style={styles.favourites_group55}>
            <View data-layer="4225a967-c3a7-464d-ba29-8f3bd4f064e3" style={styles.favourites_group55_rectangle79}></View>
            <View data-layer="cf2e9873-46c5-4005-94e3-81653b889d23" style={styles.favourites_group55_rectangle80}></View>
        </View>
        <View data-layer="a828f269-8fa4-4981-94d9-56e0ea857d25" style={styles.favourites_rectangle75}></View>
        <Text data-layer="2f8df84a-0678-40d8-a2f5-026485a11cfc" style={styles.favourites_topicXsubtopicY4a2025d7}>Topic X
Subtopic Y</Text>
        <Text data-layer="be478856-1d2b-45ba-a2d1-5f0d2a678d84" style={styles.favourites_lowerPrimary4dd5d87c}>Lower Primary</Text>
        <Text data-layer="a1a8d0db-c6a1-4a8f-8495-ccc750f568c0" style={styles.favourites_favourites}>Favourites</Text>
        <ReactImage data-layer="b9811595-ebda-4bb0-a385-378b9eacad50" source={require('./assets/icStar24pxa514b6e6.png')} style={styles.favourites_icStar24pxa514b6e6} />
        <Svg data-layer="d68b23aa-db91-496f-8806-bce96ef9688b" style={styles.favourites_path22} preserveAspectRatio="none" viewBox="0 0 331 248" fill="rgba(250, 196, 123, 1)"><SvgPath d="M 20 0 L 311 0 C 322.0456848144531 0 331 8.954304695129395 331 20 L 331 228 C 331 239.0457000732422 322.0456848144531 248 311 248 L 20 248 C 8.954304695129395 248 0 239.0457000732422 0 228 L 0 20 C 0 8.954304695129395 8.954304695129395 0 20 0 Z"  /></Svg>
        <Text data-layer="18c6a7e4-09fd-4c21-866d-492bfff3bb40" style={styles.favourites_topicXsubtopicY}>Topic X
Subtopic Y</Text>
        <Text data-layer="88bdf71f-9e5d-4f3c-9a5a-cd85b27f0ab0" style={styles.favourites_lowerPrimary}>Lower Primary</Text>
        <ReactImage data-layer="f5c468d7-f47d-41b4-927c-0d77600ec54f" source={require('./assets/icStar24px.png')} style={styles.favourites_icStar24px} />
        <View data-layer="1026375d-2104-4a83-b60b-7b55def51530" style={styles.favourites_tabBar}>
            <View data-layer="a6f40d83-94e6-4b60-a5b0-4f07475a95f2" style={styles.favourites_tabBar_background8c37b7b5}>
                <ReactImage data-layer="6ef0a6aa-2d50-47b9-a5ab-2fd4444ae9e8" source={require('./assets/background.png')} style={styles.favourites_tabBar_background8c37b7b5_background} />
            </View>
            <View data-layer="d32666cd-858b-45c9-ba2a-c7e627344a7b" style={styles.favourites_tabBar_tab4}>
                <View data-layer="5e3f50ba-4549-49d8-a404-946b977d2abd" style={styles.favourites_tabBar_tab4_frame10a4c6be}></View>
                <View data-layer="7c86fb1a-5cb1-415e-b646-f1ba42b52711" style={styles.favourites_tabBar_tab4_group421a1ceb}>
                    <View data-layer="d8551fcc-4e4c-46e8-8446-e9dec6b65ec8" style={styles.favourites_tabBar_tab4_group421a1ceb_glyph64dc3dfd}>
                        <View data-layer="04396d40-6cc3-4937-9f11-b51987b961ff" style={styles.favourites_tabBar_tab4_group421a1ceb_glyph64dc3dfd_frame6632dd92}></View>
                        <View style={styles.favourites_tabBar_tab4_group421a1ceb_glyph64dc3dfd_symbol3b80de4c}><Text data-layer="95bb8623-7a11-4b87-8e1d-d5b5385faee1" style={{"marginTop":-5,"color":"rgba(153, 153, 153, 1)","fontSize":22,"fontWeight":"400","fontStyle":"normal","fontFamily":"SF Pro Text","textAlign":"center","lineHeight":24.200000000000003}}>􀁁</Text></View>
                    </View>
                    <Text data-layer="daf70163-cf41-4a3c-812a-75cd476d141a" style={styles.favourites_tabBar_tab4_group421a1ceb_settings}>Settings</Text>
                </View>
            </View>
            <View data-layer="196df439-e67c-4f7c-8071-58c2131cd9ed" style={styles.favourites_tabBar_tab3}>
                <View data-layer="70e3fe21-8d22-46a0-ade9-99593de96d43" style={styles.favourites_tabBar_tab3_frame5e2eecd6}></View>
                <View data-layer="a78ed255-d5a4-4bdf-b211-3be05e933a30" style={styles.favourites_tabBar_tab3_group11bc54b4}>
                    <View data-layer="e04694f3-b801-4921-843a-962f6134e4af" style={styles.favourites_tabBar_tab3_group11bc54b4_glyph5d7de3c9}>
                        <View data-layer="3cf6d964-3e38-4758-8537-466538f7e91a" style={styles.favourites_tabBar_tab3_group11bc54b4_glyph5d7de3c9_framed1df9329}></View>
                        <View style={styles.favourites_tabBar_tab3_group11bc54b4_glyph5d7de3c9_symbol9e2aeb41}><Text data-layer="dc6c3bd4-91e0-4e16-ac2f-69fb7c581639" style={{"marginTop":-5,"color":"rgba(153, 153, 153, 1)","fontSize":22,"fontWeight":"400","fontStyle":"normal","fontFamily":"SF Pro Text","textAlign":"center","lineHeight":24.200000000000003}}>􀀿</Text></View>
                    </View>
                    <Text data-layer="20c807a3-eaf8-44fb-923b-0d88a7063cd8" style={styles.favourites_tabBar_tab3_group11bc54b4_favorites}>Favorites</Text>
                </View>
            </View>
            <View data-layer="1dc6cb1c-ff8f-4fee-88b6-af8282b3ec1d" style={styles.favourites_tabBar_tab2}>
                <View data-layer="ea7385d8-0d48-4995-b021-53993f503bbb" style={styles.favourites_tabBar_tab2_frame150634a2}></View>
                <View data-layer="c63e4009-bdf3-453c-a5ea-358d70730dec" style={styles.favourites_tabBar_tab2_group6b58b2d2}>
                    <View data-layer="682a49bd-2084-49c6-a89a-3d48ecd43802" style={styles.favourites_tabBar_tab2_group6b58b2d2_glyphe637582c}>
                        <View data-layer="4a9536d8-9245-4044-b5ee-d8981ca785c6" style={styles.favourites_tabBar_tab2_group6b58b2d2_glyphe637582c_frame1ee811ae}></View>
                        <View style={styles.favourites_tabBar_tab2_group6b58b2d2_glyphe637582c_symbol192f488b}><Text data-layer="41ca6893-ca40-448e-a50d-313e35971f08" style={{"marginTop":-5,"color":"rgba(153, 153, 153, 1)","fontSize":22,"fontWeight":"400","fontStyle":"normal","fontFamily":"SF Pro Text","textAlign":"center","lineHeight":24.200000000000003}}>􀀽</Text></View>
                    </View>
                    <Text data-layer="c7a393a6-5545-4475-9db3-244c15a8db46" style={styles.favourites_tabBar_tab2_group6b58b2d2_awards}>Awards
</Text>
                </View>
            </View>
            <View data-layer="03ac62f3-fb93-46a8-ad63-8ca8c06b27c9" style={styles.favourites_tabBar_tab1}>
                <View data-layer="5074fb64-f6a5-4cd4-9977-4337fbea86d3" style={styles.favourites_tabBar_tab1_framee7c98c71}></View>
                <View data-layer="b2af9fa7-5a59-47f0-a0ef-2ab82a58f09a" style={styles.favourites_tabBar_tab1_group}>
                    <View data-layer="67d18939-a4c0-4eb1-af9a-b7cbcf41164f" style={styles.favourites_tabBar_tab1_group_glyph}>
                        <View data-layer="6c62773e-8e99-4cbd-9985-3125936cd814" style={styles.favourites_tabBar_tab1_group_glyph_framef10d6070}></View>
                        <View style={styles.favourites_tabBar_tab1_group_glyph_symbol}><Text data-layer="f7d08048-943a-41cd-b36f-3634c81e8176" style={{"marginTop":-5,"color":"rgba(0, 122, 255, 1)","fontSize":22,"fontWeight":"400","fontStyle":"normal","fontFamily":"SF Pro Text","textAlign":"center","lineHeight":24.200000000000003}}>􀀻</Text></View>
                    </View>
                    <Text data-layer="f49af185-68a9-43a9-acc1-3fef90763376" style={styles.favourites_tabBar_tab1_group_home}>Home</Text>
                </View>
            </View>
        </View>
        <View data-layer="7dce2c08-bdf0-430f-9e6e-a3a5e2f8e6a8" style={styles.favourites_homeIndicator43af4d12}>
            <View data-layer="c1b68788-ebc5-4658-a14c-8f965024c50c" style={styles.favourites_homeIndicator43af4d12_frame}></View>
            <View data-layer="765b72dc-1577-4d10-a89c-7f7909294743" style={styles.favourites_homeIndicator43af4d12_homeIndicator}></View>
        </View>
    </ScrollView>
    );
  }
}

Favourites.propTypes = {

}

Favourites.defaultProps = {

}


const styles = StyleSheet.create({
  "favourites": {
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
  "favourites_rectangle5": {
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
  "favourites_statusBar32672992": {
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
  "favourites_statusBar32672992_frameb341ba61": {
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
  "favourites_statusBar32672992_statusBar": {
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
  "favourites_statusBar32672992_statusBar_battery": {
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
  "favourites_statusBar32672992_statusBar_battery_border": {
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
  "favourites_statusBar32672992_statusBar_battery_cap": {
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
  "favourites_statusBar32672992_statusBar_battery_capacity": {
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
  "favourites_statusBar32672992_statusBar_wifi": {
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
  "favourites_statusBar32672992_statusBar_cellularConnection": {
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
  "favourites_statusBar32672992_statusBar_timeStyle": {
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
  "favourites_statusBar32672992_statusBar_timeStyle_time": {
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
  "favourites_displayShape": {
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
  "favourites_group55": {
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
    "height": 647,
    "left": 0,
    "top": 57
  },
  "favourites_group55_rectangle79": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(244, 126, 84, 1)",
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
    "height": 493,
    "left": 0,
    "top": 0
  },
  "favourites_group55_rectangle80": {
    "opacity": 1,
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
    "borderTopLeftRadius": 40,
    "borderTopRightRadius": 40,
    "borderBottomLeftRadius": 40,
    "borderBottomRightRadius": 40,
    "width": 375,
    "height": 494,
    "left": 0,
    "top": 153
  },
  "favourites_rectangle75": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(250, 196, 123, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 20,
    "borderTopRightRadius": 20,
    "borderBottomLeftRadius": 20,
    "borderBottomRightRadius": 20,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 3,
      "height": 3
    },
    "shadowRadius": 3,
    "width": 331,
    "height": 245,
    "left": 22,
    "top": 259
  },
  "favourites_topicXsubtopicY4a2025d7": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(141, 141, 141, 1)",
    "fontSize": 18,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Helvetica Neue",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 92,
    "height": 45,
    "left": 142,
    "top": 390
  },
  "favourites_lowerPrimary4dd5d87c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(141, 141, 141, 1)",
    "fontSize": 21,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Helvetica Neue",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 146,
    "height": 25,
    "left": 115,
    "top": 332
  },
  "favourites_favourites": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 30,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Helvetica Neue",
    "textAlign": "left",
    "lineHeight": 35,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 150,
    "height": 41,
    "left": 24,
    "top": 80.5
  },
  "favourites_icStar24pxa514b6e6": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 32.67,
    "height": 34.35,
    "left": 298.6,
    "top": 258.51
  },
  "favourites_icStar24pxa514b6e6_path1848e011af": {
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
    "width": 32.67,
    "height": 34.35,
    "left": 0,
    "top": 0
  },
  "favourites_icStar24pxa514b6e6_path1958326058": {
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
    "width": 29.65,
    "height": 30.57,
    "left": 1.51,
    "top": 1.51
  },
  "favourites_icStar24pxa514b6e6_path2023022b3c": {
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
    "width": 32.67,
    "height": 34.35,
    "left": 0,
    "top": 0
  },
  "favourites_path22": {
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
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 3,
      "height": 3
    },
    "shadowRadius": 3,
    "width": 331,
    "height": 248,
    "left": 22,
    "top": 523
  },
  "favourites_topicXsubtopicY": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(141, 141, 141, 1)",
    "fontSize": 18,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Helvetica Neue",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 92,
    "height": 45,
    "left": 142,
    "top": 659
  },
  "favourites_lowerPrimary": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(141, 141, 141, 1)",
    "fontSize": 21,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Helvetica Neue",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 146,
    "height": 25,
    "left": 115,
    "top": 601
  },
  "favourites_icStar24px": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 32.67,
    "height": 34.35,
    "left": 298.6,
    "top": 527.51
  },
  "favourites_icStar24px_path18": {
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
    "width": 32.67,
    "height": 34.35,
    "left": 0,
    "top": 0
  },
  "favourites_icStar24px_path19": {
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
    "width": 29.65,
    "height": 30.57,
    "left": 1.51,
    "top": 1.51
  },
  "favourites_icStar24px_path20": {
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
    "width": 32.67,
    "height": 34.35,
    "left": 0,
    "top": 0
  },
  "favourites_tabBar": {
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
  "favourites_tabBar_background8c37b7b5": {
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
  "favourites_tabBar_background8c37b7b5_background": {
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
  "favourites_tabBar_tab4": {
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
  "favourites_tabBar_tab4_frame10a4c6be": {
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
  "favourites_tabBar_tab4_group421a1ceb": {
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
  "favourites_tabBar_tab4_group421a1ceb_glyph64dc3dfd": {
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
  "favourites_tabBar_tab4_group421a1ceb_glyph64dc3dfd_frame6632dd92": {
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
  "favourites_tabBar_tab4_group421a1ceb_glyph64dc3dfd_symbol3b80de4c": {
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
  "favourites_tabBar_tab4_group421a1ceb_settings": {
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
  "favourites_tabBar_tab3": {
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
  "favourites_tabBar_tab3_frame5e2eecd6": {
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
  "favourites_tabBar_tab3_group11bc54b4": {
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
  "favourites_tabBar_tab3_group11bc54b4_glyph5d7de3c9": {
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
  "favourites_tabBar_tab3_group11bc54b4_glyph5d7de3c9_framed1df9329": {
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
  "favourites_tabBar_tab3_group11bc54b4_glyph5d7de3c9_symbol9e2aeb41": {
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
  "favourites_tabBar_tab3_group11bc54b4_favorites": {
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
  "favourites_tabBar_tab2": {
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
  "favourites_tabBar_tab2_frame150634a2": {
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
  "favourites_tabBar_tab2_group6b58b2d2": {
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
  "favourites_tabBar_tab2_group6b58b2d2_glyphe637582c": {
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
  "favourites_tabBar_tab2_group6b58b2d2_glyphe637582c_frame1ee811ae": {
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
  "favourites_tabBar_tab2_group6b58b2d2_glyphe637582c_symbol192f488b": {
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
  "favourites_tabBar_tab2_group6b58b2d2_awards": {
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
  "favourites_tabBar_tab1": {
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
  "favourites_tabBar_tab1_framee7c98c71": {
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
  "favourites_tabBar_tab1_group": {
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
  "favourites_tabBar_tab1_group_glyph": {
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
  "favourites_tabBar_tab1_group_glyph_framef10d6070": {
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
  "favourites_tabBar_tab1_group_glyph_symbol": {
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
  "favourites_tabBar_tab1_group_home": {
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
  "favourites_homeIndicator43af4d12": {
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
    "left": -1,
    "top": 778
  },
  "favourites_homeIndicator43af4d12_frame": {
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
  "favourites_homeIndicator43af4d12_homeIndicator": {
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
  }
});