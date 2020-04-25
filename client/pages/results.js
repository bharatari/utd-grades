import { Results as ResultsComponent, Core, Header } from '../components';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default function Results() {
  const router = useRouter();

  const { search, sectionId } = router.query;

  if (router.asPath !== router.route) {
    return (
      <Core>
        <Stack>
          <Header />
          <ResultsComponent search={search} sectionId={sectionId} router={router} />
        </Stack>
      </Core>
    );
  }

  return null;
}
