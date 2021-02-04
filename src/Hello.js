import React from 'react'

export const Hello = () => {
  React.useEffect(() => {
    console.log('show hello');

    return () => {
      console.log('hide hello')
    }
  });
  

  return <div>hello</div>
}
