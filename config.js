import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";


export const projectCategories = [
    {
      title: "LLM & RAG Systems",
      projects: [1, 2, 3]
    },
    {
      title: "AI Agents & Automation",
      projects: [2,4]
    },
    {
      title: "Machine Learning",
      projects: [6, 7]
    },
    {
      title: "Computer Vision",
      projects: [5]
    }
  ]
export const config = {
    developer: {
        name: "Amsheed Nazeer",
    },
    social: {
        github: "Amsheedkhan",
        discord: "#"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
          id: 1,
          title: "Document Intelligence RAG System",
          description: "Built a production-grade Retrieval-Augmented Generation (RAG) system to extract insights from PDFs and unstructured documents using embeddings, vector search, and LLM reasoning.",
          problem: "Unstructured documents like PDFs are difficult to search and extract meaningful insights from.",
          solution: "Designed a pipeline using chunking, embeddings, FAISS vector search, and LLMs to enable semantic querying over documents.",
          impact: "Enabled accurate and context-aware document understanding, reducing manual search effort significantly.",
          technologies: ["Python", "LangChain", "FAISS", "LLMs", "FastAPI"],
          image: "/projects/project-1.webp",
          github: "#",
          demo: "#"
        },
        {
          id: 2,
          title: "Agentic RAG System",
          description: "Developed a multi-agent RAG system where planner, retriever, and evaluator agents collaborate to generate accurate and validated responses.",
          problem: "Standard RAG systems lack reasoning and often return incomplete or incorrect answers.",
          solution: "Implemented a multi-agent architecture using LangGraph with task delegation, memory, and evaluation loops.",
          impact: "Improved answer accuracy and introduced reasoning-based response generation.",
          technologies: ["LangGraph", "LangChain", "Python", "LLMs"],
          image: "/projects/project-2.webp",
          github: "#",
          demo: "#"
        },
        {
          id: 3,
          title: "Multimodal RAG (Vision + Text)",
          description: "Built a multimodal AI system that processes images, documents, and text using vision-language models for structured extraction and Q&A.",
          problem: "Traditional RAG systems cannot handle visual data like images, tables, or screenshots.",
          solution: "Integrated OCR, vision models (Gemini Vision, LLaVA), and LLMs for multimodal understanding.",
          impact: "Enabled AI to understand both visual and textual content in a unified pipeline.",
          technologies: ["Python", "Gemini Vision", "LLaVA", "OCR", "LLMs"],
          image: "/projects/project-3.webp",
          github: "#",
          demo: "#"
        },
        {
          id: 4,
          title: "LinkedIn Automation & Lead Generator",
          description: "Developed an AI-powered automation system for lead generation, profile scraping, and personalized outreach workflows.",
          problem: "Manual lead generation and outreach are time-consuming and inefficient.",
          solution: "Built automation pipelines using Selenium, scraping tools, and LLM-based personalization.",
          impact: "Automated outreach workflows and improved efficiency in lead generation.",
          technologies: ["Python", "Selenium", "BeautifulSoup", "LLMs"],
          image: "/projects/project-4.webp",
          github: "#",
          demo: "#"
        },
        {
          id: 5,
          title: "Gesture-Based Document Navigation",
          description: "Built a real-time hand tracking system to control presentations and documents using gestures.",
          problem: "Traditional input methods limit interaction in presentations and accessibility use cases.",
          solution: "Implemented gesture recognition using MediaPipe and OpenCV for real-time control.",
          impact: "Enabled hands-free interaction for presentations and accessibility applications.",
          technologies: ["OpenCV", "MediaPipe", "Python"],
          image: "/projects/project-5.webp",
          github: "#",
          demo: "#"
        },
        {
          id: 6,
          title: "Adaptive Diabetes Risk Classifier",
          description: "Developed a machine learning system that detects data drift and retrains itself to maintain prediction accuracy.",
          problem: "ML models degrade over time due to changing data distributions.",
          solution: "Implemented drift detection and automated retraining pipelines.",
          impact: "Maintained model performance and improved reliability in real-world scenarios.",
          technologies: ["Python", "Scikit-learn", "Pandas"],
          image: "/projects/project-6.webp",
          github: "#",
          demo: "#"
        },
        {
          id: 7,
          title: "Next Word Predictor (LSTM)",
          description: "Built an NLP model using LSTM networks to predict the next word in a sequence with real-time inference.",
          problem: "Typing efficiency can be improved with predictive text systems.",
          solution: "Trained sequence models using LSTM and deployed via API.",
          impact: "Demonstrated real-time NLP prediction capabilities.",
          technologies: ["TensorFlow", "Keras", "Python"],
          image: "/projects/project-7.webp",
          github: "#",
          demo: "#"
        }
      ],
      skills: [
        {
          title: "Core AI",
          icon: <HiCube />,
          skills: [
            "LLMs",
            "RAG Systems",
            "Agentic AI",
            "AI Agents",
            "Multi-Agent Systems",
            "Prompt Engineering",
            "Fine-Tuning (LoRA, PEFT)",
            "Knowledge Graphs"
          ],
          more: [
            "Recommendation Systems",
            "Expert Systems"
          ]
        },
      
        {
          title: "Machine Learning",
          icon: <HiCode />,
          skills: [
            "Machine Learning",
            "Deep Learning (CNN, LSTM, Transformers)",
            "NLP & Transformers",
            "TensorFlow",
            "PyTorch",
            "MLOps"
          ],
          more: [
            "PySpark",
            "MATLAB",
            "Model Monitoring",
            "Azure ML"
          ]
        },
      
        {
          title: "Backend & Data",
          icon: <HiDatabase />,
          skills: [
            "Python",
            "FastAPI",
            "SQL",
            "PostgreSQL",
            "Supabase",
            "Vector Databases (Qdrant, FAISS)"
          ],
          more: [
            "Hive",
            "Embeddings",
            "Semantic Search"
          ]
        },
      
        {
          title: "LLM Stack",
          icon: <HiBriefcase />,
          skills: [
            "LangChain",
            "LangGraph",
            "LlamaIndex",
            "Qdrant",
            "FAISS",
            "Vector Search"
          ],
          more: [
            "RAG Architecture Design",
            "Evaluation & Guardrails"
          ]
        },
      
        {
          title: "Tools & Automation",
          icon: <HiCube />,
          skills: [
            "Docker",
            "n8n",
            "Apify",
            "Streamlit",
            "Cursor",
            "GitHub"
          ],
          more: [
            "Activepieces",
            "Docling",
            "Hugging Face",
            "Ollama",
            "Claude",
            "Webhooks & APIs"
          ]
        }
      ],

    experiences: [
        {
            position: "Freelance AI Developer",
            company: "Self-Employed",
            period: "2024 - Present",
            location: "Remote",
            description: "Developing advanced AI solutions including chatbots, RAG-based systems, and intelligent automation tools for real-world business use cases.",
            responsibilities: [
                "Currently managing 5 active clients including 2 RAG-based systems, 2 AI chatbot solutions, and 1 n8n automation workflow",
                "Built custom AI chatbots and expert systems that improved client response efficiency and reduced manual workload",
                "Developed Retrieval-Augmented Generation (RAG) applications with vector databases, significantly improving answer accuracy and contextual relevance",
                "Fine-tuned and deployed LLM-based systems for production use, ensuring reliable and scalable performance",
                "Designed end-to-end AI pipelines including data preprocessing, embeddings, and FastAPI integration, reducing development time for clients",
                "Delivered academic and business AI solutions, receiving positive client feedback and repeat project engagements"
            ],
            technologies: ["Python", "FastAPI", "LangChain", "RAG", "LLMs", "FAISS", "Vector Databases", "Docker", "n8n"]
        },
        {
            position: "Deep Learning Intern",
            company: "Oxi Academy",
            period: "Jan 2025 - Jul 2025",
            location: "Remote",
            description: "Worked on deep learning and NLP models, focusing on sequence modeling, image recognition, and model optimization.",
            responsibilities: [
                "Built and optimized CNN models for image recognition, improving model accuracy through transfer learning techniques",
                "Developed LSTM and BERT-based NLP models for sequence prediction and text processing tasks with enhanced performance",
                "Performed hyperparameter tuning and model evaluation, leading to measurable improvements in model efficiency",
                "Implemented deep learning solutions using TensorFlow and PyTorch, gaining hands-on experience in real-world model deployment"
            ],
            technologies: ["Python", "TensorFlow", "PyTorch", "CNN", "LSTM", "BERT", "Deep Learning"]
        },
        {
            position: "Machine Learning Intern",
            company: "Verzeo",
            period: "Dec 2023 - Mar 2024",
            location: "Remote",
            description: "Applied machine learning algorithms to real-world datasets with a focus on data preprocessing, model building, and evaluation.",
            responsibilities: [
                "Performed data cleaning, feature engineering, and exploratory data analysis, improving dataset quality and model performance",
                "Built supervised and unsupervised machine learning models with improved prediction accuracy",
                "Implemented classification algorithms and optimized models through iterative testing and evaluation",
                "Generated actionable insights from data, enhancing understanding of real-world problem-solving using ML techniques"
            ],
            technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"]
        },
        {
            position: "Python Developer Intern",
            company: "NXT Logic Solution",
            period: "Oct 2022 - Nov 2022",
            location: "Remote",
            description: "Developed machine learning-based solutions using Python and implemented predictive models.",
            responsibilities: [
                "Built a crime prediction system using Decision Tree algorithms, achieving 87% accuracy on real-world datasets",
                "Performed data preprocessing and feature selection to improve model performance",
                "Implemented core machine learning algorithms and evaluated model results effectively",
                "Gained practical experience in applying ML techniques to real-world datasets and problem statements"
            ],
            technologies: ["Python", "Decision Trees", "Machine Learning", "Pandas"]
        },
        {
            position: "Data Visualization Intern",
            company: "Tata (Forage Virtual Internship)",
            period: "2023",
            location: "Remote",
            description: "Worked on data cleaning and visualization to generate business insights using analytics tools.",
            responsibilities: [
                "Cleaned and transformed datasets of over 50,000 records, improving data usability for analysis",
                "Built interactive Power BI dashboards to visualize trends and key performance indicators",
                "Generated insights that support data-driven decision-making processes",
                "Improved reporting efficiency through structured data visualization techniques"
            ],
            technologies: ["Power BI", "Excel", "Data Visualization"]
        }
    ],
    contactInfo: [
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@AmsheedKhan",
            link: "https://github.com/AmsheedKhan"
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "amsheeduel@gmail.com",
            link: "mailto:amsheeduel@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "London, United Kingdom",
            link: null
        }
    ]
    
}