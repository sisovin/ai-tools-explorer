import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { PaperProvider, Button, Card, Chip, FAB, MD3LightTheme } from 'react-native-paper';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { toolsData, categories } from './lib/data';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Tools');

  const filteredTools = useMemo(() => {
    return toolsData.filter(tool => {
      const matchesCategory = selectedCategory === 'All Tools' || tool.category === selectedCategory;
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredTools = toolsData.slice(0, 6);

  const categoryIcons = {
    'AI Chatbots': 'chat',
    'AI Presentation': 'presentation',
    'AI Coding Assistance': 'code',
    'AI Email Assistance': 'email',
    'AI Image Assistance': 'image',
    'AI Spreadsheet': 'table',
    'AI Meeting Notes': 'notes',
    'AI Writing Notes': 'edit',
    'AI Scheduling': 'schedule',
    'AI Video Generation': 'videocam',
    'AI Graphic Design': 'palette',
    'AI Data Visualization': 'bar-chart',
  };

  const theme = {
    ...MD3LightTheme,
    fonts: MD3LightTheme.fonts,
    icon: {
      component: ({ name, ...props }: { name: string;[key: string]: any }) => (
        <MaterialCommunityIcons name={name as any} {...props} />
      ),
    },
  };

  const renderToolCard = ({ item }: { item: typeof toolsData[0] }) => (
    <Card style={styles.toolCard} onPress={() => Alert.alert('Tool', item.name)}>
      <Card.Content>
        <View style={styles.toolHeader}>
          <Image source={{ uri: item.logo_url }} style={styles.toolLogo} />
          <View style={styles.toolInfo}>
            <Text style={styles.toolName}>{item.name}</Text>
            <Chip style={styles.categoryChip}>{item.category}</Chip>
          </View>
        </View>
        <Text style={styles.toolDescription}>{item.description}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <PaperProvider theme={theme}>
      <ScrollView style={styles.container}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <Chip icon="star" style={styles.heroChip}>Discover AI Tools</Chip>
          <Text style={styles.heroTitle}>
            Explore the Future of <Text style={styles.heroHighlight}>AI Tools</Text>
          </Text>
          <Text style={styles.heroSubtitle}>
            Discover, compare, and integrate the best AI tools for developers, designers, and businesses.
          </Text>
          <View style={styles.heroButtons}>
            <Button mode="contained" onPress={() => { }} style={styles.button}>
              Explore Tools
            </Button>
            <Button mode="outlined" onPress={() => { }} style={styles.button}>
              Learn More
            </Button>
          </View>
        </View>

        {/* Search and Filter */}
        <View style={styles.searchSection}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for AI tools..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryFilter}>
            {categories.map(cat => (
              <Chip
                key={cat}
                selected={selectedCategory === cat}
                onPress={() => setSelectedCategory(cat)}
                style={styles.filterChip}
              >
                {cat}
              </Chip>
            ))}
          </ScrollView>
        </View>

        {/* Featured Tools */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured AI Tools</Text>
          <Text style={styles.sectionSubtitle}>Handpicked tools that are revolutionizing how we work.</Text>
          <FlatList
            data={featuredTools}
            renderItem={renderToolCard}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            scrollEnabled={false}
            contentContainerStyle={styles.toolsGrid}
          />
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explore by Category</Text>
          <Text style={styles.sectionSubtitle}>Find the perfect AI tools for your specific needs.</Text>
          <View style={styles.categoriesGrid}>
            {[
              { name: 'AI Chatbots', icon: 'chat', desc: 'Conversational AI assistants', count: toolsData.filter(t => t.category === 'AI Chatbots').length },
              { name: 'AI Coding Assistance', icon: 'code', desc: 'Code generation and development help', count: toolsData.filter(t => t.category === 'AI Coding Assistance').length },
              { name: 'AI Image Assistance', icon: 'image', desc: 'Image generation and editing', count: toolsData.filter(t => t.category === 'AI Image Assistance').length },
              { name: 'AI Writing Notes', icon: 'edit', desc: 'Writing and note-taking assistance', count: toolsData.filter(t => t.category === 'AI Writing Notes').length },
            ].map(cat => (
              <Card key={cat.name} style={styles.categoryCard} onPress={() => setSelectedCategory(cat.name)}>
                <Card.Content>
                  <View style={styles.categoryHeader}>
                    <MaterialIcons name={cat.icon as any} size={24} color="#6200ee" />
                    <Text style={styles.categoryTitle}>{cat.name}</Text>
                    <Chip style={styles.countChip}>{cat.count}</Chip>
                  </View>
                  <Text style={styles.categoryDescription}>{cat.desc}</Text>
                </Card.Content>
              </Card>
            ))}
          </View>
        </View>

        {/* All Tools */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All AI Tools</Text>
          <Text style={styles.sectionSubtitle}>{filteredTools.length} tools found</Text>
          <FlatList
            data={filteredTools}
            renderItem={renderToolCard}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            scrollEnabled={false}
            contentContainerStyle={styles.toolsGrid}
          />
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  hero: {
    backgroundColor: '#e8f4fd',
    padding: 20,
    alignItems: 'center',
  },
  heroChip: {
    marginBottom: 10,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroHighlight: {
    color: '#6200ee',
  },
  heroSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    minWidth: 120,
  },
  searchSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  categoryFilter: {
    flexDirection: 'row',
  },
  filterChip: {
    marginRight: 8,
  },
  section: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  toolsGrid: {
    justifyContent: 'space-between',
  },
  toolCard: {
    flex: 1,
    margin: 5,
    minHeight: 120,
  },
  toolHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  toolLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  toolInfo: {
    flex: 1,
  },
  toolName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryChip: {
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  toolDescription: {
    fontSize: 14,
    color: '#666',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    marginBottom: 10,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    flex: 1,
  },
  countChip: {
    marginLeft: 5,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#666',
  },
});
