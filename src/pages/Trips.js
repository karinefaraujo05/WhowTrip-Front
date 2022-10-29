import React from 'react';

// LOCAL IMPORTS
import Tripcard from '../components/Tripcard/Tripcard.js';

export default function Trips({ user }) {
    return (
        <Tripcard
            user={user}
        />
    )
}