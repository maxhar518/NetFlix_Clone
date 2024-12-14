import type { NextPage, NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import Navbar from '../components/Navbar';
import Billboard from '../components/Billboard';
import InfoModal from '../components/InfoModal';
import useInfoModal from '../hooks/useInfoModal';
import Movielist from '../components/MovieList';
import useMovieList from '../hooks/useMovieList';
import favourites from '../hooks/useFavourites';
import useFavourites from '../hooks/useFavourites';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
}

const Browse: NextPage = () => {
  const { isOpen, closeModal } = useInfoModal();
  const {data: movies = []} = useMovieList();
  const {data:favourites = []} = useFavourites();
  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div>
      <Movielist title='Trending NOW' data={movies}/>
      <Movielist title='My List' data={favourites}/>
      </div>
    </>
  );
};

export default Browse;