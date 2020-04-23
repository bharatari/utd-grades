import { Results as ResultsComponent } from '../components';
import { useRouter } from 'next/router';

export default function Results() {
  const router = useRouter();

  return (
    <ResultsComponent query={router.query} />
  );
}
