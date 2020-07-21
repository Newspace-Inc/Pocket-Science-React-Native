import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Lessons1 extends Component {

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
    <ScrollView data-layer="8bbcea94-4c9b-40dc-8ab6-65e5a820942c" style={styles.lessons1}>
        <View data-layer="d832a1fc-ec7f-46ff-a911-dfc836e8d62c" style={styles.lessons1_tabBar}>
            <View data-layer="453caea9-366a-4909-9532-a3c5b5d50c12" style={styles.lessons1_tabBar_backgroundb53074f7}>
                <ReactImage data-layer="eb04fab1-be93-4b83-8492-57cc57967cd9" source={require('./assets/background.png')} style={styles.lessons1_tabBar_backgroundb53074f7_background} />
            </View>
            <View data-layer="3911abcb-d4ac-4a79-821c-9825cf185886" style={styles.lessons1_tabBar_tab4}>
                <View data-layer="ea24f328-d9c5-485a-ac41-9380c5de3868" style={styles.lessons1_tabBar_tab4_frameccc7964a}></View>
                <View data-layer="e6fa6514-08ea-415f-8e73-1b988ae37b7b" style={styles.lessons1_tabBar_tab4_group66092d7b}>
                    <View data-layer="1017c0fb-8aea-4863-b716-5269bc73c1f7" style={styles.lessons1_tabBar_tab4_group66092d7b_glyph5192954c}>
                        <View data-layer="7b5d771e-989a-4cac-b714-98d42709ffdb" style={styles.lessons1_tabBar_tab4_group66092d7b_glyph5192954c_framee3563dbe}></View>
                        <View style={styles.lessons1_tabBar_tab4_group66092d7b_glyph5192954c_symbolb20438a0}><Text data-layer="19444918-c6b4-4be8-9384-c3ac3e0ce717" style={{"marginTop":-5,"color":"rgba(153, 153, 153, 1)","fontSize":22,"fontWeight":"400","fontStyle":"normal","fontFamily":"SF Pro Text","textAlign":"center","lineHeight":24.200000000000003}}>􀁁</Text></View>
                    </View>
                    <Text data-layer="2236e0ea-fff7-4d08-9bed-571005c88e6a" style={styles.lessons1_tabBar_tab4_group66092d7b_settings}>Settings</Text>
                </View>
            </View>
            <View data-layer="e8549c08-cda8-4b9c-8b47-8584b9a51fae" style={styles.lessons1_tabBar_tab3}>
                <View data-layer="911627eb-4db2-4168-9a54-64efa413ceef" style={styles.lessons1_tabBar_tab3_frame9f6c136f}></View>
                <View data-layer="cb4d5a5d-056e-49c0-b040-f2c4b10861fc" style={styles.lessons1_tabBar_tab3_group5d6c0b35}>
                    <View data-layer="7bcd081a-fcd7-4b0a-ab3c-4dfcc1d0c630" style={styles.lessons1_tabBar_tab3_group5d6c0b35_glyph186176f5}>
                        <View data-layer="6c99118e-0188-4d32-9db1-06ac6d763ca4" style={styles.lessons1_tabBar_tab3_group5d6c0b35_glyph186176f5_frame5627b5ef}></View>
                        <View style={styles.lessons1_tabBar_tab3_group5d6c0b35_glyph186176f5_symbolef36f764}><Text data-layer="0c1a3a3e-83ee-414a-a7b3-26f4b97dcac4" style={{"marginTop":-5,"color":"rgba(153, 153, 153, 1)","fontSize":22,"fontWeight":"400","fontStyle":"normal","fontFamily":"SF Pro Text","textAlign":"center","lineHeight":24.200000000000003}}>􀀿</Text></View>
                    </View>
                    <Text data-layer="a599d82c-d652-46d5-9ffe-8c85a404ee2c" style={styles.lessons1_tabBar_tab3_group5d6c0b35_favorites}>Favorites</Text>
                </View>
            </View>
            <View data-layer="522c365b-9cdf-436a-bf35-1be1275c6ffd" style={styles.lessons1_tabBar_tab2}>
                <View data-layer="1766dbe9-c5f9-4cad-9a38-d7997889aa08" style={styles.lessons1_tabBar_tab2_frame8e416e8b}></View>
                <View data-layer="08157d06-9eba-4094-ad1f-57182a2da634" style={styles.lessons1_tabBar_tab2_group1f0f700d}>
                    <View data-layer="61ef920c-8fa6-446e-bb61-36011ca6f371" style={styles.lessons1_tabBar_tab2_group1f0f700d_glyph853dfd4c}>
                        <View data-layer="78cec0ab-6198-4699-87b3-99756ee08459" style={styles.lessons1_tabBar_tab2_group1f0f700d_glyph853dfd4c_frame0461978f}></View>
                        <View style={styles.lessons1_tabBar_tab2_group1f0f700d_glyph853dfd4c_symbolb7f9c705}><Text data-layer="19d14704-e94e-4566-9d4e-03a9934dd0b0" style={{"marginTop":-5,"color":"rgba(153, 153, 153, 1)","fontSize":22,"fontWeight":"400","fontStyle":"normal","fontFamily":"SF Pro Text","textAlign":"center","lineHeight":24.200000000000003}}>􀀽</Text></View>
                    </View>
                    <Text data-layer="0b3781fb-0272-4ceb-a618-8256355f5832" style={styles.lessons1_tabBar_tab2_group1f0f700d_awards}>Awards
</Text>
                </View>
            </View>
            <View data-layer="d4fef8c7-956e-419b-ac9f-0f8286e67242" style={styles.lessons1_tabBar_tab1}>
                <View data-layer="5e99038f-e2ac-4503-afb0-28b6e331f817" style={styles.lessons1_tabBar_tab1_framea74aa74b}></View>
                <View data-layer="1a1c6c68-affd-424f-aeb7-d381c6790c06" style={styles.lessons1_tabBar_tab1_group}>
                    <View data-layer="b685d4c2-9aae-4e24-bed0-684a107b4fbd" style={styles.lessons1_tabBar_tab1_group_glyph}>
                        <View data-layer="f8dbe544-4c97-4b94-8e78-36afeb1d78cb" style={styles.lessons1_tabBar_tab1_group_glyph_frameb8b8b78f}></View>
                        <View style={styles.lessons1_tabBar_tab1_group_glyph_symbol}><Text data-layer="1fb3f6c7-aa96-4a0f-8c1f-dabafb81c60b" style={{"marginTop":-5,"color":"rgba(0, 122, 255, 1)","fontSize":22,"fontWeight":"400","fontStyle":"normal","fontFamily":"SF Pro Text","textAlign":"center","lineHeight":24.200000000000003}}>􀀻</Text></View>
                    </View>
                    <Text data-layer="1eaf42bb-711a-4864-800e-a79eae2afc05" style={styles.lessons1_tabBar_tab1_group_home}>Home</Text>
                </View>
            </View>
        </View>
        <View data-layer="6b600dcd-03d4-4cdc-8c94-abf3d03a635d" style={styles.lessons1_rectangle12}></View>
        <View data-layer="5829f7e1-8e0d-48f8-a327-1c6552711aa0" style={styles.lessons1_statusBar4f45376b}>
            <View data-layer="70e74d47-a1e6-4a1a-93f4-cfc8f64b90ee" style={styles.lessons1_statusBar4f45376b_frame}></View>
            <View data-layer="4c1b777c-067f-4f23-ad9b-9f1f8c5f0045" style={styles.lessons1_statusBar4f45376b_statusBar}>
                <View data-layer="401f38a9-43b5-4177-a3bd-c8930a7d4949" style={styles.lessons1_statusBar4f45376b_statusBar_battery}>
                    <View data-layer="857ae8f9-605e-4eed-9800-8a4a721461a4" style={styles.lessons1_statusBar4f45376b_statusBar_battery_border}></View>
                    <Svg data-layer="3762903e-ae6d-4ab8-aee1-9b886a953dcd" style={styles.lessons1_statusBar4f45376b_statusBar_battery_cap} preserveAspectRatio="none" viewBox="-0.75 -0.75 2.828125 5.5" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 0 0 L 0 4 C 0.8047311305999756 3.661223411560059 1.328037977218628 2.873133182525635 1.328037977218628 2 C 1.328037977218628 1.126866698265076 0.8047311305999756 0.3387765288352966 0 0"  /></Svg>
                    <View data-layer="90407084-fe5f-4612-839e-e95091b167f7" style={styles.lessons1_statusBar4f45376b_statusBar_battery_capacity}></View>
                </View>
                <Svg data-layer="6efeca10-a63f-4fe6-9a62-791c29475b6e" style={styles.lessons1_statusBar4f45376b_statusBar_wifi} preserveAspectRatio="none" viewBox="-0.75 -0.75 16.833251953125 12.499755859375" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 7.667118072509766 10.99980068206787 C 7.583868026733398 10.99980068206787 7.502848148345947 10.96601009368896 7.444818019866943 10.90710067749023 L 5.438717842102051 8.884799957275391 C 5.37655782699585 8.824450492858887 5.342437744140625 8.740139961242676 5.345118045806885 8.653500556945801 C 5.346918106079102 8.567130088806152 5.384637832641602 8.48445987701416 5.448617935180664 8.426700592041016 C 6.068027973175049 7.903049945831299 6.855897903442383 7.61467981338501 7.667118072509766 7.61467981338501 C 8.478347778320312 7.61467981338501 9.266218185424805 7.903059959411621 9.885618209838867 8.426700592041016 C 9.949607849121094 8.48445987701416 9.98731803894043 8.567120552062988 9.989117622375488 8.653500556945801 C 9.990918159484863 8.740429878234863 9.956467628479004 8.824740409851074 9.894618034362793 8.884799957275391 L 7.889418125152588 10.90710067749023 C 7.831387996673584 10.96601009368896 7.750368118286133 10.99980068206787 7.667118072509766 10.99980068206787 Z M 11.18971824645996 7.451099872589111 C 11.10976791381836 7.451099872589111 11.03336811065674 7.420739650726318 10.97461795806885 7.365599632263184 C 10.06604766845703 6.544379711151123 8.891417503356934 6.092099666595459 7.667118072509766 6.092099666595459 C 6.443657875061035 6.092999935150146 5.269988059997559 6.545269966125488 4.36231803894043 7.365599632263184 C 4.303567886352539 7.420729637145996 4.227168083190918 7.451099872589111 4.147217750549316 7.451099872589111 C 4.064228057861328 7.451099872589111 3.986237764358521 7.418819904327393 3.927617788314819 7.360199928283691 L 2.768417596817017 6.189300060272217 C 2.706577777862549 6.127449989318848 2.673017740249634 6.045629978179932 2.673917770385742 5.958899974822998 C 2.674807786941528 5.871150016784668 2.709967613220215 5.789649963378906 2.772917747497559 5.729399681091309 C 4.106788158416748 4.489140033721924 5.845237731933594 3.806100130081177 7.668017864227295 3.806100130081177 C 9.490477561950684 3.806100130081177 11.229248046875 4.489140033721924 12.56401824951172 5.729399681091309 C 12.62696838378906 5.790549755096436 12.66212749481201 5.872049808502197 12.66301822662354 5.958899974822998 C 12.66391754150391 6.045629978179932 12.63035774230957 6.127449989318848 12.56851768493652 6.189300060272217 L 11.40931797027588 7.360199928283691 C 11.35068798065186 7.418819904327393 11.27270793914795 7.451099872589111 11.18971824645996 7.451099872589111 Z M 13.85911750793457 4.758299827575684 C 13.77818775177002 4.758299827575684 13.70179748535156 4.726979732513428 13.64401817321777 4.67009973526001 C 12.02446746826172 3.131530046463013 9.901827812194824 2.284200191497803 7.667118072509766 2.284200191497803 C 5.431828022003174 2.284200191497803 3.308867692947388 3.131530046463013 1.68931782245636 4.670109748840332 C 1.631547808647156 4.726969718933105 1.555147767066956 4.758299827575684 1.474217772483826 4.758299827575684 C 1.390907764434814 4.758299827575684 1.312917828559875 4.725699901580811 1.254617810249329 4.666500091552734 L 0.09361779689788818 3.496500015258789 C 0.03235779702663422 3.434340000152588 -0.0008822033414617181 3.352830171585083 1.779667218215764e-05 3.267000198364258 C 0.0009177966858260334 3.180460214614868 0.03511779755353928 3.099590063095093 0.09631779789924622 3.039300203323364 C 2.143527746200562 1.079370021820068 4.832218170166016 0 7.667118072509766 0 C 10.50233840942383 0 13.19070816040039 1.079380035400391 15.23701763153076 3.039300203323364 C 15.2982177734375 3.099590063095093 15.33241748809814 3.180460214614868 15.33331775665283 3.267000198364258 C 15.33421802520752 3.352830171585083 15.30097770690918 3.434340000152588 15.23971748352051 3.496500015258789 L 14.0787181854248 4.666500091552734 C 14.02041816711426 4.725699901580811 13.94242763519287 4.758299827575684 13.85911750793457 4.758299827575684 Z"  /></Svg>
                <Svg data-layer="81b14c19-2391-4d1a-85fa-1345a78f6910" style={styles.lessons1_statusBar4f45376b_statusBar_cellularConnection} preserveAspectRatio="none" viewBox="-0.75 -0.7499999293327448 18.5 12.166748046875" fill="rgba(0, 0, 0, 1)"><SvgPath d="M 16.00020027160645 10.6668004989624 L 15.00029945373535 10.6668004989624 C 14.44894981384277 10.6668004989624 14.00039958953857 10.2182502746582 14.00039958953857 9.666900634765625 L 14.00039958953857 0.9999000430107117 C 14.00039958953857 0.4485500752925873 14.44894981384277 7.066725515869621e-08 15.00029945373535 7.066725515869621e-08 L 16.00020027160645 7.066725515869621e-08 C 16.55154991149902 7.066725515869621e-08 17.00010108947754 0.4485500752925873 17.00010108947754 0.9999000430107117 L 17.00010108947754 9.666900634765625 C 17.00010108947754 10.2182502746582 16.55154991149902 10.6668004989624 16.00020027160645 10.6668004989624 Z M 11.33369922637939 10.6668004989624 L 10.33290004730225 10.6668004989624 C 9.781549453735352 10.6668004989624 9.332999229431152 10.2182502746582 9.332999229431152 9.666900634765625 L 9.332999229431152 3.333600044250488 C 9.332999229431152 2.782249927520752 9.781549453735352 2.333699941635132 10.33290004730225 2.333699941635132 L 11.33369922637939 2.333699941635132 C 11.88504981994629 2.333699941635132 12.33360004425049 2.782249927520752 12.33360004425049 3.333600044250488 L 12.33360004425049 9.666900634765625 C 12.33360004425049 10.2182502746582 11.88504981994629 10.6668004989624 11.33369922637939 10.6668004989624 Z M 6.666300296783447 10.6668004989624 L 5.666399955749512 10.6668004989624 C 5.115049839019775 10.6668004989624 4.666500091552734 10.2182502746582 4.666500091552734 9.666900634765625 L 4.666500091552734 5.66640043258667 C 4.666500091552734 5.115050315856934 5.115049839019775 4.666500091552734 5.666399955749512 4.666500091552734 L 6.666300296783447 4.666500091552734 C 7.218140125274658 4.666500091552734 7.667099952697754 5.115050315856934 7.667099952697754 5.66640043258667 L 7.667099952697754 9.666900634765625 C 7.667099952697754 10.2182502746582 7.218140125274658 10.6668004989624 6.666300296783447 10.6668004989624 Z M 1.999799966812134 10.6668004989624 L 0.9998999834060669 10.6668004989624 C 0.4485500156879425 10.6668004989624 0 10.2182502746582 0 9.666900634765625 L 0 7.667100429534912 C 0 7.115260124206543 0.4485500156879425 6.666300296783447 0.9998999834060669 6.666300296783447 L 1.999799966812134 6.666300296783447 C 2.55115008354187 6.666300296783447 2.99970006942749 7.115260124206543 2.99970006942749 7.667100429534912 L 2.99970006942749 9.666900634765625 C 2.99970006942749 10.2182502746582 2.55115008354187 10.6668004989624 1.999799966812134 10.6668004989624 Z"  /></Svg>
                <View data-layer="6e33fd40-09b0-4909-97d9-9eac6f1e0ecb" style={styles.lessons1_statusBar4f45376b_statusBar_timeStyle}>
                    <Text data-layer="e6d99647-be05-4e30-a37f-91c9194efcfa" style={styles.lessons1_statusBar4f45376b_statusBar_timeStyle_time}>9:41</Text>
                </View>
            </View>
        </View>
        <Text data-layer="a0a4f1a8-bccd-4b07-878c-0f84c86bf130" style={styles.lessons1_xBack}>< Back</Text>
        <ReactImage data-layer="732ec0fb-1e77-4be9-8950-0619237dcc8e" source={require('./assets/rectangle79.png')} style={styles.lessons1_rectangle79} />
        <View data-layer="8f536d99-ecb3-4dc9-8819-a400ad182684" style={styles.lessons1_rectangle80}></View>
        <Text data-layer="9f762b11-20c7-4ead-a1b7-37272c57837c" style={styles.lessons1_primarySchoolDiversity}>Primary School Diversity</Text>
        <Text data-layer="a8cdd727-dd09-4f56-a09d-df5138f5c253" style={styles.lessons1_diversityf08f840f}>Diversity</Text>
        <Text data-layer="17705bfb-43a0-4cd6-aa23-125edc4bdbb5" style={styles.lessons1_topicExplanation}>Topic Explanation</Text>
        <Text data-layer="1cd8803f-596b-454b-b83f-d69a19865ff2" style={styles.lessons1_topics}>Topics</Text>
        <Text data-layer="2466f465-b7e7-4212-935b-220f93301481" style={styles.lessons1_quiz}>Quiz</Text>
        <Svg data-layer="99d12e6e-d0ed-40d6-8001-920980fe9781" style={styles.lessons1_line1} preserveAspectRatio="none" viewBox="0 -0.5 104 1" fill="transparent"><SvgPath d="M 104 0 L 0 0"  /></Svg>
        <Svg data-layer="dec51704-bf91-4d08-9d71-2f61034021b0" style={styles.lessons1_line2} preserveAspectRatio="none" viewBox="0 -0.5 49 1" fill="transparent"><SvgPath d="M 49 0 L 0 0"  /></Svg>
        <Svg data-layer="3eeee0b9-8161-4478-a2a3-86830d14f605" style={styles.lessons1_line3} preserveAspectRatio="none" viewBox="0 -0.5 30 1" fill="transparent"><SvgPath d="M 30 0 L 0 0"  /></Svg>
        <Text data-layer="10da9815-142e-447f-af57-b2eeb85bb503" style={styles.lessons1_diversity}>Diversity</Text>
        <Text data-layer="0f576c61-9452-4ab9-961e-6e10b98ee54d" style={styles.lessons1_learningOutcomesKnowledgeUnderstandingAndApplicationSkillsAndProcessEthicsAndAttitudes}>Learning Outcomes 

   Knowledge, Understanding and Application
   Skills and Process
   Ethics and Attitudes</Text>
        <View data-layer="1ce607c0-0447-4f90-af51-f15aa3da6350" style={styles.lessons1_group46}>
            <ReactImage data-layer="1707ca6d-4d1f-437e-b9a1-6febec8f9bdd" source={require('./assets/rectangle18.png')} style={styles.lessons1_group46_rectangle18} />
        </View>
        <Text data-layer="d06fb9b9-4a22-4888-a244-180fffdbcb36" style={styles.lessons1_cartoonRelatedToTheTopic}>Cartoon related to the topic</Text>
    </ScrollView>
    );
  }
}

Lessons1.propTypes = {

}

Lessons1.defaultProps = {

}


const styles = StyleSheet.create({
  "lessons1": {
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
  "lessons1_tabBar": {
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
  "lessons1_tabBar_backgroundb53074f7": {
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
  "lessons1_tabBar_backgroundb53074f7_background": {
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
  "lessons1_tabBar_tab4": {
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
  "lessons1_tabBar_tab4_frameccc7964a": {
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
  "lessons1_tabBar_tab4_group66092d7b": {
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
  "lessons1_tabBar_tab4_group66092d7b_glyph5192954c": {
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
  "lessons1_tabBar_tab4_group66092d7b_glyph5192954c_framee3563dbe": {
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
  "lessons1_tabBar_tab4_group66092d7b_glyph5192954c_symbolb20438a0": {
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
  "lessons1_tabBar_tab4_group66092d7b_settings": {
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
  "lessons1_tabBar_tab3": {
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
  "lessons1_tabBar_tab3_frame9f6c136f": {
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
  "lessons1_tabBar_tab3_group5d6c0b35": {
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
  "lessons1_tabBar_tab3_group5d6c0b35_glyph186176f5": {
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
  "lessons1_tabBar_tab3_group5d6c0b35_glyph186176f5_frame5627b5ef": {
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
  "lessons1_tabBar_tab3_group5d6c0b35_glyph186176f5_symbolef36f764": {
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
  "lessons1_tabBar_tab3_group5d6c0b35_favorites": {
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
  "lessons1_tabBar_tab2": {
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
  "lessons1_tabBar_tab2_frame8e416e8b": {
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
  "lessons1_tabBar_tab2_group1f0f700d": {
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
  "lessons1_tabBar_tab2_group1f0f700d_glyph853dfd4c": {
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
  "lessons1_tabBar_tab2_group1f0f700d_glyph853dfd4c_frame0461978f": {
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
  "lessons1_tabBar_tab2_group1f0f700d_glyph853dfd4c_symbolb7f9c705": {
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
  "lessons1_tabBar_tab2_group1f0f700d_awards": {
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
  "lessons1_tabBar_tab1": {
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
  "lessons1_tabBar_tab1_framea74aa74b": {
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
  "lessons1_tabBar_tab1_group": {
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
  "lessons1_tabBar_tab1_group_glyph": {
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
  "lessons1_tabBar_tab1_group_glyph_frameb8b8b78f": {
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
  "lessons1_tabBar_tab1_group_glyph_symbol": {
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
  "lessons1_tabBar_tab1_group_home": {
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
  "lessons1_rectangle12": {
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
  "lessons1_displayShape": {
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
  "lessons1_statusBar4f45376b": {
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
    "left": -1,
    "top": 0
  },
  "lessons1_statusBar4f45376b_frame": {
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
  "lessons1_statusBar4f45376b_statusBar": {
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
  "lessons1_statusBar4f45376b_statusBar_battery": {
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
  "lessons1_statusBar4f45376b_statusBar_battery_border": {
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
  "lessons1_statusBar4f45376b_statusBar_battery_cap": {
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
  "lessons1_statusBar4f45376b_statusBar_battery_capacity": {
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
  "lessons1_statusBar4f45376b_statusBar_wifi": {
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
  "lessons1_statusBar4f45376b_statusBar_cellularConnection": {
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
  "lessons1_statusBar4f45376b_statusBar_timeStyle": {
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
  "lessons1_statusBar4f45376b_statusBar_timeStyle_time": {
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
  "lessons1_xBack": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 16,
    "fontWeight": "300",
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
    "width": 49,
    "height": 18,
    "left": 16,
    "top": 71
  },
  "lessons1_rectangle79": {
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
    "width": 375,
    "height": 493,
    "left": 0,
    "top": 57
  },
  "lessons1_rectangle80": {
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
    "height": 515,
    "left": 0,
    "top": 198
  },
  "lessons1_primarySchoolDiversity": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 19,
    "fontWeight": "500",
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
    "width": 215,
    "height": 39,
    "left": 24,
    "top": 122
  },
  "lessons1_diversityf08f840f": {
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
    "width": 125,
    "height": 41,
    "left": 24,
    "top": 80.5
  },
  "lessons1_topicExplanation": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(113, 113, 113, 1)",
    "fontSize": 16,
    "fontWeight": "500",
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
    "width": 131,
    "height": 38,
    "left": 24,
    "top": 217
  },
  "lessons1_topics": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(160, 157, 157, 1)",
    "fontSize": 16,
    "fontWeight": "500",
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
    "width": 48,
    "height": 38,
    "left": 205,
    "top": 217
  },
  "lessons1_quiz": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(160, 157, 157, 1)",
    "fontSize": 16,
    "fontWeight": "500",
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
    "width": 33,
    "height": 38,
    "left": 300,
    "top": 217
  },
  "lessons1_line1": {
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
    "width": 104,
    "height": 1,
    "left": 34.5,
    "top": 252
  },
  "lessons1_line2": {
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
    "width": 49,
    "height": 1,
    "left": 204.5,
    "top": 252
  },
  "lessons1_line3": {
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
    "width": 30,
    "height": 1,
    "left": 301.5,
    "top": 252
  },
  "lessons1_diversity": {
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
    "width": 125,
    "height": 41,
    "left": 24,
    "top": 80.5
  },
  "lessons1_learningOutcomesKnowledgeUnderstandingAndApplicationSkillsAndProcessEthicsAndAttitudes": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 16,
    "fontWeight": "400",
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
    "width": 328,
    "height": 339,
    "left": 24,
    "top": 286
  },
  "lessons1_group46": {
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
    "width": 100,
    "height": 100,
    "left": 138,
    "top": 406
  },
  "lessons1_group46_rectangle18": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 14,
    "borderTopRightRadius": 14,
    "borderBottomLeftRadius": 14,
    "borderBottomRightRadius": 14,
    "width": 100,
    "height": 100,
    "left": 0,
    "top": 0
  },
  "lessons1_cartoonRelatedToTheTopic": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 17,
    "fontWeight": "400",
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
    "width": 209,
    "height": 20,
    "left": 83,
    "top": 518
  }
});