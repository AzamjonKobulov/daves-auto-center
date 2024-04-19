import FavoriteTShirt from '@/app/components/pages/account/favorites/FavoriteTShirt';
import TShirt from '@/app/components/shared/TShirt';
import React from 'react';

const page = () => {
  return (
    <div className="space-y-8 sm:space-y-0">
      <h1 className="text-2xl lg:text-40 text-center font-bold capitalize">
        Favorites
      </h1>
      <div className="space-y-2 sm:space-y-5">
        <div className="flex items-center justify-end">
          <button className="text-17">Select</button>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 sm:grid-cols-3 lg:gap-5">
          {Array.from({ length: 4 }).map((_, idx) => (
            <FavoriteTShirt key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
