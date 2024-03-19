import { useState } from 'react';

import TabButton from './ExamplesTabButton/ExamplesTabButton.jsx';
import Section from '../Section.jsx';
import Tabs from '../Tabs.jsx'
import { EXAMPLES } from '../../data.js';
import './Examples.css';


export default function Examples() {
  const [ selectedTopic, setselectedTopic ] = useState();

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  
  function handleClick(selectedButtonName) {
    // selectedButtonName => 'components', 'jsx', 'props', 'state'
    setselectedTopic(selectedButtonName);
  }
  
  return (
    <Section title="Examples" id="examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={<>
          <TabButton isSelected={selectedTopic === "components"} onClick={() => handleClick("components")}>Components</TabButton>
          <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleClick("jsx")}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === "props"} onClick={() => handleClick("props")}>Props</TabButton>
          <TabButton isSelected={selectedTopic === "state"} onClick={() => handleClick("state")}>State</TabButton>
        </>}
      >
        {tabContent}
      </Tabs>

      {/* <menu>
        <TabButton isSelected={selectedTopic === "components"} onClick={() => handleClick("components")}>Components</TabButton>
        <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleClick("jsx")}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === "props"} onClick={() => handleClick("props")}>Props</TabButton>
        <TabButton isSelected={selectedTopic === "state"} onClick={() => handleClick("state")}>State</TabButton>
      </menu>
      {tabContent} */}

      {/* {!selectedTopic && (
        <p>Please select a topic.</p>
      )}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )} */}

      {/* {!selectedTopic ? (
        <p>Please select a topic.</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )} */}

    </Section>
  );
}