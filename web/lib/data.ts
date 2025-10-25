export interface Tool {
  id: number;
  name: string;
  category: string;
  description: string;
  logo_url: string;
  website_url: string;
}

export const toolsData: Tool[] = [
  { id: 1, name: "ChatGPT", category: "AI Chatbots", description: "Conversational AI for answering questions and generating text.", logo_url: "https://placehold.co/60x60/6366f1/white?text=CG", website_url: "#" },
  { id: 2, name: "Claude", category: "AI Chatbots", description: "AI assistant for thoughtful, helpful conversations.", logo_url: "https://placehold.co/60x60/8b5cf6/white?text=CL", website_url: "#" },
  { id: 3, name: "Gamma", category: "AI Presentation", description: "Create beautiful presentations with AI in seconds.", logo_url: "https://placehold.co/60x60/06b6d4/white?text=GA", website_url: "#" },
  { id: 4, name: "Tome", category: "AI Presentation", description: "AI-powered storytelling and presentation tool.", logo_url: "https://placehold.co/60x60/10b981/white?text=TO", website_url: "#" },
  { id: 5, name: "GitHub Copilot", category: "AI Coding Assistance", description: "AI pair programmer that suggests code in real-time.", logo_url: "https://placehold.co/60x60/f59e0b/white?text=GH", website_url: "#" },
  { id: 6, name: "CodeWhisperer", category: "AI Coding Assistance", description: "Amazon's AI coding companion for developers.", logo_url: "https://placehold.co/60x60/ef4444/white?text=CW", website_url: "#" },
  { id: 7, name: "Superhuman", category: "AI Email Assistance", description: "AI-powered email client for speed and efficiency.", logo_url: "https://placehold.co/60x60/8b5cf6/white?text=SH", website_url: "#" },
  { id: 8, name: "Magic Email", category: "AI Email Assistance", description: "Write better emails with AI suggestions.", logo_url: "https://placehold.co/60x60/6366f1/white?text=ME", website_url: "#" },
  { id: 9, name: "Midjourney", category: "AI Image Assistance", description: "Generate stunning images from text prompts.", logo_url: "https://placehold.co/60x60/ec4899/white?text=MJ", website_url: "#" },
  { id: 10, name: "DALL-E 3", category: "AI Image Assistance", description: "Create realistic images and art from descriptions.", logo_url: "https://placehold.co/60x60/f97316/white?text=DE", website_url: "#" },
  { id: 11, name: "SheetAI", category: "AI Spreadsheet", description: "AI formulas and data analysis for spreadsheets.", logo_url: "https://placehold.co/60x60/14b8a6/white?text=SA", website_url: "#" },
  { id: 12, name: "Formula Bot", category: "AI Spreadsheet", description: "Automate spreadsheet tasks with natural language.", logo_url: "https://placehold.co/60x60/06b6d4/white?text=FB", website_url: "#" },
  { id: 13, name: "Fireflies", category: "AI Meeting Notes", description: "AI meeting assistant that records and transcribes.", logo_url: "https://placehold.co/60x60/8b5cf6/white?text=FF", website_url: "#" },
  { id: 14, name: "Otter.ai", category: "AI Meeting Notes", description: "Real-time transcription and meeting notes.", logo_url: "https://placehold.co/60x60/6366f1/white?text=OT", website_url: "#" },
  { id: 15, name: "Notion AI", category: "AI Writing Notes", description: "AI writing assistant integrated into Notion.", logo_url: "https://placehold.co/60x60/10b981/white?text=NA", website_url: "#" },
  { id: 16, name: "Mem.ai", category: "AI Writing Notes", description: "AI-powered workspace for notes and knowledge.", logo_url: "https://placehold.co/60x60/f59e0b/white?text=MM", website_url: "#" },
  { id: 17, name: "Reclaim", category: "AI Scheduling", description: "AI calendar that optimizes your schedule.", logo_url: "https://placehold.co/60x60/ef4444/white?text=RC", website_url: "#" },
  { id: 18, name: "Motion", category: "AI Scheduling", description: "AI project and time management assistant.", logo_url: "https://placehold.co/60x60/ec4899/white?text=MO", website_url: "#" },
  { id: 19, name: "Synthesia", category: "AI Video Generation", description: "Create AI videos with virtual avatars.", logo_url: "https://placehold.co/60x60/f97316/white?text=SY", website_url: "#" },
  { id: 20, name: "Pictory", category: "AI Video Generation", description: "Turn scripts and articles into videos.", logo_url: "https://placehold.co/60x60/14b8a6/white?text=PI", website_url: "#" },
  { id: 21, name: "Canva Magic", category: "AI Graphic Design", description: "AI design tools within Canva platform.", logo_url: "https://placehold.co/60x60/06b6d4/white?text=CM", website_url: "#" },
  { id: 22, name: "Adobe Firefly", category: "AI Graphic Design", description: "Generative AI for creative professionals.", logo_url: "https://placehold.co/60x60/8b5cf6/white?text=AF", website_url: "#" },
  { id: 23, name: "Tableau GPT", category: "AI Data Visualization", description: "AI-powered data insights and dashboards.", logo_url: "https://placehold.co/60x60/6366f1/white?text=TG", website_url: "#" },
  { id: 24, name: "Power BI Copilot", category: "AI Data Visualization", description: "Natural language queries for data visualization.", logo_url: "https://placehold.co/60x60/10b981/white?text=PB", website_url: "#" }
];

export const categories = [
  "All Tools",
  "AI Chatbots",
  "AI Presentation",
  "AI Coding Assistance",
  "AI Email Assistance",
  "AI Image Assistance",
  "AI Spreadsheet",
  "AI Meeting Notes",
  "AI Writing Notes",
  "AI Scheduling",
  "AI Video Generation",
  "AI Graphic Design",
  "AI Data Visualization"
];