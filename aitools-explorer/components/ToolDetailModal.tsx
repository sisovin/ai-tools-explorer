
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Tool } from '../types';
import SparklesIcon from './icons/SparklesIcon';

interface ToolDetailModalProps {
  visible: boolean;
  tool: Tool | null;
  onClose: () => void;
  loading: boolean;
  useCases: string[] | null;
  onGenerateUseCases: () => void;
}

const ToolDetailModal: React.FC<ToolDetailModalProps> = ({
  visible,
  tool,
  onClose,
  loading,
  useCases,
  onGenerateUseCases,
}) => {
  if (!tool) return null;

  const renderUseCases = () => {
    if (!useCases) return null;
    return useCases.map((useCase, index) => (
      <Text key={index} style={styles.useCase}>
        • {useCase}
      </Text>
    ));
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>{tool.name}</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeText}>×</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.category}>{tool.category}</Text>

          <ScrollView style={styles.scrollView}>
            <Text style={styles.description}>{tool.description}</Text>

            <TouchableOpacity
              onPress={onGenerateUseCases}
              disabled={loading}
              style={[styles.generateButton, loading && styles.disabledButton]}
            >
              <Text style={styles.generateText}>
                {loading ? 'Generating...' : 'Generate Use Cases with Gemini'}
              </Text>
            </TouchableOpacity>

            {(loading || useCases) && (
              <View style={styles.useCasesContainer}>
                <Text style={styles.useCasesTitle}>Potential Use Cases</Text>
                {loading && !useCases && (
                  <View style={styles.loadingContainer}>
                    <Text style={styles.loadingText}>Loading...</Text>
                  </View>
                )}
                {useCases && <View>{renderUseCases()}</View>}
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  closeButton: {
    padding: 5,
  },
  closeText: {
    fontSize: 24,
    color: '#666',
  },
  category: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  generateButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  generateText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  useCasesContainer: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 5,
  },
  useCasesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  loadingContainer: {
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#666',
  },
  useCase: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default ToolDetailModal;
