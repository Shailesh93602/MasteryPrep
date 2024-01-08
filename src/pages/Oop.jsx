import React, { lazy, Suspense, useState } from 'react';
import TopicsMenu from '../components/TopicsMenu';
import '../styles/Oop.css';

const topics = ['Introduction', 'Classes', 'Objects', 'Abstraction', 'Encapsulation', 'Inheritance', 'Polymorphism', 'Dynamic Binding', 'Message Parsing'];

const topicFilenameMap = {
  'Dynamic Binding': 'DynamicBinding',
  'Message Parsing': 'MessageParsing',
};

const Components = Object.fromEntries(
  topics.map((topic) => [topic.replace(/\s+/g, ''), lazy(() => import(`../components/Oop/${topicFilenameMap[topic] || topic}`))])
);

const Oop = () => {
  const [selectedTopic, setSelectedTopic] = useState('Introduction');

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic.replace(/\s+/g, '')); 
  };

  const TopicComponent = Components[selectedTopic];

  return (
    <div className="content-container">
      <TopicsMenu topics={topics} topic="oops" onTopicClick={handleTopicClick} />
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

export default Oop;
