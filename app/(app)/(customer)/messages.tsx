import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Search } from 'lucide-react-native';
import { COLORS, SPACING } from '@/constants/design';
import { MESSAGES } from '@/constants/mockData';
import MessageCard from '@/components/messages/MessageCard';

export default function MessagesScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Search size={20} color={COLORS.mediumText} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search messages..."
          placeholderTextColor={COLORS.mediumText}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Messages List */}
      <FlatList
        data={MESSAGES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
        renderItem={({ item }) => (
          <MessageCard
            message={item}
            onPress={() => {
              // Handle message press
            }}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No messages found</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl + 20,
    paddingBottom: SPACING.lg,
    backgroundColor: COLORS.white,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: COLORS.darkText,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: SPACING.md,
    paddingHorizontal: SPACING.md,
    marginHorizontal: SPACING.lg,
    marginVertical: SPACING.md,
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  searchIcon: {
    marginRight: SPACING.sm,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: COLORS.darkText,
  },
  messagesList: {
    padding: SPACING.md,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.xxl,
  },
  emptyText: {
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
    color: COLORS.mediumText,
  },
});