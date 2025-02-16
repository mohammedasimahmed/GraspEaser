"use client";
import React from 'react'
import Button from '../ui/button';
import { FeedState, FeedStateAtom } from '@/atoms/user-input';
import { useAtom } from 'jotai';

const ResponseTypeHandler = () => {
  const [feedState, setFeedState] = useAtom(FeedStateAtom);

  const getVariant = (state: FeedState, type: FeedState) => {
    return (state === type) ? 'primary' : 'unselected';
  }

  return (
    <div className=''>
      <div className='mx-auto flex items-center justify-center gap-3'>
        <Button variant={getVariant(feedState, 'basic')} onClick={() => setFeedState('basic')}>Basic</Button>
        <Button variant={getVariant(feedState, 'detailed')} onClick={() => setFeedState('detailed')}>Detailed</Button>
        <Button variant={getVariant(feedState, 'simple')} onClick={() => setFeedState('simple')}>Simple</Button>
      </div>
    </div>
  )
}

export default ResponseTypeHandler