import React, { lazy, Suspense, useState } from 'react';
import TopicsMenu from '../components/TopicsMenu';
import '../styles/Oop.css';

const topics = [
  'Introduction',
  'Database Fundamentals',
  'Relational Data Model',
  'SQL Basics',
  'Joins and Relationships',
  'Subqueries',
  'Indexes',
  'Stored Procedures',
  'Transactions',
  'Normalization',
  'Views',
  'Triggers',
  'Performance Optimization',
  'Security',
];

const topicFilenameMap = {
  'Database Fundamentals': 'DatabaseFundamentals',
  'Relational Data Model': 'RelationalDataModel',
  'SQL Basics': 'SqlBasics',
  'Stored Procedures': 'StoredProcedures',
  'Performance Optimization': 'PerformanceOptimization',
};

const Components = Object.fromEntries(
  topics.map((topic) => [topic.replace(/\s+/g, ''), lazy(() => import(`../components/Dbms/${topicFilenameMap[topic] || topic}`))])
);

const Dbms = () => {
  const [selectedTopic, setSelectedTopic] = useState('Introduction');

  const handleTopicClick = (topic) => {
    topic = topic.replace(/\s+/g, '');
    setSelectedTopic(topic);
  };

  const TopicComponent = Components[selectedTopic];

  return (
    <div className="content-container">
      <TopicsMenu topics={topics} topic="dbms" onTopicClick={handleTopicClick} />
      <div className="content">
        {selectedTopic ? (
          <div>
            {TopicComponent ? (
              <Suspense fallback={<p>Loading...</p>}>
                <TopicComponent />
              </Suspense>
            ) : (
              <p>Content for {selectedTopic} will be shown here.</p>
            )}
          </div>
        ) : (
          <p>Select a topic from the menu to view its content.</p>
        )}
      </div>
    </div>
  );
};

export default Dbms;
