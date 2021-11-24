import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Bubble, GiftedChat, Send, InputToolbar} from 'react-native-gifted-chat';
import {COLORS} from '../constants';
import {genericStyles} from '../constants/genericStyles';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello World',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        tickStyle={{color: COLORS.blue}}
        wrapperStyle={{
          right: styles.wrapperStyleRight,
          left: styles.wrapperStyleLeft,
        }}
        textStyle={{
          left: {color: COLORS.black},
          right: {color: COLORS.white},
        }}
        bottomContainerStyle={{left: genericStyles.mb(5)}}
      />
    );
  };

  const renderSend = props => {
    return (
      <Send {...props}>
        <View>
          <Icon
            name="send-circle"
            type="material-community"
            size={32}
            color={COLORS.white}
            style={styles.SendIcon}
          />
        </View>
      </Send>
    );
  };
  const renderInputToolbar = props => (
    <InputToolbar {...props} containerStyle={styles.inputToolbarCont} />
  );

  const scrollToBottomComponent = () => {
    return (
      <Icon
        name="angle-double-down"
        type="font-awesome-5"
        size={20}
        color="#333"
      />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
      isTyping={true}
      renderInputToolbar={renderInputToolbar}
      messagesContainerStyle={styles.messagesContainerStyle}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  messagesContainerStyle: {
    // backgroundColor: '#00DBDE',
    paddingBottom: 10,
  },
  SendIcon: {
    marginBottom: 5,
    marginRight: 5,
    borderWidth: 0,
  },
  inputToolbarCont: {
    marginHorizontal: 6,
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: COLORS.MoodyBlue,
    tintColor: COLORS.black,
    color: COLORS.white,
  },
  wrapperStyleRight: {
    backgroundColor: COLORS.MoodyBlue,
    borderWidth: 1,
    borderColor: COLORS.darkgray,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
    shadowRadius: 20,
    shadowOpacity: 0.3,
  },
  wrapperStyleLeft: {
    // backgroundColor: '#7474d2',
    borderWidth: 1,
    borderColor: COLORS.darkgray,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
    shadowRadius: 20,
    shadowOpacity: 0.3,
  },
});
