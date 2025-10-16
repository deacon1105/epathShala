import React from "react";
import placeholder from '../assets/bookStack.png'

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-2 w-full">
        <div className="card w-full border border-gray-200 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border dark:border-gray-700 flex flex-col">
          <figure className="w-full overflow-hidden">
            <img
              src={
                item && item.image && typeof item.image === 'string' && /^https?:\/\//.test(item.image)
                  ? item.image
                  : placeholder
              }
              alt={item.title || 'book'}
              className="w-full h-56 object-cover"
            />
          </figure>

          <div className="card-body flex-1 flex flex-col justify-between">
            <div>
              <h2 className="card-title flex items-start justify-between gap-2">
                <div className="mr-2 flex-1">
                  <span
                    className="block font-semibold"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {item.category === 'Free' && item.name ? item.name : item.title}
                  </span>
                </div>
                <div className="badge badge-secondary ml-2 shrink-0">{item.category}</div>
              </h2>
              <p className="mt-2 text-sm text-base-content/70">{item.type || item.title}</p>
            </div>

            <div className="card-actions justify-between mt-4">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-3 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;