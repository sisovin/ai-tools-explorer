import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Tool } from './types';
import { TOOLS, CATEGORIES } from './constants';
import ToolCard from './components/ToolCard';
import ToolDetailModal from './components/ToolDetailModal';
import { Button, Card, Chip, FAB, Portal, Modal, Surface, PaperProvider, MD3LightTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Menu, X, ChevronRight, Github, Twitter, Linkedin, Youtube, Mail, MapPin, Phone, Clock, Sparkles } from 'lucide-react-native';

const theme = {
  ...MD3LightTheme,
  fonts: MD3LightTheme.fonts,
  icon: {
    component: ({ name, ...props }) => (
      <MaterialCommunityIcons name={name} {...props} />
    ),
  },
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTool, setSelectedTool] = useState < Tool | null > (null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const filteredTools = useMemo(() => {
    return TOOLS.filter(tool => {
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Tools', href: '#tools' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        {/* Header */}
        <Surface style={[styles.header, isDarkMode && styles.darkHeader]} elevation={2}>
          <View style={styles.headerContent}>
            {/* Logo + Branding */}
            <View style={styles.logoContainer}>
              <View style={styles.logo}>
                <Sparkles size={24} color="#ffffff" />
              </View>
              <View>
                <Text style={[styles.logoTitle, isDarkMode && styles.darkText]}>AI Tools</Text>
                <Text style={[styles.logoSubtitle, isDarkMode && styles.darkTextSecondary]}>Explorer Pro</Text>
              </View>
            </View>

            {/* Theme Toggle & Mobile Menu */}
            <View style={styles.headerActions}>
              <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
                {isDarkMode ? (
                  <Text style={styles.iconText}>☀️</Text>
                ) : (
                  <Text style={styles.iconText}>🌙</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setIsMobileMenuOpen(true)}
                style={styles.menuButton}
              >
                <Menu size={24} color={isDarkMode ? '#ffffff' : '#000000'} />
              </TouchableOpacity>
            </View>
          </View>
        </Surface>

        <ScrollView style={styles.mainContent} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            {/* Search Input */}
            <View style={styles.searchContainer}>
              <TextInput
                style={[styles.searchInput, isDarkMode && styles.darkInput]}
                placeholder="Search for a tool..."
                placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
              <Text style={styles.searchIcon}>🔍</Text>
            </View>

            {/* Category Filters */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.categoryContainer}
            >
              {CATEGORIES.map(category => (
                <Chip
                  key={category}
                  mode={selectedCategory === category ? 'flat' : 'outlined'}
                  onPress={() => setSelectedCategory(category)}
                  style={[
                    styles.categoryChip,
                    selectedCategory === category && styles.selectedChip
                  ]}
                  textStyle={[
                    styles.categoryText,
                    selectedCategory === category && styles.selectedChipText
                  ]}
                >
                  {category}
                </Chip>
              ))}
            </ScrollView>

            {/* Tools Grid */}
            {filteredTools.length > 0 ? (
              <View style={styles.toolsGrid}>
                {filteredTools.map(tool => (
                  <ToolCard
                    key={tool.id}
                    tool={tool}
                    onPress={() => setSelectedTool(tool)}
                    isDarkMode={isDarkMode}
                  />
                ))}
              </View>
            ) : (
              <View style={styles.emptyState}>
                <Text style={[styles.emptyTitle, isDarkMode && styles.darkText]}>No Tools Found</Text>
                <Text style={[styles.emptySubtitle, isDarkMode && styles.darkTextSecondary]}>
                  Try adjusting your search or filter criteria.
                </Text>
              </View>
            )}
          </View>
        </ScrollView>

        {/* Mobile Menu Modal */}
        <Portal>
          <Modal
            visible={isMobileMenuOpen}
            onDismiss={() => setIsMobileMenuOpen(false)}
            contentContainerStyle={[styles.modalContainer, isDarkMode && styles.darkModal]}
          >
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={[styles.modalTitle, isDarkMode && styles.darkText]}>Menu</Text>
                <TouchableOpacity onPress={() => setIsMobileMenuOpen(false)}>
                  <ChevronRight size={24} color={isDarkMode ? '#ffffff' : '#000000'} />
                </TouchableOpacity>
              </View>

              <ScrollView style={styles.modalNav}>
                {navigation.map((item) => (
                  <TouchableOpacity
                    key={item.name}
                    style={styles.navItem}
                    onPress={() => setIsMobileMenuOpen(false)}
                  >
                    <Text style={[styles.navText, isDarkMode && styles.darkText]}>{item.name}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              <View style={styles.modalFooter}>
                <Button mode="outlined" onPress={() => { }} style={styles.authButton}>
                  Login
                </Button>
                <Button mode="contained" onPress={() => { }} style={styles.authButton}>
                  Sign Up
                </Button>
              </View>
            </View>
          </Modal>
        </Portal>

        {/* Tool Detail Modal */}
        <ToolDetailModal
          tool={selectedTool}
          onClose={() => setSelectedTool(null)}
          isDarkMode={isDarkMode}
        />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  darkContainer: {
    backgroundColor: '#111827',
  },
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  darkHeader: {
    backgroundColor: 'rgba(17, 24, 39, 0.8)',
    borderBottomColor: '#374151',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    height: 64,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#4F46E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  logoSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: -2,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  themeButton: {
    padding: 8,
    borderRadius: 8,
  },
  menuButton: {
    padding: 8,
    borderRadius: 8,
  },
  iconText: {
    fontSize: 20,
  },
  mainContent: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  searchContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingLeft: 48,
    fontSize: 16,
    color: '#1F2937',
  },
  darkInput: {
    backgroundColor: '#1F2937',
    borderColor: '#374151',
    color: '#F9FAFB',
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
    top: 14,
    fontSize: 16,
    color: '#6B7280',
  },
  categoryContainer: {
    marginBottom: 16,
  },
  categoryChip: {
    marginRight: 8,
    marginVertical: 4,
  },
  selectedChip: {
    backgroundColor: '#4F46E5',
  },
  categoryText: {
    color: '#374151',
  },
  selectedChipText: {
    color: '#FFFFFF',
  },
  toolsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 64,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  modalContainer: {
    margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
  darkModal: {
    backgroundColor: '#1F2937',
  },
  modalContent: {
    padding: 0,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  modalNav: {
    padding: 20,
  },
  navItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  navText: {
    fontSize: 16,
    color: '#374151',
  },
  modalFooter: {
    padding: 20,
    gap: 12,
  },
  authButton: {
    width: '100%',
  },
  darkText: {
    color: '#F9FAFB',
  },
  darkTextSecondary: {
    color: '#9CA3AF',
  },
});