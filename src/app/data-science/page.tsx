'use client';

import { useState } from 'react';
import Link from 'next/link';
import TechLayout from '@/components/layout/tech-layout';

export default function DataSciencePage() {
  const [activeSection, setActiveSection] = useState('introduction');

  const pageHeadings = [
    { id: 'introduction', title: 'Data Science Learning Hub' },
    { id: 'foundations', title: 'Mathematical Foundations' }
  ];

  // Get navigation for current section
  const getNavigation = () => {
    const currentIndex = pageHeadings.findIndex(h => h.id === activeSection);
    const previousSection = currentIndex > 0 ? pageHeadings[currentIndex - 1] : null;
    const nextSection = currentIndex < pageHeadings.length - 1 ? pageHeadings[currentIndex + 1] : null;

    return {
      previous: previousSection ? {
        href: `/data-science/#${previousSection.id}`,
        title: previousSection.title,
        isSection: true
      } : {
        href: '/web-dev',
        title: 'Web Development',
        isSection: false
      },
      next: nextSection ? {
        href: `/data-science/#${nextSection.id}`,
        title: nextSection.title,
        isSection: true
      } : {
        href: '/code-terminal',
        title: 'Code Terminal',
        isSection: false
      }
    };
  };

  const navigation = getNavigation();

  const renderContent = () => {
    switch (activeSection) {
      case 'introduction':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="introduction" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
                📊 Data Science Hub
              </h1>
              <p className="text-lg text-gray-400 mb-8 text-center">
                Master data science, machine learning, AI, and advanced analytics with comprehensive learning paths
              </p>

              <div className="max-w-6xl mx-auto">
                {/* Overview */}
                <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 p-8 rounded-2xl mb-8">
                  <h2 className="text-3xl font-bold text-blue-400 mb-6">🔬 Data Science Overview</h2>

                  <div className="space-y-6">
                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-blue-400 mb-4">What is Data Science?</h3>
                      <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                        Data science is an interdisciplinary field that combines mathematics, statistics, computer science, and domain expertise to extract meaningful insights and knowledge from data. It involves collecting, processing, analyzing, and interpreting large amounts of data to solve complex problems and make data-driven decisions.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Data scientists use various tools, algorithms, and methodologies to uncover patterns, trends, and correlations in data, helping organizations make informed decisions and gain competitive advantages.
                      </p>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-blue-400 mb-4">Key Components of Data Science</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gray-800 p-4 rounded-lg border border-blue-500/30">
                          <h4 className="text-lg font-bold text-blue-300 mb-2">📈 Statistics & Mathematics</h4>
                          <p className="text-sm text-gray-300">Foundation for data analysis, hypothesis testing, and modeling</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg border border-blue-500/30">
                          <h4 className="text-lg font-bold text-blue-300 mb-2">💻 Programming & Tools</h4>
                          <p className="text-sm text-gray-300">Python, R, SQL, and specialized data science libraries</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg border border-blue-500/30">
                          <h4 className="text-lg font-bold text-blue-300 mb-2">🤖 Machine Learning</h4>
                          <p className="text-sm text-gray-300">Algorithms and models for predictive analytics and automation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Career Paths */}
                <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/20 p-8 rounded-2xl mb-8">
                  <h2 className="text-3xl font-bold text-green-400 mb-6">💼 Career Paths in Data Science</h2>

                  <div className="space-y-6">
                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-green-400 mb-4">Data Scientist</h3>
                      <p className="text-gray-300 mb-4">
                        Data scientists are analytical experts who use their skills in both technology and social science to find trends and manage data. They use industry knowledge, contextual understanding, and skepticism of existing assumptions to solve business problems.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <h4 className="text-lg font-bold text-green-300 mb-2">Key Skills</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Python/R Programming</li>
                            <li>• Machine Learning</li>
                            <li>• Statistical Analysis</li>
                            <li>• Data Visualization</li>
                            <li>• Domain Knowledge</li>
                          </ul>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <h4 className="text-lg font-bold text-green-300 mb-2">Responsibilities</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Data collection and cleaning</li>
                            <li>• Exploratory data analysis</li>
                            <li>• Model building and validation</li>
                            <li>• Business insights generation</li>
                            <li>• Stakeholder communication</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-green-400 mb-4">Machine Learning Engineer</h3>
                      <p className="text-gray-300 mb-4">
                        Machine learning engineers focus on designing, building, and deploying machine learning models at scale. They bridge the gap between data science and software engineering, ensuring models are production-ready and performant.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <h4 className="text-lg font-bold text-green-300 mb-2">Key Skills</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Deep Learning Frameworks</li>
                            <li>• Cloud Platforms (AWS/GCP/Azure)</li>
                            <li>• MLOps & Model Deployment</li>
                            <li>• Software Engineering</li>
                            <li>• Distributed Computing</li>
                          </ul>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <h4 className="text-lg font-bold text-green-300 mb-2">Responsibilities</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Model development and training</li>
                            <li>• Infrastructure setup</li>
                            <li>• Model deployment and monitoring</li>
                            <li>• Performance optimization</li>
                            <li>• A/B testing and validation</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-green-400 mb-4">Data Analyst</h3>
                      <p className="text-gray-300 mb-4">
                        Data analysts focus on interpreting data and turning it into information that can offer ways to improve a business. They gather information from various sources and interpret patterns and trends to provide actionable insights.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <h4 className="text-lg font-bold text-green-300 mb-2">Key Skills</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• SQL & Database Management</li>
                            <li>• Excel & Business Intelligence</li>
                            <li>• Data Visualization Tools</li>
                            <li>• Statistical Analysis</li>
                            <li>• Business Acumen</li>
                          </ul>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg">
                          <h4 className="text-lg font-bold text-green-300 mb-2">Responsibilities</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Data collection and processing</li>
                            <li>• Trend analysis and reporting</li>
                            <li>• Dashboard creation</li>
                            <li>• Business metric tracking</li>
                            <li>• Stakeholder presentations</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 p-8 rounded-2xl mb-8">
                  <h2 className="text-3xl font-bold text-purple-400 mb-6">🛠️ Data Science Technology Stack</h2>

                  <div className="space-y-6">
                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-purple-400 mb-4">Programming Languages</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                            <h4 className="text-lg font-bold text-purple-300 mb-2">Python</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• NumPy - Numerical computing</li>
                              <li>• Pandas - Data manipulation</li>
                              <li>• Scikit-learn - Machine learning</li>
                              <li>• Matplotlib/Seaborn - Visualization</li>
                              <li>• Jupyter - Interactive development</li>
                            </ul>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                            <h4 className="text-lg font-bold text-purple-300 mb-2">R</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• dplyr - Data manipulation</li>
                              <li>• ggplot2 - Data visualization</li>
                              <li>• caret - Machine learning</li>
                              <li>• Shiny - Web applications</li>
                              <li>• RStudio - Development environment</li>
                            </ul>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                            <h4 className="text-lg font-bold text-purple-300 mb-2">SQL</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Data querying and extraction</li>
                              <li>• Database design and optimization</li>
                              <li>• Data warehousing concepts</li>
                              <li>• ETL processes</li>
                              <li>• Performance tuning</li>
                            </ul>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                            <h4 className="text-lg font-bold text-purple-300 mb-2">Scala/Java</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Apache Spark - Big data processing</li>
                              <li>• Hadoop ecosystem</li>
                              <li>• Distributed computing</li>
                              <li>• Stream processing</li>
                              <li>• Enterprise applications</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-purple-400 mb-4">Cloud Platforms & Tools</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                            <h4 className="text-lg font-bold text-purple-300 mb-2">Cloud Platforms</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• AWS - SageMaker, Redshift, EMR</li>
                              <li>• Google Cloud - Vertex AI, BigQuery</li>
                              <li>• Azure - ML Studio, Synapse</li>
                              <li>• Databricks - Unified analytics</li>
                              <li>• Snowflake - Cloud data warehouse</li>
                            </ul>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                            <h4 className="text-lg font-bold text-purple-300 mb-2">Visualization Tools</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Tableau - Business intelligence</li>
                              <li>• Power BI - Microsoft ecosystem</li>
                              <li>• D3.js - Custom visualizations</li>
                              <li>• Plotly - Interactive charts</li>
                              <li>• Grafana - Monitoring dashboards</li>
                            </ul>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                            <h4 className="text-lg font-bold text-purple-300 mb-2">ML/AI Frameworks</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• TensorFlow - Deep learning</li>
                              <li>• PyTorch - Research and development</li>
                              <li>• Keras - High-level neural networks</li>
                              <li>• XGBoost - Gradient boosting</li>
                              <li>• Hugging Face - NLP models</li>
                            </ul>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                            <h4 className="text-lg font-bold text-purple-300 mb-2">Big Data Tools</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Apache Spark - Distributed processing</li>
                              <li>• Apache Kafka - Stream processing</li>
                              <li>• Elasticsearch - Search and analytics</li>
                              <li>• Apache Airflow - Workflow orchestration</li>
                              <li>• Kubernetes - Container orchestration</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Science Process */}
                <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border border-yellow-500/20 p-8 rounded-2xl mb-8">
                  <h2 className="text-3xl font-bold text-yellow-400 mb-6">🔄 Data Science Process</h2>

                  <div className="space-y-6">
                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-yellow-400 mb-4">CRISP-DM Methodology</h3>
                      <p className="text-gray-300 mb-4">
                        The Cross-Industry Standard Process for Data Mining (CRISP-DM) is a proven methodology for data science projects. It provides a structured approach to solving business problems using data.
                      </p>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-4">
                          <div className="bg-gray-800 p-4 rounded-lg border border-yellow-500/30">
                            <h4 className="text-lg font-bold text-yellow-300 mb-2">1. Business Understanding</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Define project objectives</li>
                              <li>• Identify success criteria</li>
                              <li>• Assess current situation</li>
                              <li>• Create project plan</li>
                            </ul>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg border border-yellow-500/30">
                            <h4 className="text-lg font-bold text-yellow-300 mb-2">2. Data Understanding</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Collect initial data</li>
                              <li>• Describe data structure</li>
                              <li>• Explore data quality</li>
                              <li>• Verify data integrity</li>
                            </ul>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-gray-800 p-4 rounded-lg border border-yellow-500/30">
                            <h4 className="text-lg font-bold text-yellow-300 mb-2">3. Data Preparation</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Data cleaning</li>
                              <li>• Feature engineering</li>
                              <li>• Data transformation</li>
                              <li>• Dataset construction</li>
                            </ul>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg border border-yellow-500/30">
                            <h4 className="text-lg font-bold text-yellow-300 mb-2">4. Modeling</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Select modeling techniques</li>
                              <li>• Generate test design</li>
                              <li>• Build models</li>
                              <li>• Assess models</li>
                            </ul>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-gray-800 p-4 rounded-lg border border-yellow-500/30">
                            <h4 className="text-lg font-bold text-yellow-300 mb-2">5. Evaluation</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Evaluate results</li>
                              <li>• Review process</li>
                              <li>• Determine next steps</li>
                              <li>• Document findings</li>
                            </ul>
                          </div>
                          <div className="bg-gray-800 p-4 rounded-lg border border-yellow-500/30">
                            <h4 className="text-lg font-bold text-yellow-300 mb-2">6. Deployment</h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                              <li>• Plan deployment</li>
                              <li>• Plan monitoring</li>
                              <li>• Maintain solution</li>
                              <li>• Final report</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      case 'foundations':
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 id="foundations" className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
                📐 Mathematical Foundations
              </h1>
              <p className="text-lg text-gray-400 mb-8 text-center">
                Essential mathematical concepts that form the backbone of data science
              </p>

              <div className="max-w-6xl mx-auto">
                {/* Statistics */}
                <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 p-8 rounded-2xl mb-8">
                  <h2 className="text-3xl font-bold text-blue-400 mb-6">📊 Statistics</h2>

                  <div className="space-y-6">
                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-blue-400 mb-4">Descriptive Statistics</h3>
                      <p className="text-gray-300 mb-4">
                        Descriptive statistics summarize and describe the main features of a dataset. They provide simple summaries about the sample and the measures, helping to understand the data before applying more complex analyses.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-800 p-4 rounded-lg border border-blue-500/30">
                          <h4 className="text-lg font-bold text-blue-300 mb-2">Measures of Central Tendency</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Mean - Average value</li>
                            <li>• Median - Middle value</li>
                            <li>• Mode - Most frequent value</li>
                            <li>• Geometric mean - For ratios</li>
                            <li>• Harmonic mean - For rates</li>
                          </ul>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg border border-blue-500/30">
                          <h4 className="text-lg font-bold text-blue-300 mb-2">Measures of Dispersion</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Range - Max minus min</li>
                            <li>• Variance - Average squared deviation</li>
                            <li>• Standard deviation - Square root of variance</li>
                            <li>• Interquartile range - Q3 minus Q1</li>
                            <li>• Coefficient of variation</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-blue-400 mb-4">Inferential Statistics</h3>
                      <p className="text-gray-300 mb-4">
                        Inferential statistics allow us to make predictions or inferences about a population based on a sample. They help determine whether observed differences are statistically significant or due to chance.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-800 p-4 rounded-lg border border-blue-500/30">
                          <h4 className="text-lg font-bold text-blue-300 mb-2">Hypothesis Testing</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Null and alternative hypotheses</li>
                            <li>• Type I and Type II errors</li>
                            <li>• p-values and significance levels</li>
                            <li>• Confidence intervals</li>
                            <li>• Power analysis</li>
                          </ul>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg border border-blue-500/30">
                          <h4 className="text-lg font-bold text-blue-300 mb-2">Common Tests</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• t-tests (one-sample, two-sample)</li>
                            <li>• Chi-square tests</li>
                            <li>• ANOVA (Analysis of Variance)</li>
                            <li>• Mann-Whitney U test</li>
                            <li>• Kolmogorov-Smirnov test</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Linear Algebra */}
                <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/20 p-8 rounded-2xl mb-8">
                  <h2 className="text-3xl font-bold text-green-400 mb-6">🔢 Linear Algebra</h2>

                  <div className="space-y-6">
                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-green-400 mb-4">Vector Operations</h3>
                      <p className="text-gray-300 mb-4">
                        Vectors are fundamental in data science, representing data points, features, and directions in high-dimensional spaces. Understanding vector operations is crucial for machine learning algorithms.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-800 p-4 rounded-lg border border-green-500/30">
                          <h4 className="text-lg font-bold text-green-300 mb-2">Basic Operations</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Vector addition and subtraction</li>
                            <li>• Scalar multiplication</li>
                            <li>• Dot product (inner product)</li>
                            <li>• Cross product (3D vectors)</li>
                            <li>• Vector magnitude (norm)</li>
                          </ul>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg border border-green-500/30">
                          <h4 className="text-lg font-bold text-green-300 mb-2">Advanced Concepts</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Linear independence</li>
                            <li>• Basis and dimension</li>
                            <li>• Orthogonal and orthonormal vectors</li>
                            <li>• Vector projections</li>
                            <li>• Gram-Schmidt process</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-green-400 mb-4">Matrix Operations</h3>
                      <p className="text-gray-300 mb-4">
                        Matrices are essential for representing datasets, transformations, and machine learning models. Matrix operations form the computational foundation of many algorithms.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-800 p-4 rounded-lg border border-green-500/30">
                          <h4 className="text-lg font-bold text-green-300 mb-2">Matrix Algebra</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Matrix addition and multiplication</li>
                            <li>• Matrix transpose</li>
                            <li>• Matrix inverse</li>
                            <li>• Determinant calculation</li>
                            <li>• Trace of a matrix</li>
                          </ul>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg border border-green-500/30">
                          <h4 className="text-lg font-bold text-green-300 mb-2">Special Matrices</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Identity matrix</li>
                            <li>• Diagonal matrix</li>
                            <li>• Symmetric matrix</li>
                            <li>• Orthogonal matrix</li>
                            <li>• Positive definite matrix</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Calculus */}
                <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 p-8 rounded-2xl mb-8">
                  <h2 className="text-3xl font-bold text-purple-400 mb-6">📈 Calculus</h2>

                  <div className="space-y-6">
                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-purple-400 mb-4">Differential Calculus</h3>
                      <p className="text-gray-300 mb-4">
                        Differential calculus is crucial for optimization in machine learning. It helps us understand how functions change and find optimal solutions through gradient-based methods.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                          <h4 className="text-lg font-bold text-purple-300 mb-2">Derivatives</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• First derivative - Rate of change</li>
                            <li>• Second derivative - Concavity</li>
                            <li>• Partial derivatives</li>
                            <li>• Chain rule</li>
                            <li>• Product and quotient rules</li>
                          </ul>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                          <h4 className="text-lg font-bold text-purple-300 mb-2">Applications</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Gradient descent optimization</li>
                            <li>• Finding extrema (max/min)</li>
                            <li>• Curve fitting</li>
                            <li>• Neural network backpropagation</li>
                            <li>• Sensitivity analysis</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-6">
                      <h3 className="text-2xl font-bold text-purple-400 mb-4">Integral Calculus</h3>
                      <p className="text-gray-300 mb-4">
                        Integral calculus is used in probability theory, signal processing, and various machine learning applications where we need to calculate areas, volumes, or cumulative effects.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                          <h4 className="text-lg font-bold text-purple-300 mb-2">Integration Techniques</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Definite and indefinite integrals</li>
                            <li>• Integration by parts</li>
                            <li>• Substitution method</li>
                            <li>• Numerical integration</li>
                            <li>• Multiple integrals</li>
                          </ul>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
                          <h4 className="text-lg font-bold text-purple-300 mb-2">Applications</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Probability density functions</li>
                            <li>• Expected values</li>
                            <li>• Area under curves (AUC)</li>
                            <li>• Signal processing</li>
                            <li>• Bayesian inference</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );

      default:
        return (
          <main>
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
                📊 Data Science Hub
              </h1>
              <p className="text-lg text-gray-400 mb-8 text-center">
                Select a topic from the sidebar to start learning
              </p>
            </div>
          </main>
        );
    }
  };

  return (
    <TechLayout onThisPage={pageHeadings} technology="data-science" activeSection={activeSection} setActiveSection={setActiveSection}>
      <div className="bg-slate-900/90 min-h-screen rounded-2xl p-6 shadow-xl text-slate-100">
        {renderContent()}
      </div>
    </TechLayout>
  );
}