import React, { lazy, Suspense, useState } from 'react';
import TopicsMenu from '../components/TopicsMenu';
import '../styles/Oop.css'; 

const topics = ['Introduction', 'Query Basics', 'Joins', 'Subqueries', 'Indexes', 'Stored Procedures', 'Transactions', 'Normalization', 'Views', 'Triggers', 'Performance Optimization', 'Security'];

const topicFilenameMap = {
  'Query Basics': 'QueryBasics',
  'Stored Procedures': 'StoredProcedures',
  'Performance Optimization': 'PerformanceOptimization',
};

const Components = Object.fromEntries(
  topics.map((topic) => [topic.replace(/\s+/g, ''), lazy(() => import(`../components/Sql/${topicFilenameMap[topic] || topic}`))])
);

const Sql = () => {
  const [selectedTopic, setSelectedTopic] = useState('Introduction');

  const handleTopicClick = (topic) => {
    topic = topic.replace(/\s+/g, ''); 
    setSelectedTopic(topic);
  };

  const TopicComponent = Components[selectedTopic];

  return (
    <div className="content-container">
      <TopicsMenu topics={topics} topic="sql" onTopicClick={handleTopicClick} />
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

export default Sql;
