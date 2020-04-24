import { Results as ResultsComponent, Core, Header } from '../components';
import styled from 'styled-components';

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default function Results() {
  return (
    <Core>
      <Stack>
        <Header />
        <ResultsComponent />
      </Stack>
    </Core>
  );
}
