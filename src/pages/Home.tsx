import axios from 'axios';
import throttle from 'lodash/throttle';
import { useState, useEffect, useCallback } from 'react';
import { Card } from 'components/Card/';
import { Grid } from 'components/Grid/';
import { Modal } from 'components/Modal/';

// 필요한 타입들
type Person = {
  id: number;
  profile_path: string;
  name: string;
  popularity: number;
  gender: string;
  known_for: any[]; // 이 부분은 API 응답에 따라 상세하게 타입을 지정할 수 있습니다.
};

const Home = () => {
  const TMDBKey = process.env.REACT_APP_TMDB_API;

  const [data, setData] = useState<Person[]>([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = (person: Person) => {
    setModalOpen(true);
    setSelectedPerson(person);
  };

  const fetchData = useCallback(
    async (currentPage: number) => {
      if (isFetching) return;

      setIsFetching(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/person/popular?api_key=${TMDBKey}&page=${currentPage}`,
        );

        setData((prevData) => {
          const newResults = response.data.results.filter(
            (result: Person) => !prevData.some((item) => item.id === result.id),
          );
          return [...prevData, ...newResults];
        });
        setPage(currentPage + 1);
      } catch (error) {
        console.error('Error fetching data from TMDB:', error);
      }
      setIsFetching(false);
    },
    [isFetching, TMDBKey],
  );

  useEffect(() => {
    fetchData(page);
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
