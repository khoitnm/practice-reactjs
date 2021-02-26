import React from 'react';

let componentCount = 0;
let returnCount = 0;

const Comp00SimplePage = (): JSX.Element => {
    componentCount++;
    console.log(`[${componentCount}] component - START`);

    returnCount++;
    return (
        <div>
            {console.log(`[${componentCount}] Return renderCount: ${returnCount}`)}
            <span>
                [{componentCount}] renderCount: {returnCount}
            </span>
        </div>
    );
};

export default Comp00SimplePage;
