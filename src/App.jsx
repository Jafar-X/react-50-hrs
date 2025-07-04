import Heading from './components/reactOfficialDoc/Heading';
import Section from './components/reactOfficialDoc/Section';
import FocusInput from './components/useRef/FocusInput';
import Timer from './components/useRef/Timer';
function App() {
  return (
    // <div>
    //   <Timer />
    // </div>
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={4}>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

export default App;
