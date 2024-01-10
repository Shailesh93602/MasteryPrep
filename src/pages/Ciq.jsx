import React, { lazy, Suspense, useState } from 'react';
import TopicsMenu from '../components/TopicsMenu';
import '../styles/Oop.css';

const topics = [
  'Tell me about yourself.',
  'How would you describe yourself?',
  'Why do you want to work here?',
  'What are your greatest strengths?',
  'What are your greatest weaknesses?',
  'What are your goals for feature?',
  'Where do you see yourself in five years?',
  'Why should we hire you?',
  'Do you have any questions?',
];

const topicFilenameMap = {
  'Tell me about yourself.': 'First',
  'How would you describe yourself?': 'Second',
  'Why do you want to work here?': 'Third',
  'What are your greatest strengths?': 'Fourth',
  'What are your greatest weaknesses?': 'Fifth',
  'What are your goals for feature?': 'Sixth',
  'Where do you see yourself in five years?': 'Seventh',
  'Why should we hire you?': 'Eighth',
  'Do you have any questions?': 'Ninth',

};

const Components = Object.fromEntries(
  topics.map((topic) => [topic.replace(/\s+/g, ''), lazy(() => import(`../components/CIQ/${topicFilenameMap[topic]}`))])
);

const CIQ = () => {
  const [selectedTopic, setSelectedTopic] = useState('Tellmeaboutyourself.');

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic.replace(/\s+/g, ''));
  };

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
