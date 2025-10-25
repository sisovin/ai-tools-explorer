
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
  onClick: () => void;
  isDarkMode?: boolean;
}

const categoryIconMap: { [key: string]: string } = {
  "Language Model": "💬",
  "Image Generation": "🎨",
  "Video Generation": "🎬",
  "Coding Assistant": "💻",
  "ML Framework": "🧠",
  "AI Platform": "⚡",
  "Development": "🔧",
  "Conversational AI": "🤖",
};

const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick, isDarkMode = false }) => {
  const icon = categoryIconMap[tool.category] || "🔧";

  return (
    <TouchableOpacity
      onPress={onClick}
      style={[styles.card, isDarkMode && styles.cardDark]}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.content}>
        <Text style={[styles.title, isDarkMode && styles.titleDark]}>{tool.name}</Text>
        <Text style={[styles.category, isDarkMode && styles.categoryDark]}>{tool.category}</Text>
        <Text style={[styles.description, isDarkMode && styles.descriptionDark]} numberOfLines={3}>
          {tool.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    minHeight: 160,
  },
  cardDark: {
    backgroundColor: '#1f2937',
    borderColor: '#374151',
    shadowColor: '#000',
    shadowOpacity: 0.3,
  },
  iconContainer: {
    marginBottom: 12,
  },
  icon: {
    fontSize: 32,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  titleDark: {
    color: '#f9fafb',
  },
  category: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6366f1',
    marginBottom: 8,
  },
  categoryDark: {
    color: '#a5b4fc',
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  descriptionDark: {
    color: '#d1d5db',
  },
});

export default ToolCard;
