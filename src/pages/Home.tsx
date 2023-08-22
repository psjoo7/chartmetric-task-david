import { useEffect } from 'react';
import throttle from 'lodash/throttle';
import { Card } from 'components/Card/';
import { Grid } from 'components/Grid/';
import { Modal } from 'components/Modal/';
import { useTMDBdata } from 'hooks';

const Home = () => {
  const { data, selectedPerson, modalOpen, showModal, fetchData, page, setModalOpen } = useTMDBdata(
    'https://api.themoviedb.org/3/person/popular',
  );

  useEffect(() => {
    fetchData(1);
  }, []);

  const handleScroll = throttle(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      fetchData(page);
    }
  }, 200);

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

export default Home;
