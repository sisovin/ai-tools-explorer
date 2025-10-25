
import { Tool } from './types';

export const TOOLS: Tool[] = [
  {
    id: 1,
    name: "Gemini Pro",
    category: "Language Model",
    description: "A powerful, multimodal large language model for complex reasoning, coding, and creative collaboration.",
  },
  {
    id: 2,
    name: "Imagen",
    category: "Image Generation",
    description: "Google's text-to-image diffusion model that creates photorealistic images from natural language descriptions.",
  },
  {
    id: 3,
    name: "Veo",
    category: "Video Generation",
    description: "A state-of-the-art text-to-video generation model capable of creating high-definition, cinematic-quality videos.",
  },
  {
    id: 4,
    name: "CodeGemma",
    category: "Coding Assistant",
    description: "A family of lightweight, open models built for code generation, completion, and assistance.",
  },
  {
    id: 5,
    name: "TensorFlow",
    category: "ML Framework",
    description: "An end-to-end open source platform for machine learning, offering a comprehensive ecosystem of tools and libraries.",
  },
  {
    id: 6,
    name: "Keras",
    category: "ML Framework",
    description: "A deep learning API written in Python, running on top of TensorFlow, designed for fast experimentation.",
  },
  {
    id: 7,
    name: "Vertex AI",
    category: "AI Platform",
    description: "A unified AI platform to build, deploy, and scale ML models faster, with pre-trained and custom tooling.",
  },
  {
    id: 8,
    name: "Colab",
    category: "Development",
    description: "An interactive notebook environment that allows you to write and execute Python in your browser, with free access to GPUs.",
  },
  {
    id: 9,
    name: "Gemma",
    category: "Language Model",
    description: "A family of lightweight, state-of-the-art open models built from the same research and technology used to create Gemini.",
  },
  {
    id: 10,
    name: "Dialogflow CX",
    category: "Conversational AI",
    description: "An advanced agent design for large and complex virtual agents, providing a new way of designing conversational AI.",
  },
  {
    id: 11,
    name: "AutoML",
    category: "AI Platform",
    description: "A suite of machine learning products that enables developers with limited ML expertise to train high-quality models.",
  },
  {
    id: 12,
    name: "Kaggle",
    category: "Development",
    description: "An online community of data scientists and machine learning practitioners, offering datasets, notebooks, and competitions.",
  },
];

export const CATEGORIES = ["All", ...Array.from(new Set(TOOLS.map(tool => tool.category)))];
