import { CORE_CONCEPTS } from '../../data.js';
import CoreConcept from './CoreConcept.jsx';

export default function CoreConcepts() {
    
  return ( 
    <section id="core-concepts">
    <h2>Core Concepts</h2>
    <ul>
      {CORE_CONCEPTS.map(conceptItem => (
        <CoreConcept key={conceptItem.title} {...conceptItem} />
      ))}

      {/* <CoreConcept {...CORE_CONCEPTS[0]}/>
      <CoreConcept {...CORE_CONCEPTS[1]}/>
      <CoreConcept {...CORE_CONCEPTS[2]}/>
      <CoreConcept {...CORE_CONCEPTS[3]}/> */}
      
      {/* <CoreConcept
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}
      />
      <CoreConcept
        title={CORE_CONCEPTS[1].title}
        description={CORE_CONCEPTS[1].description}
        image={CORE_CONCEPTS[1].image}
      />
      <CoreConcept
        title={CORE_CONCEPTS[2].title}
        description={CORE_CONCEPTS[2].description}
        image={CORE_CONCEPTS[2].image}
      />
      <CoreConcept
        title={CORE_CONCEPTS[3].title}
        description={CORE_CONCEPTS[3].description}
        image={CORE_CONCEPTS[3].image}
      /> */}
    </ul>
    </section>
  );
}