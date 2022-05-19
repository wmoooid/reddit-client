export const StoriesBarPlaceholder = () => {
  return (
    <div className='placeholder'>
      <div className='ph_stories-bar'>
        {Array(13)
          .fill('')
          .map(() => (
            <div className='ph_stories-bar-item'>
              <div style={{ width: '4rem', height: '4rem' }} className='ph_circle'></div>
              <div style={{ width: '4rem' }} className='ph_text'></div>
            </div>
          ))}
      </div>
    </div>
  );
};
