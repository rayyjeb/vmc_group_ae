import React from 'react';

interface HighlightProps {
    text: string;
    className?: string;
}

const Highlight = ({ text, className }: HighlightProps) => {
    return (
        <div className={`flex items-center gap-2${className ? ` ${className}` : ''}`}>
            <div className="bg-brand size-3"></div>
            <p>{text}</p>
        </div>
    );
}

export default Highlight;