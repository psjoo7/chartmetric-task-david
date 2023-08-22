import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { throttle } from 'lodash';
import { GridContainer } from '../components/Grid/Grid';
import Card from '../components/Card/Card';
import Modal from '../components/Modal/Modal';

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query') || '';
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
          `https://api.themoviedb.org/3/search/person?api_key=${TMDBKey}&query=${searchQuery}&page=${currentPage}`,
        );

        setData((prevData) => {
          const newResults = response.data.results.filter(
            (result) => !prevData.some((item) => item.id === result.id),
          );
          return [...prevData, ...newResults];
        });
        setPage(currentPage + 1);
      } catch (error) {
        console.error('Error fetching data from TMDB:', error);
      }
      setIsFetching(false);
    },
    [searchQuery, isFetching],
  );

  useEffect(() => {
    setData([]);
    setPage(1);
    fetchData(1);
  }, [searchQuery]);

  const handleScroll = throttle(() => {
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

export default Search;
