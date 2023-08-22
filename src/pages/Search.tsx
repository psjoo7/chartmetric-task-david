import { useEffect } from 'react';
import throttle from 'lodash/throttle';
import { useLocation } from 'react-router-dom';
import { Grid } from 'components/Grid/';
import { Card } from 'components/Card/';
import { Modal } from 'components/Modal/';
import { useTMDBdata } from 'hooks';

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query') || '';

  const {
    data,
    setData,
    setPage,
    selectedPerson,
    modalOpen,
    showModal,
    fetchData,
    page,
    setModalOpen,
  } = useTMDBdata('https://api.themoviedb.org/3/search/person', searchQuery);

  useEffect(() => {
    setData([]);
    setPage(1);
    fetchData(1);
  }, [searchQuery]);

  const handleScroll: EventListener = throttle(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
      document.documentElement.offsetHeight - 100
    )
      return;
    fetchData(page);
  }, 200); // 200ms throttle

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <Grid>
        {data.map((person, index) => (
          <div key={index} onClick={() => showModal(person)}>
            <Card
              profilePath={person.profile_path}
              name={person.name}
              popularity={person.popularity}
            />
          </div>
        ))}
      </Grid>
      {modalOpen && selectedPerson && (
        <Modal
          profilePath={selectedPerson.profile_path}
          name={selectedPerson.name}
          gender={selectedPerson.gender}
          popularity={selectedPerson.popularity}
          known_for={selectedPerson.known_for}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default Search;
