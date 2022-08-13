import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getAllMovies } from '../../services/http.service';
import { IFormData } from '../../types/common.types';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const [allMovies, setAllMovies] = useState<{ id: number; title: string }[]>([]);

  useEffect(() => {
    getAllMovies()
      .then((response) => {
        console.log(response.data.results);
        setAllMovies(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 w-96 h-96 px-4 py-4 my-7 mx-auto border-2 rounded-md border-cyan-500 text-slate-800 hover:shadow-md hover:shadow-cyan-500/50"
    >
      <select
        {...register('movie', { required: 'Movie is required' })}
        className="px-1 rounded-md border border-cyan-500 bg-white focus:outline-double outline-cyan-500"
      >
        {allMovies.length &&
          allMovies.map((movie: { id: number; title: string }) => (
            <option key={movie.id}>{movie.title}</option>
          ))}
      </select>
      <div>
        <label htmlFor="points" className="text-xs text-slate-400">
          Enter a number from 0 to 10
        </label>
        <input
          type="number"
          id="points"
          placeholder="points"
          className="px-1 rounded-md border border-cyan-500 focus:outline-double outline-cyan-500"
          {...register('points', {
            required: 'Points are required',
            max: { value: 10, message: 'Enter a number from 0 to 10' },
            min: { value: 0, message: 'Enter a number from 0 to 10' },
          })}
        />
      </div>
      {errors.points && <div className="text-red-600">{errors.points?.message}</div>}
      <textarea
        className="px-1 h-32 rounded-md border border-cyan-500 focus:outline-double outline-cyan-500"
        {...register('review', { required: 'Review is required' })}
      />
      {errors.review && <div className="text-red-600">{errors.review?.message}</div>}
      <div className="flex space-x-4">
        <button type="submit" className="w-40 h-12 border rounded-md bg-cyan-500 hover:bg-cyan-300">
          Add review
        </button>
        <button type="button" className="w-40 h-12 border rounded-md bg-cyan-500 hover:bg-cyan-300">
          Reset
        </button>
      </div>
    </form>
  );
};
