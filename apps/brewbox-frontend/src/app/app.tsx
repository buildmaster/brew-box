// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GET_ALL_VESSELS } from './queries/vessel-queries';
import Vessel, { BurnerMode } from './vessel/vessel';
import { useQuery } from '@apollo/client';

export function App() {
  const { loading, error, data } = useQuery(GET_ALL_VESSELS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-10">
      {data?.vessel.map((vessel) => {
        return (
          <div className="col-span-5">
            <Vessel
              Title={vessel.name}
              BurnerLit={false}
              BurnerMode={BurnerMode.Auto}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
