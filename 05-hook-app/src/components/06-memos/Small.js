import React from 'react'

export const Small = React.memo(({ value }) => {
    
    console.log('me llame nuevamente :(');
    
    return (
        <small>{ value }</small>
    )
});
