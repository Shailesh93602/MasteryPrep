import React, { lazy, Suspense, useState } from 'react';
import TopicsMenu from '../components/TopicsMenu';
import '../styles/Oop.css'; 

const topics = [
  'Introduction', 'Arrays', 'LinkedList', 'Stack', 'Queue',
  'Hashing', 'Trees', 'Heaps', 'Graphs',
];

const Components = Object.fromEntries(
  topics.map((topic) => [topic.replace(/\s+/g, ''), lazy(() => import(`../components/Dsa/${topic}`))])
);

const Dsa = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    topic = topic.replace(/\s+/g, ''); 
    setSelectedTopic(topic);
  };

  const TopicComponent = Components[selectedTopic];

  return (
    <div className="content-container">
      <TopicsMenu topics={topics} topic="dsa" onTopicClick={handleTopicClick} />
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

export default Dsa;
