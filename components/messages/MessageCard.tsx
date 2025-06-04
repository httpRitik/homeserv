import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import { COLORS, SPACING } from '@/constants/design';

type MessageProps = {
  message: {
    id: string;
    senderId: string;
    senderName: string;
    senderImage: string;
    lastMessage: string;
    timestamp: string;
    unread: boolean;
  };
  onPress: () => void;
};

export default function MessageCard({ message, onPress }: MessageProps) {
  return (
    <TouchableOpacity 
      style={[
        styles.container,
        message.unread && styles.unreadContainer
      ]} 
      onPress={onPress}
    >
      <View style={styles.avatarContainer}>
        <Image source={{ uri: message.senderImage }} style={styles.avatar} />
        {message.unread && <View style={styles.unreadBadge} />}
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.name}>{message.senderName}</Text>
          <Text style={styles.time}>{message.timestamp}</Text>
        </View>
        
        <Text 
          style={[
            styles.message,
            message.unread && styles.unreadMessage
          ]}
          numberOfLines={1}
        >
          {message.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: SPACING.md,
    backgroundColor: COLORS.white,
    borderRadius: SPACING.md,
    marginBottom: SPACING.sm,
    shadowColor: COLORS.darkText,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  unreadContainer: {
    backgroundColor: COLORS.lightGray,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  unreadBadge: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.primary,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  contentContainer: {
    flex: 1,
    marginLeft: SPACING.md,
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
    color: COLORS.darkText,
  },
  time: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    color: COLORS.mediumText,
  },
  message: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: COLORS.mediumText,
  },
  unreadMessage: {
    fontFamily: 'Inter_500Medium',
    color: COLORS.darkText,
  },
});