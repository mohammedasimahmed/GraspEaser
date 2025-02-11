"use client";
import React, { useState } from 'react'
import Button from '../ui/button';

type FeedState = 'concise' | 'detailed' | 'simple';

const ResponseTypeHandler = () => {
  const [feedState, setFeedState] = useState<FeedState>('concise');

  const getVariant = (state: FeedState, type: FeedState) => {
    return (state === type) ? 'primary' : 'unselected';
  }

  return (
    <div className=''>
      <div className='mx-auto flex items-center justify-center gap-3'>
        <Button variant={getVariant(feedState, 'concise')} onClick={() => setFeedState('concise')}>Concise</Button>
        <Button variant={getVariant(feedState, 'detailed')} onClick={() => setFeedState('detailed')}>Detailed</Button>
        <Button variant={getVariant(feedState, 'simple')} onClick={() => setFeedState('simple')}>Simple</Button>
      </div>
    </div>
  )
}

export default ResponseTypeHandler