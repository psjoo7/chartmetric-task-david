import { useState, useCallback } from 'react';
import axios from 'axios';

type ITMDBdata = {
  id: number;
  profile_path: string;
  name: string;
  popularity: number;
  gender: string;
  known_for: any[];
};

const useTMDBdata = (initialUrl: string, searchQuery?: string) => {
  const TMDBKey = process.env.REACT_APP_TMDB_API;

  const [data, setData] = useState<ITMDBdata[]>([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<ITMDBdata | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchData = useCallback(
    async (currentPage: number) => {
      if (isFetching) return;

      setIsFetching(true);
      try {
        const response = await axios.get(
          `${initialUrl}?api_key=${TMDBKey}${
            searchQuery ? `&query=${searchQuery}` : ''
          }&page=${currentPage}`,
        );

        setData((prevData) => {
          const newResults = response.data.results.filter(
            (result: ITMDBdata) => !prevData.some((item) => item.id === result.id),
          );
          return [...prevData, ...newResults];
        });
        setPage(currentPage + 1);
      } catch (error) {
        console.error('Error fetching data from TMDB:', error);
      }
      setIsFetching(false);
    },
    [initialUrl, searchQuery, isFetching, TMDBKey],
  );

  const showModal = (person: ITMDBdata) => {
    setModalOpen(true);
    setSelectedPerson(person);
  };

  return {
    data,
    page,
    setData,
    setPage,
    selectedPerson,
    modalOpen,
    showModal,
    fetchData,
    setModalOpen,
  };
};

export default useTMDBdata;
