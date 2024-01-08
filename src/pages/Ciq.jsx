import React, { lazy, Suspense, useState } from 'react';
import TopicsMenu from '../components/TopicsMenu';
import '../styles/Oop.css';

const Components = {
  First: lazy(() => import('../components/CIQ/First')),
  Second: lazy(() => import('../components/CIQ/Second')),
};

const CIQ = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const topics = [
    'First',
    'Second',
  ];

  const TopicComponent = Components[selectedTopic];

  return (
    <div className="content-container">
      <TopicsMenu topics={topics} topic="ciq" onTopicClick={handleTopicClick} />
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

export default CIQ;
