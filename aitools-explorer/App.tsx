
import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Tool } from './types';
import { TOOLS, CATEGORIES } from './constants';
import ToolCard from './components/ToolCard';
import ToolDetailModal from './components/ToolDetailModal';
import { Provider as PaperProvider } from 'react-native-paper';
import { configureFonts, MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

// Header Component for React Native
const Header: React.FC<{ onThemeToggle: () => void; isDarkMode: boolean }> = ({ onThemeToggle, isDarkMode }) => {
  return (
    <View style={[styles.header, isDarkMode && styles.headerDark]}>
      <View style={styles.headerContent}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>AI</Text>
          </View>
          <View>
            <Text style={[styles.brandText, isDarkMode && styles.brandTextDark]}>AITools</Text>
            <Text style={[styles.tagline, isDarkMode && styles.taglineDark]}>Explorer Pro</Text>
          </View>
        </View>

        <TouchableOpacity onPress={onThemeToggle} style={styles.themeButton}>
          <Text style={[styles.themeIcon, isDarkMode && styles.themeIconDark]}>
            {isDarkMode ? '☀️' : '🌙'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Main App Component
const App: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const filteredTools = useMemo(() => {
    return TOOLS.filter(tool => {
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const theme = isDarkMode ? MD3DarkTheme : MD3LightTheme;

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={[styles.container, isDarkMode && styles.containerDark]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <Header onThemeToggle={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode} />

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>
              Discover AI Tools
            </Text>
            <View style={[styles.searchBar, isDarkMode && styles.searchBarDark]}>
              <Text style={[styles.searchPlaceholder, isDarkMode && styles.searchPlaceholderDark]}>
                🔍 Search tools...
              </Text>
            </View>
          </View>

          {/* Category Filters */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScroll}
            contentContainerStyle={styles.categoryContainer}
          >
            {CATEGORIES.map(category => (
              <TouchableOpacity
                key={category}
                onPress={() => setSelectedCategory(category)}
                style={[
                  styles.categoryButton,
                  selectedCategory === category && styles.categoryButtonActive,
                  isDarkMode && styles.categoryButtonDark,
                  selectedCategory === category && isDarkMode && styles.categoryButtonActiveDark
                ]}
              >
                <Text style={[
                  styles.categoryText,
                  selectedCategory === category && styles.categoryTextActive,
                  isDarkMode && styles.categoryTextDark,
                  selectedCategory === category && isDarkMode && styles.categoryTextActiveDark
                ]}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Tools Grid */}
          {filteredTools.length > 0 ? (
            <View style={styles.toolsGrid}>
              {filteredTools.map(tool => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  onClick={() => setSelectedTool(tool)}
                  isDarkMode={isDarkMode}
                />
              ))}
            </View>
          ) : (
            <View style={styles.emptyState}>
              <Text style={[styles.emptyTitle, isDarkMode && styles.emptyTitleDark]}>
                No Tools Found
              </Text>
              <Text style={[styles.emptySubtitle, isDarkMode && styles.emptySubtitleDark]}>
                Try adjusting your search or filter criteria.
              </Text>
            </View>
          )}
        </ScrollView>

        <ToolDetailModal
          visible={!!selectedTool}
          tool={selectedTool}
          onClose={() => setSelectedTool(null)}
          loading={false}
          useCases={null}
          onGenerateUseCases={() => { }}
        />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  containerDark: {
    backgroundColor: '#0f172a',
  },
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  headerDark: {
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    borderBottomColor: '#334155',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#4f46e5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  logoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  brandText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e40af',
  },
  brandTextDark: {
    color: '#60a5fa',
  },
  tagline: {
    fontSize: 12,
    color: '#64748b',
    marginTop: -2,
  },
  taglineDark: {
    color: '#94a3b8',
  },
  themeButton: {
    padding: 8,
  },
  themeIcon: {
    fontSize: 20,
  },
  themeIconDark: {
    color: '#f1f5f9',
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  sectionTitleDark: {
    color: '#f1f5f9',
  },
  searchBar: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  searchBarDark: {
    backgroundColor: '#1e293b',
    borderColor: '#334155',
  },
  searchPlaceholder: {
    color: '#64748b',
    fontSize: 16,
  },
  searchPlaceholderDark: {
    color: '#94a3b8',
  },
  categoryScroll: {
    marginBottom: 8,
  },
  categoryContainer: {
    paddingHorizontal: 16,
    gap: 8,
  },
  categoryButton: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  categoryButtonActive: {
    backgroundColor: '#4f46e5',
    borderColor: '#4f46e5',
  },
  categoryButtonDark: {
    backgroundColor: '#1e293b',
    borderColor: '#334155',
  },
  categoryButtonActiveDark: {
    backgroundColor: '#4f46e5',
    borderColor: '#4f46e5',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
  },
  categoryTextActive: {
    color: 'white',
  },
  categoryTextDark: {
    color: '#cbd5e1',
  },
  categoryTextActiveDark: {
    color: 'white',
  },
  toolsGrid: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 48,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#475569',
    marginBottom: 8,
  },
  emptyTitleDark: {
    color: '#cbd5e1',
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
  },
  emptySubtitleDark: {
    color: '#94a3b8',
  },
});

export default App;
