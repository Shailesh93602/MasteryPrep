import React, { lazy, Suspense, useState } from 'react';
import TopicsMenu from '../components/TopicsMenu';
import '../styles/Oop.css';

const topics = ['Introduction', 'Sorting', 'Searching', 'Dynamic Programming', 'Greedy Algorithms', 'Divide And Conquer', 'Backtracking', 'String Algorithms', 'Graph Algorithms', 'Advanced Topics']; // Add your PS topics

const topicFilenameMap = {
    'Dynamic Programming': 'DynamicProgramming',
    'Greedy Algorithms': 'GreedyAlgorithms',
    'Divide And Conquer': 'DivideAndConquer',
    'String Algorithms': 'StringAlgorithms',
    'Graph Algorithms': 'GraphAlgorithms',
    'Advanced Topics': 'AdvancedTopics',
};

const Components = Object.fromEntries(
  topics.map((topic) => [topic.replace(/\s+/g, ''), lazy(() => import(`../components/PS/${topicFilenameMap[topic] || topic}`))])
);

const Ps = () => {
  const [selectedTopic, setSelectedTopic] = useState('Introduction');

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic.replace(/\s+/g, '')); 
  };

  const TopicComponent = Components[selectedTopic];

  return (
    <div className="content-container">
      <TopicsMenu topics={topics} topic="ps" onTopicClick={handleTopicClick} />
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

export default Ps;
