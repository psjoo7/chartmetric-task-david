import { useState, useEffect, useCallback } from 'react';
import throttle from 'lodash/throttle';
import Card from '../components/Card/Card';
import axios from 'axios';
import { GridContainer } from '../components/Grid/Grid';
import Modal from '../components/Modal/Modal';

const Home = () => {
  const TMDBKey = process.env.REACT_APP_TMDB_API;

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null); // 선택된 사람 정보 상태
  const [modalOpen, setModalOpen] = useState(false); // 모달 열림 상태

  const showModal = (person) => {
    setModalOpen(true);
    setSelectedPerson(person);
  };

  const fetchData = useCallback(
    async (currentPage) => {
      if (isFetching) return;

      setIsFetching(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/person/popular?api_key=${TMDBKey}&page=${currentPage}`,
        );

        setData((prevData) => {
          const newResults = response.data.results.filter(
            (result) => !prevData.some((item) => item.id === result.id),
          );
          return [...prevData, ...newResults];
        });
        setPage(currentPage + 1);
        console.log(page);
      } catch (error) {
        console.error('Error fetching data from TMDB:', error);
      }
      setIsFetching(false);
    },
    [data, isFetching],
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

  console.log(data);
  return (
    <>
      <GridContainer>
        {data.map((person, index) => (
          <div
            key={index}
            onClick={() => showModal(person)} // 카드를 클릭하면 모달 열기
          >
            <Card
              key={index}
              onClick={() => showModal(person)}
              profilePath={person.profile_path}
              name={person.name}
              popularity={person.popularity}
            />
          </div>
        ))}
      </GridContainer>
      {modalOpen && (
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
