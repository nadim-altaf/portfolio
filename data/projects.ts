export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  emoji: string;
  bgGradient: string;
  repoUrl: string; // TODO: add real repo link from CONTENT.md
  demoUrl: string; // TODO: add real demo link from CONTENT.md
}

export const projectsData: Project[] = [
  {
    id: "churn-predictor",
    title: "Customer Churn Predictor",
    description:
      "Machine learning pipeline to predict telecom customer churn using ensemble classification and SHAP explainability.",
    tech: ["Python", "Scikit-learn", "XGBoost", "SHAP"],
    emoji: "🧠",
    bgGradient: "linear-gradient(135deg, #0a1628, #1a3a5c)",
    repoUrl: "", // TODO: add repo link
    demoUrl: "", // TODO: add demo link
  },
  {
    id: "stock-forecasting",
    title: "Stock Price Forecasting",
    description:
      "LSTM neural network model to forecast daily closing prices for market equities with interactive visualization.",
    tech: ["TensorFlow", "LSTM", "Plotly", "Pandas"],
    emoji: "📈",
    bgGradient: "linear-gradient(135deg, #0a1a10, #1a4a28)",
    repoUrl: "", // TODO: add repo link
    demoUrl: "", // TODO: add demo link
  },
  {
    id: "nlp-sentiment",
    title: "NLP Sentiment Analyser",
    description:
      "Transformer-based sentiment analysis model for multi-class classification on text reviews with a REST API service.",
    tech: ["BERT", "HuggingFace", "Flask", "React"],
    emoji: "🔍",
    bgGradient: "linear-gradient(135deg, #1a0a28, #3a1a56)",
    repoUrl: "", // TODO: add repo link
    demoUrl: "", // TODO: add demo link
  },
  {
    id: "covid-eda",
    title: "COVID-19 EDA Dashboard",
    description:
      "Data exploration dashboard analysing global pandemic trends with geospatial mapping, time-series, and correlation analysis.",
    tech: ["Pandas", "Seaborn", "Plotly", "Streamlit"],
    emoji: "🗺️",
    bgGradient: "linear-gradient(135deg, #1a1a0a, #4a420a)",
    repoUrl: "", // TODO: add repo link
    demoUrl: "", // TODO: add demo link
  },
  {
    id: "plant-disease",
    title: "Plant Disease Detector",
    description:
      "Convolutional neural network classifier for identifying plant leaf diseases, structured for edge and mobile deployment.",
    tech: ["TensorFlow", "CNN", "TFLite", "OpenCV"],
    emoji: "🌿",
    bgGradient: "linear-gradient(135deg, #0a1818, #0a3030)",
    repoUrl: "", // TODO: add repo link
    demoUrl: "", // TODO: add demo link
  },
  {
    id: "movie-recommender",
    title: "Movie Recommendation Engine",
    description:
      "Collaborative and content-based recommendation system using matrix factorisation and cosine similarity.",
    tech: ["NumPy", "SVD", "Scikit-learn", "FastAPI"],
    emoji: "🎯",
    bgGradient: "linear-gradient(135deg, #1a0a10, #3a0a28)",
    repoUrl: "", // TODO: add repo link
    demoUrl: "", // TODO: add demo link
  },
];
