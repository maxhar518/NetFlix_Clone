import React from 'react';
import { isEmpty } from 'lodash';
import MovieCard from './MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

interface MovieListProps {
    data: Record<string, any>[];
    title: string;
    common?: boolean;
}

const MovieList: React.FC<MovieListProps> = ({ data, title, common }) => {
    if (isEmpty(data)) {
        return null;
    }
    return (
        <div>
            <p className='text-white text-md md:text-xl lg:text-2xl font-semibold mb-4'>
                {title}
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {data.map((movie) => (
                    <MovieCard key={movie.id} data={movie} />
                ))}

            </div>
        </div>
    );
};

export default MovieList;