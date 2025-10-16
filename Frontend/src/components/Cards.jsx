import React from 'react'
import placeholder from '../assets/bookStack.png'

function Cards({item}) {
  const src = item?.image || placeholder
  const alt = item?.title || 'book'

  return (
    <div>
  <div className="card bg-base-100 w-full shadow-sm h-full border border-base-200 dark:border-base-300 rounded-lg">
  <figure className="overflow-hidden">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-56 object-cover"
      onError={(e)=>{ e.currentTarget.src = placeholder }}
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title flex items-center justify-between gap-2">
      <span className="mr-2">{item.title}</span>
      <div className="badge badge-secondary max-w-[9rem] truncate text-sm ml-2">{item.author}</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div className="card-actions justify-end">
      <div className="badge badge-outline">{item.category || 'Unknown'}</div>
      <div className="badge badge-outline">{item.type || item.category || 'General'}</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards